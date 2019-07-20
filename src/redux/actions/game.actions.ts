import createGame, { checkTraversability, Cords, Matrice } from '../../game'
import { AppActions } from '../types'
import { Game, InitialMove } from '../types/Game'

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

export const Move = (cords: Cords): AppActions => ({
  type: 'MOVE',
  cords: cords,
})
