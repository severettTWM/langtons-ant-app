import { useContext } from 'react'
import { Context } from './context';
import "./grid.css"

const AntGrid = () => {
    const { activeStatus, cellStates, numberOfCells } = useContext(Context)

    console.log(numberOfCells)
    console.log(cellStates)
    const cells = cellStates.values

    return (
        <canvas id="grid" />
        )
}

export default AntGrid;
