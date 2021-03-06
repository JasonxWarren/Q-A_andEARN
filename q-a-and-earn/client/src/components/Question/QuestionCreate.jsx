import { useState } from 'react';
import * as questionService from '../../api/question.service';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Question = () => {
  
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [budget, setBudget]= useState("");
    const handleSubmit = async () => {
        let newQuestion = { name,description,budget };
        let res = await questionService.create(newQuestion)
            .then(() => {
               
                setName("");
                setDescription("");
                setBudget("");
                console.log(newQuestion);
            });

        if (!res === 201) {
                alert("Your question failed to save.", res.status)
        }
    };
    return (
<div className="container1">
    <Container>
    <Form>
  <Form.Group className="mb-3" >
    <Form.Label>Question</Form.Label>
    <Form.Control onChange={(e) => setName(e.target.value)}
                    value={name}type="text" placeholder="add your question here" />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Question Description</Form.Label>
    <Form.Control onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    type="text"
                    name="content"
                    placeholder="Add the meat of your question here" />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Pick how much you will like to spend(budget)</Form.Label>
    <Form.Control  onChange={(e) => setBudget(e.target.value)}
                    value={budget}
                    type="number"
                    name="content"
                    placeholder="pick how much you are willing to spend, between $1-$99" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={handleSubmit}>
    Submit
  </Button>
</Form>
            </Container>
</div>
    )
}

export default Question;
