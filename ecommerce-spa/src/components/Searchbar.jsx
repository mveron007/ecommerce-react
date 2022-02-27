import React from 'react'
import '../style/Searchbar.css';
import {BsSearch} from 'react-icons/bs';
import { InputGroup, FormControl, Button} from 'react-bootstrap';

const Searchbar = () => {
  return (
    <div>
        {/* <input type="text" className='searchBar'/>
        <button type="submit" className='btnSearch'> <BsSearch></BsSearch> </button> */}

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Buscar..."
          />
          <Button variant="outline-secondary" id="button-addon2">
           <BsSearch></BsSearch> 
          </Button>
        </InputGroup>
    </div>
  )
}

export default Searchbar