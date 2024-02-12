import "./App.css";
import MainNavigation from "./shared/MainNavigation";
import {
  BrowserRouter,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from './components/Contact';
import Project from "./components/Project";

const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
          <Route exact path="/" element={<Home/> } />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/projects" element={<Project/>} />
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;
