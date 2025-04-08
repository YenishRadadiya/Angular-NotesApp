import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NoteComponent } from './components/note/note.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'note/:id', component: NoteComponent },
];
