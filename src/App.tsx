/** @jsx jsx */

import { jsx } from '@emotion/core'
import css from '@emotion/css/macro'
import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import Cell from './components/Cell'
import GameCell from './components/GameCell'
import { Cords } from './game'
import Layout from './layouts/Layout'
import {
  setInitalMove,
  startGame,
  UserClick,
} from './redux/actions/game.actions'
import { AppState } from './redux/store'
import { AppActions } from './redux/types'
import { Game, GameState, InitialMove } from './redux/types/Game'

const arr = Array.from(Array(100).keys())

interface OwnProps {}

type Prop = OwnProps & LinkDispatchToProps & LinkMapStateToProps

const App: React.FC<Prop> = ({ startGame, setUserClicked }) => {
  const isInitial = useSelector(
    (state: AppState) => state.game.initialMove.isInitial,
  )

  const game = useSelector((state: AppState) => state.game.game.game)
  const maze = useSelector((state: AppState) => state.game.game.generatedMaze)
  const move = useSelector((state: AppState) => state.game.currentMove)

  useEffect(() => {
    console.log('G', game)
  }, [game, move])

  return (
    <Layout>
      <div>
        <div
          css={css`
            height: 100vh;
          `}
        >
          <div
            css={css`
              height: 100px;
            `}
          >
            123
            <button
              onClick={() => startGame({ level: 5, startCord: { x: 0, y: 0 } })}
            >
              START
            </button>
          </div>
          <div
            css={css`
              display: grid;
              grid-template: repeat(10, 1fr) / repeat(10, 1fr);
              height: calc(100vh - 100px);
            `}
          >
            {isInitial
              ? arr.map((i, idx) => {
                  return <Cell value={i} key={idx} matrice={game} />
                })
              : maze &&
                game.map(i =>
                  i.map((e, edx) => {
                    return <GameCell x={e.x} y={e.y} key={edx} matrice={game} />
                  }),
                )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

interface LinkMapStateToProps {
  game: GameState
}

interface LinkDispatchToProps {
  startGame: (game: Game) => void
  setInitalMove: (move: InitialMove) => void
  setUserClicked: (cords: Cords) => void
}

const mapStateToProps = (
  state: AppState,
  ownProps: OwnProps,
): LinkMapStateToProps => ({
  game: state.game,
})

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: OwnProps,
): LinkDispatchToProps => ({
  setUserClicked: bindActionCreators(UserClick, dispatch),
  startGame: game => dispatch(startGame(game)),
  setInitalMove: move => dispatch(setInitalMove(move)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
