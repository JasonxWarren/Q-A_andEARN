import { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Answer from '../Answer/AnswerCreate.jsx';

export default function AlertDismissible(questionInfo) {
    const [show, setShow] = useState(false);
  
    return (
      <>
        <Alert show={show} variant="light" >
          <Alert.Heading>Answer the question and earn some tokens</Alert.Heading>
          {console.log(questionInfo)}
          <Answer questionInfo={questionInfo}/>
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="danger">
              Close?
            </Button>
          </div>
        </Alert>
  
        {!show && <Button variant="success" onClick={() => setShow(true)}>Answer this question?</Button>}
      </>
    );
  }
