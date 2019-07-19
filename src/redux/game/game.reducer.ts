import { GameActionTypes, GameState } from './game.types'

const initialState: GameState = {
  game: [],
  lives: 0,
  initialMove: false,
}

const gameReducer = (
  state = initialState,
  action: GameActionTypes,
): GameState => {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        game: action.payload.game,
        initialMove: action.payload.initialMove,
      }
    case 'SET_LIVES':
      return {
        ...state,
        lives: action.payload.lives,
      }
    default:
      return state
  }
}

export default gameReducer
