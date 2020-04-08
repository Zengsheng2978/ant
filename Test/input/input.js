import React from 'react'
import { Input ,Row,Col} from 'antd';

export default class Input_set extends React.Component{

 
    constructor(props) {
      super(props);
      this.state={
        input_value:''
      }
    }
  
  // 改变输入法人值
  input_change=(e)=>{
    console.log(e.target.value);
    let a=e.target.value
    this.setState({
      input_value:a
    })
  }

  // 设置默认值   在父组件都用 
  set_defalut_input_value=(val)=>{
    this.setState({
      input_value:val
    })
  }

  render(){
    return (
      <div>
        <div>
        <Row>
          <Col span={4}>
            {this.props.input_name}
            <label htmlFor={this.props.input_name}></label>
          </Col>
          <Col span={20}>
          <Input 
          id={this.props.input_name}
          size={this.props.size} 
          placeholder="请输入"
          value={this.state.input_value}
          onChange={this.input_change}
          />
          </Col>
        </Row>
        </div>
      </div>
    )
  }
}