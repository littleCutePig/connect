import React, { Component } from 'react';
// import Context from '../untils/context'
import connect from '../untils/connect'
class Sun extends Component {
    
    render() {
        return (
            <div>
                孙组件
                <br/>
                {
                    console.log('props',this.props)
                }
                {/* <Context.Consumer>
                    {
                        (value)=>{
                            return <div>{value.count}</div>
                        }
                    }
                </Context.Consumer> */}
                {/* <Context.Consumer>
                    {
                        ({store})=>{
                            return <div>{store.homeStore.name}</div>
                        }
                    }
                </Context.Consumer> */}
                {/* {
                    this.props.sunStore.msg
                } */}
                {
                    this.props.msg
                }
            </div>
        );
    }
}

export default connect(
    (params) => {
        console.log(params)
        return {...params.sunStore}
    }
)(Sun);