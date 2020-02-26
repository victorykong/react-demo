import React from 'react';

// import Count from './component/Count';

// mixin
// import User from './component/User.js'
// import Good from './component/Good.js'

// test Hoc
// import TestHoc from './component/TestHoc.js';

// compose hoc
import Input from './component/Input.js';

class App extends React.Component {
  state = {
    count: 1,
    person1: {
      name: 'zs',
      age: 18
    }
  }

  validatorName = {
    func: val => !isNaN(val),
    msg: '请输入数字'
  }
  validatorPwd = {
    func: val => !isNaN(val),
    msg: '密码必须是纯数字'
  }


  render() {
    return <>
      {/* <Count
        count={this.state.count}
        person1={this.state.person1}
      /> */}

      {/* <button onClick={() => this.setState((preState) => preState.count++)}>+1</button> */}
      {/* <button onClick={() => this.setState((preState) => preState.person1.age++)}>age +1</button> */}


      {/* <User />
      <Good /> */}

      {/* <TestHoc
        count={this.state.count}
      /> */}


      <Input
        type='text'
        v_model="name"
        validator={this.validatorName}
      />

      <Input
        type='text'
        v_model="pwd"
        validator={this.validatorPwd}
      />

    </>
  }
}

export default App;
