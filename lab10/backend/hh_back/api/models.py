from django.db import models


class Company(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.TextField()
    city = models.CharField(max_length=255)
    address = models.TextField()
    def to_json(self):
        return {
            'id' : self.id,
            'name' : self.name,
            'description' : self.description,
            'city' : self.city,
            'address' : self.address,
        }
    def __str__(self):
        return f'{self.id}: {self.name} '

class Vacancy(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, default=None,on_delete=models.CASCADE)
    def to_json(self):
        return {
            'id' : self.id,
            'name' : self.name,
            'description' : self.description,
            'salary' : self.salary,
            #'company' : self.company.to_json(),
            'company_id' : self.company_id,
        }
    def __str__(self):
        return f'{self.id}: {self.name} '