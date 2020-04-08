import React from 'react'
import { Input ,Row,Col,Select,Modal} from 'antd';
const { Option } = Select;
export default class Modal_set extends React.Component{

 
    constructor(props) {
      super(props);
      this.state={
        visible:false,
        
      }
    }
  
  componentDidMount(){
  
  }

  // 模态框确定按钮
  handleOk = (e) => {
    this.setState({
      visible: false,
      Modal_value:'dsdsds'
    },()=>{
      this.props.get_mode_value(this.state.Modal_value)
    });
    
  };
  // 模态框取消按钮
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };

  // 设置默认值   在父组件都用 
  set_defalut_model_value=(val)=>{
    console.log(val)
    this.setState({
      visible:val.visible,
      Modal_value:val.Modal_value
    })
  }

  render(){
    // console.log(this.props.mode)
    return (
      <div>
        <div>
        <Modal
          title={this.props.title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>{this.state.Modal_value}</p>

        </Modal>
        </div>
      </div>
    )
  }
}