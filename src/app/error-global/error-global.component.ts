import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-error-global',
  templateUrl: './error-global.component.html',
  styleUrls: ['./error-global.component.scss']
})
export class ErrorGlobalComponent {
  @Input() error: boolean;
  @Output() closeError = new EventEmitter<void>();

  onClose() {
    this.closeError.emit();
  }
}
