const dummyProducts = [
  // Fashion & Apparel (10 items)
  {
    id: 1,
    title: "Leather Jacket",
    price: 7999,
    slug: "fashion-apparel",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Classic black leather jacket made from genuine leather.",
  },
  {
    id: 2,
    title: "Running Shoes",
    price: 3499,
    slug: "fashion-apparel",
    image:
      "https://images.unsplash.com/photo-1528701800489-2ed60777c77a?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Lightweight and breathable running shoes.",
  },
  {
    id: 3,
    title: "Denim Jeans",
    price: 2999,
    slug: "fashion-apparel",
    image:
      "https://images.unsplash.com/photo-1495121605193-b116b5b09a44?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Comfortable slim-fit denim jeans for daily wear.",
  },
  {
    id: 4,
    title: "Casual T-Shirt",
    price: 999,
    slug: "fashion-apparel",
    image:
      "https://images.unsplash.com/photo-1520975695851-c6984a1a88b2?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Cotton casual t-shirt available in multiple colors.",
  },
  {
    id: 5,
    title: "Formal Shirt",
    price: 1999,
    slug: "fashion-apparel",
    image:
      "https://images.unsplash.com/photo-1525382455947-f319bc05a920?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Perfect formal shirt for office and events.",
  },
  {
    id: 6,
    title: "Summer Dress",
    price: 2599,
    slug: "fashion-apparel",
    image:
      "https://images.unsplash.com/photo-1520974734767-3a5c1eae4348?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Lightweight summer dress with floral prints.",
  },
  {
    id: 7,
    title: "Sneakers",
    price: 3999,
    slug: "fashion-apparel",
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Stylish sneakers suitable for casual outings.",
  },
  {
    id: 8,
    title: "Wool Sweater",
    price: 4499,
    slug: "fashion-apparel",
    image:
      "https://images.unsplash.com/photo-1534157140401-c46aefb3e962?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Warm wool sweater for cold seasons.",
  },
  {
    id: 9,
    title: "Leather Belt",
    price: 799,
    slug: "fashion-apparel",
    image:
      "https://images.unsplash.com/photo-1533001438660-51a5f8f7c5e2?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Durable leather belt with metal buckle.",
  },
  {
    id: 10,
    title: "Baseball Cap",
    price: 599,
    slug: "fashion-apparel",
    image:
      "https://images.unsplash.com/photo-1520974729163-8032c3d94d02?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Classic baseball cap with adjustable strap.",
  },

  // Electronics (10 items)
  {
    id: 11,
    title: "Smartphone XYZ",
    price: 19999,
    slug: "electronics",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Latest smartphone with 6.5-inch display and dual cameras.",
  },
  {
    id: 12,
    title: "Bluetooth Headphones",
    price: 4999,
    slug: "electronics",
    image:
      "https://images.unsplash.com/photo-1580894894519-4f8ca5a3a2a4?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Wireless headphones with noise cancellation.",
  },
  {
    id: 13,
    title: "Smart TV 50 inch",
    price: 34999,
    slug: "electronics",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "50 inch 4K UHD Smart TV with HDR support.",
  },
  {
    id: 14,
    title: "Portable Bluetooth Speaker",
    price: 2999,
    slug: "electronics",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Compact portable speaker with deep bass.",
  },
  {
    id: 15,
    title: "Wireless Mouse",
    price: 799,
    slug: "electronics",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Ergonomic wireless mouse with long battery life.",
  },
  {
    id: 16,
    title: "4K Action Camera",
    price: 8999,
    slug: "electronics",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Compact 4K action camera with waterproof design.",
  },
  {
    id: 17,
    title: "Wireless Charger",
    price: 1299,
    slug: "electronics",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Fast wireless charger compatible with most devices.",
  },
  {
    id: 18,
    title: "Laptop Stand",
    price: 1999,
    slug: "electronics",
    image:
      "https://images.unsplash.com/photo-1557200134-2b1c2c7f6ac0?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Adjustable aluminum laptop stand for better ergonomics.",
  },
  {
    id: 19,
    title: "Fitness Tracker",
    price: 3999,
    slug: "electronics",
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Fitness tracker with heart rate and sleep monitoring.",
  },
  {
    id: 20,
    title: "Smart Home Hub",
    price: 6999,
    slug: "electronics",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Smart home hub to control lights, thermostat, and more.",
  },

  // Computers (10 items)
  {
    id: 21,
    title: "Gaming Laptop",
    price: 75999,
    slug: "computers",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "High-performance gaming laptop with RTX 3060 GPU.",
  },
  {
    id: 22,
    title: "Mechanical Keyboard",
    price: 6999,
    slug: "computers",
    image:
      "https://images.unsplash.com/photo-1585079540578-7f4c92077b18?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "RGB backlit mechanical keyboard with blue switches.",
  },
  {
    id: 23,
    title: "Wireless Gaming Mouse",
    price: 3999,
    slug: "computers",
    image:
      "https://images.unsplash.com/photo-1570813095110-4d2f90d6a0e3?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Ergonomic wireless gaming mouse with adjustable DPI.",
  },
  {
    id: 24,
    title: "27-inch Monitor",
    price: 13999,
    slug: "computers",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Full HD 27-inch monitor with thin bezels.",
  },
  {
    id: 25,
    title: "External SSD 1TB",
    price: 7999,
    slug: "computers",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Fast external SSD drive with 1TB storage capacity.",
  },
  {
    id: 26,
    title: "USB-C Hub",
    price: 2999,
    slug: "computers",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Multi-port USB-C hub with HDMI and USB 3.0 ports.",
  },
  {
    id: 27,
    title: "Webcam HD",
    price: 2499,
    slug: "computers",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "HD webcam perfect for video calls and streaming.",
  },
  {
    id: 28,
    title: "Laptop Backpack",
    price: 3499,
    slug: "computers",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Durable backpack with laptop compartment and USB port.",
  },
  {
    id: 29,
    title: "Gaming Chair",
    price: 8999,
    slug: "computers",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Comfortable ergonomic gaming chair with lumbar support.",
  },
  {
    id: 30,
    title: "Wireless Earbuds",
    price: 2999,
    slug: "computers",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Compact wireless earbuds with charging case.",
  },

  // Home & Garden (10 items)
  {
    id: 31,
    title: "Indoor Plant Set",
    price: 1499,
    slug: "home-garden",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Set of 3 easy-to-care indoor plants.",
  },
  {
    id: 32,
    title: "Garden Tool Kit",
    price: 2599,
    slug: "home-garden",
    image:
      "https://images.unsplash.com/photo-1556911073-52527ac437f5?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Complete garden tool kit with essential tools.",
  },
  {
    id: 33,
    title: "Decorative Wall Clock",
    price: 1999,
    slug: "home-garden",
    image:
      "https://images.unsplash.com/photo-1520275128451-b3155b4f588e?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Modern wall clock with elegant design.",
  },
  {
    id: 34,
    title: "LED Floor Lamp",
    price: 3499,
    slug: "home-garden",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Stylish LED floor lamp with adjustable brightness.",
  },
  {
    id: 35,
    title: "Kitchen Knife Set",
    price: 2999,
    slug: "home-garden",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Premium kitchen knife set with wooden block.",
  },
  {
    id: 36,
    title: "Ceramic Vase",
    price: 899,
    slug: "home-garden",
    image:
      "https://images.unsplash.com/photo-1524594157363-23608e6768ae?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Elegant ceramic vase for home decoration.",
  },
  {
    id: 37,
    title: "Cotton Bedsheet Set",
    price: 2199,
    slug: "home-garden",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Soft cotton bedsheet set with pillow covers.",
  },
  {
    id: 38,
    title: "Wall Art Paintings",
    price: 2999,
    slug: "home-garden",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Set of 3 abstract wall art paintings.",
  },
  {
    id: 39,
    title: "Outdoor Patio Set",
    price: 17999,
    slug: "home-garden",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Comfortable outdoor patio set with table and chairs.",
  },
  {
    id: 40,
    title: "Smart Thermostat",
    price: 5999,
    slug: "home-garden",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Smart thermostat for efficient home temperature control.",
  },

  // Collectibles (10 items)
  {
    id: 41,
    title: "Vintage Comic Book",
    price: 1299,
    slug: "collectibles",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Rare vintage comic book from the 1970s.",
  },
  {
    id: 42,
    title: "Antique Pocket Watch",
    price: 8999,
    slug: "collectibles",
    image:
      "https://images.unsplash.com/photo-1524156868115-e42e1a94e5e9?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Beautifully crafted antique pocket watch.",
  },
  {
    id: 43,
    title: "Collector's Edition Vinyl",
    price: 3499,
    slug: "collectibles",
    image:
      "https://images.unsplash.com/photo-1508747703725-d4e1f0d4d0e1?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Limited edition vinyl record for collectors.",
  },
  {
    id: 44,
    title: "Vintage Camera",
    price: 7999,
    slug: "collectibles",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Fully functional vintage film camera.",
  },
  {
    id: 45,
    title: "Antique Typewriter",
    price: 6999,
    slug: "collectibles",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Classic antique typewriter in good condition.",
  },
  {
    id: 46,
    title: "Retro Game Console",
    price: 3999,
    slug: "collectibles",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Vintage retro game console for nostalgic gaming.",
  },
  {
    id: 47,
    title: "Signed Baseball",
    price: 1499,
    slug: "collectibles",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Baseball signed by famous players.",
  },
  {
    id: 48,
    title: "Limited Edition Poster",
    price: 899,
    slug: "collectibles",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Limited edition collectible poster.",
  },
  {
    id: 49,
    title: "Classic Vinyl Records",
    price: 2599,
    slug: "collectibles",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Set of classic vinyl records for audiophiles.",
  },
  {
    id: 50,
    title: "Vintage Toy Car",
    price: 3499,
    slug: "collectibles",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=300&q=80",
    fallbackImage: "https://via.placeholder.com/300x200?text=No+Image",
    description: "Rare vintage toy car in mint condition.",
  },
];

export default dummyProducts;