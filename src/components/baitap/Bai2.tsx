import React, { useState } from 'react'
interface Product{
  id:number 
  name:string 
  price:number 
  quantity:number
}
export default function Bai2() {
  const [product,setProduct]=useState<Product>({
    id:1,
    name:'coca cola',
    price:1,
    quantity:1
  })
  const {id, name, price, quantity} = product
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{price}</p>
      <p>{quantity}</p>
    </div>
  )
}
