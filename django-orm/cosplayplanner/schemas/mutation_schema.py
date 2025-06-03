import graphene
from cosplays.models import Cosplay
from cosplayplanner.schemas.schema_types import CosplayType

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
