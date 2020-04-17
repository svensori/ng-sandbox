import { RouterModule, Routes } from '@angular/router';

import { DemoResolverGuard } from './demo-resolver/demo-resolver.guard';
import { DemoResolver } from './demo-resolver/demo-resolver.resolver';
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
