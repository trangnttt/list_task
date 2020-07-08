import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from './../actions/index'
import { act } from "react-dom/test-utils";

class TaskItem extends Component {
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }
    onDelete = () => {
        this.props.onDelete(this.props.task.id);
        this.props.onCloseForm();
    }
    onEditTask = () => {
        this.props.onOpenForm();
        this.props.onEditTask(this.props.task);
    }
    render() {
        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td>{this.props.task.name}</td>
                <td className="text-center">
                    <span className={this.props.task.status ? 'label label-danger' : 'label label-success'}
                        onClick={this.onUpdateStatus}
                    >
                        {this.props.task.status ? 'Kích Hoạt' : 'Ẩn'}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={this.onEditTask}>
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={this.onDelete}>
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        );
    }
}


const mapStateToProps = state => {
    return {};
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(actions.updateStatus(id));
        },
        onDelete: (id => {
            dispatch(actions.deleteTask(id));
        }),
        onCloseForm: () => {
            dispatch(actions.closeForm())
        },
        onOpenForm: () => {
            dispatch(actions.openForm())
        },
        onEditTask: (task) => {
            dispatch(actions.editTask(task));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);