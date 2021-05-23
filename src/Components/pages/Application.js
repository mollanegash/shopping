import React, { component } from 'react'
import { bindActionCreators } from 'redux';

class Application extends React.Component {
    constructor(props) {
        super(props);
       
     
       
 
        
  this.state={
                   
    CustomerInformation:[
      
        {fname:"Sami",lname:"Abebe", Address:"40 Norton st.",City:"Boston",State:"MA",OrderNo: "44",Item:"calculator",amount:"2",PricePerunit:"$50.00",totalCost:"$100",
        },
        {fname:"Zew",lname:"negash", Address:"39 Norton st.",City:"Boston",State:"MA",OrderNo: "014",Item:"table",amount:"2",PricePerunit:"$14.00",totalCost:"$28",
        },
           ]
           
    
}
    }




    handsubmit=(s)=>{
       document.getElementById("root").innerHTML=this.state.CustomerInformation
       console.log(this.state.CustomerInformation)
    //    alert(this.state.CustomerInformation)
    }

    render() {
        return (
           
           <div className="App">
              
              <button onClick={this.handsubmit}> Customer Information</button>
            {/* <p> <button onClick={this.handleClick}> click me</button></p> */}
                               {/* <table className="table"width="400" border="1" cellPadding="5">
                                  <thead>
                                  <tr>
                                        <th>fname</th>
                                        <th>lname</th>
                                        <th>Address</th>
                                        <th>OrderNo.</th>
                                        <th>Item</th>
                                        <th>amount</th>
                                        <th>PricePerunit</th>
                                        <th>totalCost</th>
                                     </tr>
                                  </thead>
                            
                              <tbody>
                                  
            
                              {this.state.CustomerInformation.map(c => (

                                <tr key={c.id}>

                                <td>{c.fname}</td>

                                <td>{c.lname}</td>

                                <td>{c.Address}</td>

                                <td>{c.OrderNo}</td>

                                <td>{c.Item}</td>

                                <td>{c.amount}</td>
                                <td>{c.PricePerunit}</td>

                            <td>{c.totalCostc}</td>
                                
                                


                                </tr>

                                ))}

                               </tbody>
                               </table>   */}          
            
                               
            
              <p className="p">
               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to make a type 
               specimen book. 
              </p>
                            <hr/> 

                           

    
                </div>
                

        );
    }
}

export default Application;