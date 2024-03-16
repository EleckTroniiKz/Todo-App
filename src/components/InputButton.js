import './InputButton.css';

const InputButton = ({value, setValue}) => {

    return (
        <>
            <input data-testid="todo-input" type='text' className="todo-input" value={value} placeholder="What is the task for today?" onChange={(e) => setValue(e.target.value)}/>
            <button data-testid="submit-btn" className="submit-btn" type="submit">Add Task</button>
        </>
    )
}

export default InputButton;