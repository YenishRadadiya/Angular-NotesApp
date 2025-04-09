import { Injectable } from '@angular/core';

export enum note_status {
  DEFAULT,
  NEW,
  UPDATED,
  DELETED
}
export type Note = {
  id: number;
  title: string;
  content: string;
  created_at: Date;
  status: note_status;
};

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private notes: Note[] = [];

  constructor() {
    // Preload 5 sample notes
    this.notes = [
      {
        id: 1,
        title: 'Welcome Note',
        content: 'This is a welcome note to get you started.',
        created_at: new Date(),
        status: note_status.DEFAULT,
      },
      {
        id: 2,
        title: 'Meeting Notes',
        content: 'Team sync meeting on Monday at 10 AM.',
        created_at: new Date(),
        status: note_status.DEFAULT,
      },
      {
        id: 3,
        title: 'To-do List',
        content: '1. Grocery shopping\n2. Finish assignment\n3. Call plumber',
        created_at: new Date(),
        status: note_status.DEFAULT,
      },
      {
        id: 4,
        title: 'Angular Tips',
        content: 'Use services for data logic and keep components clean.',
        created_at: new Date(),
        status: note_status.DEFAULT,
      },
      {
        id: 5,
        title: 'Project Ideas',
        content: '1. Note taking app\n2. Task manager\n3. Budget planner',
        created_at: new Date(),
        status: note_status.DEFAULT,
      },
    ];
  }

  addNote(note: Note): void {
    this.notes.push(note);
  }

  getAllNotes(): Note[] {
    return this.notes;
  }

  getNoteById(id: number): Note | undefined {
    return this.notes.find((note) => note.id === id);
  }

  deleteNote(id: number): void {
    this.notes = this.notes.filter(note => note.id != id);
  }

  updateNote(note: Note): void {
    const index = this.notes.findIndex(n => n.id === note.id);
    if (index !== -1) {
      this.notes[index] = note;
    }
  }
}
