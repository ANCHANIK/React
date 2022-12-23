import React from "react";
import loadable from "@loadable/component";
import { Switch, Route, Redirect } from "react-router";

//code spliting
const LogIn = loadable( () =>  import("@pages/Login"));
const SignUp = loadable( () =>  import("@pages/SignUp"));
const Channel = loadable( () => import('@pages/Channel'));



const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/workspace/channel" component={Channel} />
    </Switch>
  )
}

export default App;

// pages - 서비스 페이지
// components - 짜잘한 컴포넌트
// layouts - 페이지들 간 공통 레이아웃