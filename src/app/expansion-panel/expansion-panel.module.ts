import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpansionPanelComponent } from './expansion-panel.component';
import { ExpansionPanelSummaryComponent } from './expansion-panel-summary/expansion-panel-summary.component';
import {
  ExpansionPanelDetailsContentDirective,
  ExpansionPanelSummaryContentDirective,
} from './directives';

@NgModule({
  declarations: [
    ExpansionPanelComponent,
    ExpansionPanelSummaryComponent,
    ExpansionPanelSummaryContentDirective,
    ExpansionPanelDetailsContentDirective,
  ],
  imports: [CommonModule],
  exports: [
    ExpansionPanelComponent,
    ExpansionPanelSummaryContentDirective,
    ExpansionPanelDetailsContentDirective,
  ],
})
export class ExpansionPanelModule {}
