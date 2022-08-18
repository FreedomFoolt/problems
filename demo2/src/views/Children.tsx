import React, {memo, useState} from 'react'
import {useSearchParams} from "react-router-dom";

const Children = () => {

    console.log('Children组件渲染了')

    const [searchParams, setSearchParams] = useSearchParams()

    const handleClickButton = () => {
        searchParams.set('page', '1')
        setSearchParams(searchParams)
    }

    return (
        <div>
            <h2>Children</h2>
            <button onClick={handleClickButton}>change search params</button>
        </div>
    )
}

export default memo(Children)
