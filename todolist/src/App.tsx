import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Todo from "./pages/todo";
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import { Api } from "./utils/api";
import { auth, db } from "./firebaseConfig";
import { FirebaseContext } from "./contexts/firebaseContext";

function App() {

  const api:Api = new Api(db, auth)
  const renderizarBotoes = () => (
    <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/todo">Todo</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
          </ul>
        </nav>
      </div>
  );

  return (
    <FirebaseContext.Provider value={{api}}>
        <Router>
          {renderizarBotoes()}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={
                <Todo />
            } />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </Router>
    </FirebaseContext.Provider>
  );
}

export default App;
