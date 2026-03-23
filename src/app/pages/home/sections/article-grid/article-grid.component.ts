import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticleCardComponent } from '../../../../shared/components/article-card/article-card.component';
import { ARTICLES } from '../../../../core/data/articles.data';
import { Article } from '../../../../core/models/article.model';

@Component({
  selector: 'app-article-grid',
  imports: [RouterLink, ArticleCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './article-grid.component.html',
  styleUrl: './article-grid.component.scss',
})
export class ArticleGridComponent {
  readonly articles: Article[] = ARTICLES.slice(0, 4);
}
