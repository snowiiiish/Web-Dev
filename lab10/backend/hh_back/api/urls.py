from django.urls import path
from api.views import CompanyListAPIView, CompanyVacanciesAPIView,VacancyItemAPIView,VacancyListAPIView,TopVacancyAPIView,CompanyItemAPIView
from rest_framework_jwt.views import obtain_jwt_token
# urlpatterns = [
#     path('companies/',companies_list ),
#     path('companies/<int:id>/', get_company),
#     path('vacancies/', vacancy_list),
#     path('vacancies/<int:id>/', get_vacancy),
#     path('companies/<int:id>/vacancies/', company_vacancy),
#     path('vacancies/top_ten/',top_vacancy )
# ]

urlpatterns = [
    path('companies/',CompanyListAPIView.as_view() ),
    path('companies/<int:id>/', CompanyItemAPIView.as_view()),
    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:id>/', VacancyItemAPIView.as_view()),
    path('companies/<int:id>/vacancies/', CompanyVacanciesAPIView.as_view()),
    path('vacancies/top_ten/',TopVacancyAPIView.as_view() ),
    path('login/', obtain_jwt_token)
]
