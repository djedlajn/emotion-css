/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { Cords, Matrice } from '../game'
import {
  setInitalMove,
  startGame,
  UserClick,
} from '../redux/actions/game.actions'
import { AppState } from '../redux/store'
import { AppActions } from '../redux/types'
import { Game, GameState, InitialMove } from '../redux/types/Game'

interface Props {
  value: number
  matrice: Matrice
}

interface StyledProps {
  active: boolean
}

const StyledCell = styled.div<StyledProps>`
  background-color: ${props => (props.active ? '#00203FFF' : '#ADEFD1FF')};
`

type CellProps = Props & LinkDispatchToProps & LinkMapStateToProps

const Cell: React.FC<CellProps> = ({
  value,
  startGame,
  matrice,
  setUserClicked,
  game: {
    game: { game },
  },
}) => {
  const [bg, setBg] = useState(false)

  const level = useSelector((state: AppState) => state.game.level)

  const dispatch = useDispatch()
  const isInitial = useSelector(
    (state: AppState) => state.game.initialMove.isInitial,
  )

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
          startGame({ startCord: { x: +nums[0], y: +nums[1] }, level })
          setUserClicked({ x: +nums[0], y: +nums[1] })
        }
      }}
    >
      <span>{value}</span>
    </StyledCell>
  )
}

interface LinkDispatchToProps {
  startGame: (game: Game) => void
  setInitalMove: (move: InitialMove) => void
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
  startGame: game => dispatch(startGame(game)),
  setInitalMove: move => dispatch(setInitalMove(move)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cell)
