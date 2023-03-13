import React from 'react';
import styles from './Profile.module.css';

class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode() {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState) {
        
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    render() {
        return (
            <div className={styles.description}>
                {!this.state.editMode &&
                    <div className={styles.status} onClick={() => this.activateEditMode()}>{this.props.status}</div>
                }
                {this.state.editMode &&
                    <input className={styles.status} onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                }
        </div>
        )
    }
}
export default Status;