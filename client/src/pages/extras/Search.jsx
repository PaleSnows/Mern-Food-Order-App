import React from 'react'
import {useDispatch} from 'react-redux'
import { filterProduct } from '../../redux/slices/productSLice'

const Search = () => {
  const items = [
    "Meat",
    "Vegetable",
    "Snacks",
    "Drinks"
  ]
  const dispatch = useDispatch()
  return (
    <div className='bg-black text-slate-300 p-3'>
      <h1 className='text-4xl py-5 font-semibold text-slate-400'>Search Bar</h1>
      {items.map((item,index)=>(
        <div key={index} className="">
         <button onClick={()=>dispatch(filterProduct(items))} className='p-5 w-full text-start border hover:scale-105 text-lg text-slate-300 font-semibold focus:bg-slate-500'> {item}</button>
        </div>
      ))}
    </div>
  )
}

export default Search