import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalService } from 'src/app/core/globalapi/global.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apiService:GlobalService) { }
  login(userName,password):Observable<HttpResponse<any>>{
    const body=JSON.stringify({userName:userName,password:password})
    return this.apiService.postdata('login',body)
  }
}
