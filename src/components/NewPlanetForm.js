import React from "react"
import {v4 as uuid} from "uuid"

function NewPlanetForm({newPlanet, setNewPlanet, onNewPlanetSubmit}) {

    function handleFormChange(event) {
        const {name, value} = event.target;
        if (name === 'population' && value < 0) {
            setNewPlanet({...newPlanet, population: 0});
            return;
        }
        setNewPlanet({...newPlanet, [name]: value});
    }

    return(
        <form onSubmit={onNewPlanetSubmit} >
            <input type="text" name="name" placeholder="Name" value={newPlanet.name} onChange={handleFormChange} />
            <input type="text" name="climate" placeholder="Climate" value={newPlanet.climate} onChange={handleFormChange} />
            <input type="text" name="terrain" placeholder="Terrain" value={newPlanet.terrain} onChange={handleFormChange}/>
            <input type="number" name="population" placeholder="Population" value={newPlanet.population} onChange={handleFormChange} />
            <input type="submit" value="Add"/>
        </form>
    );
}

export default NewPlanetForm;