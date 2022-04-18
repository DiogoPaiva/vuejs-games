export enum EGameType {
  TICTACTOE = "tictactoes",
  FOURINAROW = "4inarow",
}

export enum EGameStatus {
  START = "START",
  ONGOING = "ONGOING",
  WIN = "WIN",
  LOST = "LOST",
  DRAW = "DRAW",
}

export interface IGame {
  winPlayer: string;
  gameType: EGameType;
  markUsed: string;
  duration: number;
  gameStatus: EGameStatus;
}
export interface IPlayer {
  name: string;
  value: string;
  winner?: boolean;
  gameStatus?: EGameStatus;
}

export interface ICurrentGame {
  currentPlayer: string;
  nextPlayer: string;
  duration: number;
  gameStatus: EGameStatus;
}
