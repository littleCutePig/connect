import React, { Component } from 'react';

import Child from './Child'
// import Context from '../untils/context'
import connect from '../untils/connect'

class Home extends Component {
    state = {
        count:0
    }
    render() {
        let {count} = this.state
        return (
            <div>
                {/* <Context.Provider value={{count}}>
                    <Child count={count}></Child>
                </Context.Provider> */}
                <Child ref='hello' count={count}></Child>
                <button onClick={()=>this.setState({count:count+1})}>修改</button>
            </div>
        );
    }
}

export default connect(
    (params) => {
        console.log(params)
    }
)(Home);