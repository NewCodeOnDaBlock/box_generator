import React, {useState} from 'react';
import './ColorPicker.css';

const ColorPicker = (props) => { 
    const [color, setColor] = useState(""); // CREATE HOOKS TO GET AND SET COLOR 
    const [boxwidth, setBoxwidth] = useState(0);
    const [boxlist, setBoxlist] = useState([]); // CREATE HOOK TO GET AND SET EMPTY BOX LIST ARRAY

    
    
    const colorInput = (e) => { // THIS CALLS THE "ONCHANGE" EVENT TO SET THE COLOR TO WHATEVER E.TARGET.VALUE IS.... 
        setColor(e.target.value);        
    }

    const widthInput = (e) => { // THIS CALLS THE "ONCHANGE" EVENT TO SET THE WIDTH OF WHATEVER E.TARGET.VALUE IS WHEN SUBMITTED
        setBoxwidth(e.target.value);
        
    }


    const createColor = (e) => { // THIS SUBMITS THE VALUE OF WHATEVER THE SETTER WAS NAMED INTO AN EMPTY ARRAY...
        e.preventDefault();
    
        setBoxlist([{color: color, boxwidth: boxwidth},...boxlist]) //THIS SETS THE OBJECTS WE WANT INSIDE OF THE EMPTY ARRAY + THE REST OF WHAT IS CONTAINED IN THE ARRAY USING THE SPREAD OPERATOR
        console.log(boxlist);

        setColor("");
        setBoxwidth("");
    }


return (
    <>  
    <div id="form-container">
        <form onSubmit={ createColor }>
            <div>
                <label>Color </label>
                <input type="text" onChange={ colorInput }  value={ color } />
            </div>    
            <div>     
                <label>Size </label>        
                <input type="number" onChange={ widthInput }  value={ boxwidth } />
            </div>
                <button id="add-btn">Add</button>
        </form>
        
    </div>
        <div id="box-container" >
                {
                    boxlist.map((color, i ) => {
                        return  <div key={ i } style={{ 
                            backgroundColor: color.color, 
                            width: color.boxwidth + "px", 
                            height: color.boxwidth + "px", 
                            borderRadius: 10, 
                            margin: 10 }}></div>
                    })              
                }
        </div>

                {/* <p>{JSON.stringify(boxwidth)}</p>
                <p>{boxwidth}</p>
                <p>{JSON.stringify(boxlist)}</p>
                <p>{JSON.stringify(color)}</p>
         */}

    </>

    )
}
export default ColorPicker;