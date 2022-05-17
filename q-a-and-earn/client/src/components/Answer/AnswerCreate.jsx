import { useState, useEffect } from 'react';
import * as answerService from '../../api/answer.service';
import { string } from 'prop-types';

const Answer = (questionInfo) => {
    console.log(questionInfo.questionInfo.questionInfo?._id)
    const [questionSelected, setQuestion]= useState("");
    const [answer, setAnswer] = useState("");
    // const [questionInter, setQuestionInter]=useState("")
    const handleSubmit = async (questionInfo) => {
        console.log("here in answercreate")
        let newAnswer = { questionSelected, answer };
        console.log(newAnswer)
        let res = await answerService.create(newAnswer)
            .then(() => {
                setQuestion(questionSelected);
                setAnswer("");
                // console.log(newAnswer);
            });

        if (!res === 201) {
                alert("Your answer failed to save.", res.status)
        }
    };
    useEffect(() => {
        setQuestion(questionInfo.questionInfo.questionInfo?._id);
    }, [questionInfo.questionInfo.questionInfo?._id]);

    return (
<div>
        <form>
        <label>What question are you answering:
                <input  
                    // onChange={(e) => setQuestion(e.target.value)}
                    value={questionSelected}
                    type="hidden"
                    name="content"
                    placeholder={questionInfo.questionInfo?._id}
                /></label>
    
        <label>Add your Answer:
                <input  size="50"
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
