import { ChangeDetectionStrategy, Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { HeroComponent } from './sections/hero/hero.component';
import { ArticleGridComponent } from './sections/article-grid/article-grid.component';
import { FeaturedAlbumComponent } from './sections/featured-album/featured-album.component';
import { CinemaSelectsComponent } from './sections/cinema-selects/cinema-selects.component';
@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    HeroComponent,
    ArticleGridComponent,
    FeaturedAlbumComponent,
    CinemaSelectsComponent,
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
  styles: [`
    .home-ticker {
      height: 60px;
      overflow: hidden;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #2a2a2a;
      background: var(--color-bg-1);
    }
    .home-ticker__track {
      display: flex;
      align-items: center;
      gap: 32px;
      white-space: nowrap;
      animation: marquee 30s linear infinite;
      font-family: var(--font-geist);
      font-feature-settings: "'ss01' 1, 'ss03' 1";
      font-size: 20px;
      font-weight: 600;
      letter-spacing: -0.32px;
      color: rgb(140, 141, 146);
      padding-inline: 20px;
    }
    @keyframes marquee {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
    main {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 0 10px 10px;
      max-width: 1800px;
      margin: 0 auto;
    }
  `],
  template: `
    <div class="home-ticker" aria-hidden="true">
      <div class="home-ticker__track">
        <span>Independent writing on music, film, and visual culture—one deep cut at a time.</span>
        <span aria-hidden="true">·</span>
        <span>Independent writing on music, film, and visual culture—one deep cut at a time.</span>
        <span aria-hidden="true">·</span>
        <span>Independent writing on music, film, and visual culture—one deep cut at a time.</span>
        <span aria-hidden="true">·</span>
      </div>
    </div>
    <app-navbar />
    <main @fadeIn>
      <app-hero />
      <app-article-grid />
      <app-featured-album />
      <app-cinema-selects />
    </main>
  `,
})
export class HomeComponent {}
