import Navbar from "../Navbar/Navbar";

function Layout({ children }) {
  return (
    <div className="container mx-auto">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
