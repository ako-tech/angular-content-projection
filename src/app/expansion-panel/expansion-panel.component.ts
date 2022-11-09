import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  TemplateRef,
} from '@angular/core';
import {
  ExpansionPanelDetailsContentDirective,
  ExpansionPanelSummaryContentDirective,
} from './directives';

@Component({
  selector: 'ako-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionPanelComponent {
  @ContentChild(ExpansionPanelSummaryContentDirective, { read: TemplateRef })
  summaryTemplate?: TemplateRef<unknown>;
  @ContentChild(ExpansionPanelDetailsContentDirective, { read: TemplateRef })
  detailsTemplate?: TemplateRef<unknown>;
  expanded = false;

  toggle(): void {
    this.expanded = !this.expanded;
  }
}
