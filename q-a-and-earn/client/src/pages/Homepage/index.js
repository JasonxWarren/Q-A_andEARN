
import { Route, Routes} from "react-router-dom";
import { useReducer,useEffect } from "react";
import * as authService from "../../api/auth.service";
import Welcome from "../../components/Start";
import NavBar from "../../components/NavBar";
import UserIndex from "../../components/UserProfile";
import Question from "../../components/Question/QuestionCreate.jsx";
import QuestionIndex from "../../components/Question/QuestionIndex"

const reducer = (prevState, action) => {
    switch(action.type) {
        case 'setIsLoggedIn':
            return {...prevState, isLoggedIn: action.payload};
        default:
            return prevState
    }
}

const initialState = {
    isLoggedIn: false,
}

const Home = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { isLoggedIn } = state;

    const userActive = () => {
        if (authService.currentUser()) {
            dispatch({type: 'setIsLoggedIn', payload: true})
        }else{
            dispatch({type: 'setIsLoggedIn', payload: false})
        }
    }

    useEffect(() => {
        userActive();
    }, []);

    if (isLoggedIn) {

    return (
        <>

        <div>
    
  <NavBar 
              checkUserActive={() => userActive()}
          />
        </div>
        { <h1>Successful Sign In</h1> }

            <Routes>
                <Route  
                    path='/user/:id'
                    element={<UserIndex/>}
                    />
                <Route  
                    path='/question/new'
                    element={<Question/>}
                    />
                    <Route  
                    path='/question/'
                    element={<QuestionIndex/>}
                    />      
            </Routes>
        </>
    )
    } else {
        return (
            <div>
             	<div>
				        <Welcome checkUserActive={() => dispatch({type: "setIsLoggedIn", payload: true})}/>
                        <Routes>
                            <Route  
                                path='register'
                                element={<UserIndex/>}
                            />
                    
                        </Routes>
			        </div>
            </div>
        )
    }

}

export default Home;