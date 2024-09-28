import React from 'react'

function Card({item}) {
    // console.log(item);
  return (
    <>
    <div className='mt-10 my-4 p-4'>
    <div className=" card bg-base-100  shadow-xl hover:scale-105 duration-300">
  <figure>
    <img
      src={item.image}
      alt="Book" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary">{item.catagory}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="cursor-pointer badge badge-outline hover:text-pink-400 bg-slate-700">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Card
