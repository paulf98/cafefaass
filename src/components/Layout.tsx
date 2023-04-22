import Navigation from "./Navigation";
import Footer from "./Footer";
 
const Layout = ({ children }: {children: React.ReactNode}) => (
  <>
    <Navigation>
      {children}
    </Navigation>
    <Footer />
  </>
);
 
export default Layout;