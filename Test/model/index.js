import React from 'react'
import { Input ,Row,Col,Select} from 'antd';
import Model_set from './model';


export default class About extends React.Component{

  constructor(props) {
    super(props);
    this.state={
      
    }
  }
  
  componentDidMount(){
    
  }


  
  // 给模态框赋值
  open_model=()=>{
    let defalut_model_value={
      visible:true,
      Modal_value:789898998
    };
    // console.log(...defalut_model_value)
    this.refs['test_model'].set_defalut_model_value({...defalut_model_value});
  }

  // 拿到模态框中的数据，由子组件调用
  get_mode_value=(val)=>{
    console.log(val);
    return val
  }

  render(){
    
    return (
      <div>
       
        <Model_set
        ref='test_model'
        title='查看'
        get_mode_value={this.get_mode_value}
        />
        <button onClick={this.open_model}>打开模态框(赋值)</button>
      </div>
    )
  }
}