import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-badge',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="badge" [class]="'badge--' + category().toLowerCase()">
      {{ category() }}
    </span>
  `,
  styles: [`
    .badge {
      display: inline-block;
      font-family: var(--font-body);
      font-size: var(--text-xs);
      font-weight: var(--weight-medium);
      letter-spacing: var(--tracking-widest);
      text-transform: uppercase;
      padding: 3px 10px;
      border: 1px solid var(--color-border);
      color: var(--color-text-secondary);
      background: transparent;
      transition: color var(--transition-base), border-color var(--transition-base);

      &--film   { border-color: #4a6080; color: #8ab0d0; }
      &--music  { border-color: #605040; color: #c0a080; }
      &--visual { border-color: #406050; color: #80c0a0; }
    }
  `],
})
export class CategoryBadgeComponent {
  category = input.required<string>();
}
