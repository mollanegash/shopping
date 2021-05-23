import React from 'react';


import Application from './Application';

import FormComponet from './FormComponet'
import Items from './Items';


class HomeComponet extends React.Component {
    // constructor(props) {
    //     super(props);
       
    
       
       
    // }

   

    render() {
  
        return (
            
            <div>
                
            <h2 >Home</h2>
                <hr></hr>
                 <Application></Application>
              
                 <FormComponet></FormComponet>              

                
               
            


            </div>
             
   
   
         


        );
    }
}

export default HomeComponet;
