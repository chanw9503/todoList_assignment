import React from 'react';
import './index.css';
import { useState } from 'react';
import Navigation from './component/Navigation';
import Add_form from './component/Add_Form';
import AddWorkingForm from './component/AddWorkingForm';
import AddDoneForm from './component/AddDoneForm';

function App() {
  const INITIAL_OBJECT = {
    id: 0,
    done: false,
    subject: '초기제목',
    content: '할일',
  };

  const [toDoList, setToDoList] = useState([INITIAL_OBJECT]);

  function onCompleteEvent(id, done) {
    console.log('test');
    const newList = toDoList.map((item) => {
      let isDone = false;
      item.id === id ? (isDone = done) : (isDone = item.done);

      const newToDo = {
        id: item.id,
        done: isDone,
        subject: item.subject,
        content: item.content,
      };
      return newToDo;
    });
    console.log(newList);
    setToDoList(newList);
  }

  function onDeleteEvent(id) {
    const newList = toDoList.filter((item) => item.id !== id);
    setToDoList(newList);
  }

  function AddToDolist(subject, content) {
    const newToDoList = {
      id: toDoList.length + 1,
      done: false,
      subject,
      content,
    };

    setToDoList([...toDoList, newToDoList]);
    console.log(toDoList);
  }

  return (
    <div className="root">
      <div className="layout">
        <Navigation />
        <Add_form addTodoListHandler={AddToDolist} />
        <div className="list_container">
          <h2 className="title">Working.. 🔥</h2>
          <div className="working-container">
            {toDoList
              .filter((item) => item.done === false)
              .map((item) => {
                return (
                  <AddWorkingForm
                    key={item.id}
                    item={item}
                    onCompleteHander={onCompleteEvent}
                    onDleteHandler={onDeleteEvent}
                  />
                );
              })}
          </div>
          <h2 className="title">Done..! 🎉</h2>
          <div className="done-container">
            {toDoList
              .filter((item) => item.done === true)
              .map((item) => {
                return (
                  <AddDoneForm
                    key={item.id}
                    item={item}
                    onCompleteHander={onCompleteEvent}
                    onDleteHandler={onDeleteEvent}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
