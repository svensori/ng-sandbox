import { NgModule } from '@angular/core';
import { AkitaModule } from 'src/app/akita/akita.module';
import { CustomOperatorModule } from 'src/app/custom-rxjs-operators/custom-operator.module';
import { GuardsModule } from 'src/app/guards/guards.module';
import { NgFormModule } from 'src/app/ng-form/ng-form.module';
import { NgRoutingModule } from 'src/app/ng-routing/ng-routing.module';


@NgModule({
    imports: [
      AkitaModule,
      NgFormModule,
      CustomOperatorModule,
      NgRoutingModule
    ]
  })
export class LearningsModule { }
