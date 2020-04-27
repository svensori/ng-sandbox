import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then(m => m.FormDemoModule)
  },
  {
    path: 'akita',
    loadChildren: () => import('./akita/akita.module').then(m => m.AkitaModule)
  },
  {
    path: 'custom-rxjs-operator',
    loadChildren: () => import('./custom-rxjs-operators/custom-operator.module').then(m => m.CustomOperatorModule)
  },
  {
    path: 'routing',
    loadChildren: () => import('./routing/routing-demo.module').then(m => m.RoutingDemo)
  },
  {
    path: 'guards',
    loadChildren: () => import('./guards/guards.module').then(m => m.GuardsModule)
  },
  {
    path: 'resolver',
    loadChildren: () => import('./resolver/resolver.module').then(m => m.ResolverModule)
  },
  {
    path: 'pusher',
    loadChildren: () => import('./pusher/pusher.module').then(m => m.PusherModule)
  },
  {
    path: 'socket-io',
    loadChildren: () => import('./socket-io/socket-io.module').then(m => m.SocketIoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
