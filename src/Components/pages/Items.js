import React, { component } from 'react'

class Items extends React.Component {
    
    constructor(props) {
        super(props);
        this.state={
            paperPrice:12,
            tablePrice:13
        }     
        

        
    } 
      
    
    clickImage=()=>{
          document.getElementById("root").innerHTML="current price of paper per unit:" + " " + "$" + this.state.paperPrice 
         
          document.getElementById("root").innerHTML="current price of table per unit:" + " " + "$" + this.state.tablePrice 
        }   
        
        handleClick () {

            fetch('http://www.zumatra.com/teach/promise_2.php')
            .then(response=>response.json())
            .then(serverResponse=>document.getElementById('root').innerHTML=serverResponse);
        
            fetch('http://www.zumatra.com/teach/promise_5.php')
            .then(response=>response.json())
            .then(serverResponse=>document.getElementById('root').innerHTML=serverResponse);
             
            fetch('http://www.zumatra.com/teach/promise_10.php')
            .then(response=>response.json())
            .then(serverResponse=>document.getElementById('root').innerHTML=serverResponse);
             
            }

    render() {
        return (

         
            <div className="button__container">
                 
       
        
     <p> <button className='button'onClick={this.handleClick}> Call My Promises</button></p>  
            
              
            <span className="span"> 
            <img src="http://localhost:3000/paper.JPG" width="200px" height="200px"onClick={this.clickImage} alt="paper not found"/>
           
                       
              <br></br>
            <span className="span"> 
           
            <img src="http://localhost:3000/table.JPG" width="200px" height="200px"onClick={this.clickImage} alt="patable not found"/>

            </span>      
        
          
            </span>         

    
            </div>         
            
          

            
      
        );
       

}
}

export default Items;