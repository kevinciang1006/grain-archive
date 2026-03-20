import { ChangeDetectionStrategy, Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { HeroComponent } from './sections/hero/hero.component';
import { ArticleGridComponent } from './sections/article-grid/article-grid.component';
import { FeaturedAlbumComponent } from './sections/featured-album/featured-album.component';
import { CinemaSelectsComponent } from './sections/cinema-selects/cinema-selects.component';
import { NewsletterComponent } from './sections/newsletter/newsletter.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    ArticleGridComponent,
    FeaturedAlbumComponent,
    CinemaSelectsComponent,
    NewsletterComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease', style({ opacity: 1 })),
      ]),
    ]),
  ],
  template: `
    <main @fadeIn>
      <app-hero />
      <app-article-grid />
      <app-featured-album />
      <app-cinema-selects />
      <app-newsletter />
    </main>
  `,
})
export class HomeComponent {}
