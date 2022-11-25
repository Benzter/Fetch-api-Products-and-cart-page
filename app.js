fetch('https://dummyjson.com/products').then((data)=>{
  return data.json();
}).then((completedata)=>{
  //console.log(completedata.products[0].id);
  let data="";
  
  completedata.products.map((values)=>{
    data+=`<div class="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
    <div
      class="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300"
    >
      <figure class="mb-2">
        <img
          src="${values.thumbnail}"
          alt=""
          class="h-64 ml-auto mr-auto"
        />
      </figure>
      <div class="rounded-lg p-4 bg-purple-700 flex flex-col">
        <div>
          <h5 class="text-white text-2xl font-bold leading-none">
            ${values.title}
          </h5>
          <span class="text-xs text-gray-400 leading-none"
            >${values.description}</span
          >
        </div>
        <div class="flex items-center">
          <div class="text-lg text-white font-light">${values.price}</div>
          <button onclick="addToCart({id:${values.id},name:'${values.title}',price:${values.price}})"
            href="javascript:;"
            class="rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="stroke-current m-auto"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
    `
  }) 

  document.getElementById("cards").innerHTML=data;
  
}).catch((err)=>{
  console.log(err);
})



var cart = [];

function addToCart(item) {
  if (!cart.includes(item.id)) {
    cart.push(item.id);
    const cartItems = document.getElementById("cartItems");
    // let listItem = `<li id="list-item-${item.id}">${item.name} <i class="fa-solid fa-circle-xmark" onclick="removeCartItem(${item.id})"></i></li>`;
    let listItem = `
        <li id="list-item-${item.id}">
            <div class="container mx-4 my-4">
                <div class="w-64 border">
                <div class="p-4">
                    <h5 class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">${item.name}</h5>
                    <p>$${item.price}</p>
                    <button href="#" onclick="removeCartItem(${item.id})" class="bg-red-500 hover:bg-red-400 text-white px-4 py-2 inline-block mt-4 rounded"><i class="fa-solid fa-circle-xmark"></i></button>
                </div>
                </div>
            </div>
      </li>`;
    cartItems.innerHTML += listItem;
  }
}

function removeCartItem(itemId) {
  const cartItems = document.getElementById("cartItems");
  let i = document.getElementById("list-item-" + itemId);
  cartItems.removeChild(i);
  delete cart[cart.indexOf(itemId)];
}
