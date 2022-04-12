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

export interface IGamePlayed {
  winPlayer: String;
  gameType: EGameType;
  duration: Number | String;
  gameStatus: EGameStatus;
  currentPlayer: String;
}
