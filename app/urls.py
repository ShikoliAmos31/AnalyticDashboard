from django.urls import path
from . import views

urlpatterns = [
    path("area_chart", views.area_chart, name="app-area_chart"),
    path("datatables", views.datatables, name="app-datatables"),
    path("scatter_chart", views.scatter_chart, name="app-area_scatter_chart"),
    path("", views.index, name="app-index")
]