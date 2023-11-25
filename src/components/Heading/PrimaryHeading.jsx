/* eslint-disable react/prop-types */
const PrimaryHeading = ({heading_h1}) => {
    return (
      <div className="relative mt-5">
        <span className="absolute -z-30 left-5 -top-11  text-gray-300 text-7xl font-semibold">
          {heading_h1}
        </span>
        <h1 className="text-5xl font-semibold">{heading_h1}</h1>
      </div>
    );
};

export default PrimaryHeading;