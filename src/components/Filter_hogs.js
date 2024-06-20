import React, { useState } from "react";

function FilterHogs({ hogs }) {

    const [selectGreesed, setGreesedHogs] = useState(false)

    function handleFilter(e) {
        setGreesedHogs(e.target.checked)
    }
    const displayFilterHogs = selectGreesed ? hogs.filter(hog => hog.greased)
        : hogs
      
        console.log(displayFilterHogs)

    return (
        <div>
            <input type="checkbox"
                onChange={handleFilter}
                checked={selectGreesed}
            />
            {displayFilterHogs.map(greesedH => (
                <div key={greesedH.name}>
                <p>Specialty: {greesedH.specialty}</p>
                            <p>Weight: {greesedH.weight}</p>
                            <p>Greased: {greesedH.greased ? "Yes" : "No"}</p>
                            <p>Highest Medal Achieved: {greesedH["highest medal achieved"]}</p>
                </div>
            ))}
        </div> 
    )

}

export default FilterHogs