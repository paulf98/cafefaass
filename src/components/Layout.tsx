import Footer from "./Footer";
import Config from "./Config";
 
const Layout = ({ children, story }: {children: React.ReactNode, story: any}) => (
  <>
    <Config blok={story.content}>
      {children}
    </Config>
    <Footer />
  </>
);
 
export default Layout;