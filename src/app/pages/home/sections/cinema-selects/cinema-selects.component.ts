import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FILMS } from '../../../../core/data/films.data';
import { Film } from '../../../../core/models/film.model';

@Component({
  selector: 'app-cinema-selects',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cinema-selects.component.html',
  styleUrl: './cinema-selects.component.scss',
})
export class CinemaSelectsComponent {
  readonly films: Film[] = FILMS;
}
