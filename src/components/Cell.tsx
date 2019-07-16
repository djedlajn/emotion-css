/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import React, { useState } from 'react'

interface Props {
  value: number
}

interface StyledProps {
  active: boolean
}

const StyledCell = styled.div<StyledProps>`
  background-color: ${props => (props.active ? 'red' : 'blue')};
`

const Cell: React.FC<Props> = ({ value }) => {
  const [bg, setBg] = useState(false)

  return (
    <StyledCell active={bg} onClick={() => setBg(!bg)}>
      <span>{value}</span>
    </StyledCell>
  )
}

export default Cell
