import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { CursorComponent } from './shared/components/cursor/cursor.component';
import { NewsletterComponent } from './pages/home/sections/newsletter/newsletter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, CursorComponent, NewsletterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-cursor />
    <router-outlet />
    <app-newsletter />
    <app-footer />
  `,
})
export class App {}
