import { Routes } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';

import { authGuard } from './shared/auth.guard';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', component: AssignmentsComponent },
    { path: 'home', component: AssignmentsComponent },
    { path: 'add', component: AddAssignmentComponent },
    { path: 'assignment/:id', component: AssignmentDetailComponent},
    { path: 'assignment/:id/edit', component: EditAssignmentComponent, canActivate: [authGuard]},
    { path: 'login', component: LoginComponent },
    { path: '**', component: AssignmentsComponent }
];
