import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { gameReducer } from '../reducers/game.reducer'
import { AppActions } from '../types'

const middlewares = [logger, thunk as ThunkMiddleware<AppState, AppActions>]

export const rootReducer = combineReducers({
  game: gameReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
)
