import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import About from "./components/About/About";
import AppleClone from "./components/AppleClone/AppleClone";
// import Avro from "./components/Avro/Avro";
import CanadaGoose from "./components/CanadaGoose/CanadaGoose";
import Chatbot from "./components/Chatbot/Chatbot";
import Contact from "./components/Contact/Contact";
import Flash from "./components/Flash/Flash";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/apple" component={AppleClone} />
        {/* <Route path="/avro" exact component={Avro} /> */}
        <Route path="/flash" component={Flash} />
        <Route path="/chatbot" component={Chatbot} />
        <Route path="/canada-goose" component={CanadaGoose} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
