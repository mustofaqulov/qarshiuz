import PropTypes from 'prop-types';
import { Footer, Header } from '../components';

export function Layout({ children }) {
  return (
    <>
      <Header />
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
