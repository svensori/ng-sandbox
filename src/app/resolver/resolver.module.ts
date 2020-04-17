import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { DemoResolverGuard } from './demo-resolver/demo-resolver.guard';
import { DemoResolverService } from './demo-resolver/demo-resolver.service';
import { ResolverComponent } from './resolver.component';
import { ResolverRoutes } from './resolver.routing';

@NgModule({
  imports: [
    CommonModule,
    ResolverRoutes,
    MatToolbarModule
  ],
  declarations: [ResolverComponent],
  providers: [
    DemoResolverService,
    DemoResolverGuard
  ]
})
export class ResolverModule { }
