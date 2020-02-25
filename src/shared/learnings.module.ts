import { NgModule } from '@angular/core';
import { AkitaModule } from 'src/app/akita/akita.module';
import { NgFormModule } from 'src/app/ng-form/ng-form.module';
import { CustomOperatorModule } from 'src/app/custom-rxjs-operators/custom-operator.module';


@NgModule({
    imports: [
      AkitaModule,
      NgFormModule,
      CustomOperatorModule
    ]
  })
export class LearningsModule { }
