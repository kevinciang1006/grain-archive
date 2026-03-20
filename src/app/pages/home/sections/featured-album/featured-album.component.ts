import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-featured-album',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './featured-album.component.html',
  styleUrl: './featured-album.component.scss',
})
export class FeaturedAlbumComponent {}
