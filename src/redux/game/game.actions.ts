import startGame, { Cords } from '../../game'
import { GameActionTypes } from './game.types'

export const createGame = (
  startCords: Cords,
  level: number,
): GameActionTypes => {
  const game = startGame(startCords, level)
  return {
    type: 'START_GAME',
    payload: {
      game,
      initialMove: true,
    },
  }
}
