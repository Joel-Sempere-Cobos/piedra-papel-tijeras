import usePiedraPapelTijera from '../../customHooks/usePiedraPapelTijera.js';
import { options } from '../../utils/piedraPapelTijeraUtils.js';


export default function JuegoPiedraPapelTijera() {
  const {userChoice,
    userMessage,
    computerMessage,
    disabled,
    result,
    handlePlay,
    reset} = usePiedraPapelTijera(options)

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
