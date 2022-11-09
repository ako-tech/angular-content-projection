import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ako-expansion-panel-summary',
  template: `
    <img src="assets/chevron-right.svg" role="button" />
    <ng-content></ng-content>
  `,
  styleUrls: ['./expansion-panel-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionPanelSummaryComponent {}
