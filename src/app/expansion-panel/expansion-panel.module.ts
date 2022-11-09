import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpansionPanelComponent } from './expansion-panel.component';
import { ExpansionPanelSummaryComponent } from './expansion-panel-summary/expansion-panel-summary.component';

@NgModule({
  declarations: [ExpansionPanelComponent, ExpansionPanelSummaryComponent],
  imports: [CommonModule],
  exports: [ExpansionPanelComponent],
})
export class ExpansionPanelModule {}
