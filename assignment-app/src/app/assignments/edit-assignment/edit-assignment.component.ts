import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

import { ActivatedRoute, Router} from '@angular/router';

import { Assignment } from '../assignment.model';
import { AssignmentsService } from '../../shared/assignments.service';

@Component({
  selector: 'app-edit-assignment',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatInputModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule],
  templateUrl: './edit-assignment.component.html',
  styleUrl: './edit-assignment.component.css'
})
export class EditAssignmentComponent implements OnInit{
  assignment !: Assignment | undefined;
  nomAssignment !: String;
  dateDeRendu !: Date;

  constructor(private assignmentsService: AssignmentsService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.getAssignment();
    console.log("Query params : ");
    console.log(this.route.snapshot.queryParams);
    console.log("Fragment : ");
    console.log(this.route.snapshot.fragment);
  }

  getAssignment() {
    const id: number = +this.route.snapshot.params['id'];
    this.assignmentsService.getAssignment(id)
      .subscribe(
        a => {
          this.assignment = a;
          this.nomAssignment = a.nom;
          this.dateDeRendu = a.dateDeRendu;
        }
      );
  }

  onSaveAssignment() {
    if(this.assignment) {
      this.assignment.nom = this.nomAssignment;
      this.assignment.dateDeRendu = this.dateDeRendu;
      this.assignmentsService.updateAssignment(this.assignment)
        .subscribe(
          message => {
            console.log(message);
            this.router.navigate(['/home']);
          }
        );
    }
    else {
      return
    }
  }

}
