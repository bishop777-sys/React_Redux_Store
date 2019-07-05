import React from 'react';
import ErorIndicator from '../error-indicator';

export default class ErrorBoundry extends React.Component{

    state = {
        hasError: false
    }
    componentDidCatch(){
        this.setState({
            hasError: true
        });
    }
    render(){
        if(this.state.hasError){
            return <ErorIndicator />
        }
        return this.props.children;
    }
};