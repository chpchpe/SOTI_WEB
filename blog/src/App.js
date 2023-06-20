import './App.css';
import { useState } from 'react';

function App() {

  let[글제목,글제목변경]=useState(['여자 코트 추천','맛집 추천','미용실 추천']);
  let[따봉,따봉변경]=useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그다요</h4>
      </div>
      <div className='list'>
        <h4>{글제목[0]}
        <span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
        <button onClick={()=>{
          let a =[...글제목];
          a=a.sort();
          글제목변경(a)
        }}>가나다순정렬</button>
        <button onClick={()=>{
          let copy =[...글제목];
          copy[0]='남자 코트 추천';
          글제목변경(copy)
        }}>change</button>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <Modal></Modal>
    </div>
  );
}

function Modal(){
  return(
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}


export default App;
