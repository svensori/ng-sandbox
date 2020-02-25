import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
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
        HttpClientModule,
        ReactiveFormsModule,
        MatListModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatDividerModule,
        MatButtonModule
    ],
    exports: [
        TodosPageComponent
    ],
    providers: [
        TodosService
    ],
})
export class AkitaModule { }
