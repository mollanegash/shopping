import React from 'react';

class LogoComponet extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            
            <div className="logo">                
                 <img src="http://localhost:3000/logospa.jpg" width="150px" height="150px" alt="Boston Office Supply"></img>                           
              
             </div>
             
        );
    }
}

export default LogoComponet;
