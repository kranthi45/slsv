import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const httpHeaders=new HttpHeaders().set('Content-Type','application/json');

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http:HttpClient) { }
  public getData(route:string):Observable<HttpResponse<any>>{
    return this.http.get(this.completeRoute(route),{observe:'response',headers:httpHeaders})
  }
  public postdata(route:string,body):Observable<HttpResponse<any>>{
    return this.http.post(this.completeRoute(route),body,{observe:'response',headers:httpHeaders})
  }
  
  private completeRoute(route:string){
    return `${environment.baseUrl}/${route}`
  }
}
