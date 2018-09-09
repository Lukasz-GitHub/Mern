import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Navigation.css';

const Navigation = (props, context) => {
  return (
      <div className={styles.navigation}>
            <ul>
                <li><Link to="/" activeStyle={{color: '#000'}} onlyActiveOnIndex><FormattedMessage id="home" /></Link></li>
                <li><Link to="/posts" activeStyle={{color: '#000'}} onlyActiveOnIndex><FormattedMessage id="posts" /></Link></li>
                <li><Link to="/about" activeStyle={{color: '#000'}} onlyActiveOnIndex><FormattedMessage id="about" /></Link></li>
            </ul>
      </div>
  );
}

Navigation.propTypes = {
};

export default Navigation;
