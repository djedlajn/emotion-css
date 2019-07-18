/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import React, { useState } from "react"

interface Props {
  value: number
  initial: any
}

interface StyledProps {
  active: boolean
}

const StyledCell = styled.div<StyledProps>`
  background-color: ${props => (props.active ? "#00203FFF" : "#ADEFD1FF")};
`

const Cell: React.FC<Props> = ({ value, initial }) => {
  const [bg, setBg] = useState(false)

  return (
    <StyledCell
      active={bg}
      onClick={() => {
        const nums = value.toString().split("")
        if (nums.length < 2) {
          nums.unshift("0")
        }
        setBg(!bg)
        initial({ x: +nums[0], y: +nums[1] })
      }}
    >
      <span>{value}</span>
    </StyledCell>
  )
}

export default Cell
