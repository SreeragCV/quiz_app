import React from "react";
import img from "../src/assets/quiz-complete.png";
import QUESTIONS from "../src/questions.js";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswer = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAnswersCount = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );

  const correctAnswersCount = Math.round(
    (correctAnswer.length / userAnswers.length) * 100
  );

  const wrongAnswersCount = Math.round(
    ((userAnswers.length - (skippedAnswers.length + correctAnswer.length)) /
      userAnswers.length) *
      100
  );

  return (
    <div id="summary">
      <img src={img} alt="" />
      <h2>QUIZ COMPLETE</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersCount}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersCount}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersCount}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
