import './App.css';

function Buttons ({filteredFood}) {
    return (
        <div className="btns">
            
            <button className="choice" onClick = {() => filteredFood ("drink")}>DRINKS</button>
            <button className="choice" onClick = {() => filteredFood ("starter")}>STARTERS</button>
            <button className="choice" onClick = {() => filteredFood ("salad")}>SALADS</button>
            <button className="choice" onClick = {() => filteredFood ("pizza")}>PIZZAS</button>
            <button className="choice" onClick = {() => filteredFood ("burger")}>BURGERS & SANDWICHES</button>
        </div>
    )
}
export default Buttons;