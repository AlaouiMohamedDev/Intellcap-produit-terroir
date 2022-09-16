import React from 'react'

export default function Pagination({elementPerPage,totalElement,paginate}) {

    const pageNumbers = []

    for (let i=1;i<=Math.ceil(totalElement/elementPerPage);i++){
        pageNumbers.push(i)
    }
  return (
    <div className="justify-end flex items-center my-7 text-sm font-bold  space-x-3">
        {
            totalElement !=0
            &&
            <span>Pages</span>
        }
            {
                pageNumbers.map(num=>(
                    <span onClick={()=> paginate(num)} key={num} className="bg-dashBlack px-3 py-2">{num}</span>
                ))
            }

    </div>
  )
}
