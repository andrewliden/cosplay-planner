import graphene
from cosplays.models import Cosplay, CosplayPart
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

class CreateCosplayPartMutation(graphene.Mutation):
    class Arguments:
        cosplay_id = graphene.String(required=True)
        name = graphene.String(required=True)
        description = graphene.String(required=True)
        build_steps = graphene.String()
        time_estimate = graphene.String()
        store_link = graphene.String()

    cosplay_part = graphene.Field(CosplayPart)

    @classmethod
    def mutate(cls, root, info, **kwargs):
        #TODO - Read the docs a little more,
        # Find out if this is actually a good way to handle non-required fields,
        # and stuff with foreign key relations
        # Also not sure you can unpack kwargs like that in this library
        created = CosplayPart.objects.create(
            cosplay_id = kwargs['cosplay_id'],
            name=kwargs.get['name'],
            description=kwargs['description'],
            build_steps=kwargs.get('build_steps'),
            time_estimate=kwargs.get('time_estimate')

        )
        created.save()
        return CreateCosplayPartMutation(cosplay_part=created)

class Mutation(graphene.ObjectType):
    create_cosplay = CreateCosplayMutation.Field()
