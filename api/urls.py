from django.urls import path
from . import views


urlpatterns = [
    path('datatable-api', views.datatable_api, name='api-datatable-api'),
    path('movies-with-ratings', views.movies_with_ratings, name='api-movies-with-ratings'),
    path('movies', views.movies, name='api-movies'),
    path('export', views.export, name='api-export'),
    path('total-views', views.totalViews, name='api-total-views')
]