import React, { useState } from 'react'
import { mockMenu } from '../Mock/mockMenu';
import Menu from "./Menu";

const Header = () => {
  // here useState initial value of menu is mockMenu object 
  //after that setFilteredMenu Render is on Screen ,
  //useState 
  const [menu,setFilteredMenu] = useState(mockMenu);

   const handelFilter = (category) => {
    const menuFilter = mockMenu.filter((item) => {
      if(category === 'all')
      {
        return item
      }
      return item.category ===  category
    } )
    setFilteredMenu(menuFilter);
    console.log(menu)
   }
  
  return (
    <div>
      <ul className=' flex justify-center gap-5'>
        <li><button className='bg-white p-3 hover:border-b-4 border-blue-950 rounded-b-md' onClick={() => handelFilter('breakfast')}>Breakfast</button></li>
        <li><button className='bg-white p-3 hover:border-b-4 border-blue-950 rounded-b-md' onClick={() => handelFilter('lunch')}>Lunch</button></li>
        <li><button className='bg-white p-3 hover:border-b-4 border-blue-950 rounded-b-md' onClick={() => handelFilter('dinner')}>Dinner</button></li>
        <li><button className='bg-white p-3 hover:border-b-4 border-blue-950 rounded-b-md' onClick={() => handelFilter('all')}>All</button></li>
      </ul>

      <Menu menuData = {menu}/>
    </div>
  )
}

export default Header