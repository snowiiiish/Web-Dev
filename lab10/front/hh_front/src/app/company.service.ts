import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AuthToken, Company,Vacancy} from './models'
import {Observable} from 'rxjs';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  BASE_URL = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  // private apiData = new BehaviorSubject<Vacancy[]>([{id:1, name:"name", description:"description",salary:"1",company_id:1 }]);
  private apiData = new BehaviorSubject<Vacancy[]>([]);
  public apiData$ = this.apiData.asObservable();

  setData(data:any) { 
    this.apiData.next(data)
  }

  login(username:any,password:any): Observable<AuthToken>{
    return this.http.post<AuthToken>(`${this.BASE_URL}/api/login/`,{
      username,
      password
    });
  }

  getCompanies():Observable<Company[]>{
    return this.http.get<Company[]>(`${this.BASE_URL}/api/companies/`);
  }
  getVacancies(id:any):Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${id}/vacancies/`);
  }
}
