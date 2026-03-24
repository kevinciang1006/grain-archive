import { ChangeDetectionStrategy, Component, OnInit, signal, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-cursor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="custom-cursor"
      aria-hidden="true"
      [style.transform]="'translate(' + x() + 'px, ' + y() + 'px)'"
      [style.visibility]="visible() ? 'visible' : 'hidden'"
    ></div>
  `,
  styles: [`
    .custom-cursor {
      position: fixed;
      top: 0;
      left: 0;
      width: 100px;
      height: 115px;
      pointer-events: none;
      will-change: transform;
      z-index: 9999;
      background-image: url("https://test-stage-86101369.figma.site/_assets/v11/bd74abd8153dc6488e64b8c541c9e98f84f6ca08.png");
      background-repeat: no-repeat;
      background-size: contain;
    }
  `],
})
export class CursorComponent implements OnInit {
  private doc = inject(DOCUMENT);

  x = signal(0);
  y = signal(0);
  visible = signal(false);

  ngOnInit(): void {
    this.doc.addEventListener('mousemove', (e: MouseEvent) => {
      this.x.set(e.clientX);
      this.y.set(e.clientY);
      this.visible.set(true);
    });

    this.doc.addEventListener('mouseleave', () => {
      this.visible.set(false);
    });
  }
}
