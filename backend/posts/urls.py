from django.urls import path
from posts import views

urlpatterns = [
    path('api/posts',views.post_list),
    path('api/posts/<int:pk>',views.post_detail),
]