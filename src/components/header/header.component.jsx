import React from "react";
import { Link } from "react-router-dom";  
import "./header.style.scss";


import { Nav, Navbar, NavItem } from "react-bootstrap";
//import { ReactComponent as Logo } from "../../assets/mklogo.png";
import Logo from '../../assets/mklogo.png'; // Tell webpack this JS file uses this image

class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = { currentUser: props.currentUser };
    }

    render(){

        return(
  
 <div className='header'>


<>
    <Navbar  >
        <Navbar.Brand href="/"> 
        <img 
        src={Logo} 
        width="120"
        height="60"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"     
         />
 
        </Navbar.Brand>



    <Nav className="ml-auto">
      <NavItem> <Link className="nav-link" to="/" className="btn btn-warning font-weight-bold">HOME</Link> </NavItem>  
      <NavItem> <Link className="nav-link" to="characters" className="btn btn-warning ml-3 mr-5 font-weight-bold">CHARACTERS</Link> </NavItem>  
    </Nav> 


  </Navbar>
</>

            {this.state.currentUser}
        </div>

        );


    }

}




export default Header;
