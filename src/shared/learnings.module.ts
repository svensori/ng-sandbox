import { NgModule } from '@angular/core';
import { AkitaModule } from 'src/app/akita/akita.module';
import { NgFormModule } from 'src/app/ng-form/ng-form.module';


@NgModule({
    imports: [
      AkitaModule,
      NgFormModule
    ]
  })
export class LearningsModule { }
