import {Route, Routes} from "react-router-dom";
import UserIndex from "../components/UserProfile/index.js";

const Home = () => {

return (
    <div>
    <Routes>
        <Route  
        path='/'
        element={<UserIndex/>}
        />
    </Routes>
    </div>
)}
export default Home;