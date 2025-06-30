import TextSlider from "@/components/shop/TextSlider"
import CategoryGrid from "@/components/shop/CategoryGrid"
import ProductCarousel from "@/components/shop/ProductCarousel"
import CallToAction from "@/components/shop/CallToAction"
import HotDealsSection from "@/components/shop/HotDealsSection"
import CarouselBanner from "@/components/shop/CarouselBanner"
import NewArrivals from "@/components/shop/NewArrivals"

const ShopHome = () => {
  const electronics = [
    {
      id: 1,
      name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
      price: 29999,
      originalPrice: 34999,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop",
      discount: 14,
      isNew: true,
    },
    {
      id: 2,
      name: "Apple iPhone 14 Pro Max 256GB",
      price: 99999,
      originalPrice: 109999,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop",
      discount: 9,
      isNew: true,
    },
    {
      id: 3,
      name: "Samsung Galaxy S23 Ultra 5G",
      price: 79999,
      originalPrice: 89999,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop",
      discount: 11,
      isNew: true,
    },
    {
      id: 4,
      name: "Dell XPS 13 Plus Laptop Intel i7",
      price: 129999,
      originalPrice: 139999,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop",
      discount: 7,
      isNew: true,
    },
    {
      id: 5,
      name: "Bose QuietComfort Earbuds II",
      price: 19999,
      originalPrice: 24999,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop",
      discount: 20,
      isNew: true,
    },
    {
      id: 6,
      name: "MacBook Air M2 13-inch",
      price: 89999,
      originalPrice: 99999,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
      discount: 10,
      isNew: true,
    },
  ]

  const fashion = [
    {
      id: 1,
      name: "Dior Book Tote Canvas Bag",
      price: 199999,
      originalPrice: 219999,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop",
      discount: 9,
      isNew: true,
    },
    {
      id: 2,
      name: "Chanel Classic Flap Bag Medium",
      price: 399999,
      originalPrice: 419999,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop",
      discount: 5,
      isNew: true,
    },
    {
      id: 3,
      name: "Louis Vuitton Neverfull MM Monogram",
      price: 199999,
      originalPrice: 219999,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
      discount: 9,
      isNew: true,
    },
    {
      id: 4,
      name: "Balenciaga Hourglass Small Bag",
      price: 159999,
      originalPrice: 179999,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop",
      discount: 11,
      isNew: true,
    },
    {
      id: 5,
      name: "Fendi Peekaboo ISeeU Medium",
      price: 249999,
      originalPrice: 269999,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop",
      discount: 7,
      isNew: true,
    },
    {
      id: 6,
      name: "Gucci GG Marmont Matelassé Bag",
      price: 189999,
      originalPrice: 219999,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
      discount: 14,
      isNew: true,
    },
  ]

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      <TextSlider />
      <CarouselBanner />
      <CategoryGrid />

      <ProductCarousel
        title="Premium Electronics"
        products={electronics}
        gradientColors={{
          text: "from-blue-600 via-indigo-600 to-purple-600",
          button: "text-blue-600 hover:text-blue-800",
          buttonBg: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700",
        }}
      />

      <HotDealsSection />

      <ProductCarousel
        title="Luxury Fashion"
        products={fashion}
        gradientColors={{
          text: "from-pink-600 via-rose-600 to-red-600",
          button: "text-rose-600 hover:text-rose-800",
          buttonBg: "bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700",
          bg: "bg-gradient-to-br from-rose-50 to-pink-50",
        }}
      />

      <NewArrivals />
      <CallToAction />
    </div>
  )
}

export default ShopHome
