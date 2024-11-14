{
type Todo = {
    task: string;
    completed: boolean;
    duadate: string;
}

// mapped type
type stringTodo = {
    [T in keyof Todo]? : Todo[T]
}

}