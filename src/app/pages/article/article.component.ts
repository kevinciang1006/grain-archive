import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { EndMarqueeComponent } from '../../shared/components/end-marquee/end-marquee.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { ARTICLES } from '../../core/data/articles.data';

@Component({
  selector: 'app-article',
  imports: [NavbarComponent, RouterLink, EndMarqueeComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease', style({ opacity: 1 })),
      ]),
    ]),
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  private route = inject(ActivatedRoute);

  private slug = toSignal(
    this.route.paramMap.pipe(map(p => p.get('slug') ?? ''))
  );

  article = computed(() => ARTICLES.find(a => a.slug === this.slug()));

  relatedArticles = computed(() =>
    ARTICLES.filter(a => a.slug !== this.slug()).slice(0, 3)
  );
}
