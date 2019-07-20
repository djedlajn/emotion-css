import { ActionType, StateType } from 'typesafe-actions'

declare module 'MyTypes' {
  export type Store = StateType<typeof import('../../src/redux/store').default>
  export type RootAction = ActionType<
    typeof import('../../src/redux/game/game.actions').default
  >
  export type RootState = StateType<
    ReturnType<typeof import('../../src/redux/rootReducer').default>
  >
}

declare module 'typesafe-actions' {
  interface Types {
    RootAction: ActionType<typeof import('./root-action').default>
  }
}
