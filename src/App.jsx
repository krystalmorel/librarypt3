import "./index.css"
import Nav from "./componets/Nav";
import Footer from "./componets/Footer";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Books from "./pages/Books";
import React from 'react';


function App() {
  return (
<BrowserRouter>
<Routes>
      <div className="App">
        <Nav />
        <Route path="/"  componet={<Home/>} />
        <Route path="/books" component={<Books/>} />
        <Footer />
      </div>
  
</Routes>
</BrowserRouter>

  );
}
export default App;
