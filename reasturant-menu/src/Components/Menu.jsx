import React from 'react'


const Menu = ({menuData}) => {
  return (
    <div className='flex justify-evenly gap-4 flex-wrap '>
        {menuData.map((item) => (
            <div className=' border shadow-md  max-w-sm rounded-md p-5 bg-white my-5' key={item.id}>
                <img src={item.image} className=' m-auto rounded-md' alt=""  />
                <h1 className=' text-lg font-bold my-2'>{item.item}</h1>
                <p>{item.description}</p>
                <p className='my-3 font-bold'>Rs: {item.price}</p>
            </div>
        ))}
    </div> 
  )
}

export default Menu