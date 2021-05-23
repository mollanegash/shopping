import React from 'react';

class FooterComponet extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      
        return (
            
            <div className="footer"> 
         
         
         <img src="http://localhost:3000/logospa.jpg" width="60px" height="60px" alt ="my react app"></img>
         <div>© Copy 2019 </div>
                           
      
             <address>42 Norton st; Contact Us: <a href="mnegash@bu.edu">mdraya3@gmail.com</a>
           
            </address>
      


            
            </div>
          
           
          
                                    
             
        );
        
    }
}

export default FooterComponet;