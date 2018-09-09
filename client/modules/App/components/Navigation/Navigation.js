import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

// Import Style
import styles from './Navigation.css';

const Navigation = (props, context) => {
  return (
      <div className={styles.navigation}>
            <ul>
                <li><Link to="/" activeStyle={{color: '#000'}} onlyActiveOnIndex>Home</Link></li>
                <li><Link to="/posts" activeStyle={{color: '#000'}} onlyActiveOnIndex>Posts</Link></li>
                <li><Link to="/about" activeStyle={{color: '#000'}} onlyActiveOnIndex>About</Link></li>
            </ul>
      </div>
  );
}

Navigation.propTypes = {
};

export default Navigation;
