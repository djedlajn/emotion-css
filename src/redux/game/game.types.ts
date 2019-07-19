export const START_GAME = 'START_GAME'
export const SET_LIVES = 'SET_LIVES'

interface StartGameAction {
  type: typeof START_GAME
  payload: {
    game: number[][]
    initialMove: true
  }
}

interface SetLivesAction {
  type: typeof SET_LIVES
  payload: {
    lives: number
  }
}

export interface GameState {
  game: number[][]
  lives: number
  initialMove: boolean
}

export type GameActionTypes = StartGameAction | SetLivesAction
