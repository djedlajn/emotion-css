/** @jsx jsx */

import { jsx } from '@emotion/core'
import css from '@emotion/css/macro'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import Cell from './components/Cell'
import { Cords } from './game'
import Layout from './layouts/Layout'
import { GameState } from './redux/game/game.types'
import { AppState } from './redux/rootReducer'

const arr = Array.from(Array(100).keys())

interface AppProps {}

type Props = AppProps & LinkStateToProps & LinkStateToProps

const App: React.FC<Props> = ({ gameState }) => {
  const [initialMove, setInitalMove] = useState<Cords | false>(false)
  const [game, setGame] = useState<number[][]>([])

  console.log(gameState)

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
          </div>
          <div
            css={css`
              display: grid;
              grid-template: repeat(10, 1fr) / repeat(10, 1fr);
              height: calc(100vh - 100px);
            `}
          >
            {/* {initialMove &&
              arr.map((i, idx) => {
                return <Cell value={i} key={idx} initial={setInitalMove} />
              })} */}

            {arr.map((i, idx) => {
              return <Cell value={i} key={idx} initial={setInitalMove} />
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

interface LinkStateToProps {
  gameState: GameState
}

interface LinkDispatchToProps {}

const mapStateToProps = (state: AppState, ownProps: AppProps) => ({
  gameState: state.game,
})

const mapDispatchToProps = (dispatch, props) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
