import { ID } from '@datorama/akita';

export interface Todo {
    id: ID;
    title: string;
    completed: boolean;
}

/**
 * Factory function for building entity
 */
export function createTodo({ id, title }: Partial<Todo>) {
    return {
        id,
        title,
        completed: false
    } as Todo;
}
