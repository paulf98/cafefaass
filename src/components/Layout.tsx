import Footer from "./Footer";
import Config from "./Config";
 
const Layout = ({ children, story }: {children: React.ReactNode, story: any}) => {
  if (!story) return <div>Loading...</div>;
  return (
    <>
      <Config blok={story.content}>
        {children}
      </Config>
      <Footer />
    </>
  );
}

export default Layout;