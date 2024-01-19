const Button = (props) => {
  const { children, variant, onClick } = props;
  return (
    <button
      className={`px-5 py-2.5 font-semibold rounded-md ${variant} text-white hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 shadow-lg shadow-blue-500/50`}
      type="submit"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
