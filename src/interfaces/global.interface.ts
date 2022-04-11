export enum EGameType {
  TICTACTOE = "tictactoes",
  FOURINAROW = "4inarow",
}

export interface IGamePlayed {
  winPlayer: String;
  gameType: EGameType;
  duration: Number | String;
}
