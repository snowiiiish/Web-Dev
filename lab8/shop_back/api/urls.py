from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, CategoryViewSet, CategoryProductViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api/', include('api.urls')),
    path('categories/<int:pk>/products/', CategoryProductViewSet.as_view({'get': 'list'}), name='category-products'),
]
