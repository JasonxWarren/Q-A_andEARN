import React, { useEffect, useState } from 'react';
import * as questionService from "../../api/question.service"
import * as userProfileService from "../../api/userprofile.service"
import Question from '../Question/QuestionCreate';
import Answer from '../Answer/AnswerCreate.jsx';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import AlertDismissible from '../Answer/AnswerCreateToggle';

export default function QuestionAnswerInfo(answerInformation) {
    const [question, setQuestion] = useState([]);
    const [budget, setBudget]= useState([]);
    // const [user,setUser] = useState([]);

   
    
    useEffect(() => {
        async function getQuestion() {
            const questions = await questionService.getAll();
            console.log(questions.data.data)
            console.log(answerInformation)
                setQuestion(questions.data.data);
                // setBudget(questions.data.data.budget)
                // console.log(questions.data.data[0].name)
        }
        getQuestion();
    }, [])
    

    return(
        <Container fluid>
        <>
          
            {question.map((questionInfo, index) => {
                {console.log(questionInfo)}
                     if(answerInformation === questionInfo?.Answers[0]){
                        return (<div>
                         <h2>{questionInfo?.budget}</h2>           
                        <h3>Question:{questionInfo?.name}</h3> 
                        <p>{questionInfo?.description}</p> 
                       </div>  )}
                    })
                }
                    
             {/* <h1>{question[0]?.name}</h1> */}
             {/* <Answer /> */}
            {/* <Question /> */}
        </>
        </Container>
    )
}