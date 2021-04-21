import React from 'react';
import './search-box.style.css';
export const Searchbox= ({placeholder,handleChange})=>(
    <div >
        {/* <input onChange={e=>this.setState({searchField:e.target.value}, ()=> console.log(this.state))} type="search" placeholder={}/> */}
        <input className='search' onChange={handleChange} placeholder={placeholder}/>
    </div>
)