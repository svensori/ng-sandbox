import { RouterModule, Routes } from '@angular/router';

import { DemoResolver } from './demo-resolver/demo-resolver.resolver';
import { DemoResolverGuard } from './demo-resolver/demo-resolver.guard';
import { ResolverComponent } from './resolver.component';

const routes: Routes = [
  {
    path: '',
    component: ResolverComponent,
    resolve: {
      demoResolver: DemoResolver
    },
    canActivate: [DemoResolverGuard]
  },
];

export const ResolverRoutes = RouterModule.forChild(routes);
