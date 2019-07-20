import { GameActionTypes, GameState } from '../types/Game'

const defaultState: GameState = {
  game: {
    game: [],
    generatedMaze: undefined,
  },
  lives: 0,
  initialMove: {
    isInitial: true,
    cords: null,
  },
  level: 5,
  traversableFields: undefined,
  currentMove: null,
}

const gameReducer = (
  state = defaultState,
  action: GameActionTypes,
): GameState => {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        game: action.game,
      }
    case 'SET_INITIAL_MOVE':
      return {
        ...state,
        initialMove: {
          isInitial: false,
          cords: action.move.cords,
        },
      }
    case 'CHECK_TRAVERSABILITY':
      return {
        ...state,
        traversableFields: action.neibhours,
      }
    case 'MOVE':
      return {
        ...state,
        currentMove: action.cords,
      }
    default:
      return state
  }
}

export { gameReducer }
