import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../actions/index'


class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            id: '',
            name: '',
            status: false,
        });
    }

    // gọi form cập nhật công việc
    componentWillMount() {
        // if (this.props.task) {
        //     this.setState({
        //         id: this.props.task.id,
        //         name: this.props.task.name,
        //         status: this.props.task.status
        //     });
        // }
        if (this.props.itemEditing && this.props.itemEditing.id !== null) {
            this.setState({
                id: this.props.itemEditing.id,
                name: this.props.itemEditing.name,
                status: this.props.itemEditing.status
            });
        }
        else {
            this.onClear();
        }
    }

    //TH:khi bấm thêm không mở sửa được
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (nextProps && nextProps.itemEditing) {
            this.setState({
                id: nextProps.itemEditing.id,
                name: nextProps.itemEditing.name,
                status: nextProps.itemEditing.status
            });
        }
        else{
            this.onClear();
        }
    }

    onExitForm = () => {
        this.props.onExitForm();
    }

    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value,
        })
    }


    onHandleSubmit = (event) => {
        event.preventDefault(); // không load lại trang
        this.props.onSaveTask(this.state);
        //Hủy bỏ và đóng form
        this.onClear();
        this.onExitForm();
    }

    //button hủy bỏ khi chưa lưu
    onClear = () => {;
        this.setState({
            // id: '',
            name: '',
            status: false
        })
    }


    render() {
        if (!this.props.isDisplayForm) return null;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {!this.state.id ? 'Thêm Công Việc' : 'Cập nhật công việc'}
                        <span className="fa fa-times-circle float-right"
                            onClick={this.onExitForm}
                        >
                        </span>
                    </h3>

                </div>
                <div className="panel-body">
                    <form onSubmit={this.onHandleSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onHandleChange} />
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control"
                            name="status"
                            required="required"
                            value={this.state.status}
                            onChange={this.onHandleChange}>
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Lưu lại</button>&nbsp;
                            <button type="button" className="btn btn-danger"
                                onClick={this.onClear}>Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


const mapStatetoProps = state => {
    return {
        isDisplayForm: state.isDisplayForm,
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSaveTask: (task) => {
            dispatch(actions.saveTask(task))
        },
        onExitForm: () => {
            dispatch(actions.closeForm())
        },
        // onToggleForm: () => {
        //     dispatch(actions.toggleForm())
        // }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(TaskForm);