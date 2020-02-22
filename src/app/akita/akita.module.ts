import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { TodosPageComponent } from './components/todos-page.component';
import { TodosService } from './services/todos.service';
import { AppStoreModule } from './stores/stores.module';


@NgModule({
    declarations: [
        TodosPageComponent
    ],
    imports: [
        AppStoreModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatListModule,
        MatIconModule
    ],
    exports: [
        TodosPageComponent
    ],
    providers: [
        TodosService
    ],
})
export class AkitaModule { }
