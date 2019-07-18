export interface GameState {
  game: number[][]
}

export const START_GAME = "START_GAME"

interface StartGameAction {
  type: typeof START_GAME
  payload: number[][]
}

export type GameActionTypes = StartGameAction

const initialState: GameState = {
  game: []
}

const gameReducer = (state = initialState, action: GameActionTypes) => {
  switch (action.type) {
    case "START_GAME":
      return {
        ...state,
        game: action.payload
      }
    default:
      return state
  }
}

export default gameReducer
