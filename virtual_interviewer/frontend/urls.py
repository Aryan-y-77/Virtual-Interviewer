from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('contact', index),
    path('dashboard', index),
    path('interview-category', index),
    path('cam-permission', index),
    path('register', index),
    path('cam-preview1', index),
    path('cam-preview2', index),
    path('resume', index),
    path('review-interview', index),
    path('analysis', index),
    path('about', index),

]
