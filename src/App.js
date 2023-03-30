/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '남대문 맛집';
  let [글제목,b] = useState(['어디있을까' , '순대국' , '비빔밥']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal,setModal] = useState(false);
  let [title,setTitle] = useState(0)

  let[입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'white', fontSize : '30px' }}>SONGBLOG</h4>
      </div>

      <button onClick={() =>{
        let copy = [...글제목];
        copy[0] = '맛집';
        copy.sort();
        b(copy); 
      }}>글수정</button>
      

      {
        글제목.map(function(a , i){
          return (
          <div className="list" key={i}>
            <h4 onClick={() =>{ setModal(!modal);  setTitle(i)}}>{ a } 
              <span onClick={() =>{
                 let copy = [...따봉];
                 copy[i] = copy[i] + 1;
                 따봉변경(copy) ;
                 }}>👍</span>{ 따봉[i] }
            </h4>
            <h4>3월 29일 발행</h4>

            <button onClick={() => {
              let copy=[...글제목];
              copy.splice(i,1); //삭제 버튼 클릭시 i번쨰 삭제 
              b(copy);
            }}>삭제</button>
          </div>
          )//return end
        })//map end
      }
      <div>
        <input onChange={(e) => {입력값변경(e.target.value); }} />
        <button onClick={() => {
          let copy  = [...글제목];
          copy.unshift(입력값); //array자료 맨 앞에 자료추가하는 문법이다.
          b(copy)
        }}>글발행</button>
      </div>
      {
        modal == true ? <Modal color={'yellow'} title={title} 글제목={글제목} /> : null
      }
    </div>

  );
}



function Modal(props){
  return (
    <div className="modal" style={{background : props.color}}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
export default App;
