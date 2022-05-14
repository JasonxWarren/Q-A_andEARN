import React, { useEffect, useState } from 'react';
import * as questionService from "../../api/question.service"
import Question from '../Question/QuestionCreate';

export default function QuestionView() {

    const [question, setQuestion] = useState([]);
    
    useEffect(() => {
        async function getQuestion() {
            const questions = await questionService.getAll();
                setQuestion(questions.data.data);
                console.log(questions.data.data[0])
        }
        getQuestion();
    }, [])

    return(
        <>
            <h2>here</h2>
            <h1>{question[1].name}</h1>
            
            <Question />
        </>
    )
}