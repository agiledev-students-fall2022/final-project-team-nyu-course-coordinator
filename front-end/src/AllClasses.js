import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import SortBy from './Components/SortBy.js';
import ShoppingCart from './edit-cart'

export default function AllClasses() {
 
  
  return (

    <div className="container">
      <h1 className="text-center p-5">All Classes</h1>
      <SortBy/> 
      <br />

      <ShoppingCart />
      

    </div>
  )
}