from django.db import models

# Create your models here.


class Kullanici (models.Model):
    id = models.AutoField(primary_key=True)
    tcNo = models.CharField(max_length=255)
    parola = models.CharField(max_length=255 )
class Iller (models.Model):
    id = models.CharField(primary_key=True,max_length=255 )
    ilAdi = models.CharField(max_length=255 )

class Ilceler (models.Model):
    id = models.CharField(primary_key=True,max_length=255)
    ilceAdi = models.CharField(max_length=255)
    ilId = models.CharField(max_length=255)

class Kurum (models.Model):
    id = models.AutoField(primary_key=True)
    kurumAdi = models.CharField(max_length=25 )
    il = models.CharField(max_length=255 )
    ilce = models.CharField(max_length=25 )
    adres = models.CharField(max_length=25 )

class Poliklinik (models.Model):
    id = models.AutoField( primary_key=True)
    poliklinikAdi = models.CharField(max_length=25 )
    kurumId = models.CharField(max_length=25 )

class VeterinerHekim (models.Model):
    id = models.AutoField(primary_key=True)
    ad = models.CharField(max_length=25 )
    soyad = models.CharField(max_length=255)
    sicilNo = models.CharField(max_length=11)
    telefon = models.CharField(max_length=11)
    email = models.EmailField(max_length=255)
    poliklinikId = models.CharField(max_length=255)
    kullaniciId = models.CharField(max_length=255)

class HayvanSahibi (models.Model):
    id=models.AutoField(primary_key=True)
    ad = models.CharField(max_length=255)
    soyad = models.CharField(max_length=255)
    telefon = models.CharField(max_length=11)
    email = models.EmailField( )
    il = models.CharField(max_length=255 )
    ilce = models.CharField(max_length=255)
    adres = models.CharField(max_length=255)
    kullaniciId = models.CharField(max_length=255)

class Ilaclar (models.Model):
    id = models.AutoField(primary_key=True)
    ad = models.CharField(max_length=255)
    prospektus = models.CharField(max_length=50 )
    stokMiktari = models.CharField(max_length=25 )
    fiyat = models.DecimalField(max_length=25,decimal_places=2,max_digits=10)
    asiMi =models.BooleanField(default=True)

class Recete (models.Model):
    receteNo = models.AutoField(primary_key=True)
    muayeneId = models.CharField(max_length=25 )
    ilacId= models.CharField(max_length=25 )


class Hayvan (models.Model):
    küpeNo = models.AutoField(primary_key=True)
    aile = models.CharField(max_length=25 )
    cins = models.CharField(max_length=25 )
    hsId = models.CharField(max_length=255)

class Randevular (models.Model):
    id = models.AutoField(primary_key= True)
    tarih = models.DateTimeField(auto_now_add=True )
    geldiMi = models.BooleanField(default=True)
    küpeNo = models.CharField(max_length=255)
    vetId = models.CharField(max_length=255)
    poliklinikId = models.CharField(max_length=255)

class Muayeneler (models.Model):
    id = models.AutoField(primary_key=True)
    tarih = models.DateTimeField(auto_now_add=True )
    sikayet = models.CharField(max_length=500)    
    küpeNo = models.CharField(max_length=255)
    vetId = models.CharField(max_length=255)
    poliklinikId = models.CharField(max_length=255)
    randevuId = models.CharField(max_length=25 )
    muayeneYapildiMi = models.BooleanField(default=True)