from django.urls import path
from home import views

urlpatterns = [
	# path("signup/request/", views.signup, name="signup"),
	path("google-signin/", views.google_login_api, name="google-login"),
	path("issetsession/", views.isSetSession, name="is-set-session"),
	path("getcsrftoken/", views.getCsrfToken, name="get-csrf-token"),
	path("logout/", views.logout, name="logout"),
]