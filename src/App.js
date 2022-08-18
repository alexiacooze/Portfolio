import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import About from "./components/About/About";
import AppleClone from "./components/AppleClone/AppleClone";
import BrainFlix from "./components/BrainFlix/BrainFlix";
import Chatbot from "./components/Chatbot/Chatbot";
import Contact from "./components/Contact/Contact";
import Flash from "./components/Flash/Flash";
import Home from "./components/Home/Home";
import InStock from "./components/Instock/InStock";
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
        <Route path="/flash" component={Flash} />
        <Route path="/chatbot" component={Chatbot} />
        <Route path="/instock" component={InStock} />
        <Route path="/brainflix" component={BrainFlix} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
