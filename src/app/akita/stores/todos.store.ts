import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { Todo } from '../models/todo.model';

export interface TodoState extends EntityState<Todo> { }

@StoreConfig({
    name: 'todos',
    resettable: true
})
export class TodosStore extends EntityStore<TodoState, Todo> {
    constructor() {
        super();
    }
}
