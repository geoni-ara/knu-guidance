import { useState } from "react";

const BoardListPage = ({
  changePageForWrite,
  server,
  handleOnClickSelectTodo,
  changePageForRoadMapPage,
  changePageForLogIn,
  serverShare,
}) => {
  const [shareData, setShareData] = useState(false)
  return (
    <div className="board-wrapper">
      <div style={{fontSize: '50px'}}>I-로드맵 게시판</div>
      <div className="subtitle-board-wrapper">
        다른 사람은 i-로드맵을 어떻게 작성했을까? 선행과목은 무엇일까?라는
        <br/> 
        고민을 해결하기 위해 게시판에 익명으로 자신의 i-로드맵을 올려 정보를 공유하기 위한 게시판입니다.
      </div>
      <div className="list-wrapper" style={{backgroundColor:'LightGray'}}>
        <div style={{width:'5%'}}>번호</div>
        <div style={{width:'85%'}}>제목</div>
        <div style={{width:'5%'}}>날짜</div>
        <div style={{width:'5%'}}>조회수</div>
      </div>
      {server.reverse().map((todo,index)=>(
        <div className="list-wrapper" key={todo.id} onClick={() => handleOnClickSelectTodo(todo)}>
          <div style={{width:'5%'}}>{server.length-index}</div>
          <div style={{width:'85%'}}>{todo.title}</div>
          <div style={{width:'5%'}}>{todo.date}</div>
          <div style={{width:'5%'}}>{todo.show}</div>
        </div>
      ))}
      <div className="list-button-wrapper">
        <button onClick={changePageForWrite}>글쓰기</button>
        <button onClick={() => setShareData(true)}>공유하기</button>
      </div>
      <div>
        <button onClick={changePageForLogIn}>로그인</button>
      </div>
      <div style={{ paddingTop: '20px' }}>
        {shareData === true && (
          <div style={{textAlign:"center"}} onClick={changePageForRoadMapPage}>공유된 로드맵</div>
        )}    
      </div>
    </div>
  );
};

export default BoardListPage;