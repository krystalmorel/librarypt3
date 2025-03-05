import "./index.css"
import Nav from "./componets/Nav";
import Footer from "./componets/Footer";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Books from "./pages/Books";
import React from 'react';
import { books } from "./data"
import BookInfo from "./pages/BookInfo";


function App() {
  return (
<Router>
    <div className="App">
     <Nav />
     <Route path='/' exact component={Home} />
     <Route path='/books' exact render={() => <Books books={books} />} />
     <Route path='books/:id' render={() => <BookInfo books={books} />} />
     <Footer />
    </div>
</Router>

  );
}
export default App;

