export interface IAdmin{
    id: number
    name: string
}

interface IState{
    admin: IAdmin
}

const initialAdmin: IState = {
    admin: {
        id: 666,
        name: "yyy"
    }
}

export enum IAdminActionType {
    INITIAL,
    CHANGE
}

const admin = (state: IState = initialAdmin, action: {type: IAdminActionType, payload: any})=>{
    switch (action.type){
        case IAdminActionType.INITIAL:
            return state
        case IAdminActionType.CHANGE: 
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default admin



