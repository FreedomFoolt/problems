import {MenuInfo} from "rc-menu/lib/interface";
import {SettingOutlined} from "@ant-design/icons";
import React, {ReactNode} from "react";
import {adminContentSourceRouter, generateComponentByRouter} from "../../router";

export interface IMenuAndTabs {
    [index: string]: IMenuAndTabItem
}

interface IOriginData {
    key: string
    label: string
    link?: string
    icon?: ReactNode
    pid?: string
    element?: ReactNode
}

interface IMenuAndTabItem {
    key: string
    label: string
    onClick?: (info: MenuInfo) => void
    link?: string
    icon?: ReactNode
    layout?: ReactNode
    pid?: string
    element?: ReactNode
}

export interface IMenuItem extends IMenuAndTabItem {
    children?: IMenuItem[]
}

export type IAdminTabItem = IMenuAndTabItem

export const generateMenuAndTabs = (onClick: (key: string, link: string) => void) => {

    const dataSource: IOriginData[] = [
        {
            key: '201',
            label: 'source',
            link: '/source',
            element: generateComponentByRouter(adminContentSourceRouter).element
        }
    ]

    const generateMenuAndTabs = (dataSource: IOriginData[]) => {
        const menuAndTabs: IMenuAndTabs = {}
        dataSource.forEach(data => {
            menuAndTabs[data.key] = {
                key: data.key,
                label: data.label,
                onClick: data?.link ? (info: MenuInfo) => onClick(data.key, data.link ?? '') : undefined,
                link: data?.link,
                layout: <span>{data.icon ?? <SettingOutlined/>}{data.label}</span>,
                pid: data?.pid,
                element: data?.element
            }
        })
        return menuAndTabs
    }

    const menuAndTabs: IMenuAndTabs = generateMenuAndTabs(dataSource)

    const generateMenus = (menuAndTabs: IMenuAndTabs) => {
        const menus: IMenuItem[] = []
        // menuAndTabs
        for (const i in menuAndTabs) {
            if (menuAndTabs[i].pid) {
                const index = menus.findIndex(menu => menu.key === menuAndTabs[i].pid)
                if (!menus[index].children) {
                    menus[index].children = []
                }
                menus[index].children!.push(menuAndTabs[i])
            } else {
                menus.push(menuAndTabs[i])
            }
        }
        return menus
    }

    const menus = generateMenus(menuAndTabs)

    return {menus, menuAndTabs}
}
