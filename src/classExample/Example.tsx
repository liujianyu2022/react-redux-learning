import React from "react";
import { connect } from "react-redux"
import { Dispatch } from "redux";
import { IAdmin, IAdminActionType } from "../store/reducer/admin";
import { IUser, IUserActionType } from "../store/reducer/user";
import { StoreType } from "../store/store";

interface IProps {
    admin?: IAdmin                      // 由于在App组件调用的时候，没有显示传递admin属性，因此需要加上?
    user?: IUser                        // 由于在App组件调用的时候，没有显示传递admin属性，因此需要加上?
    changeAdminName?: () => void        // 由于在App组件调用的时候，没有显示传递admin属性，因此需要加上?
    changeUserName?: () => void         // 由于在App组件调用的时候，没有显示传递admin属性，因此需要加上?
}


class ClassExample extends React.Component<IProps>{
    changeAdmin = () => {
        this.props.changeAdminName && this.props.changeAdminName()
    }

    changeUser = () => {
        this.props.changeUserName && this.props.changeUserName()
    }

    render() {
        console.log("this.props--", this.props)

        return (
            <div>
                <span>admin: {this.props.admin?.id} - {this.props.admin?.name}</span> &nbsp;
                <button onClick={this.changeAdmin}>change admin name</button>
                <hr />
                <span>user: {this.props.user?.id} - {this.props.user?.name}</span> &nbsp;
                <button onClick={this.changeUser}>change user name</button> 
            </div>
        )
    }
}

const mapStateToProps = (state: StoreType) => {
    return { ...state.admin, ...state.user }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeAdminName: () => {
            dispatch({
                type: IAdminActionType.CHANGE,
                payload: {
                    admin:{
                        name: "admin name"
                    } 
                }
            })
        },

        changeUserName: () => {
            dispatch({
                type: IUserActionType.CHANGE,
                payload: {
                    user: {
                        name: "user name"
                    }  
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassExample)