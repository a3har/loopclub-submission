from django.urls import path
from . import views

urlpatterns = [
    path('',views.apiOverview),
    path('subscription-list/',views.subscriptionList,name="subscription-list"),
    path('subscription-create/',views.subscriptionCreate,name="subscription-create"),
    path('subscription-detail/<str:pk>',views.subscriptionDetail,name="subscription-detail"),
    path('subscription-update/<str:pk>',views.subscriptionUpdate,name="subscription-update"),
    path('subscription-delete/<str:pk>',views.subscriptionDelete,name="subscription-delete"),
]