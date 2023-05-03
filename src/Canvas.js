import { useContext, useEffect } from 'react'
import { Context } from './context'
import {getCells } from './api'

const Canvas = () => {
    const { 
        canvasRef, 
        cellStates, 
        setCellStates, 
        startMoveGrid, 
        setStartMoveGrid, 
        setDistanceFromCenter, 
        activeStatus,
        numberOfMovesRemaining,
        numberOfVisibleMoves,
        setNumberOfVisibleMoves,
    } = useContext(Context)  
    
    const numberOfSquaresX = Math.floor(window.innerWidth/10)
    const numberOfSquaresY = Math.floor(window.innerHeight/10)
    let timer
    
    const updateCells = () => {

        if (activeStatus == 'active' && numberOfMovesRemaining >= numberOfVisibleMoves) {
            timer = !timer && setInterval(() => {
                getCells(setCellStates, numberOfSquaresX, numberOfSquaresY, numberOfVisibleMoves)
                setNumberOfVisibleMoves(visibleMoves => visibleMoves + 1)
            }, 5)
        }
    }

    useEffect(() => {
        updateCells()
        draw()
        return () => clearInterval(timer)
    }, [updateCells])

    const getPos = (e) => ({
        x: e.clientX - canvasRef.current.offsetLeft,
        y: e.clientY - canvasRef.current.offsetTop 
    });

    const reset = () => {
        var ctx = canvasRef.current.getContext('2d')
        
        setStartMoveGrid(null);
        if (startMoveGrid) {
        }
        ctx.setTransform(1, 0, 0, 1, 0, 0); // reset translation
        draw();
    }

    const draw = () => {     
        console.log("hey drawin")     
        var ctx = canvasRef.current.getContext('2d')
        canvasRef.current.width = window.innerWidth
        canvasRef.current.height = window.innerHeight
        let step = 10;
        let left = 0.5 - Math.ceil(canvasRef.current.width / step) * step;
        let top = 0.5 - Math.ceil(canvasRef.current.height / step) * step;
        let right = 2*canvasRef.current.width;
        let bottom = 2*canvasRef.current.height;
        ctx.clearRect(left, top, right - left, bottom - top);
        if (cellStates.length > 0) {
            for (var i=0; i<(Math.floor(window.innerWidth/10)); ++i) {
                for (var j=0; j<(Math.floor(window.innerHeight/10)); ++j) {
                    if (cellStates[i][j]){
                        ctx.fillRect(i*10, j*10, 10, 10)
                    }
                }
            }
        }

        //start draw grid
        ctx.beginPath();
        for (let x = left; x < right; x += step) {
            ctx.moveTo(x, top);
            ctx.lineTo(x, bottom);
        }
        for (let y = top; y < bottom; y += step) {
            ctx.moveTo(left, y);
            ctx.lineTo(right, y);
        }
        ctx.strokeStyle = "#888";
        ctx.stroke();
        //end draw grid
    }

    return ( 
        <canvas 
            ref={canvasRef} 
            onMouseDown={(e) => {
                reset();
                setStartMoveGrid(getPos(e))
            }}
            onMouseUp={reset}
            onMouseLeave={reset}
            onMouseMove={(e) => {
                // Only move the grid when we registered a mousedown event
                if (!startMoveGrid) return;
                let pos = getPos(e);
                // Move coordinate system in the same way as the cursor
                setDistanceFromCenter(
                    {
                        x: (pos.x - startMoveGrid.x), 
                        y: (pos.y - startMoveGrid.y)
                    })
                canvasRef.current.getContext('2d').translate(pos.x - startMoveGrid.x, pos.y - startMoveGrid.y);
                draw();
                setStartMoveGrid(pos);
            }}
        /> 
        )
}

export default Canvas
