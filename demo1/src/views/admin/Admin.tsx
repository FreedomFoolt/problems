import React, {memo,  useState} from 'react'
import {Col, Row, Tabs} from "antd";
import classNames from "classnames";
import {generateMenuAndTabs} from "../../store/admin/createObject";
import {useNavigate} from "react-router-dom";

const Admin = () => {


    const {TabPane} = Tabs

    // This line of code might be the problem
    const navigate = useNavigate()

    const {menuAndTabs} = generateMenuAndTabs(() => {
    })

    const [activeTabs, setActiveTabs ] = useState(['201'])

    const [activeKey, setActiveKey] = useState('201')

    return (
        <Row className={classNames('w-100', 'h-100')}>
            <Col span={20}>
                <div className='h-100'>
                    <Tabs activeKey={activeKey} tabBarStyle={{height: '48px'}} tabPosition='top'
                          style={{height: '100%'}}>
                        {
                            activeTabs.map(tabKey => {

                                const tab = menuAndTabs[tabKey]

                                return (
                                    tab &&

                                    <TabPane tab={tab.layout} key={tabKey}>
                                        {tab.element}
                                    </TabPane>

                                )
                            })
                        }
                    </Tabs>
                </div>
            </Col>
        </Row>
    )
}

export default memo(Admin)
