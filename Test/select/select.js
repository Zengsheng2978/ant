import React from 'react'
import { Input ,Row,Col,Select} from 'antd';
const { Option } = Select;
export default class Select_set extends React.Component{

 
    constructor(props) {
      super(props);
      this.state={
        select_value:[],
        select_data:[]
      }
    }
  
  componentDidMount(){
    // 获取选项的数据  从父组件拿到 ,调用父组件的方法
    this.setState({
    select_data:this.props.select_data()
  })
  }


  // 改变选择框值
  select_change=(e)=>{
    console.log(e)
    this.setState({
      select_value:e
    })
  }

  // 设置默认值   在父组件都用 
  set_defalut_select_value=(val)=>{
    this.setState({
      select_value:val
    })
  }

  render(){
    // console.log(this.props.mode)
    return (
      <div>
        <div>
        <Row>
          <Col span={4}>
            {this.props.select_name}
            <label htmlFor={this.props.select_name}></label>
          </Col>
          <Col span={20}>
          <Select
          allowClear
          // false  不禁用 或者不写 disabled
          disabled={this.props.disabled}   
           // true 多选   false或者不写mode  单选
          mode={(this.props.mode)?'tags':''}
          // large | middle | small    不写 默认为middle
          size={this.props.size}
          placeholder="请选择"
          value={this.state.select_value}
          onChange={this.select_change}
          style={{ width: '100%' }}
        >
          {this.state.select_data}
        </Select>
          </Col>
        </Row>
        </div>
      </div>
    )
  }
}