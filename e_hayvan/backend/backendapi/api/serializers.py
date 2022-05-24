from django.db.models import fields
from rest_framework import serializers
from . import models


class KullaniciSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Kullanici
        fields = '__all__'
class IllerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Iller
        fields = '__all__'
class IlcelerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Ilceler
        fields = '__all__'
class KurumSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Kurum
        fields = '__all__'
class PoliklinikSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Poliklinik
        fields = '__all__'
class VeterinerHekimSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.VeterinerHekim
        fields = '__all__'
class HayvanSahibiSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.HayvanSahibi
        fields = '__all__'
class HayvanSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Hayvan
        fields = '__all__'
class IlaclarSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Ilaclar
        fields = '__all__'
class RandevularSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Randevular
        fields = '__all__'
class MuayenelerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Muayeneler
        fields = '__all__'
class ReceteSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Recete
        fields = '__all__'