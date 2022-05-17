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
                     if(user._id === questionInfo.User[0]){
                        return (<div>
                        <Card bg="secondary" border="success" style={{ width: '60rem' }}>
                            <Card.Body>
                        <h6> this is your question!</h6>        
                        <h3>{questionInfo?.name}</h3> 
                        <p>{questionInfo?.description}</p>
                       <h4>By: {user.username}</h4> 
                       </Card.Body>
                       </Card>
                       </div>  )}
                       else if(user._id !== questionInfo.User[0]){
                        return (<Card bg="secondary" border="warning" style={{ width: '60rem' }}>
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
                    {/* //    return (
                                


                    //     <li style={{listStyle:"none"}} key={index}>
                    //         <h4>{questionInfo?.name}</h4>
                    //         {console.log("qindex questionInfo:"+questionInfo)}
                    //         <Answer questionInfo={questionInfo}/>
                    //         {/* {console.log(answerInfo)}  */}
                    {/* //     </li> )} */} 
            
             <h1>{question[0]?.name}</h1>
             {/* <Answer /> */}
            {/* <Question /> */}
        </>
    )
}