import { Directive, ElementRef, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
  host: { class: 'scroll-reveal' },
})
export class ScrollRevealDirective implements OnInit {
  private el = inject(ElementRef);

  ngOnInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-reveal--visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(this.el.nativeElement);
  }
}
