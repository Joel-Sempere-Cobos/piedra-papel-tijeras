import { useEffect, useState } from 'react';

const options = [
  { id: 0, name: 'Piedra', emoji: '✊', beats: [2] },
  { id: 1, name: 'Papel', emoji: '✋', beats: [0] },
  { id: 2, name: 'Tijera', emoji: '✌️', beats: [1] },
];

const getResult = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 0;
  }

  if (options[userChoice].beats.includes(computerChoice)) {
    return 1;
  }

  return 2;
};

export default function App() {
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

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800  ">
      <div className=" p-4 bg-gray-200  min-w-full">
        <h1 className="text-3xl mb-4 text-center font-bold">¡Piedra, Papel, Tijera!</h1>
        <div className="max-w-md mx-auto ">
          <div className="flex justify-center">
            {options.map((option) => (
              <button
                className={`rounded-full px-4 py-4 m-3 text-3xl font-bold text-white bg-blue-500  enabled:hover:opacity-100 content-center ${
                  option.id === userChoice && result === null? 'opacity-100' : 'opacity-50'
                } transition-all`}
                key={option.id}
                disabled={disabled}
                onClick={() => {
                  handlePlay(option.id);
                }}
                title={option.name}
              >
                {option.emoji}
              </button>
            ))}
          </div>
          {userChoice !== null && (
            <p className={`text-[30px]  sm:text-[100px] mt-4 text-center `}>
              <span className={`rounded-full px-4 py-4 m-2 ${result === 1 ? `bg-blue-600` : `bg-blue-500/30`}`}>{userMessage}</span>
              <span className={'text-[40px]'}> vs </span>
              <span className={`rounded-full px-4 py-4 m-2 ${result===2?"bg-red-600" :"bg-red-500/30"}  `}>{computerMessage}</span>{' '}
            </p>
          )}

          {result !== null && (
            <div className="mt-8 " onClick={reset}>
              {result === 0 && (
                <p className="text-xl mt-4 text-center font-bold">🤷‍♂️ ¡Es un empate! 🤷‍♂️</p>
              )}
              {result === 1 && (
                <p className="text-xl mt-4 text-center font-bold">✅ ¡Has ganado! ✅</p>
              )}
              {result === 2 && (
                <p className="text-xl mt-4 text-center font-bold">❌ ¡Has perdido! ❌</p>
              )}
              <div className="mt-10 flex justify-center">
                <button
                  className="rounded-lg bg-yellow-500/50 px-5 py-2 hover:bg-yellow-300 font-bold transition-all"
                  onClick={reset}
                >
                  Reiniciar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
