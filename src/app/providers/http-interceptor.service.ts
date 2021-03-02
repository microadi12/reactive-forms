import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Profile } from "../model/profile.model";
import { throwError } from "rxjs";
import { map , catchError } from "rxjs/operators"

@Injectable({
  providedIn: "root"
})
export class HttpInterceptorService {
  api_key: "563492ad6f917000010000016bf7db52a5134b8faef454369814e279";
  api_url: "https://api.pexels.com/v1/curated";

  constructor(private http: HttpClient) {}

  getPics() {
    // var header = {
    //   headers: new HttpHeaders()
    //     .set('Authorization',  this.api_key)
    // }

    // var header = new Headers();
    //  header.append('Content-Type', 'application/json');
    //  header.append('Authorization', this.api_key);

    //  let headers: new HttpHeaders(
    //     {
    //       'Access-Control-Allow-Origin': 'https://localhost:4200',
    //       'Access-Control-Allow-Methods': '*',
    //       'Content-Type': 'application/json',
    //       'Authorization': this.api_key,
    //       'Accept': '*/*',
    //     })

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Authorization': this.api_key
    //   })
    // };

    console.log("aditya singh");
    return this.http.get(`https://api.pexels.com/v1/curated`)
    // .pipe(
    //   map((res: Profile[]) => {
    //     console.log('Aditya Singh 4')
    //     console.log(res);
    //     return res;
    //   }),
    //   catchError(error => {
    //     console.log('Aditya Singh 5')
    //     console.log(error);
    //     return throwError(error + "something went wrong");
    //   })
    // );
  }
}
