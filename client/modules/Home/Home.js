import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './Home.css';

class Home extends Component {
  render() {
    return (
        <div className={styles.home}>
            <h2>Welcome!</h2>
            <p>The current landscape of vertical centering options ranges from negative margins to display:table-cell to ridiculous hacks involving full-height pseudo-elements. Yet even though these techniques sometimes get the job done, they don’t work in every situation. What if the thing you want to center is of unknown dimensions and isn’t the only child of its parent? What if you could use the pseudo-element hack, but you need those pseudo-elements for something else?</p>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Home.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
