import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';

import { Todo } from '../models/todo.model';
import { TodoState, TodosStore } from '../stores/todos.store';


@Injectable({
    providedIn: 'root'
})
export class TodosQuery extends QueryEntity<TodoState, Todo> {
    todos$ = this.selectAll();

    constructor(protected todosStore: TodosStore) {
        super(todosStore);
    }
}
