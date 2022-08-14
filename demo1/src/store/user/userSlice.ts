import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../index";

export interface IUserInfo {
    id: string,
    authorities: string[],
    role: string
}

export interface UserState {
    userInfo: IUserInfo
    token: string,
}

const initialState: UserState = {
    userInfo: {
        id: '1',
        authorities: [],
        role: 'super_admin'
    },
    token: localStorage.getItem('token') ?? 'token',
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        },
        changeUserInfoAction: (state, action: PayloadAction<IUserInfo>) => {
            state.userInfo = action.payload
        },
    }
})

export const user = (state: RootState) => state.user;

export const {changeUserInfoAction} = userSlice.actions

export default userSlice.reducer
