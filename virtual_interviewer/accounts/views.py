from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
import json

@csrf_exempt
def register(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        # Additional fields can be processed here
        
        if email:
            try:
                user = User.objects.create_user(username=email, email=email)
                return JsonResponse({'message': 'User registered successfully'}, status=201)
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=400)
        return JsonResponse({'error': 'Email is required'}, status=400)
    return JsonResponse({'error': 'Invalid request method'}, status=405)
