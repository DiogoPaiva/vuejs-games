import { IPlayer } from "@/interfaces/global.interface";

export const arrayCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
export function checkBoardWinner(gameBoard: any[], player: IPlayer): IPlayer {
  for (const indexes of arrayCombinations) {
    const [a, b, c] = indexes;
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      return {
        ...player,
        winner: true,
      };
    }
  }

  return { ...player, winner: false };
}

export function calculatePercentage(
  totalLength: number,
  currentLength: number
) {
  return (currentLength / totalLength) * 100;
}
