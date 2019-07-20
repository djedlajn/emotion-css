/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Cords } from '../game'
import { AppState } from '../redux/store'

interface Props {
  value?: Cords
  isInitial?: boolean
  x: number
  y: number
}

interface StyledProps {
  // active: boolean
  // initial: boolean
  // shouldBeClicked: boolean
}

interface StyledSpanProps {}

const StyledCell = styled.div<StyledProps>`
  background-color: whitesmoke;
`

const StyledSpan = styled.span<StyledSpanProps>``

const GameCell: React.FC<Props> = ({ value, x, y }) => {
  const [bg, setBg] = useState(false)

  const dispatch = useDispatch()
  const move = useSelector((state: AppState) => state.game.currentMove)
  const matrice = useSelector(
    (state: AppState) => state.game.game.generatedMaze,
  )

  return (
    <StyledCell
      onClick={() => {
        if (x !== undefined && y !== undefined) {
          console.log({ x, y })
          dispatch({ type: 'MOVE', cords: { x, y } })
          dispatch({ type: 'CHECK_TRAVERSABILITY', cords: move, matrice })
        }
      }}
    >
      <StyledSpan>
        [{x}
        {y}]
      </StyledSpan>
    </StyledCell>
  )
}

export default GameCell
