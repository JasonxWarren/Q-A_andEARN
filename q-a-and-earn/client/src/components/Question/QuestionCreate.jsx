import { useState } from 'react';
import * as questionService from '../../api/question.service';

const Question = () => {
  
    const [name, setName] = useState("");

    const handleSubmit = async () => {
        let newQuestion = { name };
        let res = await questionService.create(newQuestion)
            .then(() => {
               
                setName("");
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
            </form>
            <button onClick={handleSubmit}>Submit Question</button>
</div>
    )
}

export default Question;
