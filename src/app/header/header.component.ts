import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  @Input() rates: Record<string, number>;
  details = false;
  title = 'currency converter';

  calculateEur() {
    const fromRate = this.rates['EUR'];
    const toRate = this.rates['UAH'];

    const amount = (1 / fromRate) * toRate;

    return amount.toFixed(6);
  }
}
