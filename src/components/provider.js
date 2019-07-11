import React, { Component } from 'react';
import Context from '../untils/context'
class Provider extends Component {
    render() {
        let {store,children} = this.props
        return (
            <div>
                <Context.Provider value={{store}}>
                    {children}
                </Context.Provider>
            </div>
        );
    }
}

export default Provider;
