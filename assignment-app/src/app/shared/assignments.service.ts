import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  assignments : Assignment[] = [
    {
      id: 1,
      nom: 'Devoir de Maths',
      dateDeRendu : new Date('2023-10-10'),
      rendu: false
    },
    {
      id: 2,
      nom: 'Projet Angular',
      dateDeRendu : new Date('2023-10-11'),
      rendu: false
    },
    {
      id: 3,
      nom: 'TP noté de Python',
      dateDeRendu : new Date('2023-10-12'),
      rendu: true
    },
    {
      id: 4,
      nom: 'TP4',
      dateDeRendu : new Date('2023-10-12'),
      rendu: true
    }
  ];

  constructor(private loggingService: LoggingService) { }

  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }

  getAssignment(id: number): Observable<Assignment | undefined> {
    const assignment = this.assignments.find(
      (a) => {
        return a.id === id;
      }
    );
    return of(assignment);
  }

  addAssignment(assignment: Assignment): Observable<String> {
    const id = this.assignments[this.assignments.length - 1].id + 1;
    assignment.id = id;
    this.assignments.push(assignment);
    this.loggingService.log(assignment, "ajouté");
    return of("Assignment service ; ajout de  : " + assignment.nom);
  }

  updateAssignment(assignment: Assignment): Observable<String> {
    this.loggingService.log(assignment, "modifié");
    return of("Assignment service ; modif de : " + assignment.nom);
  }

  deleteAssignment(assignment: Assignment): Observable<String> {
    const pos = this.assignments.indexOf(assignment, 0);
    if (pos > -1) {
      this.assignments.splice(pos, 1);
      this.loggingService.log(assignment, "effacé");
      return of("Assignment service ; suppression de : " + assignment.nom);
    }  
    else {
      this.loggingService.log(assignment, "non trouvé");
      return of("Assignment service ; assignment "+ assignment+ " non trouvé");
    }
  }
}
