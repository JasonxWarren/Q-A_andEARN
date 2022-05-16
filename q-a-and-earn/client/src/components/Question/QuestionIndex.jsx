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
    // useEffect(() => {
    //     async function findQuestions() {

    //         for (let i=0; i<question.length; i++){
    //              let formattedQuestion=question[i];
    //              console.log("here:"+ formattedQuestion)
    //         question.map((formattedQuestion) => {
    //             if(formattedQuestion.name){
    //                 formattedQuestion.name.map((naming) => {
    //                     return findQuestions(naming)
    //                 })
    //             }
    //                 else return null
    //             })
    //         }
    //         }
    //         findQuestions();
    //     }, [question])
    

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
                            <Answer questionInfo={questionInfo}/>
                            {/* {console.log(answerInfo)}  */}
                        </li> )}
            )}
             <h1>{question[0]?.name}</h1>
             <Answer />
            {/* <Question /> */}
        </>
    )
}