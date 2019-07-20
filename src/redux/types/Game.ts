import { Cell, Cords, Matrice } from '../../game'

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
    game: Matrice
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
export const FIND_AVAILABLE_FROM_CURRENT_MOVE =
  'FIND_AVAILABLE_FROM_CURRENT_MOVE'

export const MOVE_AND_SET_PLAYED = 'MOVE_AND_SET_PLAYED'

export const SET_USER_CLICKED = 'SET_USER_CLICKED'

export interface MoveAndSetPlayedAction {
  type: typeof MOVE_AND_SET_PLAYED
  payload: {
    cords: Cords
    matrice: Matrice
  }
}
export interface SetUserClickedAction {
  type: typeof SET_USER_CLICKED
  userClicked: boolean
  game: Matrice
}
export interface AvailableFromCurrentMoveAction {
  type: typeof FIND_AVAILABLE_FROM_CURRENT_MOVE
  matrice: Matrice
}
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
    game: Matrice
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
  | AvailableFromCurrentMoveAction
  | SetUserClickedAction
  | MoveAndSetPlayedAction
