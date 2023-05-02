import { useContext } from 'react'
import { Context } from './context';

const Controls = () => {
    const { activeStatus, setActiveStatus, timerId, setTimerId } = useContext(Context)
    console.log("activeStatus: " + activeStatus)
    console.log("timerId: " + timerId)
    if (activeStatus == 'active' && timerId == -1) {
        setTimerId(setInterval(function() { console.log('hey') }, 1000))
    } 

    return (
        <div className="controls">
            <input />
            { activeStatus == 'inactive' && <button onClick={() => setActiveStatus('active')}>Start</button> }
            { activeStatus == 'active' && <button onClick={() => {
                for (var i = 1; i < 99999; i++)
                    window.clearInterval(i);
                setActiveStatus('inactive')
                setTimerId(-1)
            }}>Stop</button> }
        </div>
    )
}

export default Controls