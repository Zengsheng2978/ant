import React from 'react'
import { Input ,Row,Col,Select} from 'antd';
import Input_set from './input'
const { Option } = Select;

export default class About extends React.Component{

  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
    this.refs['input_test'].set_defalut_input_value('你好p')  //赋默认值
    this.refs['input_test1'].set_defalut_input_value('你好1')  //赋默认值
  }


  
  // 值的传递
  change=()=>{
    console.log(this.refs['input_test'].state.input_value)  //获取组件的值
    console.log(this.refs['input_test1'].state.input_value)  //获取组件的值
  }

  render(){
    return (
      <div>
        <Input_set
        input_name='测试'
        // 组件的唯一标识
        ref='input_test'  
        />

       <Input_set
        input_name='测试1'
        // 组件的唯一标识
        ref='input_test1'  
        />
        <button onClick={this.change}>按钮</button>
      </div>
    )
  }
}