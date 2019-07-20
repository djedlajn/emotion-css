/** @jsx jsx */

import { jsx } from '@emotion/core'
import css from '@emotion/css/macro'
import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import Cell from './components/Cell'
import GameCell from './components/GameCell'
import Layout from './layouts/Layout'
import { setInitalMove, startGame } from './redux/actions/game.actions'
import { AppState } from './redux/store'
import { AppActions } from './redux/types'
import { Game, GameState, InitialMove } from './redux/types/Game'

const arr = Array.from(Array(100).keys())

interface OwnProps {}

type Prop = OwnProps & LinkDispatchToProps & LinkMapStateToProps

const App: React.FC<Prop> = ({ startGame, game: {}, setInitalMove }) => {
  const cords = useSelector((state: AppState) => state.game.initialMove.cords)
  const isInitial = useSelector(
    (state: AppState) => state.game.initialMove.isInitial,
  )

  const game = useSelector((state: AppState) => state.game.game.game)
  const maze = useSelector((state: AppState) => state.game.game.generatedMaze)
  const level = useSelector((state: AppState) => state.game.level)

  useEffect(() => {
    if (cords) {
      startGame({ startCord: cords, level })
    }
  }, [cords, level, startGame])
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
                  return <Cell value={i} key={idx} />
                })
              : maze &&
                game.map(
                  i =>
                    i.map((e, edx) => {
                      return <GameCell x={e.x} y={e.y} key={edx} />
                    }),
                  // i.map((e, edx) => {
                  //   return (
                  //     <GameCell
                  //       value={e}
                  //       key={edx}
                  //       isInitial={e === 1 ? true : false}
                  //     />
                  //   )
                  // }),
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
}

const mapStateToProps = (
  state: AppState,
  ownProps: OwnProps,
): LinkMapStateToProps => ({
  game: state.game,
})

const mapDispatchToProps = (
  dispatch: Dispatch<AppActions>,
): LinkDispatchToProps => ({
  startGame: game => dispatch(startGame(game)),
  setInitalMove: move => dispatch(setInitalMove(move)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
