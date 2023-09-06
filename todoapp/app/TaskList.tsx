
export default function TaskList({tasks} : {tasks: {name:string, done:boolean}[]}) {
    // let tasks = props.tasks;
    let tableRows = tasks.map(e => {
        return (
        <tr key={e.name}>
          <td className="px-2">{e.name}</td>
          <td className="text-center"><input type="checkbox" name="done" id="chk-done-1" checked={e.done} /></td>
        </tr>)
      });

    return(
        <table className="w-full bg-red-100">
            <thead className="table-header-group bg-gray-50">
            <tr>
                <th className="w-5/6">Task</th>
                <th className="w-1/6">Done</th>
            </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )
}