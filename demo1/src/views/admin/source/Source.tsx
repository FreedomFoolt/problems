import React, {memo,  useState} from 'react'
import {Button, Row} from "antd";
import Pagination from "./pagination/pagination";
import Modal from "./modal/Modal";

const Source = memo(() => {

    const [showModal, setShowModal] = useState(false)

    const handleOpenModal = () => {
        setShowModal(true)
    }

    return (
        <>
            <Row>
                <Button type='primary' onClick={handleOpenModal}>Open Modal</Button>
            </Row>
            <Pagination/>
            <Modal visible={showModal}
                   setVisible={setShowModal}/>
        </>
    )
})

export default Source
