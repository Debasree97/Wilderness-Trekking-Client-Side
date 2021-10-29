import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Banner from "./componants/Banner/Banner";
import Footer from "./componants/Footer/Footer";
import Header from "./componants/Header/Header";
import Home from "./componants/Home/Home";
import Login from "./componants/Login/Login";
import MyOrder from "./componants/MyOrder/MyOrder";
import NotFound from "./componants/NotFound/NotFound";

function App() {
  return (
    <div className="font">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/myorder">
            <MyOrder></MyOrder>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
          {/* <Route path="/"></Route>
        <Route path="/"></Route>
        <Route path="/"></Route>
        <Route path="/"></Route>
        <Route path="/"></Route> */}
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
