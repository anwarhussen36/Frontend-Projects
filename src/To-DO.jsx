import React, { useState } from 'react'
import { BiCheckCircle, BiCheckDouble, BiEdit, BiHome, BiRefresh, BiReset, BiTrash } from 'react-icons/bi';
import'./To-Do.css';

function ToDOApp() {
  const [todos, setTodos]= useState([]);
  const [inputvalue, setInputvalue]= useState('');
  const [editIndex, setEditIndex]= useState(-1);

  const addTodo =()=>{
    if(inputvalue.trim() !== ''){
      if(editIndex !==-1){
        const updatedTodos =[...todos];
        updatedTodos[editIndex]={
          task:inputvalue, 
          completed:updatedTodos[editIndex].completed,
        }
        setTodos(updatedTodos);
        setInputvalue('');
        setEditIndex(-1);
      }
      else{
        setTodos([...todos, {task: inputvalue, completed:false}]);
        setInputvalue('');
    }
  }
  };

  const startEdit =(index)=>{
    setInputvalue(todos[index].task)
    setEditIndex(index);
  };

  const cancleEdit=()=>{
    setInputvalue('');
    setEditIndex(-1);
  };

  const removeTodo =(index)=>{
    const updatedTodos=todos.filter((_,i)=>i !==index);
    setTodos(updatedTodos);

  };

  const toggleCompleted=(index)=>{
    const updatedTodos=[...todos];
    updatedTodos[index].completed=!updatedTodos[index].completed;
    setTodos(updatedTodos);

  };

  return (
    <div className='container'>
        <p className='home'><BiHome/></p>

        <h2>My To-Do List</h2>

        <div className='input-container'>
            <form onSubmit={(e)=>{
              e.preventDefault();
              addTodo();
            }}>
                <input 
                  type='text' 
                  className='input-field' 
                  value={inputvalue} 
                  placeholder='Enter A New Task' 
                  onChange={(e)=>setInputvalue(e.target.value)}
                  />
                  {editIndex !==-1 ? ( 
                    <>
                    <button onClick={addTodo} className='del-btn'><BiCheckDouble/></button>
                    <button onClick={cancleEdit} className='canc-btn'><BiRefresh/></button>
                    </>
                  ):(
                    <button onClick={addTodo} className='add-btn'>ADD</button>
                  )}
                   </form>

                  <div>
                    <ul className='todo-list'>
                      {todos.map((todo,index)=>(
                        <li key={index} className={todo.completed ? 'completed':''}>
                          {todo.task}
                          <div className='btn-group'>
                            <button onClick={() => startEdit(index)} className='btn-edit'><BiEdit/></button>
                            <button onClick={() => removeTodo(index)} className='btn-remove'><BiTrash/></button>
                            <button onClick={()=>toggleCompleted(index)} className='btn-done'>
                              {todo.completed ? <BiReset/>:<BiCheckCircle/>}
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
              
           
        </div>
    </div>
  );
}

export default ToDOApp;
