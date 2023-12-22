import PropTypes from "prop-types";

const PatchTaskBanner = ({ newTaskBanner }) => {
  console.log(newTaskBanner);
  return (
    <>
      <img
        src={newTaskBanner}
        alt="Task Banner Image"
        height={300}
        className="max-h-96 w-full"
      />
    </>
  );
};

PatchTaskBanner.propTypes = {
  newTaskBanner: PropTypes.string,
};

export default PatchTaskBanner;
