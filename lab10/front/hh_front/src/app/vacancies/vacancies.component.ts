import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Vacancy } from '../models';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {
  vacancies: Vacancy[] = []
  constructor(private companyService: CompanyService) { 
    companyService.apiData$.subscribe(data => this.vacancies = data)
  }
  ngOnInit(): void {
  }

}
