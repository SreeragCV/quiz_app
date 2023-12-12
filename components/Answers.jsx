import React, { useRef } from 'react'

export default function Answers({ answers, selectedAnswer, answerState, onSelect }) {

    const shuffledAnswers = useRef();

    if(!shuffledAnswers.current){
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
      }

  return (
    <div>
      <ul id="answers">
          {shuffledAnswers.current.map((answer) => {
            const isSelected = selectedAnswer === answer;
            let cssClass = "";

            if (answerState === "answered" && isSelected) {
              cssClass = "selected";
            }

            if (
              (answerState === "correct" || answerState === "wrong") &&
              isSelected
            ) {
              cssClass = answerState;
            }

            return (
              <li className="answer" key={answer}>
                <button
                  className={cssClass}
                  onClick={() => onSelect(answer)}
                  disabled={answerState !== ""}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
    </div>
  )
}
