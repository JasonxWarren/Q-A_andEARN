import { useState } from 'react';
import * as questionService from '../../api/question.service';

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
<div>
        <form>
                <label>Add your Question:
                <input  
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    name="content"
                    placeholder="Add your question here"
                /></label>
                <break></break>
                <label><input  
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    type="text"
                    name="content"
                    placeholder="Add the meat of your question here"
                /></label>
                 <label>Pick how much you will like to spend(budget)<input  
                    onChange={(e) => setBudget(e.target.value)}
                    value={budget}
                    type="number"
                    name="content"
                    placeholder="pick how much you are willing to spend, between $1-$99"
                /></label>
            </form>
            <button onClick={handleSubmit}>Submit Question</button>
</div>
    )
}

export default Question;
