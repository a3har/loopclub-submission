from django.db import models
from django.http import JsonResponse

# Create your models here.
class Subscription(models.Model):
    email= models.EmailField(unique=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email


def APIResponse(data:dict={},message:str="",status:bool=True):
    return {'data':data,'message':message,'status':status}
