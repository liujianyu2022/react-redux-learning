import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IAdmin, IAdminActionType } from "../store/reducer/admin";
import { IUser, IUserActionType } from "../store/reducer/user";
import { StoreType } from "../store/store";

interface IProps {

}

const HookExample: React.FC<IProps> = () => {
    // useSelector<>  第一个指的是store的类型，第二个是返回值的类型
    const { user } = useSelector<StoreType, {user: IUser}>((state: StoreType) => state.user)
    const { admin } = useSelector<StoreType, {admin: IAdmin}>((state: StoreType) => state.admin)

    const dispatch = useDispatch()

    const changeAdmin = () => {
        dispatch({
            type: IAdminActionType.CHANGE,
            payload: {
                admin: { name: "admin name" }
            }
        })
    }
    const changeUser = () => {
        dispatch({
            type: IUserActionType.CHANGE,
            payload: {
                user: { name: "user name" }
            }
        })
    }
    return (
        <div>
            <span>admin: {admin?.id} - {admin?.name}</span> &nbsp;
            <button onClick={changeAdmin}>change admin name</button>
            <hr />
            <span>user: {user?.id} - {user?.name}</span> &nbsp;
            <button onClick={changeUser}>change user name</button>
        </div>
    )
}


export default HookExample




