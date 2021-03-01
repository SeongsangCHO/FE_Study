import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import NavItem from "./NavItem";

function App() {
  const [user, setUser] = useState(null);
  //로그인 안되었으면 link login, register show
  //되어있으면 logout show
  const onLogin = () => {
    setUser({
      name: "seongsang",
    });
  };
  const onLogOut = () => {
    setUser(null);
  };
  return (
    <Switch>
      <Route path="/" exact>
        <div className="App">
          <button onClick={onLogin}>로그인 하기</button>
          <button onClick={onLogOut}>로그아웃 하기</button>
        </div>
        <NavItem to="/" show={true} text="root"></NavItem>
        <NavItem to="login" show={!user} text="로그인하기"></NavItem>
        <NavItem to="resgister" show={!user} text="회원가입하기"></NavItem>
        <NavItem to="logout" show={user} text="로그아웃"></NavItem>
      </Route>

      <Route path="/login" exact>
        <Link to="/">root</Link>
        <h4>로그인 하는 구역.</h4>
      </Route>
      <Route path="/resgister" exact>
        <Link to="/">root</Link>
        <h4>회원가입하기</h4>
      </Route>
      <Route path="/logout" exact>
        <Link to="/">root</Link>
        <h4>로그아웃 수행</h4>
      </Route>
    </Switch>
  );
}

export default App;
