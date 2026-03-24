import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-end-marquee',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="end-marquee" aria-hidden="true">
      <div class="end-marquee__track">
        <span>End of reel</span>
        <span class="end-marquee__dot">·</span>
        <span>Fin</span>
        <span class="end-marquee__dot">·</span>
        <span>End of reel</span>
        <span class="end-marquee__dot">·</span>
        <span>Fin</span>
        <span class="end-marquee__dot">·</span>
        <span>End of reel</span>
        <span class="end-marquee__dot">·</span>
        <span>Fin</span>
        <span class="end-marquee__dot">·</span>
      </div>
    </div>
  `,
  styles: [`
    .end-marquee {
      overflow: hidden;
      padding: 24px 0;
    }

    .end-marquee__track {
      display: flex;
      align-items: center;
      gap: 40px;
      white-space: nowrap;
      animation: end-marquee 20s linear infinite;
      font-family: 'Instrument Serif', sans-serif;
      font-style: italic;
      font-size: 80px;
      font-weight: 400;
      color: #fff;
      line-height: 1;
    }

    .end-marquee__dot {
      opacity: 0.5;
    }

    @keyframes end-marquee {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
  `],
})
export class EndMarqueeComponent {}
