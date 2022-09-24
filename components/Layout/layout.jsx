import Navbar from "../Navbar/Navbar";

function Layout({ children }) {
  return (
    <div className="mx-auto">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
