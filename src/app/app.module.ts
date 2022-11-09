import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExpansionPanelModule } from './expansion-panel/expansion-panel.module';
import { InvoiceModule } from './invoice/invoice.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ExpansionPanelModule, InvoiceModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
