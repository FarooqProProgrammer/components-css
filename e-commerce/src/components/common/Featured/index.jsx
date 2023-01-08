import React from 'react'
import "./index.css"


const Featured = () => {
    const images = [
        'https://images.unsplash.com/photo-1671726805768-93b4c260766b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        "https://plus.unsplash.com/premium_photo-1663851785937-55741bca4abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1672760164718-8e42d512fd88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1672957581665-bdc4a16b8347?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1672939744516-3c7a8c38330f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    ]
  return (
    <>
        <div className="featured">
            <h4>Featured List</h4>
        </div>


        <div className="productList grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-rows-1 place-items-center">
            {
                images.map((item)=>{
                    return (
                        <div className="first">
                                <img src={item} className="w-full h-full" alt="" />
                        </div>

                    )
                })
            }
            
        </div>
    </>
  )
}

export default Featured