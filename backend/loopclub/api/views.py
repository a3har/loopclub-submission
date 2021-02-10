from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import SubscriptionSerializer
from .models import Subscription,APIResponse
# Create your views here.
@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List All':'/subscription-list',
        'Detailed View':'/subscription-detail/<str:pk>/',
        'Create' : '/subscription-create',
        'Update' : '/subscription-update',
        'Delete' : '/subscription-delete'
    }
    return Response(api_urls)


@api_view(['GET'])
def subscriptionList(request):
    subscriptions = Subscription.objects.all()
    serializer = SubscriptionSerializer(subscriptions,many=True)
    return Response(APIResponse(data=serializer.data))

@api_view(['GET'])
def subscriptionDetail(request,pk):
    subscriptions = Subscription.objects.get(id=pk)
    serializer = SubscriptionSerializer(subscriptions,many=False)
    return JsonResponse(APIResponse(data=serializer.data))

@api_view(['POST'])
def subscriptionCreate(request):
    serializer = SubscriptionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse(APIResponse(data=serializer.data))
    return JsonResponse(APIResponse(data=serializer.errors,status=False,message="You have already subscribed"))

@api_view(['PUT'])
def subscriptionUpdate(request,pk):
    subscription = Subscription.objects.get(id=pk)
    serializer = SubscriptionSerializer(instance=subscription,data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(APIResponse(data=serializer.data,status=False))

@api_view(['DELETE'])
def subscriptionDelete(request,pk):
    subscription = Subscription.objects.get(id=pk)
    subscription.delete()
    return Response(APIResponse(data={},message="Subscription Deleted"))