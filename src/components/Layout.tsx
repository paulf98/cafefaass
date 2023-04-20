import Navigation from "./Navigation";
import Footer from "./Footer";
 
const Layout = ({ children }: {children: React.ReactNode}) => (
  <div>
    <Navigation>
      {children}
    </Navigation>
    <Footer />
  </div>
);
 
export default Layout;