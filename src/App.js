// import logo from './logo.svg';
// import './App.css';
import { Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'

import Sidebar from './components/sidebar/sidebar.jsx';
import Navbar from './components/navbar/Navbar.jsx';

import SingersManager from "./pages/singers/SingersManager.jsx";
// import AlbumsManager from "./pages/albums/AlbumsManager.jsx";
import Home from "./pages/home/home.jsx";

function App() {
  return (
    <div className="App">
      <Box>
        <Navbar />
        <Sidebar />
        
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/singers"
              exact
              element={<SingersManager />}
            />
          </Routes>
        </Router>
      </Box>
    </div>
  );
}

export default App;
