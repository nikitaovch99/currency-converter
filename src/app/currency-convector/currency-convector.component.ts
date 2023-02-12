import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency-convector',
  templateUrl: './currency-convector.component.html',
  styleUrls: ['./currency-convector.component.scss']
})
export class CurrencyConvectorComponent {

  fromCurrency = 'EUR';
  toCurrency = 'UAH';
  fromAmount: number;
  toAmount: number;
  isFromCurrency = true;
  @Input() currencies: string[];
  @Input() rates: Record<string, number>;

  convertAmount(amount: number, action: string) {
    const fromRate = this.rates[this.fromCurrency];
    const toRate = this.rates[this.toCurrency];

    if (this.fromAmount || this.toAmount) {
      if (action === 'fromAmount') {
        this.toAmount = (amount / fromRate) * toRate;
        this.isFromCurrency = true;
      } else {
        this.fromAmount = (amount / toRate) * fromRate;
        this.isFromCurrency = false;
      }
    }
  }

  changeCurrency() {
    if (this.isFromCurrency) {
      this.convertAmount(this.fromAmount, 'fromAmount');
    } else {
      this.convertAmount(this.toAmount, 'toAmount');
    }
  }
}

