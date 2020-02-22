import { NgModule } from '@angular/core';

import { TodosStore } from './todos.store';
import { TodosQuery } from '../query/todos.query';

@NgModule({
    providers: [
        TodosStore,
        TodosQuery
    ],
})
export class AppStoreModule {}
