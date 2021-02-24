import styles from "./App.module.css";
import { useState, useEffect } from "react";
import { Route, useHistory } from 'react-router-dom';

function App() {
  const JAVASCRIPT_KEY = "00743ed6c413ea402f7d277ce57493a6";
  const { Kakao } = window;
  const history = useHistory();
  const [user, setUser] = useState({});

  const onLogin = (e) => {
    Kakao.Auth.login({
      success: function (response) {
        console.log(response);
        console.log("Login success");
        history.push("/logined");
        setUser({
          access_token: response.access_token,
        });
      },
      fail: function (error) {
        console.log(error);
      },
    });
  };
  const onShareLink = () => {
    Kakao.Link.createDefaultButton({
      container: '#create-kakao-link-btn',
      objectType: 'feed',
      content: {
        title: '딸기 치즈 케익',
        description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
        imageUrl:
          'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845,
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        {
          title: '앱으로 보기',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
      ],
    })
  }
  useEffect(() => {
    console.log("init..");
    Kakao.init(JAVASCRIPT_KEY);
  }, []);
  return (
    <div className="App">
      <Route path="/" exact>
        <button onClick={onLogin} className={styles.loginButton}>
          Continue with Kakao
        </button>
      </Route>
      <Route path="/logined" exact>
        <h4>로그인 완료.</h4>
        <button id="create-kakao-link-btn" onClick={onShareLink}>친구에게 공유하기</button>
      </Route>
    </div>
  );
}

export default App;
