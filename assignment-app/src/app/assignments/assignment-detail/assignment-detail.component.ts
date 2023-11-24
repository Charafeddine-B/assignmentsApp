import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { ActivatedRoute, Router } from '@angular/router';
import { RouterLink } from '@angular/router';

import { Assignment } from '../assignment.model';
import { AssignmentsService } from '../../shared/assignments.service';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatCheckboxModule, MatButtonModule, RouterLink],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})
export class AssignmentDetailComponent implements OnInit{
  assignmentTransmis !: Assignment;

  constructor(private assignmentsService: AssignmentsService, 
    private authService: AuthService,
    private route: ActivatedRoute, 
    private router : Router) { }

  ngOnInit(): void {
    this.getAssignment();
  }

  getAssignment() {
    const id: number = +this.route.snapshot.params['id'];
    this.assignmentsService.getAssignment(id)
      .subscribe(
        a => this.assignmentTransmis = a
      );
  }

  onAssignmentRendu() {
    this.assignmentTransmis.rendu = true;

    this.assignmentsService.
      updateAssignment(this.assignmentTransmis)
        .subscribe(
          message => {
            console.log(message);
          }
        );
    this.router.navigate(['/home']);
  }

  onAssignmentSupprime() {
    this.assignmentsService.
      deleteAssignment(this.assignmentTransmis)
        .subscribe(
          message => {
            console.log(message);
            this.assignmentTransmis = null;
          }
        ); 
    this.router.navigate(['/home']);
  }

  onAssignmentEdit() {
    this.router.navigate(['/assignment', this.assignmentTransmis.id, 'edit'], 
      {queryParams: {nom: this.assignmentTransmis.nom}, fragment: 'edition'}
    );
  }

  isAdmin() : boolean {
    return this.authService.loggedIn;
  }
}
