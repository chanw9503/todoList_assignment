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

  return (
    <div className="root">
      <div className="layout">
        <Navigation/>
        <Add_form/>
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

function Add_form() {
  return (
    <form className="addForm">
      <div className="input_group">
        <lable className="form-label">
          <strong>제목</strong>
        </lable>
        <input required type={"text"} className="form-input" id={"subject_input"} />
        <label className="form-label">
          <strong>내용</strong>
        </label>
        <input required type={"text"} className="form-input"  id={"content_input"} />
      </div>
      <div>
        <button className='addBtn'>추가하기</button>
      </div>
    </form>
  );
}

export default App