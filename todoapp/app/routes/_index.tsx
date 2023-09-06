import type { V2_MetaFunction } from "@remix-run/node";
import TaskList from "~/TaskList";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  let tasks:{name:string,done:boolean}[] = [
    {name: "Task 1", done: true},
    {name: "Task 2", done: false},
    {name: "Task 3", done: true},
  ];



  return (
    <div className="w-full bg-green-400">
      <h1 className="text-3xl">Todo App</h1>  

      <TaskList tasks={tasks} />
    </div>
  );
}
