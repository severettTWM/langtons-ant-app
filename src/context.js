import React, { createContext, useEffect, useState, useRef } from 'react';
import { Directions } from './constants'
import { getCells } from './api'

export const Context = createContext(null);
const numberOfSquaresX = Math.floor(window.innerWidth/10)
const numberOfSquaresY = Math.floor(window.innerHeight/10)
const centerX = Math.floor(numberOfSquaresX/2)
const centerY = Math.floor(numberOfSquaresY/2)

export const ContextProvider = ({ children }) => {
    const [activeStatus, setActiveStatus] = useState('inactive')
    const [numberOfCells, setNumberOfCells] = useState(9)
    const [cellStates, setCellStates] = useState([])
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
        getCells(setCellStates, numberOfSquaresX, numberOfSquaresY, 0)
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
