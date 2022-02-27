import React from 'react'
import '../style/Searchbar.css';
import {BsSearch} from 'react-icons/bs';

const Searchbar = () => {
  return (
    <div>
        <input type="text" className='searchBar'/>
        <button type="submit" className='btnSearch'> <BsSearch></BsSearch> </button>
    </div>
  )
}

export default Searchbar