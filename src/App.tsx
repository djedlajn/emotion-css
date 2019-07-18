/** @jsx jsx */

import { jsx } from "@emotion/core"
import css from "@emotion/css/macro"
import React, { useState } from "react"
import Cell from "./components/Cell"
import Layout from "./layouts/Layout"
import startGame, { Cords } from "./game"

const arr = Array.from(Array(100).keys())
const App: React.FC = () => {
  const [initialMove, setInitalMove] = useState<Cords | false>(false)
  const [game, setGame] = useState<number[][]>([])

  // setGame(startGame(initialMove || { x: 0, y: 0 }, 10))
  console.log(initialMove)
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

export default App
