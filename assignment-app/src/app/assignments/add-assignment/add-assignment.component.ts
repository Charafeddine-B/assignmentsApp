import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

import { Router } from '@angular/router';

import { Assignment } from '../assignment.model';
import { AssignmentsService } from '../../shared/assignments.service';

@Component({
  selector: 'app-add-assignment',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatInputModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule],
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css'
})
export class AddAssignmentComponent {
  nomDevoir : String = '';
  dateDeRendu : Date = new Date();

  constructor(private assignmentsService: AssignmentsService, private router: Router) { }

  onSubmit() {
    const newAssigment : Assignment = new Assignment();
    newAssigment.nom = this.nomDevoir;
    newAssigment.dateDeRendu = this.dateDeRendu;
    newAssigment.rendu = false;

    //this.assignments.push(newAssigment);
    //this.nouvelAssignment.emit(newAssigment);
    this.assignmentsService.addAssignment(newAssigment)
      .subscribe(
        message => {
          console.log(message);
          this.router.navigate(['/home']);
        }
      );
  }
}
