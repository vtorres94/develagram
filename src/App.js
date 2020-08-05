import React, {useEffect} from 'react';
import Body from './layout/body';
import Footer from './layout/footer';
import Header from './layout/header';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <div>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
