import React from "react";
import { IAdmin, IAdminActionType } from "../store/reducer/admin";
import { IUser, IUserActionType } from "../store/reducer/user";
import { StoreType } from "../store/store";
import { Dispatch } from "redux";
import { connect } from "react-redux";

interface IProps {
    admin?: IAdmin
    user?: IUser
    changeAdminName?: () => void
    changeUserName?: () => void
}

const FuncExample: React.FC<IProps> = (props) => {
    let {admin, user, changeAdminName, changeUserName} = props
    const changeAdmin = ()=>{
        changeAdminName && changeAdminName()
    }
    const changeUser = ()=>{
        changeUserName && changeUserName()
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

const mapStateToProps = (state: StoreType) => {
    return { ...state.admin, ...state.user }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeUserName: () => {
            dispatch({
                type: IUserActionType.CHANGE,
                payload: {
                    user: { name: "user name" }
                }
            })
        },
        changeAdminName: () => {
            dispatch({
                type: IAdminActionType.CHANGE,
                payload: {
                    admin: { name: "admin name" }
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FuncExample)
