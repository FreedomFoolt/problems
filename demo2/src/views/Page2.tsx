import React from 'react'
import Children from "./Children";

const Page2 = () => {

    console.log('Page2 component render')

    return (
        <div>
            <h2>Page2</h2>
            <Children/>
        </div>
    )
}

export default Page2
