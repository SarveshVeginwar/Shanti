import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1 pt-16 sm:pt-20 lg:pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;