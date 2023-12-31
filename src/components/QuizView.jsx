import React from "react";
import "./QuizView.css";


const QuizView = ({ questions, currentQuestion, handleAnswerClick, handleNextClick, isAnswered }) =>{
    return <>
    <div className="question">
        <div className="question-number">
            <span>
                Question {currentQuestion + 1} / {questions.length}
            </span>
        </div>
        <div className="question-text">
            {questions[currentQuestion].question}
        </div>
    </div>
    
    <div className="answer">
     {questions[currentQuestion].answers.map(({text, isCorrect}) => (
        <button onClick={() => handleAnswerClick(isCorrect)} key={text}>{text}</button>
     ))}
    </div>
    
    <div className="next-button">
        <button disabled={!isAnswered} onClick={handleNextClick}>Next</button>
    </div>
    </>
};

export default QuizView;