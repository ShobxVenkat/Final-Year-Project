import Navbar from "../Layouts/Header/Navbar.jsx";
import monitorImg from "../../assets/monitor.png";
import cardImg from "../../assets/card.png";
import { Button } from "@mui/material";

const Home = () => (
  <div className="relative min-h-screen bg-[#0E0F1B] text-white overflow-hidden flex flex-col">
    <Navbar />

    {/* Background gradient */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute top-12 left-8 w-10 h-10 bg-orange-400 rounded-full blur-md opacity-70 animate-pulse" />
      <div className="absolute top-20 right-24 w-6 h-6 bg-orange-300 rounded-full blur-sm opacity-60 animate-ping" />
      <div className="absolute bottom-16 left-[30%] w-24 h-24 bg-orange-200 rounded-full blur-2xl opacity-40 animate-pulse" />
      <div className="absolute top-[50%] right-[20%] w-16 h-16 bg-orange-500 rounded-full blur-xl opacity-50 animate-ping" />

      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-orange-300 opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="absolute top-[70%] right-[35%] w-20 h-20 bg-gradient-to-br from-white via-orange-300 to-orange-500 rounded-full opacity-100 z-10" />

      <img
        src={monitorImg}
        alt="Monitor"
        className="absolute right-1 top-1 w-[300px] md:w-[900px] z-20"
      />
      <img
        src={cardImg}
        alt="Card"
        className="absolute left-[45%] top-[5%] translate-x-[-50%] w-[450px] md:w-[850px] rotate-6 z-30"
      />
    </div>

    {/* Hero content */}
    <div className="relative z-10 flex flex-col md:flex-row justify-start items-center px-6 py-6 md:py-12 flex-grow">
      <div className="flex flex-col justify-center max-w-xl text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          <div>The Next</div>
          <div className="text-green-400">Generation</div>
          <div>Bidding &</div>
          <div>Shopping Platform</div>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
          Experience a powerful and user-friendly way to bid on auctions and shop for products.
        </p>
        <div className="flex justify-center md:justify-start">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#22c55e",
              "&:hover": { backgroundColor: "#16a34a" },
              paddingX: 3,
              paddingY: 1.5,
              fontWeight: "bold",
              borderRadius: 2,
              textTransform: "none",
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
