import React, { component } from 'react'

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            FirstName:'',
            LastName:'',
            Email:'',
            Password:''
        };
      
    }

   

    customerRegi=(c)=>{
  
     
        document.getElementById("root").innerHTML="Thank you"+ " " + this.state.LastName + "!" +" " +  "Your user name is your email: " + this.state.Email +""
        
        
  
        
 
    
    }
     
         
    render() {
          return ( 
     <form onSubmit={this.customerRegi} >
       
       <div className="form-group">
            <hr></hr>
            
            <h2> Registration:</h2>
            <label>First Name:</label>         
            <input type='text'placeholder="First Name" value={this.state.FirstName}
            onChange={e=> this.setState({FirstName:e.target.value})}/>
            
       </div>
       <div className="form-group">
           <label>Last Name:</label>          
           <input type='text'placeholder="Last Name" value={this.state.LastName}
           onChange={e=> this.setState({LastName:e.target.value})}/>
       </div>

       <div className="form-group">
           <label>Email:</label>          
           <input type='text'placeholder="Email" value={this.state.Email}
           onChange={e=> this.setState({Email:e.target.value})}/>
       </div>

       <div controlid="formBasicPassword">
          <label>Password:</label>     
          <input type="password" placeholder="Password" />
       </div>

       <div>           
         <input type='submit'/>
         <p className="forgot-password text-right">
         Already registered? <a href="FormComponet">sign in</a>
         </p>
      </div>   
    </form>
     


     

     )

    }  
}

export default Registration;