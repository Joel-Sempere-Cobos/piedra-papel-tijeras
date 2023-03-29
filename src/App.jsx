import { useEffect, useState } from 'react';

const options = [
  { id: 0, name: 'Piedra', emoji: '✊', beats: [2, 3] },
  { id: 1, name: 'Papel', emoji: '✋', beats: [0] },
  { id: 2, name: 'Tijera', emoji: '✌️', beats: [1, 3] },
  { id: 3, name: 'Lagarto', emoji: '🦎', beats: [1] },
  { id: 4, name: 'Spock', emoji: '🖖', beats: [3, 0] },
];

const getResult = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return 0
  }

  if (options[userChoice].beats.includes(computerChoice)){
    return 1
  }

  return 2
}

export default function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [userMessage, setUserMessage] = useState(null)
  const [computerMessage, setComputerMessage] = useState(null)
  const [disabled, setDisabled] = useState(false);

  useEffect(()=>{
if (userChoice !== null){
  setUserMessage(`Has elegido ${options[userChoice]?.emoji} - ${options[userChoice]?.name}`)
}
  },[userChoice])

  useEffect(()=>{
    if (computerChoice !== null){
      setComputerMessage(`El ordenador ha elegido ${options[computerChoice]?.emoji} - ${options[computerChoice]?.name}`)
    }
      },[computerChoice])

  const handlePlay = (choice) => {
    setUserChoice(choice);
    setDisabled(true);
    const randomChoice = Math.floor(Math.random() * 5);
    setTimeout(() => {
      setComputerChoice(randomChoice);
    }, 1500);

    setTimeout(() => {
      
      setResult(getResult(choice, randomChoice));
    }, 3000);

    clearTimeout()
  };

  const reset = () => {
    setComputerChoice(null)
    setUserChoice(null)
    setDisabled(false)
    setComputerMessage(null)
    setUserMessage(null)
    setResult(null)
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800 ">
      <div className="rounded-lg p-4 bg-gray-400 ">
        <h1 className="text-3xl mb-4 text-center font-bold">¡A jugar!</h1>
        <div className="max-w-md mx-auto">
          {options.map((option) => (
            <button
              className="rounded-full px-4 py-4 m-2 text-xl font-bold text-white bg-yellow-500 opacity-50 hover:opacity-100"
              key={option.id}
              disabled={disabled}
              onClick={() => handlePlay(option.id)}
              title={option.name}
            >
              {option.emoji}
            </button>
          ))}
          {userChoice !== null && (
            <p className='text-xl mt-4'>{userMessage}</p>
          )}
          {userChoice !== null && (
            <p className='text-xl mt-4'>{computerMessage}</p>
          )}
          {result !== null && (
            <div className='mt-8'>
              {result === 0 && (<p className='text-xl mt-4'>¡Es un empate!</p>) }
              {result === 1 && (<p className='text-xl mt-4'>¡Has ganado!</p>) }
              {result === 2 && (<p className='text-xl mt-4'>¡Has perdido!</p>) }
              <button className='rounded-lg bg-yellow-500 ' onClick={reset}>Reiniciar</button>
            </div>
          )}

        </div>
        
      </div>
    </div>
  );
}
