import React, {useEffect} from 'react';
import Body from './layout/body';
import Footer from './layout/footer';
import Header from './layout/header';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </Router>
  );
}

export default App;
