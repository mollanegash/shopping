import React from 'react';

import axios from 'axios';

class FormComponet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     username: '',
      password:'',
  
    };
 


  }

  userLogInSubmit=()=>{
    document.getElementById('root').innerHTML='login succesfull!' 
  
 
   
  
  

  }
   
   
 

render() {
 
    return ( 
    
     <form onSubmit={this.userLogInSubmit}>
       
    

      
      <h4> Login Here:</h4>
  
      <div className="form-group col-md-4">
                <label htmlFor="username">User Name</label>
                <input type="text" className="form-control" id="username" placeholder="Username" />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputPassword4">Password</label>
                <input type="password" className="form-control" id="inputPassword4" placeholder="Password" 
                  />
              </div>


  <br></br>

       <div>
         <input type='submit'/>
         <p className="forgot-password text-right">
           Forgot your <a href="Registration">Password?</a>
         </p>
       </div>

  
       
     

           
      </form>
     
      






      

      
      


    )

    }  
}
export default FormComponet;
