import React from 'react'
import { Input ,Row,Col,Select,Modal,Button } from 'antd';
const { confirm } = Modal;
export default class Del_model_set extends React.Component{

 
    constructor(props) {
      super(props);
      this.state={
        visible:false,
        
      }
    }
  
  componentDidMount(){
  
  }


   showDeleteConfirm=()=>{
     const _this=this;
    confirm({
      title: this.props.title,
      content: this.props.content,
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        console.log('OK');
        _this.props.ok()
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

 

  render(){
   
    return (
      <div>
        <div>
        <Button 
        onClick={this.showDeleteConfirm} 
        type={this.props.type}
        size={this.props.size}
        >
        删除按钮
      </Button>
        </div>
      </div>
    )
  }
}