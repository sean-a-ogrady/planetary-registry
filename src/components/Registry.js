import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry() {
    const url = "http://localhost:8085/planets/"

    const [planetList, setPlanetList] = useState([]);
    const [newPlanet, setNewPlanet] = useState({ name: "", climate: "", terrain: "", population: "" })
    const [query, setQuery] = useState("");

    function onNewPlanetSubmit(event) {
        event.preventDefault();
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPlanet)
        })
            .then(response => response.json())
            .then(data => setPlanetList([...planetList, data]))
    }

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(setPlanetList)
    }, [])

    const filteredPlanetList = planetList.filter(planet => {
        const planetString = `${planet.name} ${planet.climate} ${planet.terrain} ${planet.population}`.toLowerCase().replace(",", "");
        return query.toLowerCase().split(" ").every(term => 
            planetString.split(" ").some(word => 
                word.startsWith(term)
            )
        )}
    )

    return (
        <div className="registry">
            <Search
            query={query}
            setQuery={setQuery}
            />
            <div className="content">
                <PlanetList planets={filteredPlanetList} />
                <NewPlanetForm
                    newPlanet={newPlanet}
                    setNewPlanet={setNewPlanet}
                    onNewPlanetSubmit={onNewPlanetSubmit}
                />
            </div>
        </div>
    )
}

export default Registry;