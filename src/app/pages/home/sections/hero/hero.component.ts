import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('videoEl') videoEl!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.videoEl.nativeElement;
    video.play().catch(() => {
      // Retry once canplay fires (slow network / late DOM insert)
      video.addEventListener('canplay', () => video.play(), { once: true });
    });
  }
}
