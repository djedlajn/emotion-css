import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import { gameReducer } from '../reducers/game.reducer'

const middlewares = [logger]

export const rootReducer = combineReducers({
  game: gameReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
)
