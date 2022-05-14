import { useState } from 'react';
import * as answerService from '../../api/answer.service';

const Answer = () => {
    const [questionSelected, setQuestion]= useState("");
    const [answer, setAnswer] = useState("");
    const handleSubmit = async () => {
        let newAnswer = { questionSelected,answer };
        let res = await answerService.create(newAnswer)
            .then(() => {
                setQuestion("");
                setAnswer("");
                // console.log(newAnswer);
            });

        if (!res === 201) {
                alert("Your answer failed to save.", res.status)
        }
    };
    return (
<div>
        <form>
        <label>What question are you answering:
                <input  
                    onChange={(e) => setQuestion(e.target.value)}
                    value={questionSelected}
                    type="text"
                    name="content"
                    placeholder="pick your question"
                /></label>
                <label>Add your Answer:
                <input  
                    onChange={(e) => setAnswer(e.target.value)}
                    value={answer}
                    type="text"
                    name="content"
                    placeholder="Add your answer here"
                /></label>
            </form>
            <button onClick={handleSubmit}>Submit Answer</button>
</div>
    )
}

export default Answer;
