import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  log(assignment: Assignment, action: string) {
    console.log('Assignment ' + assignment.nom + ' ' + action);
  }
  
  constructor() { }
}
