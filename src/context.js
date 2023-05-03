import React, { createContext, useEffect, useState, useRef } from 'react';
import { Directions } from './constants'

export const Context = createContext(null);

const defaultCellStates = []
const numberOSquaresX = Math.floor(window.innerWidth/10)
const numberOfSquaresY = Math.floor(window.innerHeight/10)
const centerX = Math.floor(numberOSquaresX/2)
const centerY = Math.floor(numberOfSquaresY/2)

for (var i=0; i<numberOSquaresX; ++i) {
    defaultCellStates.push([])
    for (var j=0; j<numberOfSquaresY; ++j){
        defaultCellStates[i].push(0)
    }
}

export const ContextProvider = ({ children }) => {
    const [activeStatus, setActiveStatus] = useState('inactive')
    const [numberOfCells, setNumberOfCells] = useState(9)
    const [cellStates, setCellStates] = useState(defaultCellStates)
    const [startMoveGrid, setStartMoveGrid] = useState(null)
    const [gridDimensions, setGridDimensions] = useState(null)
    const [distanceFromCenter, setDistanceFromCenter] = useState({x: 0, y: 0})
    const [antCoordinates, setAntCoordinates] = useState({x: centerX, y: centerY})
    const [timerId, setTimerId] = useState(-1)
    const [antDirection, setAntDirection] = useState(Directions.ANTRIGHT)
    const [numberOfMoves, setNumberOfMoves] = useState(0)
    const [numberOfMovesRemaining, setNumberOfMovesRemaining] = useState(0)
    const canvasRef = useRef(null)

    useEffect(() => {
        setGridDimensions({x: Math.floor(window.innerWidth/10), y: Math.floor(window.innerHeight/10)})
    }, [setGridDimensions])

    return (
        <Context.Provider
            value={{
                activeStatus,
                setActiveStatus,
                numberOfCells,
                setNumberOfCells,
                cellStates,
                setCellStates,
                startMoveGrid,
                setStartMoveGrid,
                gridDimensions,
                setGridDimensions,
                distanceFromCenter,
                setDistanceFromCenter,
                antCoordinates,
                setAntCoordinates,
                timerId,
                setTimerId,
                antDirection,
                setAntDirection,
                numberOfMoves,
                setNumberOfMoves,
                numberOfMovesRemaining,
                setNumberOfMovesRemaining,
                canvasRef,
            }}
            >{children}</Context.Provider>
    )
}
