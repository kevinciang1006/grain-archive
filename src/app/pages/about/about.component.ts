import { ChangeDetectionStrategy, Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  imports: [NavbarComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(8px)' }),
        animate('400ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
