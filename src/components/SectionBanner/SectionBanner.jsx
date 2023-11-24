/* eslint-disable react/prop-types */
const SectionBanner = ({heading, description}) => {
  return (
    <div
      className="hero bg-fixed"
      style={{
        backgroundImage:
          "url(https://plus.unsplash.com/premium_photo-1661512057043-0b76d01a64c0)",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-70 py-40"></div>
      <div className="hero-content text-center text-neutral-content backdrop-blur p-10">
        <div className="max-w-md space-y-3">
          <h2 className="text-4xl md:text-5xl">{heading}</h2>
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;
