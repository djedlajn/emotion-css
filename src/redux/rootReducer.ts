import { combineReducers } from "redux"
import gameReducer from "./game/game.reducer"

const rootReducer = combineReducers({
  game: gameReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
