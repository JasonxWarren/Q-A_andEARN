import React, { useEffect, useState } from 'react';
import * as questionService from "../../api/question.service"
import * as userProfileService from "../../api/userprofile.service"
import Question from '../Question/QuestionCreate';
import Answer from '../Answer/AnswerCreate.jsx';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import AlertDismissible from '../Answer/AnswerCreateToggle';
export default function QuestionView() {

    const [question, setQuestion] = useState([]);
    const [user,setUser] = useState([]);

    const findUser = async () => {
        await userProfileService.show().then((res) => {
            setUser(res.data.data);
        });
    }
    useEffect(() => {
        async function getQuestion() {
            const questions = await questionService.getAll();
                setQuestion(questions.data.data);
                console.log(questions.data.data[0].name)
        }
        getQuestion();
        findUser();
    }, [])
    
    return(
        <Container fluid>
        <>
            
            
            {question.map((questionInfo, index) => {
                     if(user._id === questionInfo.User[0]){
                        return (<div>
                        <Card style={{backgroundColor: 'rgba(183, 179, 179, 0.5)'}} border="success">
                            <Card.Body>
                        <h6> this is your question!</h6>        
                        <h3>{questionInfo?.name}</h3> 
                        <p>{questionInfo?.description}</p>
                       <h4>By: {user.username}</h4> 
                       </Card.Body>
                       </Card>
                       </div>  )}
                       else if(user._id !== questionInfo.User[0]){
                        return (<Card style={{backgroundColor: 'rgba(183, 179, 179, 0.5)'}} border="warning">
                        <Card.Body>
                    <h3>{questionInfo?.name}</h3> 
                    <p>{questionInfo?.description}</p>
                   <h4>By:Another</h4> 
                   <AlertDismissible questionInfo={questionInfo} />
                   {/* <Answer questionInfo={questionInfo}/> */}
                   </Card.Body>
                   </Card>)
                       }
                    })
                }
            
             <h1>{question[0]?.name}</h1>
             {/* <Answer /> */}
            {/* <Question /> */}
        </>
        </Container>
    )
}