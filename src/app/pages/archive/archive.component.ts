import { ChangeDetectionStrategy, Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { ArticleCardComponent } from '../../shared/components/article-card/article-card.component';
import { EndMarqueeComponent } from '../../shared/components/end-marquee/end-marquee.component';
import { ARTICLES } from '../../core/data/articles.data';

@Component({
  selector: 'app-archive',
  imports: [NavbarComponent, ArticleCardComponent, EndMarqueeComponent],
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
  readonly articles = ARTICLES;
}
