export const options = [
  { id: 0, name: 'Piedra', emoji: '✊', beats: [2] },
  { id: 1, name: 'Papel', emoji: '✋', beats: [0] },
  { id: 2, name: 'Tijera', emoji: '✌️', beats: [1] },
];

export const getResult = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 0;
  }

  if (options[userChoice].beats.includes(computerChoice)) {
    return 1;
  }

  return 2;
};
