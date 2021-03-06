// import { Route, Routes } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import * as authService from '../../api/auth.service';
import Container from 'react-bootstrap/Container';

const contentStyles = {
	padding: "2px",
	
};


export default function NavBar({checkUserActive}) {
        const handleLogout = async () => {
            const res = await authService.logout();
            checkUserActive();
            return res;
        }

    return (      
        <div className="navbar-custom">
            <Container fluid>
            <div>
                <h1 style={{fontSize: "50px", color: "white", textDecoration: "underline"}}>Q and A</h1>
            </div>
            <NavLink
                to="/user/:id" style={contentStyles}
            >User Profile</NavLink>
             <NavLink
                to="/question/" style={contentStyles}
            >Questions</NavLink>
             <NavLink
                to="/question/new" style={contentStyles}
            >Create a Question</NavLink>
             <NavLink
                to="/answer/" style={contentStyles}
            >Answers</NavLink>
    
            <NavLink className="logout"
                to='/'
                onClick = {handleLogout}
            >Logout
            </NavLink>
            </Container>
         </div>
        
    )
}

