import {Route, Routes} from "react-router-dom";
import UserIndex from "../components/UserProfile/index.js";
import Question from "../components/Question/QuestionCreate.jsx";
import Answer from "../components/Answer/AnswerCreate"
import AnswerView from "../components/Answer/AnswerView"
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
        path="/answer/create"
        element={<Answer/>}
        />
        <Route  
        path='/answer/'
        element={<AnswerView/>}
        />
    </Routes>
    </>
)}
export default Home;