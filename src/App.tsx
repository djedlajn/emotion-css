/** @jsx jsx */

import { jsx } from '@emotion/core'
import css from '@emotion/css/macro'
import React from 'react'
import Cell from './components/Cell'
import Layout from './layouts/Layout'
const arr = Array.from(Array(100).keys())
const App: React.FC = () => {
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
            {arr.map((i, idx) => {
              return <Cell value={i} key={idx} />
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
