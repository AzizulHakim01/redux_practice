import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteProduct } from "./UserReducer";

const Home = () => {
  const product = useSelector((state) => state.product);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleDelete = (id) =>{
      dispatch(deleteProduct({id: id}))
    }
  return (
    <>
      <section className="h-[100vh] flex flex-col justify-center items-center gap-6 dark:bg-slate-700">
        <h1 className="text-4xl font-bold">CRUD using Redux & JSON server</h1>
        <div className="">
          <button className="bg-green-700 text-white px-6 py-3 rounded-md font-bold text-xl" onClick={()=>navigate("/create")}>
            Create +
          </button>
        </div>
        <table className="w-full text-center">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-4 text-xl">
                Serial
              </th>
              <th scope="col" className="px-4 py-4 text-xl">
                Product name
              </th>
              <th scope="col" className="px-4 py-3 text-xl">
                Category
              </th>
              <th scope="col" className="px-4 py-3 text-xl">
                Brand
              </th>
              <th scope="col" className="px-4 py-3 text-xl">
                Description
              </th>
              <th scope="col" className="px-4 py-3 text-xl">
                Price
              </th>
              <th scope="col" className="px-4 py-3 text-xl">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="">
            {product.map((item, index) => {
              return (
                <tr className="border-b dark:border-gray-700" key={item.id}>
                  <th scope="col" className="px-4 py-4 text-xl">
                    {index+1}
                  </th>
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.productName}
                  </th>
                  <td className="px-4 py-3">{item.category}</td>
                  <td className="px-4 py-3">{item.brand}</td>
                  <td className="px-4 py-3 max-w-[12rem] truncate">
                    {item.description}
                  </td>
                  <td className="px-4 py-3">${item.price}</td>
                  <td className="px-4 py-3"><Link to={`/edit/${item.id}`} className="font-bold bg-green-700 text-white px-3 py-1 rounded-md">Edit</Link> <button onClick={()=>handleDelete(item.id)} className="font-bold bg-red-700 text-white px-3 py-1 rounded-md">Delete</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Home;
