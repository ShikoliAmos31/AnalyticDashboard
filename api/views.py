from django.shortcuts import render
from django.http import JsonResponse
from random import randint
from api.models import totalViewModel, MostwatchedVideos
from app . models import Movies, Ratings
# Create your views here.


def totalViews(request):
    queryset = totalViewModel.objects.all()
    dict = {
        'labels': [],
        'data': []
    }
    print(queryset)
    for item in queryset:
        dict.labels.append(item.label)
        dict.labels.append(item.views)

    return JsonResponse(dict)

def datatable_api(request):
    queryset = MostwatchedVideos.objects.all()
    return JsonResponse({
        'data': [
    ["Top 10 vs shortcuts", "15-11-2022", '451234'],
    ["Django basics tutorial", "5-01-2021", '451234'],
    ["How to instaal python", "12-01-2020", '451234'],
    ["##############", "15-11-2022", '451234'],
    ["##############", "5-09-2021", '451234'],
    ["##############", "12-01-2020", '451234'],
    ["##############", "15-11-2022", '451234'],
    ["##############", "5-09-2021", '451234'],
    ["##############", "12-01-2022", '451234'],
    ["##############", "15-11-2022", '451234'],
    ["##############", "5-01-2020", '451234'],
    ]
        })


def movies(request):
    Movies.objects.all()[:1000]
    data = []
    for item in movies:
        data.append({str(item.id), item.title, str(item.year)})
    return JsonResponse({
        'data': data
    })

def movies_with_ratings(request):
    queryset = Ratings.objects.all().values(
        'rating', 'votes', 'movie_title', 'movie_name', 'movie_year'
    )