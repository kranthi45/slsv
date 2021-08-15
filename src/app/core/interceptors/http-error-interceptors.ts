import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
    providedIn:'root'
})
export class HttpErrorInterceptor implements HttpInterceptor{
    constructor(private route:Router){}
    intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        return next.handle(request).pipe(map((event:HttpEvent<any>)=>{
if(event instanceof HttpResponse){

}
return event;
        }),
        catchError((error:HttpErrorResponse)=>{
            if(error.status===403){
                let errorMessage=error.message;
            }
            if(error.status===401){
                let errorMessage=error.message;
            }
            if(error.status!=401&&error.status!=0&&error.status!=403){
                let errorMessage=error.message;
            }
            if(error.status===0){
                let errorMessage='Server Down';
            }
            return throwError(error)
        })
        )
    }
}