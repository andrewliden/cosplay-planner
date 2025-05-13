import graphene
from graphene_django import DjangoObjectType
from cosplayplanner.models.cosplay import Cosplay

class CosplayType(DjangoObjectType):
    class Meta:
        model = Cosplay
        fields = "__all__"

class Query(graphene.ObjectType):
    cosplays = graphene.List(CosplayType)
    cosplay_by_id = graphene.Field(CosplayType, id=graphene.String())

    def resolve_cosplays(root, info, **kwargs):
        return Cosplay.objects.all()
    
    def resolve_cosplay_by_id(root, info, id):
        return Cosplay.objects.get(pk=id)


class Mutation(graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)