import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'ako-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionPanelComponent {
  @ContentChild('summary') summaryTemplate?: TemplateRef<unknown>;
  @ContentChild('details') detailsTemplate?: TemplateRef<unknown>;
  expanded = false;

  toggle(): void {
    this.expanded = !this.expanded;
  }
}
