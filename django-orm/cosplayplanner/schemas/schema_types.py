from graphene_django import DjangoObjectType
from cosplays.models import Cosplay, CosplayPart

class CosplayType(DjangoObjectType):
    class Meta:
        model = Cosplay
        fields = "__all__"

class CosplayPartType(DjangoObjectType):
    class Meta:
        model = CosplayPart
        fields = "__all__"
