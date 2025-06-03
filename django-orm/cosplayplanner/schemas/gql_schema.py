import graphene
from cosplayplanner.schemas.query_schema import Query
from cosplayplanner.schemas.mutation_schema import Mutation

schema = graphene.Schema(query=Query, mutation=Mutation)