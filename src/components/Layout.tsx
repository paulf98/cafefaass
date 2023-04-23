import Footer from "./Footer";
import Config from "./Config";
import Sidebar from "./Sidebar";
 
const Layout = ({ children, story }: {children: React.ReactNode, story: any}) => {
  if (!story) return <div>Loading...</div>;
  return (
    <Config blok={story.content}>
      <Sidebar />
      {children}
      <Footer />
    </Config>
  );
}

export default Layout;