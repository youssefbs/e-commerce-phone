import React,{useState} from 'react';
import './App.css';
import Header from './components/Header'
import Phones from './components/Phones';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Model from './components/Model';
import PhonesContextProvider from './context/PhonesContext';
import Cart from './components/Cart';
import Default from './components/Default';


function App() {

  const [selected,setSelected]=useState(null)
  return (
    <div className="App">
      <PhonesContextProvider>
        
        <Router>
        <Header />
            <Switch>  
              <Route path='/' exact render={()=><Phones setSelected={setSelected}/>} />
              <Route path='/cart' component={Cart} />
              <Route component={Default} />
            </Switch>  
        </Router>        
        {
          selected && <Model selected={selected} setSelected={setSelected}/>
        }
      </PhonesContextProvider>
    </div>
  );
}

export default App;
