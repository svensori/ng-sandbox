import { NgModule } from '@angular/core';

import { TodosQuery } from '../query/todos.query';
import { TodosStore } from './todos.store';

@NgModule({
    providers: [
        TodosStore,
        TodosQuery
    ],
})
export class AppStoreModule {}
