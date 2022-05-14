import {Route, Routes} from "react-router-dom";
import UserIndex from "../components/UserProfile/index.js";
import Question from "../components/Question/QuestionCreate.jsx";
import Answer from "../components/Answer/AnswerCreate"
const Home = () => {

return (
    <>
    <Routes>
        <Route  
        path="/user/:id"
        element={<UserIndex/>}
        />
        <Route  
        path="/question/"
        element={<Question/>}
        />
        <Route  
        path="/answer/"
        element={<Answer/>}
        />
    </Routes>
    </>
)}
export default Home;