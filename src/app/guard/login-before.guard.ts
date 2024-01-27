import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CommonService } from '../service/common.service';

export const loginBeforeGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const commonService = inject(CommonService);
  if(commonService.getLoginStatus()){
    return router.createUrlTree(['/page'])
  }else{
    return true;
  }
  
};
