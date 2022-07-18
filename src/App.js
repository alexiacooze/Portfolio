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
// import Images from "./components/Images/Images";
import Projects from "./components/Projects/Projects";

function App() {

  return (
    <BrowserRouter>
    
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
        <Route path="/apple-clone" exact component={AppleClone} />
        {/* <Route path="/avro" exact component={Avro} /> */}
        <Route path="/flash" exact component={Flash} />
        <Route path="/chatbot" exact component={Chatbot} />
        <Route path="/canada-goose" exact component={CanadaGoose} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
