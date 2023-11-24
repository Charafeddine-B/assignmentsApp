import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RenduDirective } from '../shared/rendu.directive';
import { Assignment } from './assignment.model';
import { AssignmentsService } from '../shared/assignments.service';

import { MatListModule } from '@angular/material/list'; 
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';


import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule, RenduDirective, MatListModule, MatDividerModule,  MatButtonModule, RouterLink ],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent implements OnInit{
  titre : String = 'Les Assignments de Leo Donati';
  formVisible : boolean = false;
  assignmentSelectionne !: Assignment;
  assignments !: Assignment[] ;

  constructor( private assignmentsService: AssignmentsService) { }

  ngOnInit() {
    //this.assignments = this.assignmentsService.getAssignments();
    this.getAssignments()
  }

  getAssignments() {
    this.assignmentsService.getAssignments()
      .subscribe(
        a => this.assignments = a
      );
  }

  onAddAssignment() {
   //this.formVisible = true;
  }

  assignmentClique(assignment: Assignment) {
    console.log("Assignment cliqué : " + assignment.nom);
    this.assignmentSelectionne = assignment;
  }
}
