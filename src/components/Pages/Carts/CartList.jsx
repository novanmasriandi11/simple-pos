import Button from "../../Elements/Button/Button";

const CartList = ({ products, detail, removeItem }) => {
  return (
    <div className="relative shadow-lg xs:rounded-lg py-2">
      <table className="w-full text-xs text-gray-500 ">
        <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white">
          Your Carts
          <p className="mt-1 text-sm font-normal text-gray-500 ">
            This is a list of all your need and checkout now.
          </p>
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3 rounded-s-lg">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Product Category
            </th>
            <th scope="col" className="px-6 py-3 ">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th colSpan={2} scope="col" className="px-6 py-3 text-left">
              Subtotal
            </th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 &&
            products.map((item) => (
              <tr
                className="bg-white border-b hover:bg-yellow-100 "
                key={item.id}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 line-clamp-3"
                >
                  {item.title}
                </th>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.price?.toFixed()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.qty}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.subTotal?.toFixed()}
                </td>
                <td>
                  <button
                    onClick={() => removeItem(item)}
                    type="button"
                    className="mr-3 text-red-700 border border-red-700 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 hover:text-white rounded-full text-sm p-2.5 text-center inline-flex items-center "
                  >
                    <svg
                      className="w-4 h-4 text-blue-red-700"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
        <tfoot>
          <tr className="font-semibold text-gray-900 ">
            <th colSpan={3} scope="row" className="px-6 py-3 text-base">
              Total Price
            </th>
            <td className="px-6 py-3 text-base font-bold">
              {detail.totalProduct}
            </td>
            <td
              colSpan={2}
              className="px-6 py-3 whitespace-nowrap text-left text-base font-bold"
            >
              US$ {detail.totalPrice?.toFixed()}
            </td>
          </tr>
        </tfoot>
      </table>
      <div className="flex ">
        <Button variant="mx-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 w-full justify-center text-center inline-flex items-center">
          <svg
            className="w-6 h-6 text-white mx-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
            />
          </svg>
          Pay Now
        </Button>
      </div>
    </div>
  );
};

export default CartList;
