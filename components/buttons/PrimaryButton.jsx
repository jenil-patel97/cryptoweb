const PrimaryButton = ({ children, onClick, ...props }) => {
  return (
    <button onClick={onClick} className="bg-primary rounded-full text-white mx-2 py-4 px-10" {...props}>
      {children}
    </button>
  );
};

export default PrimaryButton;
