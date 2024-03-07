import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const CommonLayout = ({ children, props }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default CommonLayout;
