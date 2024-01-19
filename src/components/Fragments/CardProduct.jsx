import Button from "../Elements/Button/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-white border border-white-900 rounded-lg shadow-xl mx-1 my-2 flex flex-col">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, name } = props;
  return (
    <a href="#">
      <img
        src={image}
        alt={name}
        className="p-5 rounded-t-lg h-80 w-full object-contain "
      />
    </a>
  );
};

const Body = (props) => {
  const { content, title } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-gray-700 truncate">
          {title}
        </h5>
        <p className="text-s text-black">{content}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, currency, AddToCart } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-black">
        {currency} {price}
      </span>
      <Button
        variant="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"
        onClick={AddToCart}
      >
        Add to cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
