export default function AddDoneForm({item,onCompleteHander,onDleteHandler}){
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
  