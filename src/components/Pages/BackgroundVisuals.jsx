import monitorImg from "../../assets/monitor.png";
import cardImg from "../../assets/card.png";

export default function BackgroundVisuals() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Orange balls */}
      <div className="absolute top-12 left-8 w-10 h-10 bg-orange-400 rounded-full blur-md opacity-70 animate-pulse" />
      <div className="absolute top-20 right-24 w-6 h-6 bg-orange-300 rounded-full blur-sm opacity-60 animate-ping" />
      <div className="absolute bottom-16 left-[30%] w-24 h-24 bg-orange-200 rounded-full blur-2xl opacity-40 animate-pulse" />
      <div className="absolute top-[50%] right-[20%] w-16 h-16 bg-orange-500 rounded-full blur-xl opacity-50 animate-ping" />
        
      {/* Orange crystals */}
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

      {/* White-Orange Gradient Glow Ball */}
      <div className="absolute top-[70%] right-[35%] w-20 h-20 bg-gradient-to-br from-white via-orange-300 to-orange-500 rounded-full opacity-100 z-10" />

      {/* Monitor Image */}
      <img
        src={monitorImg}
        alt="Monitor"
        className="absolute right-1 top-1 w-[300px] md:w-[900px] z-20"
      />

      {/* Card Image */}
      <img
        src={cardImg}
        alt="Card"
        className="absolute left-[45%] top-[5%] translate-x-[-50%] w-[450px] md:w-[850px] rotate-6 z-30"
      />
    </div>
  );
}
