import React from "react";

// Import main components
import Navbar from "./components/Navbar.component";
import Footer from "./components/Footer.component";

// Import React router dom
import { Switch, Route } from "react-router-dom";

// Import Pages
import Home from "./pages/Home.component";
import News from "./pages/News.component";
import Contacts from "./pages/Contacts.component";
import Details from "./pages/Details.component";
import NotFound from "./pages/NotFound.component";

// Import css files
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/details" component={Details} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
