import PropTypes from 'prop-types';
import { Footer, Header } from '../components';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function Layout({ children }) {
   const { pathname } = useLocation();
   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);
   return (
      <>
         <Header />
         <main className="main-content">
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
