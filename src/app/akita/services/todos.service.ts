import { Injectable } from '@angular/core';
import { resetStores } from '@datorama/akita';

import { createTodo, Todo } from '../models/todo.model';
import { TodosStore } from '../stores/todos.store';
import { HttpClient } from '@angular/common/http';
import { first, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TodosService {

    constructor(
        private todosStore: TodosStore,
        private http: HttpClient
    ) {
        this.fetchTodos();
    }

    private fetchTodos() {
        this.http.get('../../../assets/todos.json')
            .pipe(first())
            .subscribe(
                (todos: Todo[]) => {
                    this.todosStore.set(todos);
                }
            );
    }

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
