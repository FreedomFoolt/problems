import React, {memo, useState} from 'react'
import {Cascader, Form, Modal as AntModal} from "antd";

interface Prop {
    visible: boolean
    setVisible: (value: boolean) => void
}

const Modal = ({visible, setVisible}: Prop) => {


    const handleCancel = () => {
        setVisible(false)
    }

    const [value, setValue] = useState<(string | number)[]>([])

    interface Option {
        value: string | number;
        label: string;
        children?: Option[];
    }

    const options: Option[] = [
        {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
                {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                    children: [
                        {
                            value: 'xihu',
                            label: 'West Lake',
                        },
                    ],
                },
            ],
        },
        {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
                {
                    value: 'nanjing',
                    label: 'Nanjing',
                    children: [
                        {
                            value: 'zhonghuamen',
                            label: 'Zhong Hua Men',
                        },
                    ],
                },
            ],
        },
    ];

    return (
        <AntModal width='50vw' bodyStyle={{height: '30vh'}} title='批量修改类别' okText='提交' onCancel={handleCancel}
                  onOk={handleCancel} visible={visible}>
            <Form>
                <Form.Item
                    name="category"
                    label="修改后的类别"
                >
                    <Cascader value={value} onChange={(v, selectedOptions) => setValue(v)}
                              options={options} allowClear
                              expandTrigger='hover'/>
                </Form.Item>
            </Form>
        </AntModal>
    )
}

export default memo(Modal)
