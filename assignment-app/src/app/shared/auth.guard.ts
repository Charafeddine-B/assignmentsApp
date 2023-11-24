import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let router = inject(Router);

  return authService.isAdmin()
  .then(
    (authentifié: boolean) => {
      if (authentifié) {
        console.log('vous êtes admin, tout va bien !  ');
        return true;
      } else {
        console.log('vous n\'êtes pas admin, vous ne pouvez pas passer !');
        router.navigate(['/home']);
        return false;
      }
    }
  );
};
