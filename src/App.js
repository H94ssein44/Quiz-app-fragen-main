import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText:
        "Welches Vitamin wird mithilfe von Sonnenlicht im Körper gebildet?",
      answerOptions: [
        { answerText: "Vitamin C", isCorrect: false },
        { answerText: "Vitamin E", isCorrect: false },
        { answerText: "Vitamin D", isCorrect: true },
        { answerText: "Vitamin A", isCorrect: false },
      ],
    },
    {
      questionText: "Wo herrscht kein Linksverkehr?",
      answerOptions: [
        { answerText: "Irland", isCorrect: false },
        { answerText: "Island", isCorrect: true },
        { answerText: "Indien", isCorrect: false },
        { answerText: "Großbritannien", isCorrect: false },
      ],
    },
    {
      questionText: "Welches Metall leitet Wärme am besten?",
      answerOptions: [
        { answerText: "Silber", isCorrect: true },
        { answerText: "Kupfer", isCorrect: false },
        { answerText: "Gold", isCorrect: false },
        { answerText: "Aluminium", isCorrect: false },
      ],
    },
    {
      questionText:
        "Mit welcher Tiergruppe sind die Dinosaurier am engsten verwandt?",
      answerOptions: [
        { answerText: "Affen", isCorrect: false },
        { answerText: "Alligatoren", isCorrect: false },
        { answerText: "Eidechsen", isCorrect: false },
        { answerText: "Vögeln", isCorrect: true },
      ],
    },
    {
      questionText: "Welche Insel gehört nicht zu den balearischen Inseln?",
      answerOptions: [
        { answerText: "Ibiza", isCorrect: false },
        { answerText: "Formentera", isCorrect: false },
        { answerText: "Cabrera", isCorrect: false },
        { answerText: "Gran Canaria", isCorrect: true },
      ],
    },

    {
      questionText: "Wie lautet der zweite Planet in unserem Sonnensystem?",
      answerOptions: [
        { answerText: "Venera", isCorrect: false },
        { answerText: "Jupiter", isCorrect: false },
        { answerText: "Mars", isCorrect: false },
        { answerText: "Venus", isCorrect: true },
      ],
    },

    {
      questionText: "Wann endete der 2. Weltkrieg?",
      answerOptions: [
        { answerText: "1942", isCorrect: false },
        { answerText: "1948", isCorrect: false },
        { answerText: "1943", isCorrect: false },
        { answerText: "1945", isCorrect: true },
      ],
    },

    {
      questionText: "Wie viele Bundesländer hat Deutschland?",
      answerOptions: [
        { answerText: "10", isCorrect: false },
        { answerText: "12", isCorrect: false },
        { answerText: "14", isCorrect: false },
        { answerText: "16", isCorrect: true },
      ],
    },

    {
      questionText: "Wie viele Planeten hat unser Sonnensystem?",
      answerOptions: [
        { answerText: "11", isCorrect: false },
        { answerText: "12", isCorrect: false },
        { answerText: "22", isCorrect: false },
        { answerText: "8", isCorrect: true },
      ],
    },

    {
      questionText: "Welchen Namen trägt die Universität Frankfurt am Main?",
      answerOptions: [
        { answerText: "Heinrich Heine", isCorrect: false },
        { answerText: "Friedrich Schiller", isCorrect: false },
        { answerText: "Bertolt Brecht", isCorrect: false },
        { answerText: "Johann Wolfgang von Goethe", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
