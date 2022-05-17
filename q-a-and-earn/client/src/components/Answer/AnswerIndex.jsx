import React, { useEffect, useState } from 'react';
import * as answerService from "../../api/answer.service"
import * as userProfileService from "../../api/userprofile.service"
import Answer from '../Answer/AnswerCreate.jsx';
import Question from '../Question/QuestionIndex';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export default function AnswerView() {

    const [answer, setAnswer] = useState([]);
    const [user, setUser] = useState("");
    const [allUsers, setAllUsers]= useState("");
    
    const findUser = async () => {
        await userProfileService.show().then((res) => {
            setUser(res.data.data);
        });
    }
    const findOtherUsers = async () => {
       const allUsers= await userProfileService.showAll();
       console.log(allUsers)
       setAllUsers(allUsers.data.data)
    }

    useEffect(() => {
        async function getAnswer() {
            const answer = await answerService.getAll();
                setAnswer(answer.data.data);
                console.log(answer.data.data)
                console.log("in answer component")
        }
        getAnswer();
        findUser();
        findOtherUsers();
    }, [])
    return(
        <Container fluid>
        <>
            <h2>Welcome {user.username}</h2>
            {/* <h3> { for (let i=0; i<question.length; i++) {
                question[i].name?.map((naming,index)=> {
                return (
                    <li key={index}>  
                    <p>{question.name}</p>
                    </li>
                )
            }) };  </h3> */}
            {answer.map((answerInfo, index) => {
                if(user._id === answerInfo.User[0]){
                    return (<div>
                    <Card bg="secondary" border="success" style={{ width: '40rem' }}>
                        <Card.Body>
                    <h3>{answerInfo?.answer}</h3> 
                   <h4>{user.username}</h4> 
                   </Card.Body>
                   </Card>
                   </div>
                   
                           )
                }
                    else if(user._id !== answerInfo.User[0]){
                        return (<Card bg="secondary" border="warning" style={{ width: '18rem' }}>
                        <Card.Body>
                    <h3>{answerInfo?.answer}</h3> 
                   <h4>{user.username}</h4> 
                   </Card.Body>
                   </Card>)
                        // {allUsers.map((UserInfo, index) => {
                        //     if (UserInfo._id ===answerInfo.User[0]){
                        //         return(
                        //             <li style={{listStyle:"none"}} key={index}>
                        //             <Card><h4>{answerInfo?.answer}</h4>
                        //                  {/* <h5>{answerInfo?.</h5> */}
                        //             </Card>
                        //             {console.log(answerInfo)} 
                        //         </li>
                                    
                        //         )
                        //       }
                        //        }
                        //         )
                    
                        //           }         
            }
            })
        }
             {/* <h1>{answer[0].answer}</h1> */}
            <Question />
            
        </>
        </Container>
    )
}