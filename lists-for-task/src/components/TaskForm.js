import React, { Component } from "react";
import '../App.css';

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
        if (this.props.task) {
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status
            });
        }
    }

    //TH:khi bấm thêm không mở sửa được
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.task) {
            this.setState({
                id: nextProps.task.id,
                name: nextProps.task.name,
                status: nextProps.task.status
            });
        }
        //chuyển từ sửa sang thêm
        else if (!nextProps.task) {
            this.setState({
                id: '',
                name: '',
                status: false,
            });
        }
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'status') {
            value = target.value ? true : false;
        }
        this.setState({
            [name]: value,
        })
    }


    onSubmit = (event) => {
        event.preventDefault(); // không load lại trang
        this.props.onSubmit(this.state);
        //Hủy bỏ và đóng form
        this.onClear();
        this.onCloseForm();
    }

    //button hủy bỏ khi chưa lưu
    onClear = () => {
        this.setState({
            name: '',
            status: false
        })
    }

    render() {
        var { id } = this.state;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {id !== '' ? 'Cập nhật công việc' : 'Thêm Công Việc'}
                        <span className="fa fa-times-circle float-right"
                            onClick={this.onCloseForm}
                        >
                        </span>
                    </h3>

                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange} />
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control"
                            name="status"
                            required="required"
                            value={this.state.status}
                            onChange={this.onChange}>
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">
                                {id !== '' ? 'Lưu lại' : 'Thêm'}
                            </button>&nbsp;
                            <button type="submit" className="btn btn-danger"
                                onClick={this.onClear}>Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;