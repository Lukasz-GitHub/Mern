import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './About.css';

class About extends Component {
  render() {
    return (
        <div className={styles.about}>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper tortor mi, in lobortis magna sollicitudin nec. Proin lacinia mi leo, vitae dignissim nulla eleifend dignissim. Maecenas ultrices mollis est, facilisis mollis nulla pellentesque nec. Fusce scelerisque elementum orci, in vehicula elit placerat ac. Etiam tristique turpis vitae fermentum rhoncus. Suspendisse tincidunt aliquet tempor. Vivamus sollicitudin nulla pellentesque magna tincidunt porttitor. Integer luctus volutpat suscipit. In ac viverra odio. Maecenas ultricies, orci eu aliquam elementum, metus dui posuere urna, vel dapibus magna sapien sit amet diam. Suspendisse condimentum volutpat nisl, eu volutpat diam faucibus ultrices.</p>

            <p>Praesent congue aliquet fermentum. Morbi nec mattis nisl. Sed et risus tincidunt, interdum mi id, porttitor tortor. Aliquam posuere sapien metus, quis pellentesque nulla cursus in. Duis non odio et lorem convallis dapibus. Praesent malesuada, augue eu sollicitudin dapibus, diam odio porta libero, vel luctus risus eros eget eros. Fusce cursus diam ligula, in maximus eros semper suscipit. Pellentesque ultrices sodales tempor. Suspendisse viverra, nisi ac facilisis ultrices, ante tortor maximus neque, vel bibendum dui ex sit amet dolor. Etiam non dolor imperdiet, hendrerit metus in, commodo felis. Nam luctus finibus ligula, vitae tincidunt erat hendrerit efficitur. Suspendisse vestibulum a quam at auctor. Nam consequat interdum turpis. In viverra eget dui sit amet lacinia.</p>

            <p>Donec dignissim libero sed leo tempor, ut vulputate arcu gravida. Cras ut justo eu arcu condimentum fringilla. Donec vel tincidunt ante. Praesent et mattis sem, eu commodo velit. Proin at mollis lacus. Vivamus vitae odio massa. Aenean tempor maximus arcu, non pharetra augue pulvinar at. Praesent viverra ut sem sed sodales.</p>

            <p>Phasellus elementum odio magna, at fermentum nisi egestas porttitor. Donec egestas molestie justo, et dictum lectus vehicula quis. Vivamus vitae rhoncus nibh, ac vestibulum justo. Etiam gravida lobortis neque suscipit porta. Nam facilisis sapien in est semper convallis. Phasellus tristique scelerisque ex eu dignissim. Nullam non sem et purus iaculis iaculis at id erat.</p>

            <p>Etiam orci tellus, vehicula eget lorem nec, eleifend feugiat mi. Vestibulum eget felis eget lacus eleifend malesuada vitae id justo. Suspendisse et blandit nisl. Nunc elementum turpis sit amet ante vestibulum, et blandit magna viverra. Phasellus elit tellus, hendrerit nec interdum ac, tincidunt eu nulla. Nullam varius mi lobortis, bibendum dolor et, ultricies turpis. Suspendisse quam sapien, condimentum a nulla vel, tempus fringilla sapien. Aliquam et ligula quis eros faucibus tincidunt ac sit amet lacus. Sed nisi ipsum, tincidunt nec finibus eu, finibus in turpis. Maecenas id leo vitae ex tempor tristique. Nulla dignissim mi sed venenatis consectetur.</p>
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

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
