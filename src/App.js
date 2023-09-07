import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, RouterProvider} from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/layout/Home";
import List from "./components/ground/List";
import Detail from "./components/ground/Detail";
import BoardList from "./components/board/BoardList";
import BoardInsert from "./components/board/BoardInsert";
import BoardDetail from "./components/board/BoardDetail";

import {Provider} from "react-redux";
import store from "./store/store";
import BoardUpdate from "./components/board/BoardUpdate";

function App() {
  return (
      <Provider store={store}>
          <Router>
            <Header/>
            <div id={"root"}>
              <Routes>
                <Route exact path={"/"} element={<Home/>}/>
                <Route exact path={"/ground/list"} element={<List/>}/>
                <Route exact path={"/ground/detail/:gno"} element={<Detail/>}/>
                <Route exact path={"/board/list"} element={<BoardList/>}/>
                <Route exact path={"/board/insert"} element={<BoardInsert/>}/>
                <Route exact path={"/board/detail/:no"} element={<BoardDetail/>}/>
                  <Route exact path={"/board/update/:no"} element={<BoardUpdate/>}/>

              </Routes>
            </div>
            <Footer/>
          </Router>
      </Provider>
  );
}

export default App;
