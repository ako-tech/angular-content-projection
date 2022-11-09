import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Invoice } from '../invoice.interface';

@Component({
  selector: 'invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceDetailsComponent implements OnInit {
  @Input() invoice!: Invoice;

  ngOnInit(): void {
    console.log('rendered');
  }
}
