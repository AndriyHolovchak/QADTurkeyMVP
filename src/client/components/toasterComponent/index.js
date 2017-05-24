import React, { Component, PropTypes } from 'react';
import { ToastContainer, ToastMessage } from "react-toastr"
import { connect } from 'react-redux';
import { toast_a } from 'actions'

import "animate.css";

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class Toaster extends Component {

    constructor(props) {
        super(props);
        this.addAlert = this.addAlert.bind(this);
    }

    componentWillReceiveProps(nextprops) {
        if (this.props.notification.message != nextprops.notification.message &&
            nextprops.notification.message != "") {
            this.addAlert(nextprops.notification);
            this.props.dispatch(toast_a.resetNotification());
        }
    }

    render() {
        return (
            <ToastContainer toastMessageFactory={ToastMessageFactory} ref="container"
                                className="toast-top-right"/>
        );
    }

    addAlert(message) {
		switch(message.type) {
			case 'success':
			    this.refs.container.success(message.message,  message.title);
				break;
			case 'warning':
				this.refs.container.warning(message.message,  message.title);
				break;
            case 'error':
				this.refs.container.error(message.message,  message.title);
				break;
			default:
				this.refs.container.info(message.message,  message.title);
				break;
		}
	}
}


const mapStateToProps = (state) => {
    return {
        notification: state.toast
    };
}

export default connect(mapStateToProps)(Toaster);