import React,{Component} from 'react';
import './App.css';

const App = () => (<Counter />)

class Counter extends Component{
  constructor(props){
    super(props);
    console.log(this.state)
    this.state = {count: 0}
  }
  handlePlusBtn = () =>{
    this.setState({count: this.state.count + 1})
  }
  handleDownBtn = () =>{
    this.setState({count: this.state.count - 1})
  }
  render(){
  return(
    <>
      <div>counter: {this.state.count}</div>
      <button onClick={this.handlePlusBtn}>up</button>
      <button onClick={this.handleDownBtn}>down</button>
    </>
    )
  }
}

export default App;
