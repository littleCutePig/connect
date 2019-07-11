import React, { Component } from 'react';
import Context from './context'

const connect = (cbk_1) => {
    // cbk_1('hello world')
    return (WarpComponent) => {
        return class extends Component{
            render() {
                console.log(this.props,'hello world')
                return <div>
                    <Context.Consumer>
                        {
                            ({store}) => {
                                let res = cbk_1(store)
                                return <WarpComponent {...res} {...this.props}></WarpComponent>
                            }
                        }
                    </Context.Consumer>
                </div>
            }
        }
    }
}
export default connect