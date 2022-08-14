import React, {memo, ReactNode, useMemo} from "react";
import {useAppSelector} from "../store/hooks";
import {user} from "../store/user/userSlice";
import {Navigate} from "react-router-dom";
import classNames from "classnames";
import {IDomMeta} from "../dts/router";
import {Spin} from "antd";

interface Prop extends IDomMeta {
    children: ReactNode
}

const RouterBeforeEach = ({children, title = 'Freedom的小站', loginAuth = true, auth = '', descript = ''}: Prop) => {
    const {token, userInfo} = useAppSelector(user)


    const isAuthLogin = useMemo(() => {
        return token !== ''
    }, [token])

    const isAuthenticated = useMemo(() => {

        if (auth === '') {
            return true
        }

        return userInfo.authorities.includes(auth)
    }, [auth, userInfo.authorities])


    const useTitle = (title: string): void => {
        React.useEffect(() => {
            const prevTitle = document.title;
            document.title = title;

            return () => {
                document.title = prevTitle;
            };
        }, []);
    }

    useTitle(title)

    const content = useMemo(() => {

        // 是否登录
        if (loginAuth && !isAuthLogin) {
            return <Navigate to="/login"/>;
        }

        if (userInfo.id === '' && isAuthLogin) {
            return <div className={classNames('w-100', 'h-100', 'flex-center')}><Spin tip="Loading..."/></div>
        }

        if (userInfo.role === 'super_admin') {
            return children
        }

        if (!isAuthenticated) {
            return <Navigate replace={true} to="/403"/>;
        }

        return children
    }, [children, loginAuth, isAuthLogin, isAuthenticated, userInfo.id, userInfo.role])

    return (
        <div className={classNames('h-100', 'w-100', 'router-before-each')}>
            {content}
        </div>
    )
};

export default memo(RouterBeforeEach)
