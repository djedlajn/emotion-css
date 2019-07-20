import { Cell, Cords } from '../../game'

export interface Game {
  startCord: Cords
  level: number
}

export interface InitialMove {
  isInitial: boolean
  cords: Cords | null
}

export interface GameState {
  game: {
    game: Cell[][]
    generatedMaze: Cell[] | undefined
  }
  lives: number
  initialMove: InitialMove
  level: number
  traversableFields: Cell | undefined
  currentMove: Cords | null
}

export const START_GAME = 'START_GAME'
export const SET_LIVES = 'SET_LIVES'
export const SET_INITIAL_MOVE = 'SET_INITIAL_MOVE'
export const CHECK_TRAVERSABILITY = 'CHECK_TRAVERSABILITY'
export const MOVE = 'MOVE'

export interface MoveAction {
  type: typeof MOVE
  cords: Cords | null
}

export interface CheckTraversabilityAction {
  type: typeof CHECK_TRAVERSABILITY
  neibhours: Cell | undefined
}

export interface StartGameAction {
  type: typeof START_GAME
  game: {
    game: Cell[][]
    generatedMaze: Cell[] | undefined
  }
}

export interface SetLivesAction {
  type: typeof SET_LIVES
  lives: number
}

export interface SetInitialMoveAction {
  type: typeof SET_INITIAL_MOVE
  move: InitialMove
}

export type GameActionTypes =
  | StartGameAction
  | SetLivesAction
  | SetInitialMoveAction
  | CheckTraversabilityAction
  | MoveAction
