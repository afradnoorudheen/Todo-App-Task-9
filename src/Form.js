import React from 'react';



function Form({setInputText, setTodos, todos,inputText,setStatus}) {
    const inputTextHandler= (e) =>{
        setInputText(e.target.value);
    };
    const selectStatusHandler= (e) =>{
        setStatus(e.target.value);
    };
    const submitTodoHandler=(e)=>{
        e.preventDefault();
        setTodos([
            ...todos,{text: inputText, completed: false, id: Math.random()*1000},
        ]);
        setInputText("");

    };
  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" onChange={selectStatusHandler} className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
