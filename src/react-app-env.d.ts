/// <reference types="react-scripts" />

import { ActionType, StateType } from 'typesafe-actions'

declare module 'AppTypes' {
  export type Store = StateType<typeof import('../redux/store')>
  export type RootAction = ActionType<
    typeof import('../redux/game/game.actions')
  >
  export type RootState = StateType<
    ReturnType<typeof import('../redux/rootReducer')>
  >
}

declare module 'typesafe-actions'
