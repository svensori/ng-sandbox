import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CustomOperatorComponent } from './custom-operator.component';

@NgModule({
    declarations: [ CustomOperatorComponent ],
    imports: [ MatToolbarModule ],
    exports: [ CustomOperatorComponent ]
})
export class CustomOperatorModule { }
