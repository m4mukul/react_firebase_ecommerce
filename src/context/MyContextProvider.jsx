/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import Mycontext from './myContext'
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { fireDB } from '../firebase/FirebaseConfig';
import toast from 'react-hot-toast';
const MyContextProvider = ({children}) => {
  const [loading, setLoading] = useState(false)
  const [getAllProduct, setGetAllProduct] = useState([]);

  const getAllProductFunction = async () => {
    setLoading(true)
    try{
      const q = query(
        collection(fireDB, 'products'),
        orderBy('time')
      );
      const data = onSnapshot(q, (querySnapshot) => {
        let productArray = [];
        querySnapshot.forEach((doc) =>{
          productArray.push({...doc.data(), id: doc.id});
        });
        setGetAllProduct(productArray);
        setLoading(false);
      });
      return () => data;
    }catch(error){
      console.log(error);
      setLoading(false);
    }
  }

  const [getAllOrder, setGetAllOrder] = useState([]);

  const getAllOrderFunction = async () => {
    setLoading(true);
    try{
      const q= query(
        collection(fireDB, 'order'),
        orderBy('time')
      )
      const data = onSnapshot(q, (querySnapshot) => {
        let orderArray = [];
        querySnapshot.forEach((doc) => {
          orderArray.push({...doc.data(), id:doc.id})
        });
        setGetAllOrder(orderArray)
        setLoading(false)
      });
      return () => data;
    }catch(error){
      console.log(error);
      setLoading(false)
    }
  }

  const deleteProduct = async (id) => {
    setLoading(true);
    try{
      await deleteDoc(doc(fireDB, 'order', id));
      toast.success("Order Deleted successfully");
      getAllOrderFunction();
      setLoading(false)
    }catch(error){
      console.log(error)
      setLoading(false)
    }
  }

  const [getUsers, setGetUsers] = useState([]);

  const getAllUsersFunction = async () =>{
    setLoading(true);
    try{
      const q = query(
        collection(fireDB, "user"),
        orderBy('time')
      )
      const data = onSnapshot(q, (querySnapshot) => {
        let usersArray = [];
        querySnapshot.forEach((doc) => {
          usersArray.push({...doc.data(), id:doc.id})
        });
        setGetUsers(usersArray)
        setLoading(false)
      });
      return () => data;
    }catch(error){
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(()=>{
    getAllProductFunction();
    getAllOrderFunction();
    getAllUsersFunction();
  },[])

  return (
    <Mycontext.Provider value={{
      loading,
      setLoading,
      getAllProduct,
      getAllProductFunction,
      getAllOrder,
      deleteProduct,
      getUsers
    }}>
        {children}
    </Mycontext.Provider>
  ) 
}

export default MyContextProvider