import React from 'react'
import { Input ,Row,Col,Select} from 'antd';
import Input_set from './input'
import Select_set from './select';
const { Option } = Select;

export default class About extends React.Component{

  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
    this.refs['input_test'].set_defalut_input_value('你好')  //赋默认值
    this.refs['input_test1'].set_defalut_input_value('你好1')  //赋默认值



    this.refs['select_test'].set_defalut_select_value(['b11'])  //赋默认值
  }


  
  // 值的传递
  change=()=>{
    console.log(this.refs['input_test'].state.input_value)  //获取组件的值
    console.log(this.refs['input_test1'].state.input_value)  //获取组件的值



    console.log(this.refs['select_test'].state.select_value)  //获取组件的值
  }

  // 拿到选择框的数据，由子组件调用
  select_data=()=>{
    let children = [];
    for (let i = 10; i < 36; i++) {
      children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }
    return children
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




        <Select_set
        // false  不禁用 或者不写 disabled
        disabled={false}   
        // large | middle | small    不写 默认为middle
        // size='large'
        ref='select_test'
        select_name='测试'
        // true 多选   false或者不写mode  单选
        mode={false}
        select_data={this.select_data}
        />
        <button onClick={this.change}>annjiu</button>
      </div>
    )
  }
}