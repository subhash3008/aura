import React, { Component } from "react";

import "./CommonModal.css";

import Modal from 'react-bootstrap/Modal'


class CommonModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }

    }
    setShow = () => {
        this.setState({
            show: false
        })
    }
    componentWillMount(){
    }
    componentWillReceiveProps(){
        this.setState({
            show: true
        })
    }


    render() {
        return (
            <div >

                <Modal
                    show={this.state.show}
                    onHide={this.setShow}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                    centered
                >
                    <Modal.Header closeButton>
                        {/* <Modal.Title id="example-custom-modal-styling-title">
                            Custom Modal Styling
          </Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body>{this.props.children}
          
                    </Modal.Body>
                </Modal>

            </div>
        );
    }
}
export default CommonModal;