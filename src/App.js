import React, { useState } from 'react';
import './App.css';

// 좋아요, 싫어요 버튼 함수
const Post = ({name, number}) => {
  const [likeBtn, setLikeBtn] = useState(number);
  const [noBtn, setNoBtn] = useState(number);

  //좋아요 버튼
  const onIncrease = () => {
    setLikeBtn(likeBtn + 1);
  }

  //싫어요 버튼
  const onDecrease = () => {
    setNoBtn(noBtn + 1);
  }

  return (
    <div>
      <h3>{name}</h3>
      <p>9월 23일</p>
      <span onClick = {onIncrease}>👍 </span> 
        {likeBtn}
      <span onClick = {onDecrease}> 👎 </span> 
        {noBtn}
      <hr />
    </div>
  )
}

function App() {
  let [title, setTitle] = useState(['오늘의 일기', '뿌링클 먹었따~', '사과쨈 만들기']);
  let [count, setCount] = useState([0,0,0,0]);

  return (
    <div className = "App">
      <div className = "black-nav">
        <div>Yoon's Blog</div>
      </div>
      <div className = "list">
        {title.map((title, index) =>
          <Post name = {title} number = {count[index]}/>
        )}
      </div>
    </div>
)
}

export default App;