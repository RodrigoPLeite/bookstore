import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()

export class BookService {
    private url = 'https://localhost:44382/api/bookstore';
    httpOptions = {
        Headers: new HttpHeaders({'Content-type': 'application/json'})
    }

    constructor(private httpClient: HttpClient){}

    getBook() {
        return this.httpClient.get(this.url);
    }
}