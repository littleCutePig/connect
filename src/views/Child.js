import React, { Component } from 'react';
import Sun from './Sun'
// import Context from '../untils/context'
import connect from '../untils/connect'
class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:props.count
        }
    }
    render() {
        console.log('render')
       let { count } = this.state
        return (
            <div>
                子组件
                <br/>
                {/* { count } */}
                hello{this.props.count}
                <Sun count={count}></Sun>
                {/* <Context.Consumer>
                    {
                        ({store})=>{
                            return <div>{store.childStore.name}</div>
                        }
                    }
                </Context.Consumer> */}
                {/* {
                    this.props.childStore.msg
                } */}
            </div>
        );
    }

    static getDerivedStateFromProps(nextProps,prevState) {
        if(nextProps.count !== prevState.count) {
            return {
                count: nextProps.count
            }
        }else{
            return null
        }
    }
    getSnapshotBeforeUpdate() { // 必须与componentDidUpdate一起使用
        console.log('getSnapshotBeforeUpdate')
        return 1
    }
    componentDidUpdate(prevProps,PrevState,params){
        console.log('componentDidUpdate',params)
    }
}

export default connect(
    (params) => {
        console.log(params)
        return {...params.childStore}
    }
)(Child);