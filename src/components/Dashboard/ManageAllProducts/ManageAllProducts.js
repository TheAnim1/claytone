import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';

const ManageAllProducts = () => {
    const [manageProducts, setManageProducts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(response => response.json())
        .then(data => setManageProducts(data))
    },[])

    const handleConfirm = (id) => {
        swal({
            title: "Are you sure you want to delete?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                const handleDelete = (id) => {
                    const url = `http://localhost:5000/products/${id}`
                    fetch(url, { 
                        method: 'DELETE'
                    })
                    .then(res=>res.json())
                    .then(data => {
                        console.log(data)
                        const remaining = manageProducts.filter(allproducts => allproducts._id !==id )
                        setManageProducts(remaining)
            
                      
                     
                    })
                }

                handleDelete(id)
                swal("You deleted the product", {
                icon: "success",
              });
           
            }  else{
                swal("Awesome! ");
            }
          
          });
    }
    return (
        <div>
            <h2>Manage All Products</h2>

            <div className="container-fluid mt-5">
           <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead className="thead-style">
                                <tr>
                                <th scope="col" className="text-center">ID</th>
                                <th scope="col" className="text-center">Product Name</th>
                                <th scope="col" className="text-center">Material</th>
                                <th scope="col" className="text-center">Price</th>
                                 <th scope="col" className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody
                  
                    className="tbody-style"
                    >
                            {
                manageProducts.map(manageProduct =>
                 
                                <tr
                                key = {manageProduct?._id}>
                                <th scope="row" className="text-center">{manageProduct?._id}</th>
                                <td className="text-center">{manageProduct?.name}</td>
                                <td className="text-center">{manageProduct?.material}</td>
                                <td className="text-center">{manageProduct?.price}</td>
                                <td className="text-center"> <button onClick= {()=> handleConfirm(manageProduct?._id)} className="allproduct-btn">Delete</button> </td>
                               
                                
                                </tr>
                                
                           
                )}
                </tbody>
                            </table>
                    </div>
           </div>
        </div>
       
    );
};

export default ManageAllProducts;