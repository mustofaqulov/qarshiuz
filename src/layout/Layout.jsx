import PropTypes from 'prop-types';
import { Footer, Navbar } from '../components';

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="main-content container">
        {children}
      </main>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.node,
};
