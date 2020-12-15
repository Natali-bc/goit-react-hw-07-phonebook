import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from './App';
import PropTypes from 'prop-types';
import { fetchContact } from './redux/operations/operations';
import { getIsExist, getLoading } from './redux/selectors/contacts-selectors';

class AppContainer extends Component {
  static propTypes = {
    isExists: PropTypes.bool,
    isLoading: PropTypes.bool.isRequired,
    onFetchContact: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.onFetchContact();
  }
  render() {
    return <App {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isExists: getIsExist(state),
  isLoading: getLoading(state),
});

const mapDispatchToProps = {
  onFetchContact: fetchContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
