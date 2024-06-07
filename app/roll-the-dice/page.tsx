'use client';

import { useState } from 'react';
import {
  Dice1Icon,
  Dice2Icon,
  Dice3Icon,
  Dice4Icon,
  Dice5Icon,
  Dice6Icon,
} from 'lucide-react';

export default function RollTheDice() {
  const [rolledNumbers, setRolledNumbers] = useState([1, 1]);
  const [isRolling1, setIsRolling1] = useState(false);
  const [isRolling2, setIsRolling2] = useState(false);
  const [rollTwoDice, setRollTwoDice] = useState(false);
  const [sum, setSum] = useState(2);

  function rollTheDice() {
    setIsRolling1(true);
    setTimeout(() => {
      const randomNumber1 = Math.floor(Math.random() * 6) + 1;
      setRolledNumbers((prev) => {
        const newNumbers = [randomNumber1, prev[1]];
        setSum(newNumbers[0] + newNumbers[1]);
        return newNumbers;
      });
      setIsRolling1(false);
    }, 1000);

    if (rollTwoDice) {
      setIsRolling2(true);
      setTimeout(() => {
        const randomNumber2 = Math.floor(Math.random() * 6) + 1;
        setRolledNumbers((prev) => {
          const newNumbers = [prev[0], randomNumber2];
          setSum(newNumbers[0] + newNumbers[1]);
          return newNumbers;
        });
        setIsRolling2(false);
      }, 1000);
    }
  }

  // Define the type for diceIcons
  const diceIcons: { [key: number]: JSX.Element } = {
    1: <Dice1Icon className="w-32 h-32" />,
    2: <Dice2Icon className="w-32 h-32" />,
    3: <Dice3Icon className="w-32 h-32" />,
    4: <Dice4Icon className="w-32 h-32" />,
    5: <Dice5Icon className="w-32 h-32" />,
    6: <Dice6Icon className="w-32 h-32" />,
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-2-color">
      <div className="flex flex-col justify-center items-center gap-5 w-[350px] h-[350px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-lg sm:w-[400px] md:w-[500px] sm:h-[400px]">
        <div className="flex gap-5 justify-center items-center text-blue-500">
          <div className={isRolling1 ? 'animate-roll' : ''}>
            {diceIcons[rolledNumbers[0]]}
          </div>
          {rollTwoDice && (
            <div className={isRolling2 ? 'animate-roll' : ''}>
              {diceIcons[rolledNumbers[1]]}
            </div>
          )}
        </div>

        <span className="font-semibold">
          {rollTwoDice
            ? `Your numbers is ${sum}`
            : `Your number is ${rolledNumbers[0]}`}
        </span>

        <button
          className="bg-blue-500 text-white px-5 py-3 rounded-md hover:bg-blue-700"
          onClick={() => rollTheDice()}
        >
          ROLL THE DICE``
        </button>

        <button
          className="bg-gray-500 text-white px-5 py-3 rounded-md hover:bg-gray-700 mt-3"
          onClick={() => setRollTwoDice(!rollTwoDice)}
        >
          {rollTwoDice ? 'ROLL ONE DIE' : 'ROLL TWO DICE'}
        </button>
      </div>
    </div>
  );
}
