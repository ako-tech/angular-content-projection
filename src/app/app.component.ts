import { Component } from '@angular/core';
import { invoices } from './invoice/invoice.data';

@Component({
  selector: 'ako-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  invoices = invoices;
}
