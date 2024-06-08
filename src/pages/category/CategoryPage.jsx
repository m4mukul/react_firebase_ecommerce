import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom"
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../store/CartSlice";
import toast from "react-hot-toast";

const CategoryPage = () => {
    const navigate = useNavigate();
    const {categoryname} = useParams();
    const context = useContext(myContext);
    const {getAllProduct, loading} = context;

    const filterProduct = getAllProduct.filter((obj) => obj.category.includes(categoryname))

    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Add To Cart");
    }

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Add To Cart");
    }

  return (
    <div className="mt-10">
    {/* Heading  */}
    <div className="">
        <h1 className=" text-center mb-5 text-2xl font-semibold first-letter:uppercase">{categoryname}</h1>
    </div>
    {loading ?

        <div className="flex justify-center">
            <Loader />
        </div>

        :

        <section className="text-gray-600 body-font">
            {/* main 2 */}
            <div className="container px-5 py-5 mx-auto">
                {/* main 3  */}
                <div className="flex flex-wrap -m-4 justify-center">
                    {filterProduct.length > 0 ?
                        <>
                            {filterProduct.map((item, index) => {
                                const { id, title, price, productImageUrl } = item;
                                return (
                                    <div key={index} className="p-4 w-full md:w-1/4">
                                        <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                            <img
                                                onClick={() => navigate(`/productinfo/${id}`)}
                                                className="lg:h-80  h-96 w-full"
                                                src={productImageUrl}
                                                alt="img"
                                            />
                                            <div className="p-6">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                </h2>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                    {title.substring(0, 25)}
                                                </h1>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                    ₹{price}
                                                </h1>
                                                <div className="flex justify-center ">
                                                    {cartItems.some(p => p.id !== item.id)
                                                    ?
                                                    <button onClick={() => deleteCart(item)} className=" bg-red-400 hover:bg-red-500 w-full text-white py-[4px] rounded-lg font-bold">
                                                        Delete From Cart
                                                    </button>
                                                    :
                                                    <button onClick={() => addCart(item)} className=" bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                        Add To Cart
                                                    </button>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </>

                        :

                        <div>
                            <div className="flex justify-center">
                                <img className=" mb-2" src="https://cdn-icons-png.flaticon.com/128/2748/2748614.png" alt="" />
                            </div>
                            <h1 className=" text-black text-xl">No {categoryname} product found</h1>
                        </div>
                    }
                </div>
            </div>
        </section>

    }
</div>
  )
}

export default CategoryPage