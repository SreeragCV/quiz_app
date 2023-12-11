import React, { useEffect, useState } from "react";
import QUESTIONS from "../src/questions.js";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  function handleClick(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });

    const storedIds = JSON.parse(localStorage.getItem('selectedAnswers')) || []
    localStorage.setItem('selectedAnswers', JSON.stringify([...storedIds, selectedAnswer]))
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((answer) => {
            return (
              <li className="answer" key={answer}>
                <button onClick={() => handleClick(answer)}>{answer}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
