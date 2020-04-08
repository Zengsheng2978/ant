import React from 'react'
import { Input ,Row,Col,Select} from 'antd';
import Del_model_set from './del_model';


export default class About extends React.Component{

  constructor(props) {
    super(props);
    this.state={
     
    }
  }
  
  componentDidMount(){
    
  }


  
  // 给模态框确定回调
  del_ok=()=>{
   console.log(12133);
  }

  

  render(){
    
    return (
      <div>
        <Del_model_set
          type='danger'
          size='small'
          title='确定删除吗？'
          content='fdfdfdfd'
          ok={this.del_ok}
        />
      </div>
    )
  }
}