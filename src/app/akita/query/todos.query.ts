import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';

import { Todo } from '../models/todo.model';
import { TodosStore, TodoState } from '../stores/todos.store';

@Injectable({
    providedIn: 'root'
})
export class TodosQuery extends QueryEntity<TodoState, Todo> {
    todos$ = this.selectAll();
    todosComplete$ = this.selectAll({
        filterBy: todo => todo.completed
    });
    todosIncomplete$ = this.selectAll({
        filterBy: todo => !todo.completed
    });
    constructor(protected todosStore: TodosStore) {
        super(todosStore);
    }
}
