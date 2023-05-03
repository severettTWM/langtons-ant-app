import { useContext, useEffect } from 'react'
import { Context } from './context';

const Controls = () => {
    const { 
        activeStatus, 
        setActiveStatus, 
        numberOfMoves,
        setNumberOfMoves,
        setNumberOfMovesRemaining,
    } = useContext(Context)

    return (
        <div className="controls">
            <input type="number" value={numberOfMoves} onChange={(e) => setNumberOfMoves(e.target.value)} />
            { activeStatus == 'inactive' && <button onClick={() => {
                setNumberOfMovesRemaining(numberOfMoves)
                setActiveStatus('active')
            }}>Start</button> }
            { activeStatus == 'active' && <button onClick={() => setActiveStatus('inactive')}>Stop</button> }
        </div>
    )
}

export default Controls
