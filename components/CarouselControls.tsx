interface CarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

const CarouselControls = ({ onPrev, onNext }: CarouselControlsProps) => {
  return (
    <div className="flex space-x-4">
      <button
        onClick={onPrev}
        className="w-12 h-12 rounded-full bg-yellow-400 text-[#3d55d1] flex items-center justify-center hover:bg-yellow-500 hover:scale-110 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={onNext}
        className="w-12 h-12 rounded-full bg-yellow-400 text-[#3d55d1] flex items-center justify-center hover:bg-yellow-500 hover:scale-110 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default CarouselControls;
