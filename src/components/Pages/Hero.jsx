export default function Hero() {
    return (
      <div className="flex flex-col justify-center max-w-xl pl-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 space-y-4 flex flex-col">
          <div>The Next</div>
          <div className="text-green-400">Generation</div>
          <div>Bidding &</div>
          <div>Shopping Platform</div>
        </h1>
        <p className="text-gray-300 text-xl mb-8">
          Experience a powerful and user-friendly way to bid on auctions and shop for products.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium w-fit">
          Get Started
        </button>
      </div>
    );
  }
  