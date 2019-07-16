import { Global } from '@emotion/core'
import css from '@emotion/css/macro'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }

        /* * + * {
          margin-top: 1rem;
        } */

        html,
        body {
          margin: 0;
          color: #555;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          font-size: 18px;
          line-height: 1.4;
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
          color: #222;
          line-height: 1.1;

          + * {
            margin-top: 0.5rem;
          }
        }

        strong {
          color: #222;
        }

        li {
          margin-top: 0.25rem;
        }
      `}
    />
    <header />
    <main>{children}</main>
  </>
)

export default Layout
