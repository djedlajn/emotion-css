/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../redux/store'

interface Props {
  value: number
}

interface StyledProps {
  active: boolean
}

const StyledCell = styled.div<StyledProps>`
  background-color: ${props => (props.active ? '#00203FFF' : '#ADEFD1FF')};
`

const Cell: React.FC<Props> = ({ value }) => {
  const [bg, setBg] = useState(false)

  const dispatch = useDispatch()
  const isInitial = useSelector(
    (state: AppState) => state.game.initialMove.isInitial,
  )

  console.log('init', isInitial)

  return (
    <StyledCell
      active={bg}
      onClick={() => {
        const nums = value.toString().split('')
        if (nums.length < 2) {
          nums.unshift('0')
        }
        setBg(!bg)
        if (isInitial) {
          dispatch({
            type: 'SET_INITIAL_MOVE',
            move: {
              isInitial: false,
              cords: {
                x: +nums[0],
                y: +nums[1],
              },
            },
          })
        }
      }}
    >
      <span>{value}</span>
    </StyledCell>
  )
}

export default Cell
