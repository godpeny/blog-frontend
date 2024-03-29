import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as baseActions from '../../store/modules/base.js';
import Footer from '../../components/common/Footer';

class FooterContainer extends Component {

    handleLoginClick = async () => {
        const { BaseActions, logged } = this.props;
        if(logged) {
            try {
                await BaseActions.logout();
                window.location.reload();
            } catch(e) {
                console.log(e);
            }
        }
        else {
            BaseActions.showModal('login');
        }
        BaseActions.initializeLoginModal();
    }

    render() {
        const { handleLoginClick } = this;
        const { logged } = this.props;

        return (
           <Footer onLoginClick={handleLoginClick} logged={logged} />
        );
    }
}

export default connect(
    (state) => ({
        logged: state.base.get('logged')
    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions,dispatch)
    })
)(FooterContainer);