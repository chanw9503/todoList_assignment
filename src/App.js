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

  function onCompleteEvent(id,done){
    console.log('test');
      const newList = toDoList.map(item=>{
        let isDone = false; 
        item.id === id? isDone = done : isDone = item.done;

        const newToDo = {
          id : item.id,
          done : isDone,
          subject : item.subject,
          content : item.content,
        }
        return newToDo;
      })
      console.log(newList);
      setToDoList(newList);
  }

  function onDeleteEvent(id){
    const newList = toDoList.filter((item)=> item.id !== id );
    setToDoList(newList);
  }

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
        <div className='list_container'>
         <h2 className="title">Working.. 🔥</h2>
         { toDoList.filter((item)=> item.done === false)
            .map((item)=>{ return(<AddWorkingForm 
            key={item.id} 
            item ={item}
            onCompleteHander = {onCompleteEvent}
            onDleteHandler ={onDeleteEvent}
            />); })}
         <h2 className="title">Done..! 🎉</h2>

         { toDoList.filter((item)=> item.done === true)
            .map((item)=>{ return(<AddDoneForm 
            key={item.id} 
            item ={item}
            onCompleteHander = {onCompleteEvent}
            onDleteHandler ={onDeleteEvent}
            />); })}
        </div>
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


function AddWorkingForm({item,onCompleteHander,onDleteHandler}){
    return(
      <div className='toDoBox' key={item.id}>
        <div className='subjectBox'><strong>{item.subject}</strong></div>
        <div className='contentBox'>{item.content}</div>
        <div className='btnBox'>
          <button onClick={()=>onDleteHandler(item.id)} className='workingBtn deleteBtn'>삭제하기</button>
          <button onClick={()=>onCompleteHander(item.id,!item.done)} className='workingBtn CompleteBtn'>완료</button>
        </div>
      </div>
    )
}

function AddDoneForm({item,onCompleteHander,onDleteHandler}){
  return(
    <div className='toDoBox' key={item.id}>
    <div className='subjectBox'><strong>{item.subject}</strong></div>
    <div className='contentBox'>{item.content}</div>
    <div className='btnBox'>
    <button onClick={()=>onDleteHandler(item.id)} className='workingBtn deleteBtn'>삭제하기</button>
          <button onClick={()=>onCompleteHander(item.id,!item.done)} className='workingBtn CompleteBtn'>취소</button>
    </div>
  </div>
  )
}


export default App