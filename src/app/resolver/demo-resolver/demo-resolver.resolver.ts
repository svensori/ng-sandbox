import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DemoResolverService } from './demo-resolver.service';

@Injectable({
  providedIn: 'root'
})
export class DemoResolver implements Resolve<any> {

  constructor(private resolverService: DemoResolverService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    console.trace();
    return this.resolverService.fetchUserData();
  }
}
