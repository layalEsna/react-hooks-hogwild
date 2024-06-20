// import React, { useState } from "react";

// function SortHogs({ hogs }) {
//     const [hogsName, setAge] = useState('')

//     function handleSort(name) {
//      setAge (name)
//     }

//     const sortedHogs = [...hogs].sort((a, b) => {
//         if (hogsName === 'name') {
//            return a.name.localeCompare(b.name)
        
//         } else {
//             return null
//     }
// })
//     return (
//         <div>
//             <h1>Sort By Name</h1>
//             <button onClick={() => handleSort('name')}>sort by name</button>
            
//             {sortedHogs.map(hog => (
//                 <div key={hog.name}>
//                     <p>{hog.name }</p>
//                </div>
//            ))}
//         </div>
//     )
// }

// export default SortHogs


import React, { useState } from "react";

function SortHogs({ hogs }) {
    const [sortName, setSortName] = useState('')

    function handleSort(update) {
        setSortName(update)
    }
        const sortedName = [...hogs].sort((a, b) => {
            if (sortName === 'name') {
                return a.name.localeCompare(b.name)
            } else if (sortName === 'weight') {
                return a.weight - b.weight
            } else {
                return null
            }
        })
   // }
    return (
        <div>
        
            <h1>sort by name</h1>
            <button onClick={() => handleSort('name')}>name</button>
            <button onClick={() => handleSort('weight')}>weight</button>
            {sortedName.map(hog => (
                <div key={hog.name}>
                    <h3>{hog.name}</h3>
                    <h3>{hog.weight}</h3>
                    
                    
                </div>
            )
                
            )}
        
        </div>
    )
}
export default SortHogs