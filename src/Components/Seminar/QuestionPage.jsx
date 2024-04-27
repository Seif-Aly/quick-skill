import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProgressBar, Modal } from "react-bootstrap";
import "../Style/QuestionPage.css";
import { useParams } from "react-router-dom";

const QuestionPage = () => {
  const { courseId } = useParams();
  const content = "Variables";
  const difficulties = ["Easy"];

  const questionsMockData = [
    {
      text: "Which of these lines of code create new variables?",
      options: [
        { id: "A", text: 'message = "Good morning, Dave!"' },
        { id: "B", text: 'var operatingSystem = "macOS"' },
        { id: "C", text: 'sring operatingSystem = "macOS"' },
      ],
      correctAnswer: "B",
      explanation: "Explanation text for question 1",
    },
    {
      text: " Какие из этих строк кода создают новые переменные?",
      options: [
        { id: "A", text: 'var str = "Hello, playground"' },
        { id: "B", text: 'user = "twostraws"' },
        { id: "C", text: 'int user = "twostraws"' },
      ],
      correctAnswer: "A",
      explanation: "Needs to start with var in order to create a new variable.",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showCorrectModal, setShowCorrectModal] = useState(false);
  const [showIncorrectModal, setShowIncorrectModal] = useState(false);
  const [isPracticeComplete, setIsPracticeComplete] = useState(false);

  const getProgressColorClass = (progress) => {
    if (progress <= 100) return "bg";
  };

  const totalQuestions = questionsMockData.length;
  const currentProgress = (currentQuestionIndex / totalQuestions) * 100;
  const progressBarClass = getProgressColorClass(currentProgress);

  const handleAnswerButtonClick = () => {
    // Logic to handle the answer button click
    setShowModal(true); // Open the modal
  };

  const handleAnswerSelect = (answerId) => {
    if (!isAnswerChecked) {
      setSelectedAnswer(answerId);
    }
  };

  const checkAnswer = () => {
    const correctAnswer = questionsMockData[currentQuestionIndex].correctAnswer;
    const isCorrect = selectedAnswer === correctAnswer;
    setIsAnswerCorrect(isCorrect);
    setIsAnswerChecked(true);
    setShowModal(false);
    setShowExplanation(false);
    if (isCorrect) {
      setShowCorrectModal(true);
    } else {
      setShowIncorrectModal(true);
    }
  };

  const handleNextQuestion = () => {
    const nextIndex = (currentQuestionIndex + 1) % questionsMockData.length;

    if (nextIndex === 0) {
      setIsPracticeComplete(true);
    } else {
      setShowCorrectModal(false);
      setShowIncorrectModal(false);
      setIsAnswerChecked(false);
      setShowExplanation(false);
      setIsAnswerCorrect(null);
      setSelectedAnswer(null);
      setCurrentQuestionIndex(nextIndex);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  const getOptionButtonClass = (optionId) => {
    if (isAnswerChecked) {
      const correctAnswer =
        questionsMockData[currentQuestionIndex].correctAnswer;
      if (optionId === correctAnswer) return "option-button correct";
      if (optionId === selectedAnswer) return "option-button incorrect";
      return "option-button";
    }
    return optionId === selectedAnswer
      ? "option-button selected"
      : "option-button";
  };

  const handleExplain = () => {
    setShowIncorrectModal(false);
    setShowExplanation(true);
  };

  return (
    <>
      {isPracticeComplete ? (
        // Completion screen
        <div className="completion-container">
          {isPracticeComplete && (
            <div className="completion-container">
              <div className="completion-header">
                <div className="checkmark-icon">✓</div>
                <h2>Practice completed</h2>
                <p>
                  Congratulations on completing practice! Receive your rewards
                  and continue practicing to become even better!
                </p>
              </div>
              <div className="rewards-container">
                <div className="reward">
                  <img src="/fire.png" alt="fire" className="fire-icn" />
                  <div>+10 xp</div>
                </div>
                <div className="reward">
                  <img src="/target.svg" alt="target" className="reward-icn" />
                  <div>95%</div>
                </div>
                <div className="reward">
                  <img
                    src="/crystal.svg"
                    alt="crystal"
                    className="reward-icn"
                  />
                  <div>+8</div>
                </div>
                <div className="reward">
                  <img src="/alarm.svg" alt="alarm" className="reward-icn" />
                  <div>5:13</div>
                </div>
              </div>
              <Link to={`/course/${courseId}`} className="finish-button">
                Finish
              </Link>
            </div>
          )}
        </div>
      ) : (
        // Quiz content
        <div>
          <div className="seminar-nav">
            <Link to="/" className="home-button">
              <img src="/home.svg" alt="home" />
            </Link>
            <div className="difficulty-container">
              {difficulties.map((difficulty, index) => (
                <div
                  key={index}
                  className={`difficulty ${difficulty.toLowerCase()}`}
                >
                  {content} <br />
                  {difficulty}
                </div>
              ))}
            </div>
            <ProgressBar
              now={currentProgress}
              label={`${Math.round(currentProgress)}%`}
              className={`progress-bar ${progressBarClass}`}
              variant="custom"
            />

            <button className="answer-button" onClick={handleAnswerButtonClick}>
              <img src="/lock.svg" alt="lock" />
              Ответ
            </button>
          </div>
          <div className="question-container">
            <div className="question">
              {questionsMockData[currentQuestionIndex].text}
            </div>
            <div className="options-container">
              {questionsMockData[currentQuestionIndex].options.map((option) => (
                <button
                  key={option.id}
                  className={getOptionButtonClass(option.id)}
                  onClick={() => handleAnswerSelect(option.id)}
                  disabled={isAnswerChecked}
                >
                  {option.text}
                </button>
              ))}
            </div>

            {!isAnswerChecked && (
              <button
                className="check-answer-button"
                onClick={checkAnswer}
                disabled={selectedAnswer === null}
              >
                Check Answer
              </button>
            )}

            {isAnswerChecked && isAnswerCorrect && (
              <button className="continue-button" onClick={handleNextQuestion}>
                Continue
              </button>
            )}

            {isAnswerChecked && !isAnswerCorrect && !showExplanation && (
              <div className="feedback-buttons">
                <button className="explain-button" onClick={handleExplain}>
                  Объяснять
                </button>
                <button className="got-it-button" onClick={handleNextQuestion}>
                  Следующий вопрос
                </button>
              </div>
            )}

            {showExplanation && (
              <div className="explanation-container">
                <div className="explanation-header">
                  <button className="redo-button">
                    <img src="/redo.svg" alt="redo" />
                  </button>
                  <span>Explanation:</span>
                </div>
                <div
                  className="explanation-text"
                  style={{ overflowY: "scroll", maxHeight: "200px" }}
                >
                  {questionsMockData[currentQuestionIndex].explanation}
                </div>
                <button
                  className="continue-button2"
                  onClick={handleNextQuestion}
                >
                  Continue
                </button>
              </div>
            )}
          </div>

          {/* Modal component */}
          <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Body className="modal-content-custom">
              <h4>Show answer</h4>
              <div className="balance-info">
                <span>💧 500 Balance</span>
              </div>
              <div className="modal-buttons">
                <button onClick={handleCloseModal} className="finish-later-btn">
                  finish later
                </button>
                <button className="spend-btn">spend 💧 30</button>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </>
  );
};

export default QuestionPage;
