import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

class Quote {
  text: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getQuoteForToday(): Observable<string> {
    return this.http.get<Quote>(`${environment.backendUrl}/api/quote-for-today`)
      .pipe(map(quote => quote.text));
  }
}
