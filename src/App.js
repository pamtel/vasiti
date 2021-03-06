import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Stories from "./pages/Stories";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { DataProvider } from "./components/DataProvider";
import ThankUpage from "./pages/ThankUpage";

function App() {
  return (
    <DataProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/stories" component={Stories} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/thanks" component={ThankUpage} />
      </Switch>
    </DataProvider>
  );
}

export default App;
