from django.db import router
from rest_framework import routers, urlpatterns
from rest_framework.viewsets import ViewSet
from . import views

router = routers.DefaultRouter()
router.register('kullanici', views.KullaniciViewSet , 'kullanici')
router.register('ilce', views.IlcelerViewSet , 'ilce')
router.register('il', views.IllerViewSet,'il')
router.register('kurum', views.KurumViewSet, 'kurum')
router.register('klinik', views.PoliklinikViewSet, 'klinik')
router.register('vet', views.VeterinerHekimViewSet, 'veteriner')
router.register('hs', views.HayvanSahibiViewSet, 'hayvan sahibi')
router.register('hayvan', views.HayvanViewSet, 'hayvan')
router.register('ilac', views.IlaclarViewSet, 'ilac')
router.register('randevu',views.RandevularViewSet, 'randevu')
router.register('muayene', views.MuayenelerViewSet, 'muayene')
router.register('recete', views.ReceteViewSet, 'recete')

urlpatterns = router.urls