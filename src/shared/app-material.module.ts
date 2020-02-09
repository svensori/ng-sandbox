import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatCardModule
    ]
})
export class AppMaterialModule {}
