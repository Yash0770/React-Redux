import React from 'react'
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



function Home(props) {
    // console.warn('props',props);
    console.log('home', props.data);
  return (
    <div>
        <h1>Home Component</h1>
        <div className="cart-wrapper">
            <div className="img-wrapper item">
                <img src="https://www.reliancedigital.in/medias/Apple-iPhone-14-Pro-Mobile-Phone-493177782-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDg0NHxpbWFnZS9qcGVnfGltYWdlcy9oZTQvaGU5Lzk4OTA0NTExMjgzNTAuanBnfDVhMTNmZjZhMjMxNTUyYmJmOWQ3NDExNTUyNzI5ODM1YmI4YzI3MzhmNzdiNmQ5MjE1MDQ1YWRlNjk4OWZmMGU" alt="" srcset="" />
            </div>

            <div className="text-wrapper item"> 
                <span>iPhone </span>
                <span>Price: 1,20,000</span>
            </div>
            
            <div className="btn-wrapper item">
                <button onClick={()=> props.addToCartHandler({price:1200, name:'iPhone 14'})} type='text'>Add to Cart</button>
            </div>
            <div className='clear'></div>
        </div>
    </div>
  )
}

export default Home