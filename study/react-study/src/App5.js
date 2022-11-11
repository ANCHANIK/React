import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./routes/Home"
import Detail from "./routes/Detail";


function App5 () {
	return (
		<Router>
			<Routes>
				<Route path="/hello" element={<h1>Hello</h1>} />
				<Route path="/movie/:id" element={<Detail />} />
				<Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
			</Routes>
		</Router>
	)
}
/* 
<Router> : 유저에게 보여주고 싶은 페이지를 render해주는 리우터
	<Switch> : 한 번에 하나의 Route만 렌더링 해주기 위해 사용  /  but, <Switch>는 5버전에서 사용 현재는 6버전 사용
		<Route path="/"> : path="/" / 하나만 사용하면 Home을 보여주기 위함
			<Home />
		</Route>
		<Route path="/users"> : path="/users" Users 페이지를 보여주기 위함
			<Users />
		</Route>
	</Switch>
</Router>


*/

export default App5;