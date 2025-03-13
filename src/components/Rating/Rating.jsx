const Rating = ({ data }) => {
  return [...Array(5)].map((_, i) => {
    const percentage = Math.min(Math.max(data.rating - i, 0), 1) * 100;
    return (
      <div key={i} className="relative w-[14px] h-[14px]">
        <img
          className="absolute inset-0"
          src="/images/ico_star_gray.png"
          alt="star"
        />
        <div
          className="absolute inset-0 bg-yellow-400"
          style={{
            width: `${percentage}%`,
            maskImage: "url('/images/ico_star_active.png')",
            WebkitMaskImage: "url('/images/ico_star_active.png')",
            maskSize: "cover",
            WebkitMaskSize: "cover",
          }}
        />
      </div>
    );
  });
};

export default Rating;
