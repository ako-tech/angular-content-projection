import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';

@NgModule({
  declarations: [InvoiceDetailsComponent],
  imports: [CommonModule],
  exports: [InvoiceDetailsComponent],
})
export class InvoiceModule {}
