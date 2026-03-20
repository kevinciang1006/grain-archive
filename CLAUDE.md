# Grain Archive — Angular 21 Best Practices

## Stack
- Angular 21, standalone components, SCSS
- Signals for state, OnPush everywhere
- No NgModules, no decorators for I/O

## Key Conventions
- input() / output() not @Input/@Output
- inject() not constructor injection
- @if / @for control flow syntax
- ChangeDetectionStrategy.OnPush on every component
- No `any` types

## Design
- All tokens in src/styles/_tokens.scss
- All spacing uses 4px grid (4, 8, 12, 16, 24, 32, 48, 64, 96px)
- Fonts loaded via Google Fonts in index.html
- Images from Unsplash with explicit alt text
