import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

export default class ButtonSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: props.active
        }
    }

    render() {
        return (
             <div className="container-flex">
                <div className="row">
                    <div
                    className="col col-12 col-lg-4 offset-lg-4" style={{paddingLeft: '5%', paddingRight: '5%'}}>
                        <Button
                        className="btn-primary"
                        title='paina tästä'
                        style={{width: '100%', height: 'auto', margin: '2vh 0 2vh 0', backgroundColor: 'orange', color: 'white', textTransform: 'uppercase', fontWeight: 'bolder', fontSize: '3rem'}}
                        onClick={() => {
                            const index = Math.floor(Math.random() * this.props.alertMessages.length);
                            if(typeof window === 'object') {
                                window.alert(this.props.alertMessages[index]);
                            }
                        }}
                        >Paina tästä
                        </Button></div>
                </div>
            </div>)
       }
}

ButtonSection.propTypes = {
    alertMessages: PropTypes.arrayOf(PropTypes.string.isRequired)
}
ButtonSection.defaultProps = {
    alertMessages: [
        'Varo! Koneessasi on VIIRUS!',
        'Software Failure! Press OK button to continue. \n\nGuru Meditation: #00000025.65045338',
        'I don\'t feel so good... @__o Please do not press this button again!',
        'Kernel Panic! Commencing reboot!',
        'The Program has performed an illegal operation and has been shut down!',
        'The system has recovered from a serious error',
        'A problem has been detect and Windows has been shut down to prevent damage to your computer.\n\nIf this is the first time you\'ve seen this Stop error screen, restart your computer. If these screen appears again, follow these stesp:'
    ]
}