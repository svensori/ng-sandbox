import { RouterModule, Routes } from '@angular/router';

import { SocketIoComponent } from './socket-io.component';

const routes: Routes = [
  {
    path: '',
    component: SocketIoComponent
  },
];

export const SocketIoRoutes = RouterModule.forChild(routes);
