import React, {memo, useState} from 'react'
import {Pagination as AntPagination, Row} from 'antd'
import classNames from "classnames";
import {useSearchParams} from "react-router-dom";

const Pagination = memo(() => {

    const [searchParams, setSearchParams] = useSearchParams()

    const [current, setCurrent] = useState(1)

    const onChange = (page: number, pageSize: number) => {
        setCurrent(page)
        searchParams.set('page', page.toString())
        setSearchParams(searchParams)
    }

    return (
        <Row className={classNames('py-4', 'flex-center')}>
            <AntPagination
                onChange={onChange}
                current={current}
                pageSize={20}
                total={1000}
                showQuickJumper
                showSizeChanger={false}
                showTotal={total => `共 ${total} 条数据`}
            />
        </Row>
    )
})

export default Pagination
