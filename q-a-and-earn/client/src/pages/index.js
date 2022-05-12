import {Route, Routes} from "react-router-dom";
import UserIndex from "../components/UserProfile/index.js";

const Home = () => {

return (
    <>
    <Routes>
        <Route  
        path='/user/:id'
        element={<UserIndex/>}
        />
    </Routes>
    </>
)}
export default Home;