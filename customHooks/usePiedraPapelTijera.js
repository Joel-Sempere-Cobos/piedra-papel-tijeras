import { useEffect, useState } from 'react';
import { getResult } from '../utils/piedraPapelTijeraUtils.js';

export default function usePiedraPapelTijera(options) {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [userMessage, setUserMessage] = useState(null);
  const [computerMessage, setComputerMessage] = useState(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (userChoice !== null) {
      setUserMessage(`${options[userChoice]?.emoji}`);
    }
  }, [userChoice]);

  useEffect(() => {
    if (computerChoice !== null) {
      setComputerMessage(`${options[computerChoice]?.emoji}`);
    }
  }, [computerChoice]);

  const handlePlay = (choice) => {
    setResult(null);

    setDisabled(true);
    setUserChoice(choice);
    const randomChoice = Math.floor(Math.random() * 3);

    setComputerChoice(randomChoice);

    setTimeout(() => {
      setResult(getResult(choice, randomChoice));
      setDisabled(false);
    }, 1000);

    clearTimeout();
  };

  const reset = () => {
    setUserChoice(null);
    setUserMessage(null);
    setComputerChoice(null);
    setComputerMessage(null);
    setDisabled(false);
    setResult(null);
  };

  return {
    userChoice,
    userMessage,
    computerChoice,
    computerMessage,
    disabled,
    result,
    handlePlay,
    reset,
  };
}
