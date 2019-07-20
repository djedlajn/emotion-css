/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { Cell, Cords } from '../game'
import { UserClick } from '../redux/actions/game.actions'
import { AppState } from '../redux/store'
import { AppActions } from '../redux/types'
import { GameState } from '../redux/types/Game'

interface Props {
  value?: Cords
  isInitial?: boolean
  x: number
  y: number
  matrice: Cell[][]
}

interface StyledProps {
  // active: boolean
  initial: boolean
  // shouldBeClicked: boolean
}

interface StyledSpanProps {}

const StyledCell = styled.div<StyledProps>`
  background-color: ${props => (props.initial ? 'red' : '#ADEFD1FF')};
`

const StyledSpan = styled.span<StyledSpanProps>``

type GameCellProps = Props & LinkDispatchToProps & LinkMapStateToProps

const GameCell: React.FC<GameCellProps> = ({
  value,
  x,
  y,
  matrice,
  setUserClicked,
}) => {
  const [bg, setBg] = useState(false)

  const initial = useSelector((state: AppState) => state.game.currentMove)

  const dispatch = useDispatch()
  // console.log(matrice)

  const checkInitial = (cords: Cords) => {
    if (initial) {
      if (cords.x === initial.x && cords.y === initial.y) {
        return true
      }
    }
    return false
  }
  return (
    <StyledCell
      initial={checkInitial({ x, y })}
      onClick={() => {
        console.log('MATR', matrice)
        if (x !== undefined && y !== undefined) {
          console.log({ x, y })
          setUserClicked({ x, y })
          // dispatch({ type: 'SET_USER_CLICKED', cords: { x, y } })
          // matrice[x][y].userClicked = true
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

interface LinkDispatchToProps {
  setUserClicked: (cords: Cords) => void
}

interface LinkMapStateToProps {
  game: GameState
}

const mapStateToProps = (
  state: AppState,
  ownProps: Props,
): LinkMapStateToProps => ({
  game: state.game,
})

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: Props,
): LinkDispatchToProps => ({
  setUserClicked: bindActionCreators(UserClick, dispatch),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameCell)
