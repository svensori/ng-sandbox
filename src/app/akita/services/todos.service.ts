import { Injectable } from '@angular/core';

import { createTodo } from '../models/todo.model';
import { TodosStore } from '../stores/todos.store';

@Injectable({
    providedIn: 'root'
})
export class TodosService {

    constructor(
        private todosStore: TodosStore
    ) { }

    add(title: string) {
        const todo = createTodo({
            id: Math.floor(Math.random() * (10000 - 1) + 1),
            title
        });
        this.todosStore.add(todo);
    }
}
