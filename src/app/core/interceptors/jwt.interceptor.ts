import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import {catchError} from 'rxjs/operators'

@Injectable()
export class JwtInterceptor implements HttpInterceptor{
    constructor(private route:Router){}
    private cache=new Map<string,any>();
    intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        let token=localStorage.getItem('token');
        if(token){
            request=request.clone({
                setHeaders:{Authorization:`Bearer ${token}`}
            })
        }
        const cachedResponse=this.cache.get(request.url);
        if(cachedResponse){
            return of(cachedResponse);
        }
        return next.handle(request).pipe(
            catchError((err,caught)=>{
            if((err.status===0)&&(request.url.indexOf('/login')===-1)){
                this.handleAuthError();
                return of(err);
            }
            throw err;
        }
            )
        );
    }
    private handleAuthError(){
        localStorage.clear();
        this.route.navigate(['/'])
    }
}