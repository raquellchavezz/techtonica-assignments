import React from "react"; //even though we didn use react still need to import it 

// React must be in scope when using JSX.
//  It's doing some secret stuff behind the scenes. 
//  You'll always import React from 'react' in every component you create.

function Title(){
    return (
        <div> 
            <h1>{newTitle}</h1>
        </div>
    )
}

export default Title