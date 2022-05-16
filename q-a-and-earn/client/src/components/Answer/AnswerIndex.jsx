import React, { useEffect, useState } from 'react';
import * as answerService from "../../api/answer.service"
import Answer from '../Answer/AnswerCreate.jsx';
import Question from '../Question/QuestionIndex';
export default function AnswerView() {

    const [answer, setAnswer] = useState([]);
    
    useEffect(() => {
        async function getAnswer() {
            const answer = await answerService.getAll();
                setAnswer(answer.data.data);
                console.log(answer.data.data)
                console.log("in answer component")
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
            {answer.map((answerInfo, index) => {
                        return (
                        <li style={{listStyle:"none"}} key={index}>
                            <h4>{answerInfo?.answer}</h4>
                            {/* {console.log(answerInfo)}  */}
                        </li>
                        )  })
            }
             {/* <h1>{answer[0].answer}</h1> */}
            <Question />
        </>
    )
}