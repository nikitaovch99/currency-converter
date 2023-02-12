import { Component, OnInit } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'angular app';
  loading = true;
  error = false;
  rates: Record<string, number>;
  fromCurrency = 'UAH';
  toCurrency = 'USD';
  currencies: string[] = [];
  amount = 0;
  convertedAmount = 0;
  exchangeRate: number;

  async ngOnInit() {
    try {
      const response = await axios.get('https://api.exchangerate.host/latest?base=USD');
      this.rates = response.data.rates;
      this.currencies = Object.keys(this.rates);
    } catch (error) {
      this.error = true;
    } finally {
      this.loading = false;
    }
  }

  onErrorClose() {
    this.error = false;
  }

}
