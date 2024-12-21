from django.shortcuts import redirect
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
import json
import re

@csrf_exempt
def register(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')


        if email:
            # Check if user with this email already exists
            existing_user = User.objects.filter(email=email).first()
            if existing_user:
                return JsonResponse({'error': 'Email already registered, Please login.', 'redirect': True}, status=400)
            
            try:
                user = User.objects.create_user(username=email, email=email)
                user.save()
                return JsonResponse({'message': 'User registered successfully'}, status=201)
            except Exception as e:
                print(f"Error creating user: {e}")
                return JsonResponse({'error': 'Registration failed. Please try again.'}, status=400)
        
        return JsonResponse({'error': 'Email field is required'}, status=400)
    return JsonResponse({'error': 'Invalid request method'}, status=405)
