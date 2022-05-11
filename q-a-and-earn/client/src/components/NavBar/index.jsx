// import { Route, Routes } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import * as authService from '../../api/auth.service';




export default function NavBar({checkUserActive}) {
        const handleLogout = async () => {
            const res = await authService.logout();
            checkUserActive();
            return res;
        }

    return (      
        <div>
            <div>
                <h1>Q and A</h1>
            </div>

    
        

            <NavLink className="logout"
                to='/'
                onClick = {handleLogout}
            >Logout
            </NavLink>
           


         </div>
        
    )
}

