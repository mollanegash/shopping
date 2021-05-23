import React, { component } from 'react';
import './App.css'
import LogoComponet from './Components/Common/LogoComponet'
import NavComponet from './Components/Common/NavComponet'
import FooterComponet from './Components/Common/FooterComponet'
import '../src/styles/style.css'
import {BrowserRouter as Router, Route}from 'react-router-dom'
import HomeComponet from './Components/pages/HomeComponet'
import AboutUsComponet from './Components/pages/AboutUsComponet'
import ContactUsComponet from './Components/pages/ContactUsComponet'
import HistoryComponet from './Components/pages/HistoryComponet'




import Items from './Components/pages/Items'
import FormComponet from './Components/pages/FormComponet'
import Registration from './Components/pages/Registration'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';




class App extends React.Component {
  constructor(props){
    super(props);
   
  }

  render() {
    
    
     return (
     <div>
       <LogoComponet></LogoComponet>
       <NavComponet></NavComponet>

              <Router>       
              <Route path="/" component={HomeComponet} exact></Route>       
              <Route path="/FormComponet" component={FormComponet}></Route>
              <Route path="/aboutus" component={AboutUsComponet}></Route>
              <Route path="/contactus" component={ContactUsComponet}></Route>
              <Route path="/history" component={HistoryComponet}></Route>
              <Route path="/home" component={HomeComponet}></Route>
              <Route path="/Registration" component={Registration}></Route>   
              <Route path="/Items" component={Items}></Route>  
              
              </Router>     
      
        

          <FooterComponet></FooterComponet>

          
    </div>  
    );
  }
}
export default App;
