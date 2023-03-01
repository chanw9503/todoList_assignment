import React, { useState } from 'react';

export default function Add_form({ addTodoListHandler }) {
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  function AddList(event) {
    event.preventDefault();
    const add = addTodoListHandler(subject, content);
    return add;
  }

  return (
    <form className="addForm" onSubmit={(event) => AddList(event)}>
      <div className="input_group">
        <label className="form-label">
          <strong>제목</strong>
        </label>
        <input
          onChange={(event) => setSubject(event.target.value)}
          required
          type={'text'}
          className="form-input"
          id={'subject_input'}
        />
        <label className="form-label">
          <strong>내용</strong>
        </label>
        <input
          onChange={(event) => setContent(event.target.value)}
          required
          type={'text'}
          className="form-input"
          id={'content_input'}
        />
      </div>
      <div>
        <input type="submit" className="addBtn" value={'추가하기'} />
      </div>
    </form>
  );
}
