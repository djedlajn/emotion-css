export interface Cell extends Cords {
  visited: boolean
  neibhoursAvailable: Cords[]
  pickedEdge: Cords | {}
  userClicked?: boolean
  possibleMove?: boolean
}

export interface Cords {
  x: number
  y: number
}

export type Matrice = Cell[][]

const shuffle = (a: any) => {
  for (let i = a.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let x = a[i]
    a[i] = a[j]
    a[j] = x
  }
  return a
}

const matrix = (width: number, height: number): Cell[][] => {
  return Array(width)
    .fill(0)
    .map(() =>
      Array(height).fill({
        x: 0,
        y: 0,
        visited: false,
        neibhoursAvailable: [],
        pickedEdge: {},
      }),
    )
}

export const checkAvailable = ({ x, y }: Cords, matrice: Matrice): Matrice => {
  const cell: Cell = matrice[x][y]

  if (cell.x - 3 >= 0 && !matrice[cell.x - 3][cell.y].userClicked) {
    matrice[cell.x - 3][cell.y].possibleMove = true
  }

  // Check right
  if (cell.x + 3 < 10 && !matrice[cell.x + 3][cell.y].userClicked) {
    matrice[cell.x + 3][cell.y].possibleMove = true
  }

  if (cell.y - 3 >= 0 && !matrice[cell.x][cell.y - 3].userClicked) {
    matrice[cell.x][cell.y - 3].possibleMove = true
  }
  if (cell.y + 3 < 10 && !matrice[cell.x][cell.y + 3].userClicked) {
    matrice[cell.x][cell.y + 3].possibleMove = true
  }

  // Check Diagonals

  if (
    cell.x + 2 < 10 &&
    cell.y + 2 < 10 &&
    !matrice[cell.x + 2][cell.y + 2].userClicked
  ) {
    matrice[cell.x + 2][cell.y + 2].possibleMove = true
  }

  if (
    cell.x + 2 < 10 &&
    cell.y - 2 >= 0 &&
    !matrice[cell.x + 2][cell.y - 2].userClicked
  ) {
    matrice[cell.x + 2][cell.y - 2].possibleMove = true
  }

  if (
    cell.x - 2 >= 0 &&
    cell.y + 2 < 10 &&
    !matrice[cell.x - 2][cell.y + 2].userClicked
  ) {
    matrice[cell.x - 2][cell.y + 2].possibleMove = true
  }

  if (
    cell.x - 2 >= 0 &&
    cell.y - 2 >= 0 &&
    !matrice[cell.x - 2][cell.y - 2].userClicked
  ) {
    matrice[cell.x - 2][cell.y - 2].possibleMove = true
  }

  return matrice
}

const checkTraversability = (
  startCords: Cords,
  matrice: Matrice,
): Cell | undefined => {
  // Check left
  if (startCords.x === undefined) {
    return undefined
  }
  if (startCords.y === undefined) {
    return undefined
  }
  const { x, y } = startCords
  const cell: Cell = matrice[x][y]
  cell.neibhoursAvailable = []

  if (cell.x - 3 >= 0 && !matrice[cell.x - 3][cell.y].visited) {
    cell.neibhoursAvailable.push({ x: cell.x - 3, y: cell.y })
  }

  // Check right
  if (cell.x + 3 < 10 && !matrice[cell.x + 3][cell.y].visited) {
    cell.neibhoursAvailable.push({ x: cell.x + 3, y: cell.y })
  }

  if (cell.y - 3 >= 0 && !matrice[cell.x][cell.y - 3].visited) {
    cell.neibhoursAvailable.push({ x: cell.x, y: cell.y - 3 })
  }
  if (cell.y + 3 < 10 && !matrice[cell.x][cell.y + 3].visited) {
    cell.neibhoursAvailable.push({ x: cell.x, y: cell.y + 3 })
  }

  // Check Diagonals

  if (
    cell.x + 2 < 10 &&
    cell.y + 2 < 10 &&
    !matrice[cell.x + 2][cell.y + 2].visited
  ) {
    cell.neibhoursAvailable.push({ x: cell.x + 2, y: cell.y + 2 })
  }

  if (
    cell.x + 2 < 10 &&
    cell.y - 2 >= 0 &&
    !matrice[cell.x + 2][cell.y - 2].visited
  ) {
    cell.neibhoursAvailable.push({ x: cell.x + 2, y: cell.y - 2 })
  }

  if (
    cell.x - 2 >= 0 &&
    cell.y + 2 < 10 &&
    !matrice[cell.x - 2][cell.y + 2].visited
  ) {
    cell.neibhoursAvailable.push({ x: cell.x - 2, y: cell.y + 2 })
  }

  if (
    cell.x - 2 >= 0 &&
    cell.y - 2 >= 0 &&
    !matrice[cell.x - 2][cell.y - 2].visited
  ) {
    cell.neibhoursAvailable.push({ x: cell.x - 2, y: cell.y - 2 })
  }
  return cell
}

const generateMaze = (
  matrice: Cell[][],
  startCords: { x: number; y: number },
  level: number,
): Cell[] | undefined => {
  const traversable = checkTraversability(startCords, matrice)
  if (!traversable) return undefined
  traversable.visited = true
  if (level <= 0) return [traversable].slice(0, -1)
  for (let randomEdge of shuffle([...traversable.neibhoursAvailable])) {
    let path = generateMaze(matrice, randomEdge, level - 1)
    if (path) {
      traversable.pickedEdge = randomEdge
      return [traversable, ...path]
    }
  }
  traversable.visited = false
  return undefined
}

const startGame = (startCords: Cords, level: number) => {
  let matrice = matrix(10, 10).map(
    (i, idx): Cell[] => {
      return i.map((_, idy) => {
        return {
          x: idx,
          y: idy,
          visited: false,
          neibhoursAvailable: [],
          pickedEdge: {},
        }
      })
    },
  )
  const gen = generateMaze(matrice, startCords, level + 1)

  const mtr: Cell[][] = Array(10)
    .fill(0)
    .map(_ => Array(10).fill(0))

  let num = 0
  if (gen) {
    gen.map(i => {
      num++
      mtr[i.x][i.y] = i
    })
  }

  return { game: mtr, generatedMaze: gen }
}

export { checkTraversability }

export default startGame
