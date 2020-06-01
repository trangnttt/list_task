import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      tasks: [],
      isDisplayForm: false, // Đóng form
      taskEditing: null, //sửa tasks
      filter: {
        name: '',
        status: -1
      },
      keyword: '',
      sortBy: 'name',
      sortValue: 1
    });
  }

  // khi refresh component sẽ được gọi lại
  componentWillMount() {
    if (localStorage && localStorage.getItem('tasks')) { // kiểm tra get đc getItem không
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      })
    }
  }


  // //tạo dữ liệu mẫu (sau khi thêm công việc lưu dc dữ liệu thì tắt đi)
  // onGennerateData = () => {
  //   var randomstring = require("randomstring"); // lấy id ngẫu nhiên tự động

  //   var tasks = [
  //     {
  //       id: randomstring.generate(7),
  //       name: 'Hoc',
  //       status: true
  //     },
  //     {
  //       id: randomstring.generate(7),
  //       name: 'Choi',
  //       status: false
  //     },
  //     {
  //       id: randomstring.generate(7),
  //       name: 'Ngu',
  //       status: true
  //     }
  //   ];
  //   this.setState({
  //     tasks: tasks
  //   });
  //   localStorage.getItem('tasks', JSON.stringify(tasks));
  // };

  // mở form
  onToggleForm = () => {
    //thêm task
    if (this.state.isDisplayForm && this.state.taskEditing !== null) {
      this.setState({
        isDisplayForm: true,
        taskEditing: null
      });
    }
    else {
      this.setState({
        isDisplayForm: !this.state.isDisplayForm, // đóng mở thêm công việc
        taskEditing: null
      });
    }
  }

  //  đóng form
  onCloseForm = () => {
    this.setState({
      isDisplayForm: false,
    });
  }

  //thêm công việc lưu lại
  onSubmit = (data) => {
    var randomstring = require("randomstring");
    var { tasks } = this.state;
    if (data.id === '') {
      data.id = randomstring.generate(7);
      tasks.push(data); //push in data
    }
    else {
      //Edit
      var index = this.findIndex(data.id);
      tasks[index] = data;
    }

    this.setState({
      tasks: tasks,
      taskEditing: null
    });
    localStorage.setItem('tasks', JSON.stringify(tasks)); // save in localStorage
    console.log(data);
  }

  //cập nhật status
  onUpdateStatus = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }
  findIndex = (id) => {
    var { tasks } = this.state; //lấy danh sách các tasks
    var result = -1;
    tasks.forEach((task, index) => { //duyệt qua forEach nhận task và biến index 
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  }

  // xóa tasks
  onDelete = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks.splice(index, 1); //xóa
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    this.onCloseForm();
  }

  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    });
  }
  //sửa task
  onUpdate = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    var taskEditing = tasks[index];
    this.setState({
      taskEditing: taskEditing,
    });
    this.onShowForm();
  }

  // lọc
  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    });
  }

  // search
  onSearch = (keyword) => {
    this.setState({
      keyword: keyword
    })
  }

  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue
    });
  }



  render() {
    // cách viết es6 khai báo 1 biến để truyền vào TaskList
    var { sortBy, sortValue,
      tasks, isDisplayForm, taskEditing,
      filter, keyword } = this.state; //var tasks =  this.state.tasks

    // lọc dữ liệu
    if (filter) {
      if (filter.name) {
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        })
      }
      tasks = tasks.filter((task) => {
        if (filter.status === -1) {
          return task;
        }
        else {
          return task.status === (filter.status === 1 ? true : false)
        }
      });
    }

    // search
    if (keyword) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword) !== -1;
      });
    }

    // sort
    if(sortBy === 'name'){
      tasks.sort((a,b) => {
        if(a.name > b.name) return sortValue;
        else if(a.name < b.name) return -sortValue;
        else return 0;
      });
    }
    else{
      tasks.sort((a,b) => {
        if(a.status > b.status) return -sortValue;
        else if(a.status < b.status) return sortValue;
        else return 0;
      });
    }


    // onCloseForm đóng form bằng X trong TaskForm
    var elmTaskForm = isDisplayForm
      ? <TaskForm onSubmit={this.onSubmit}
        onCloseForm={this.onCloseForm}
        task={taskEditing} /> : '';
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
            {elmTaskForm}
          </div>
          <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>
              <span className="fa fa-plus mr-5"></span>Thêm Công Việc
            </button>
            {/* <button type="button" className="btn btn-danger ml-5" onClick={this.onGennerateData}>
              GenerateData
            </button> */}
            <Control onSearch={this.onSearch}
              onSort={this.onSort}
              sortBy={sortBy}
              sortValue={sortValue} />
            <TaskList tasks={tasks}
              onUpdateStatus={this.onUpdateStatus}
              onDelete={this.onDelete}
              onUpdate={this.onUpdate}
              onFilter={this.onFilter} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
