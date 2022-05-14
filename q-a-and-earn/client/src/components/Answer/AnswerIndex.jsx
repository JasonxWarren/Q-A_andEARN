import React, { useEffect, useState } from 'react';
import * as answerService from "../../api/question.service"
import Answer from '../Answer/AnswerCreate.jsx';
import Question from '../Question/QuestionIndex';
export default function AnswerView() {

    const [answer, setAnswer] = useState([]);
    
    useEffect(() => {
        async function getAnswer() {
            const questions = await answerService.show();
                setAnswer(answer.data.data);
                console.log(answer.data.data[0].answer)
        }
        getAnswer();
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
             <h1>{answer[0]?.name}</h1>
            <Question />
        </>
    )
}