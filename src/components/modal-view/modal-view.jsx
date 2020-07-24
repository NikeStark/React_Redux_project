import React, { Component } from 'react';
import './modal-view.scss';
import Portal from '../portal';

class ModalView extends Component {
    state = {
        showModal: false,
        hideModal: false
    }

    componentDidMount(){
        setTimeout(() => {
            this.showModal();
        }, 2000)
    }

    showModal = () => {
        this.setState({
            showModal: true
        })
    }

    hideModal = () => {
        this.setState({
            hideModal: true
        })
    }

    render(){
        const{showModal, hideModal} = this.state

        if(!showModal || hideModal){
            return null
        }

        return(
            <div>
                <Portal>
                    <p>Notice! The movies will be affordable after log in...
                        <i className="far fa-times-circle" onClick={this.hideModal} />
                    </p> 
                </Portal>
            </div>
        )
    }
}

export default ModalView;