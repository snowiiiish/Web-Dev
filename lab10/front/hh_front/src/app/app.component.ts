import { Component } from '@angular/core';
import {CompanyService} from './company.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hh_front';
  logged = false;
  username="";
  password="";
  
  ngOnInit(){
    const token = localStorage.getItem('token');
    if(token)this.logged = true;
  }

  constructor(private companyService: CompanyService, private location: Location) { }

  login(){
    this.companyService.login(this.username,this.password).subscribe(data=>{
      this.logged = true;
      localStorage.setItem('token', data.token);
      this.username="";
      this.password="";
    })
    this.location.replaceState('');
  }
  logout(){
    this.logged=false;
    localStorage.removeItem("token");
    this.location.replaceState('');
  }
}
