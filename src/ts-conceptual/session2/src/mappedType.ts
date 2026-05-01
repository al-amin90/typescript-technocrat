{
  type Todo = {
    task: string;
    completed: boolean;
    duadate: string;
  };

  // mapped type
  type STodo = Partial<Todo>;
  type StringTodo = {
    [T in keyof Todo]?: Todo[T];
  };

  const task: StringTodo = {
    task: "Ami kaj korbo ",
  };
}
