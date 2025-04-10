import { CommonModule, NgFor } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { BookService, Note } from '../../services/book/book.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, NgFor, FormsModule, RouterOutlet, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})


export class DashboardComponent {
  notes: Note[] = [];
  title = '';
  content = '';
  editingNoteId: number | null = null;
  constructor(private bookService: BookService, private router: Router) { }
  ngOnInit() {
    this.notes = this.bookService.getAllNotes();

  }
  handleAddNote() {
    if (this.title.trim() && this.content.trim()) {
      this.bookService.addNote({
        title: this.title,
        content: this.content,
        id: this.notes.length + 1,
        created_at: new Date(),
        status: false
      })
      this.title = '';
      this.content = ''
    }
  }
  goToNote(id: number) {
    this.router.navigate(['/note', id]);
  }
  handleDelete(id: number): void {
    this.bookService.deleteNote(id);
    this.notes = this.bookService.getAllNotes();
  }

  handleEdit(note: Note) {
    this.title = note.title;
    this.content = note.content;
    this.editingNoteId = note.id;

    document.getElementById('page_title')!.innerText = 'Update Note';
  }

  handleUpdate() {
    if (this.title.trim() && this.content.trim() && this.editingNoteId !== null) {
      this.bookService.updateNote({
        id: this.editingNoteId,
        title: this.title,
        content: this.content,
        created_at: new Date(),
        status: false
      });

      this.title = '';
      this.content = '';
      this.editingNoteId = null;
      this.notes = this.bookService.getAllNotes();

      document.getElementById('page_title')!.innerText = 'Add Note';
    }
  }







}