import graphene
from graphene_django import DjangoObjectType
from cosplays.models import Cosplay

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

class CreateCosplayMutation(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        description = graphene.String(required=True)
    
    cosplay = graphene.Field(CosplayType)

    @classmethod
    def mutate(cls, root, info, name, description):
        created = Cosplay.objects.create(
            name = name,
            description = description
        )
        created.save()
        return CreateCosplayMutation(cosplay=created)


class Mutation(graphene.ObjectType):
    create_cosplay = CreateCosplayMutation.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)