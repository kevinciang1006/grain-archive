import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-divider',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="divider" [class.divider--with-label]="label()">
      @if (label()) {
        <span class="divider__label">{{ label() }}</span>
      }
    </div>
  `,
  styles: [`
    .divider {
      display: flex;
      align-items: center;
      gap: var(--space-4);
      margin-block: var(--space-12);

      &::before,
      &::after {
        content: '';
        flex: 1;
        height: 1px;
        background: var(--color-border);
      }

      &:not(.divider--with-label)::after { display: none; }
      &:not(.divider--with-label)::before { display: block; }

      &__label {
        font-family: var(--font-body);
        font-size: var(--text-xs);
        letter-spacing: var(--tracking-widest);
        text-transform: uppercase;
        color: var(--color-text-muted);
        white-space: nowrap;
      }
    }
  `],
})
export class SectionDividerComponent {
  label = input<string>('');
}
