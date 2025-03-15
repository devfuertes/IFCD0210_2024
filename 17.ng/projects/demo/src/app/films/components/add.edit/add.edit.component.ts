import { Component, inject, input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Film } from '../../types/film';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'cas-add-edit',
  imports: [FormsModule],
  template: `
    <!-- @if (isAdding) {
      <h3>Add film</h3>
    } @else {
      <h3>Edit film</h3>
    } -->

    <h3>{{ isAdding() ? 'Add' : 'Edit' }} film</h3>

    <form (ngSubmit)="sendEvent()">
      <label for="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        [(ngModel)]="filmData.title"
        required
      />
      <label for="year">Year</label>
      <input
        type="number"
        id="year"
        name="year"
        [(ngModel)]="filmData.releaseYear"
        required
      />
      <button type="submit">{{ isAdding() ? 'Add' : 'Edit' }}</button>
    </form>
  `,
  styles: ``,
})
export class AddEditComponent implements OnInit {
  film = input<Film>({
    id: '',
    title: '',
    releaseYear: 0,
  });

  filmData!: Film;
  isAdding = input.required<boolean>();
  filmsState = inject(StateService);

  ngOnInit(): void {
    this.filmData = structuredClone(this.film());
  }

  sendEvent() {
    if (this.isAdding()) {
      this.film().id = crypto.randomUUID();
      this.filmsState.addFilm({ ...this.filmData });
    } else {
      this.filmsState.updateFilm({ ...this.filmData });
    }
  }
}
