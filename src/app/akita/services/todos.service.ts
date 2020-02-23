import { Injectable } from '@angular/core';

import { createTodo } from '../models/todo.model';
import { TodosStore } from '../stores/todos.store';
import { trigger } from '@angular/animations';
import { resetStores } from '@datorama/akita';

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

    update(id: number) {
        this.todosStore.update(id, state => {
            return {
                id,
                completed: !state.completed
            };
        });
    }

    reset() {
        resetStores();
    }
}
