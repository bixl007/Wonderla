interface RideCardProps {
  ride: {
    name: string;
    location: string;
    description: string;
    video: string;
  };
}

const RideCard = ({ ride }: RideCardProps) => (
  <div className="relative w-[260px] h-[380px] rounded-3xl overflow-hidden bg-gray-800/50 backdrop-blur-sm flex-shrink-0 group">
    <video
      src={ride.video}
      title={ride.name}
      className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      autoPlay
      muted
      loop
      playsInline
    />
    <div className="absolute bottom-0 left-0 right-0 p-4 text-white flex flex-col justify-end h-full">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0" />
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-1">{ride.name}</h3>
        <p className="text-sm text-gray-300/70 mb-2">{ride.location}</p>
        <p className="text-xs h-12 overflow-hidden mb-3">{ride.description}</p>
        <button className="mt-2 w-[60%] bg-yellow-400 text-[#3d55d1] font-bold text-xs py-2 rounded-lg hover:bg-yellow-500 transition-colors">
          RIDE DETAILS
        </button>
      </div>
    </div>
  </div>
);

export default RideCard;
