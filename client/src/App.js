import { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  const [users, setUsers] = useState([{}]);

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' index element={<Home></Home>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
