import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AddOrder from "./componants/AddOrder/AddOrder";
import Footer from "./componants/Footer/Footer";
import Header from "./componants/Header/Header";
import Home from "./componants/Home/Home";
import Login from "./componants/Login/Login";
import ManageOrder from "./componants/ManageOrder/ManageOrder";
import MyOrder from "./componants/MyOrder/MyOrder";
import NotFound from "./componants/NotFound/NotFound";
import TourDetails from "./componants/TourDetails/TourDetails";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <AuthProvider>
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
            <Route path="/manageorder">
              <ManageOrder></ManageOrder>
            </Route>
            <Route path="/addorder">
              <AddOrder></AddOrder>
            </Route>
            <Route path="/tour/:tourId">
              <TourDetails></TourDetails>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
