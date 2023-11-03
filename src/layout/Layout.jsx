import PropTypes from 'prop-types';
import { Footer, Navbar } from '../components';

export function Layout({ children }) {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="main-content container">
        {children}
      </div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  children: '',
};

Layout.propTypes = {
  children: PropTypes.node,
};
