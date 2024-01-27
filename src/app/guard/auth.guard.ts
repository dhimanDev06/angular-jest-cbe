import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CommonService } from '../service/common.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);
  const commonService = inject(CommonService);
  if(commonService.getLoginStatus()){
  return true;
  }else{
    return router.createUrlTree(['/'])
  }
};
