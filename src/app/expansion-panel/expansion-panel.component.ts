import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ako-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionPanelComponent {
  expanded = false;

  toggle(): void {
    this.expanded = !this.expanded;
  }
}
