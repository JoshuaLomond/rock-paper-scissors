import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHandPaper, faHandScissors, faCrown } from '@fortawesome/free-solid-svg-icons';
import '../styles/Game.css';

type Choice = 'rock' | 'paper' | 'scissors';
type GameResult = 'win' | 'lose' | 'draw' | null;

interface ChoiceIcon {
  icon: typeof faHandRock;
  color: string;
}

const choiceIcons: Record<Choice, ChoiceIcon> = {
  rock: { icon: faHandRock, color: '#e74c3c' },
  paper: { icon: faHandPaper, color: '#3498db' },
  scissors: { icon: faHandScissors, color: '#2ecc71' }
};

const Game: React.FC = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [cpuChoice, setCpuChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<GameResult>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const choices: Choice[] = ['rock', 'paper', 'scissors'];

  const getCpuChoice = (): Choice => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const determineWinner = (player: Choice, cpu: Choice): GameResult => {
    if (player === cpu) return 'draw';
    
    if (
      (player === 'rock' && cpu === 'scissors') ||
      (player === 'paper' && cpu === 'rock') ||
      (player === 'scissors' && cpu === 'paper')
    ) {
      return 'win';
    }
    
    return 'lose';
  };

  const handleChoice = (choice: Choice) => {
    setIsAnimating(true);
    setPlayerChoice(choice);
    setCpuChoice(null);
    setResult(null);
    
    // Simulate CPU thinking
    setTimeout(() => {
      const cpu = getCpuChoice();
      setCpuChoice(cpu);
      
      const gameResult = determineWinner(choice, cpu);
      setResult(gameResult);
      
      if (gameResult === 'win') {
        setPlayerScore(prev => prev + 1);
      } else if (gameResult === 'lose') {
        setCpuScore(prev => prev + 1);
      }
      
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <div className="game">
      <h1 className="game-title">Rock Paper Scissors</h1>
      
      <div className="score-board">
        <div className={`score player ${playerScore > cpuScore ? 'winning' : ''}`}>
          <h2>You {playerScore > cpuScore && <FontAwesomeIcon icon={faCrown} className="crown" />}</h2>
          <p>{playerScore}</p>
        </div>
        <div className="score-divider">vs</div>
        <div className={`score cpu ${cpuScore > playerScore ? 'winning' : ''}`}>
          <h2>CPU {cpuScore > playerScore && <FontAwesomeIcon icon={faCrown} className="crown" />}</h2>
          <p>{cpuScore}</p>
        </div>
      </div>

      <div className="choices">
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => !isAnimating && handleChoice(choice)}
            className={`choice-btn ${playerChoice === choice ? 'selected' : ''} ${isAnimating ? 'disabled' : ''}`}
            disabled={isAnimating}
            style={{ 
              '--choice-color': choiceIcons[choice].color,
            } as React.CSSProperties}
          >
            <FontAwesomeIcon 
              icon={choiceIcons[choice].icon} 
              size="2x"
            />
            <span className="choice-label">{choice}</span>
          </button>
        ))}
      </div>

      <div className={`battle-area ${playerChoice && cpuChoice ? 'show' : ''}`}>
        {playerChoice && (
          <div className="choice-display player">
            <FontAwesomeIcon 
              icon={choiceIcons[playerChoice].icon} 
              size="3x" 
              color={choiceIcons[playerChoice].color}
            />
          </div>
        )}
        
        {isAnimating ? (
          <div className="vs-badge thinking">
            <span className="dot-animation">.</span>
            <span className="dot-animation">.</span>
            <span className="dot-animation">.</span>
          </div>
        ) : (
          <div className="vs-badge">VS</div>
        )}

        {cpuChoice && (
          <div className="choice-display cpu">
            <FontAwesomeIcon 
              icon={choiceIcons[cpuChoice].icon} 
              size="3x" 
              color={choiceIcons[cpuChoice].color}
            />
          </div>
        )}
      </div>

      {result && (
        <div className={`result-banner ${result}`}>
          {result === 'draw' ? "It's a Draw!" : result === 'win' ? 'You Won!' : 'CPU Won!'}
        </div>
      )}
    </div>
  );
};

export default Game; 