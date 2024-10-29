import React from 'react'
import useFetch from './UseFetch'
   
const Menus: React.FC = () => 
  {

      const { data: blogs, isLoading, error } = useFetch('http://localhost:3000/blogposts');
return    (
    <div>
     menus
    </div>
    )

}

export default Menus
