import React from 'react';


class NavComponet extends React.Component {
    constructor(props) {
        super(props);

      
    }

    render() {
        return (
         

         

          
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark " >

              
            <a className="navbar-brand" href="home">SMS</a>
            <button className="navbar-toggler" data-toggle="nav-collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              
            </button>
            
          
            <div >
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                     <a className="nav-link" href="home">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="aboutus">About Us</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="contactus">Contact Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="history">History</a>
                  </li>

                  <li className="nav-item">
                     <a className="nav-link" href="Registration">Registration</a>
                  </li>  
                  <li className="nav-item">
                    <a className="nav-link" href="Items">Items</a>
                  </li>                
             <form  className="search">           
               <input type="text" name ="search" placeholder="search.." />
              <button className="submit" ><i className="fa fa-search"></i></button>
            </form> 
                 
              </ul>
              
              
            </div>
          </nav>

          

    
         
        );
    }
}

export default NavComponet;