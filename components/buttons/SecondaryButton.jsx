const SecondaryButton = ({ children, onClick, ...props }) => {
    return (
      <button onClick={onClick} className="border border-primary transition-colors duration-300 hover:bg-primary hover:text-white rounded-full bg-white text-primary mx-2 py-4 px-10" {...props}>
        {children}
      </button>
    );
  };
  
  export default SecondaryButton;
  