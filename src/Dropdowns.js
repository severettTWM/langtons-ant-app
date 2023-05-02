import { useContext } from 'react';
import { Context } from './context';
import "./shapes.css"
import "./customSelect.css";

const Dropdowns = () => {
    const { selectedShape, setSelectedShape, shapeColor, colorSequenceList, setSelectedColorSequence, shapes, shapeRef } = useContext(Context);
    const shapeOptions = shapes.map(shape => <option value={`${shape["name"]}`}>{shape["name"]}</option>)
    const colorSequenceOptions = colorSequenceList.map(sequence => <option value={`${sequence.id}`}>{sequence.sequence.join(",")}</option>)
    
    const handleDropdownChange = (shapeComplexity) => {
                
        if (shapeComplexity == 2) {
            shapeRef.current.style.borderBottom = "100px solid " + shapeColor
            shapeRef.current.style.removeProperty("background-color")
        } else if (shapeComplexity == 1) {
            shapeRef.current.style.backgroundColor = shapeColor
            shapeRef.current.style.removeProperty("border-bottom")
        }
    }

    return (
      <div>
        <div style={{width:'200px'}}>
            <select onChange={(e) => {
                setSelectedShape(e.target.value)
                var shapeComplexity = shapes.filter(x => x.name == e.target.value)[0].complexity
                
                handleDropdownChange(shapeComplexity)
            }}>
                {shapeOptions}
            </select>
        </div>
        <div style={{width:'200px'}}>
          <select onChange={(e) => {
            setSelectedColorSequence(e.target.value)
            var shapeComplexity = shapes.filter(x => x.name == selectedShape)[0].complexity
            handleDropdownChange(shapeComplexity)
          }}>
            {colorSequenceOptions}
          </select>
        </div>
      </div>
        )
}

export default Dropdowns;
