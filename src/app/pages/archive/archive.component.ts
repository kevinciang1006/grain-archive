import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ArticleCardComponent } from '../../shared/components/article-card/article-card.component';
import { ARTICLES } from '../../core/data/articles.data';
import { Article } from '../../core/models/article.model';

type FilterCategory = 'All' | 'Film' | 'Music' | 'Visual';

const FILTERS: FilterCategory[] = ['All', 'Film', 'Music', 'Visual'];

@Component({
  selector: 'app-archive',
  imports: [ArticleCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(8px)' }),
        animate('350ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss',
})
export class ArchiveComponent {
  readonly filters: FilterCategory[] = FILTERS;
  activeFilter = signal<FilterCategory>('All');

  filteredArticles = computed<Article[]>(() => {
    const filter = this.activeFilter();
    return filter === 'All'
      ? ARTICLES
      : ARTICLES.filter(a => a.category === filter);
  });

  setFilter(filter: FilterCategory): void {
    this.activeFilter.set(filter);
  }
}
