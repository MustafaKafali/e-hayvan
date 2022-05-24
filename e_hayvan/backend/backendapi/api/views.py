from . import models
from rest_framework import viewsets, permissions
from . import serializers

class KullaniciViewSet(viewsets.ModelViewSet):
    queryset = models.Kullanici.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = serializers.KullaniciSerializer
class IllerViewSet(viewsets.ModelViewSet):
    queryset = models.Iller.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = serializers.IllerSerializer
class IlcelerViewSet(viewsets.ModelViewSet):
    queryset = models.Ilceler.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = serializers.IlcelerSerializer
class KurumViewSet(viewsets.ModelViewSet):
    queryset = models.Kurum.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = serializers.KurumSerializer
class PoliklinikViewSet(viewsets.ModelViewSet):
    queryset = models.Poliklinik.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = serializers.PoliklinikSerializer
class VeterinerHekimViewSet(viewsets.ModelViewSet):
    queryset = models.VeterinerHekim.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = serializers.VeterinerHekimSerializer
class HayvanSahibiViewSet(viewsets.ModelViewSet):
    queryset = models.HayvanSahibi.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = serializers.HayvanSahibiSerializer
class HayvanViewSet(viewsets.ModelViewSet):
    queryset = models.Hayvan.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = serializers.HayvanSerializer
class IlaclarViewSet(viewsets.ModelViewSet):
    queryset = models.Ilaclar.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = serializers.IlaclarSerializer

class RandevularViewSet(viewsets.ModelViewSet):
    queryset = models.Randevular.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = serializers.RandevularSerializer
class MuayenelerViewSet(viewsets.ModelViewSet):
    queryset = models.Muayeneler.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = serializers.MuayenelerSerializer
class ReceteViewSet(viewsets.ModelViewSet):
    queryset = models.Recete.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = serializers.ReceteSerializer

