
export const InputButton = ({value, setValue}) => {

    return (
        <>
            <input type='text' className="todo-input" value={value} placeholder="What is the task for today?" onChange={(e) => setValue(e.target.value)}/>
            <button className="todo-btn" type="submit">Add Task</button>
        </>
    )
}