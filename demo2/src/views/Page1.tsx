import React from 'react'
import Page2 from "./Page2";

const Page1 = () => {

    console.log('Page1 component render')

    // const navigate = useNavigate()

    return (
        <div>
            <h2>Page1</h2>
            <Page2/>
        </div>
    )
}

export default Page1
