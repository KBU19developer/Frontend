import logo from './logo.svg';
import './App.css';
const frontImgImg = require("./Img/frontImg.jpg");

function App() {
  return (
    <div>
      <div id="header" role="banner">
        <div className="userArea">
            <a href="#" className="linkRegister">
                <span>회원가입</span>
            </a>
            <a href="#" className="linkLogin">
                <span>로그인</span>
            </a>
            <a href="#" className="linkFindAccount">
                <span>아이디/비밀번호찾기</span>
            </a>
        </div>
        <div className="frontImg">
            <a href="#">
                <img src={frontImgImg} width="1100" height="500" />
            </a>
        </div>
        <div id="navBar" role="navigation">
            <div className="barList">
                <ul className="navList">
                    <li><a href="https://www.naver.com/">구름아이디</a></li>
                    <li><a href="#">게시판</a></li>
                    <li><a href="#">스마트렌즈</a></li>
                    <li><a href="#">공지사항</a></li>
                </ul>
            </div>
        </div>
      </div>
      <div id="body" role="main">
        <div id="groupA" className="leftSide">
          <div className="userInfo">
            <div className='infoBox'>
              <div className='greetings'>
                <p>19Project</p>
                <p>로그인을 진행하세요</p>
              </div>
              <div className='userArea2'>
                <a href="#" className="infoLogin">
                  <span>로그인</span>
                </a>
                <a href="#" className="infoRegister">
                  <span>회원가입</span>
                </a>
                <a href="#" className="infoAccount">
                  <span>아이디/비밀번호찾기</span>
                </a>
              </div>
            </div>
            <div className='writing'>
              <a href="#">글쓰기</a>
            </div>
          </div>
          <div className="allMenu">
            <hr />
            <div className="myWriting">
                <ul>
                    <li><a href="#">내가 쓴 글</a></li>
                    <li><a href="#">좋아요 글</a></li>
                    <li><a href="#">댓글 단 글</a></li>
                </ul>
            </div>
            <hr />
            <div className="allWriting">
                <ul>
                    <li><a href="#">전체글</a></li>
                    <li><a href="#">공지사항</a></li>
                    <li><a href="#">자유게시판</a></li>
                    <li><a href="#">정보게시판</a></li>
                </ul>
            </div>
            <hr />
          </div>
        </div>    
        <div id="groupB" className="rightSide">
          <section>
              <h1>19project</h1>
              <p>흥애 우리 만든다 웹사이트 흥애
                  여러 기능을 가진 흥애 웹사이트 흥애
              </p>
          </section>
          <hr />
          <section>
              <h3>공지사항</h3>
              <p></p>
          </section>
          <hr />
          <section>
              <h3>자유게시판</h3>
              <p></p>
          </section>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default App;
