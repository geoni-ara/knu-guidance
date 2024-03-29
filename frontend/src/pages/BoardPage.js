import { useEffect, useState } from "react";
import "./Page.scss";
import "../components/board/board.scss";
import WritePage from "../components/board/WritePage";
import ReadPage from "../components/board/ReadPage";
import BoardListPage from "../components/board/BordListPage";
import RoadMapPage from "../components/board/RoadMapPage"
import Login from "../components/board/Login";
import axios from "axios";
/*
로드맵 공유(시각화)

계정관리, 시간표 수립, 인기과목 통계 및 추천과목, 선행과목 지정

시간표 수립 인터페이스
계정관리 기능 및 페이지 개발 - 초보적인 단계, jwt인증 !!
scss사용
*/
const BoardPage = () => {
  const [page, setPage] = useState("board");
  const [selectTodo, setSelectTodo] = useState(null);
  const [server, setServer] = useState([]);
  const [serverShare, setServerShare] = useState([]);
  useEffect(() => {
    const readServer = async () => {
      const res = await axios.get("http://localhost:3001/board");
      const resSh = await axios.get("http://localhost:3001/share");
      setServer(res.data);
      setServerShare(resSh.data);
    };
    readServer();
  }, [selectTodo]);
  const handleOnClickSelectTodo = async (todo) => {
    try {
      await axios.put(`http://localhost:3001/board/${todo.id}`, {
        id: todo.id,
        title: todo.title,
        contents: todo.contents,
        date: todo.date,
        show: todo.show + 1,
      });
      setSelectTodo(todo);
      changePageForRead();
    } catch (error) {
      console.error("서버에 데이터를 업데이트 하는 중 오류 발생");
    }
  };
  const changePageForBoardList = () => {
    setPage("board");
  };
  const changePageForWrite = () => {
    setPage("write");
  };
  const changePageForRead = () => {
    setPage("contents");
  };
  const changePageForRoadMapPage = () =>{
    setPage("roadmap");
  }
  const changePageForLogIn = () =>{
    setPage("LogIn");
  }
  return (
    <div className="page">
      <div className="page-content-wrapper">
        <div className="page-content">
          {page === "board" && (
            <BoardListPage
              server={server}
              serverShare = {serverShare}
              setServerShare = {setServerShare}
              changePageForWrite={changePageForWrite}
              changePageForRoadMapPage = {changePageForRoadMapPage}
              changePageForLogIn = {changePageForLogIn}
              handleOnClickSelectTodo={handleOnClickSelectTodo}
            />
          )}
          {page === "write" && (
            <WritePage
              changePageForBoardList={changePageForBoardList}
              server={server}
              setServer={setServer}
            />
          )}
          {page === "contents" && (
            <ReadPage
              server={server}
              setServer={setServer}
              changePageForBoardList={changePageForBoardList}
              selectTodo={selectTodo}
            />
          )}
          {page === "roadmap" && (
            <RoadMapPage
              serverShare = {serverShare}
              setServerShare = {setServerShare}
              changePageForBoardList = {changePageForBoardList}
            />
          )}
          {page === "LogIn" &&(
            <Login
              changePageForBoardList={changePageForBoardList}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BoardPage;

// json-server --host localhost --port 3001 ./database.json
