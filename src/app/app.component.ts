import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  quote: string;
  viewready = false;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getQuoteForToday().subscribe(quote => this.quote = quote, null, () => this.viewready = true);
  }
}
