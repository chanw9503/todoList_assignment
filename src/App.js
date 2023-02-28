import React from 'react'
import './App.css'
import { useState } from 'react'



function App() {

  const INITIAL_OBJECT = {
    id : 0,
    done: false,
    subject : "초기제목",
    content : "할일"
  }

  const [toDoList, setToDoList] = useState([INITIAL_OBJECT]);

  function AddToDolist(subject,content){


    const newToDoList = {
      id : toDoList.length +1,
      done : false, 
      subject,
      content,
    }

    setToDoList([...toDoList, newToDoList]);
    console.log(toDoList);
  }

  return (
    <div className="root">
      <div className="layout">
        <Navigation/>
        <Add_form  addTodoListHandler ={AddToDolist}/>
       
        
      </div>
    </div>
  );
}

function Navigation(){

  return(
    <div className='container'>
      <div>My Todo List</div>
      <div>React</div>
    </div>
  )
}

function Add_form({addTodoListHandler}) {

  const [subject, setSubject] = useState(''); 
  const [content, setContent] = useState('');

  function AddList(event){
    event.preventDefault();
    const add = addTodoListHandler(subject,content);
    return add;
  }


  return (
    <form className="addForm">
      <div className="input_group">
        <label className="form-label">
          <strong>제목</strong>
        </label>
        <input onChange={(event)=>setSubject(event.target.value)} required type={"text"} className="form-input" id={"subject_input"} />
        <label className="form-label">
          <strong>내용</strong>
        </label>
        <input onChange={(event)=>setContent(event.target.value)} required type={"text"} className="form-input"  id={"content_input"} />
      </div>
      <div>
        <button onClick={(event)=>AddList(event)} className='addBtn'>추가하기</button>
      </div>
    </form>
  );
}

export default App