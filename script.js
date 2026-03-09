let Destinations = [
  {
    name: "Malioboro Yogyakarta",
    price: "Rp. 1.400.000",
    include: "Hotel, makanan, minuman, transportasi",
    image: "https://images.unsplash.com/photo-1706865369220-246f8b3a93dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsaW9ib3JvJTIweW9neWFrYXJ0YXxlbnwwfHwwfHx8MA%3D%3D",
  },

  {
    name: "Tangkuban Perahu Medan",
    price: "Rp. 2.600.000",
    include: "Hotel, makanan, minuman, transportasi",
    image: "https://images.unsplash.com/photo-1618477145434-329052afd844?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGFuZ2t1YmFuJTIwcGVyYWh1fGVufDB8fDB8fHww",
  },

  {
    name: "Lemukutan Pontianak",
    price: "Rp. 2.300.000",
    include: "Hotel, makanan, minuman, transportasi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1-ikh56Ookoc__W0VR6GK-_mu44ZGEt2tfg&s",
  },

  {
    name: "Pantai Selatan Bantul Yogyakarta",
    price: "Rp. 1.700.000",
    include: "Hotel, makanan, minuman, transportasi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOxMCTq6FMTDcGQBLQqftmgcHzeFXn-2ZPpg&s",
  },

  {
    name: "Pantai Selatan Bantul Yogyakarta",
    price: "Rp. 1.700.000",
    include: "Hotel, makanan, minuman, transportasi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOxMCTq6FMTDcGQBLQqftmgcHzeFXn-2ZPpg&s",
  },

  {
    name: "Pantai Selatan Bantul Yogyakarta",
    price: "Rp. 1.700.000",
    include: "Hotel, makanan, minuman, transportasi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOxMCTq6FMTDcGQBLQqftmgcHzeFXn-2ZPpg&s",
  },

  {
    name: "Pantai Selatan Bantul Yogyakarta",
    price: "Rp. 1.700.000",
    include: "Hotel, makanan, minuman, transportasi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOxMCTq6FMTDcGQBLQqftmgcHzeFXn-2ZPpg&s",
  },

  {
    name: "Pantai Selatan Bantul Yogyakarta",
    price: "Rp. 1.700.000",
    include: "Hotel, makanan, minuman, transportasi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOxMCTq6FMTDcGQBLQqftmgcHzeFXn-2ZPpg&s",
  },
  
  {
    name: "Pantai Selatan Bantul Yogyakarta",
    price: "Rp. 1.700.000",
    include: "Hotel, makanan, minuman, transportasi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOxMCTq6FMTDcGQBLQqftmgcHzeFXn-2ZPpg&s",
  },

  {
    name: "Pantai Selatan Bantul Yogyakarta",
    price: "Rp. 1.700.000",
    include: "Hotel, makanan, minuman, transportasi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOxMCTq6FMTDcGQBLQqftmgcHzeFXn-2ZPpg&s",
  },

  {
    name: "Pantai Selatan Bantul Yogyakarta",
    price: "Rp. 1.700.000",
    include: "Hotel, makanan, minuman, transportasi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOxMCTq6FMTDcGQBLQqftmgcHzeFXn-2ZPpg&s",
  },

  {
    name: "Pantai Selatan Bantul Yogyakarta",
    price: "Rp. 1.700.000",
    include: "Hotel, makanan, minuman, transportasi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOxMCTq6FMTDcGQBLQqftmgcHzeFXn-2ZPpg&s",
  },
];

const cardContainer = document.getElementById("kartu-produk");

Destinations.forEach((produk) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
                <img src="${produk.image}" alt="${produk.name}">
                <div class="card">
                    <h3>${produk.name}</h3>
                    <h4>${produk.price}</h4>
                    <h5>${produk.include}</h5>
                </div>
                <button onclick="add-button()">Tambahkan destinasimu</button>
                 `;
  cardContainer.appendChild(card);
});
