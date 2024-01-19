import CardProduct from "../../Fragments/CardProduct";

const ProductList = ({ products, AddToCart }) => {
  return (
    <div className="flex py-5 ">
      <div className="flex flex-wrap">
        {products.length > 0 &&
          products.map((item) => (
            <CardProduct key={item.id}>
              <CardProduct.Header image={item.image} name={item.title} />
              <CardProduct.Body title={item.title} content={item.category} />
              <CardProduct.Footer
                currency="US$"
                price={item.price}
                AddToCart={() => AddToCart(item)}
              />
            </CardProduct>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
