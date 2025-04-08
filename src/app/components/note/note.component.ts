import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BookService, Note } from '../../services/book/book.service';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {
  id: number = 0;
  title: string = '';
  content: string = '';
  note: Note | undefined;

  private route = inject(ActivatedRoute);
  private bookService = inject(BookService);

  constructor() {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));

      // Now fetch the note AFTER id is available
      this.note = this.bookService.getNoteById(this.id);

      // Optional: set title and content from note
      if (this.note) {
        this.title = this.note.title;
        this.content = this.note.content;
      }
    });
  }
}
