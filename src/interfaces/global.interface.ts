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
  winPlayer: String;
  gameType: EGameType;
  markUsed: String;
  duration: Number | String;
  gameStatus: EGameStatus;
}
export interface IPlayer {
  name: String;
  value: String;
  winner?: boolean;
}

export interface ICurrentGame {
  currentPlayer: String;
  nextPlayer: String;
  duration: Number | String;
  gameStatus: EGameStatus;
}
