// import React, { useState } from "react";
// function DelOne({ hogs }) {

//     const [selectedHog, setSelectedHog] = useState('')

//     function handleDetails(hog) {
//         if (hog === selectedHog) {
//             setSelectedHog('')
//         }
//         setSelectedHog(hog)
//     }
//     return (
//         <div>
//             {
//                 hogs.map(hog => (
//                     <div
//                         onClick={() => handleDetails(hog)}
//                         key={hog.name}>
//                         <h2 >{hog.name}</h2>
//                         <img src={hog.image}
//                             alt={hog.name}


//                         />
//                         {selectedHog === hog && (
//                             <div>
//                                  <p>Specialty: {hog.specialty}</p>
//                             <p>Weight: {hog.weight}</p>
//                             <p>Greased: {hog.greased ? "Yes" : "No"}</p>
//                             <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
//                             </div>
//                         )}
//                     </div>
//                 ))
//             }
//         </div>
//     )

// }

// export default DelOne


import React, { useState } from "react";

function DelOne({ hogs }) {

    const [selectedHog, setselactedHOg] = useState(null)
    function handleClick(hog) {
        if (selectedHog === hog) {
            setselactedHOg(null)
        }
        setselactedHOg(hog)
    }

    return (
        <div>
            {hogs.map(hog => (
                <div
                    key={hog.name}
                    onClick={() => handleClick(hog)}

                >
                    <h2 >{hog.name}</h2>
                    <img src={hog.image} alt={hog.name} />
                    <div>

                    </div>
                    {selectedHog === hog && (
                        <div>
                        <p>Specialty: {hog.specialty }</p>  
                        <p>Weight: {hog.weight } pound</p>  
                        <p>Greased: {hog.greased ? 'yes' : 'no'}</p>  
                            <p>Highest medal achieved: {hog['highest medal achieved'] }</p>  
                            </div>
)}
                </div>
            ))}
        </div>
    )

}
export default DelOne