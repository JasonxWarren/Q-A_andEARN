import React, { useEffect, useState } from 'react';
import * as questionService from "../../api/question.service"
import Question from '../Question/QuestionCreate';
import Answer from '../Answer/AnswerCreate.jsx';
export default function QuestionView() {

    const [question, setQuestion] = useState([]);
    
    useEffect(() => {
        async function getQuestion() {
            const questions = await questionService.getAll();
                setQuestion(questions.data.data);
                console.log(questions.data.data[0].name)
        }
        getQuestion();
    }, [])
   
    

    return(
        <>
            <h2>here</h2>
            {/* <h3> { for (let i=0; i<question.length; i++) {
                question[i].name?.map((naming,index)=> {
                return (
                    <li key={index}>  
                    <p>{question.name}</p>
                    </li>
                )
            }) };  </h3> */}
            {question.map((questionInfo, index) => {
                        return (
                        <li style={{listStyle:"none"}} key={index}>
                            <h4>{questionInfo?.name}</h4>
                            {console.log("qindex questionInfo:"+questionInfo)}
                            <Answer questionInfo={questionInfo}/>
                            {/* {console.log(answerInfo)}  */}
                        </li> )}
            )}
             <h1>{question[0]?.name}</h1>
             {/* <Answer /> */}
            {/* <Question /> */}
        </>
    )
}