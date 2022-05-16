import { useState } from 'react';
import * as answerService from '../../api/answer.service';
import { string } from 'prop-types';
const Answer = (questionInfo) => {
    console.log(questionInfo.questionInfo?._id)
    const [questionSelected, setQuestion]= useState("");
    const [answer, setAnswer] = useState("");
    const handleSubmit = async () => {
        // setQuestion(questionInfo.questionInfo?._id)
        console.log(questionSelected)
        let newAnswer = { questionSelected, answer };
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
                    onChange={(e) => setQuestion(questionInfo.questionInfo?._id)}
                    value={questionInfo}
                    type="text"
                    name="content"
                    placeholder={questionInfo.questionInfo?._id}
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
