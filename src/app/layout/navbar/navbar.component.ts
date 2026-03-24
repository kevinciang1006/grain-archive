import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  private doc = inject(DOCUMENT);
  menuOpen = signal(false);
  logoRotation = signal(0);

  ngOnInit(): void {
    this.doc.defaultView?.addEventListener('scroll', () => {
      const scrolled = this.doc.documentElement.scrollTop;
      const max = this.doc.documentElement.scrollHeight - this.doc.documentElement.clientHeight;
      this.logoRotation.set(max > 0 ? (scrolled / max) * 180 : 0);
    });
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
