export interface IUser{
    id: number
    name: string
}

interface IState{
    user: IUser
}

const initialUserState: IState ={
    user: {
        id: 0,
        name: "xxx"
    }
}

export enum IUserActionType{
    INITIAL,
    CHANGE
}



// 需要返回state
const user = (state: IState = initialUserState, action: {type: IUserActionType, payload: IState}) => {
    switch (action.type){
        case IUserActionType.INITIAL:
            return state
        case IUserActionType.CHANGE: 
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default user