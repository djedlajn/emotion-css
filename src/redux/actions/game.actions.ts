import { Dispatch } from 'redux';
import createGame, { checkAvailable, checkTraversability, Cords, Matrice } from '../../game';
import { AppState } from '../store';
import { AppActions } from '../types';
import { Game, InitialMove } from '../types/Game';

export const startGame = (game: Game): AppActions => {
  const g = createGame(game.startCord, game.level)
  return {
    type: 'START_GAME',
    game: g,
  }
}

export const setInitalMove = (move: InitialMove): AppActions => ({
  type: 'SET_INITIAL_MOVE',
  move,
})

export const checkIfTravestable = (
  cords: Cords,
  matrice: Matrice,
): AppActions => {
  debugger
  const check = checkTraversability(cords, matrice)

  return {
    type: 'CHECK_TRAVERSABILITY',
    neibhours: check,
  }
}

export const UserClick = (cords: Cords) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    
    const matrice = getState().game.game.game
    matrice[cords.x][cords.y].userClicked = true
    dispatch(Move(cords))
    
    return dispatch({
      type: 'SET_USER_CLICKED',
      userClicked: true,
      game: matrice,
    })
  }
}

export const Move = (cords: Cords): AppActions => {
  return {
    type: 'MOVE',
    cords: cords,
  }
}

export const FindAvailableMove = (
  cords: Cords,
  matrice: Matrice,
): AppActions => {
  const c = checkAvailable(cords, matrice)
  return {
    type: 'FIND_AVAILABLE_FROM_CURRENT_MOVE',
    matrice: c,
  }
}
