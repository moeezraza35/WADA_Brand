# Django imports
from django.shortcuts import render
from django.core.handlers.wsgi import WSGIRequest
from django.http import JsonResponse
from django.contrib.auth import login, models
from django.middleware.csrf import get_token
from django.views.decorators.csrf import csrf_exempt
# My imports
from . import models as home_models
# Other imports
import json
import jwt

# Create your views here.
"""def signup(request:WSGIRequest):
	if request.method == "POST":
		firstName = request.POST.get("firstName")
		lastName = request.POST.get("lastName")
		countryCode = request.POST.get("countryCode")
		phoneNumber = request.POST.get("phoneNumber")

		# phoneNumber = str(countryCode) + str(phoneNumber)
		phoneNumber = "+923004025750"
		print(phoneNumber)
		
		client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)
		client.messages.create(
			body="Hello, World!",
			from_=settings.PHONE_NUMBER,
			to=phoneNumber
		)
		return JsonResponse({ "send" : True })
	else:
		return JsonResponse({ "send" : False })"""
   
def getCsrfToken(request:WSGIRequest):
	if request.method == 'GET':
		csrf_token = get_token(request)
		print(csrf_token)
		return JsonResponse({"csrf_token" : csrf_token})
	else:
		return JsonResponse({'error': 'Invalid request method'}, status=405)

@csrf_exempt
def google_login_api(request: WSGIRequest):
	if request.method == 'POST':
		print("Function called")
		data = json.loads(request.body)
		print(data)
		credential = data.get("credentialResponse", {}).get("credential")
		print("credential=",credential)
		decoded_data = jwt.decode(credential, options={"verify_signature": False})
		email = decoded_data.get("email")
		print(email)
		myUser = None
		email:str = decoded_data.get('email')
		try:
			myUser = models.User.objects.get(email=email)
		except:
			first_name = decoded_data.get('given_name')
			last_name = decoded_data.get('family_name')
			picture = decoded_data.get('picture')
			myUser = models.User(
				first_name=first_name,
				last_name=last_name,
				email=email,
				username=email.split('@')[0],
			)
			myUser.set_unusable_password()
			myUser.save()
			userInfo = home_models.user(
				user=myUser,
				profile_img=picture,
				email_verify=True,
				phone_verify=False
			)
			userInfo.save()
		# login(request, myUser)
		request.session["user"] = myUser.id
		
		return JsonResponse({
			"user" : "Login"
		})
	else:
		return JsonResponse({'error': 'Invalid request method'}, status=405)

def isSetSession(request:WSGIRequest):
	if request.session.get("user"):
		print("user is login")
		return JsonResponse({"login" : True})
	else:
		print("user is not login")
		return JsonResponse({"login" : False})

def logout(request:WSGIRequest):
	if request.session.get("user"):
		del request.session["user"]
	
	return JsonResponse({"user" : "Logout"})