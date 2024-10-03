const Job = () => {

  const products = [
    {
      name: "Sugar",
      image: "/images/sugar.jpg",
      description: "edible, used in multiple foods source",
      brand: "goden penny, dangote, honey well",
      category: "beverages",
      price: 90000,
      stock: 50
    },
    {
      name: "flour",
      image: "/images/flour.jpg",
      description: "edible, used in multiple foods source",
      brand: "goden penny, dangote, honey well",
      category: "beverages",
      price: 60000,
      stock: 50
    },
    {
      name: "powdered Milk",
      image: "/images/milk.jpg",
      description: "edible, used in multiple foods source",
      brand: "Dano Full cream, dano skill milk, peak milk, cowbel milk",
      category: "beverages",
      price: 200000,
      stock: 0
    },

  
  
  ]
return (
  <div>
          <div className="h-screen relative">
              <div className="bg-black opacity-70 absolute z-40">

              </div>

              <img src="images/store.jpg" className="z-40  absolute w-full h-screen"/>

              <h1 className="text-center font-bold text-5xl z-50 absolute top-96 ml-64 shadow-xl text-red-500"> Welcome to our online Store</h1>
            </div>

              <div className="text-center flex items-center justify-center mt-10">
                <h1 className="text-3xl text-red-500">Our Products</h1>
              </div>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
                {products?.map((product, index) => (
                  <div className="shadow-xl px-20 py-20" key={index}>
                      <p className="text-2xl font-bold text-center uppercase">{product.name}</p>

                      <img src={product.image}/>
                      <p className="font.bold, text-green-600" > NGN {product.price} </p>
                      <button disabled={product?.stock === 0} className="bg-red-500 py-5 px-2 text-white rounded-xl w-full hover:bg-black">{product.stock > 0? 'Add to Cart': 'Out of Stock'  } </button>
                  </div>
                ))}

            </section>

    </div>
)
}

export default Job