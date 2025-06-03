import graphene
from cosplays.models import Cosplay, CosplayPart
from cosplayplanner.schemas.schema_types import CosplayType, CosplayPartType

class Query(graphene.ObjectType):
    cosplays = graphene.List(CosplayType)
    cosplay_by_id = graphene.Field(CosplayType, id=graphene.String())

    cosplay_parts = graphene.List(CosplayPartType)

    def resolve_cosplays(root, info, **kwargs):
        return Cosplay.objects.all()
    
    def resolve_cosplay_by_id(root, info, id):
        return Cosplay.objects.get(pk=id)

    def resolve_cosplay_parts(root, info, **kwargs):
        return CosplayPart.objects.all()
