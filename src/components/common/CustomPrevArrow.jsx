import { CustomPrevArrowWrapper } from "../../styles/slider";
import { PropTypes } from "prop-types";
import { BsChevronLeft } from "react-icons/bs";

const CustomPrevArrow = ({ onClick }) => {
  return (
    <CustomPrevArrowWrapper className="custom-prev-arrow" onClick={onClick}>
      <BsChevronLeft />
    </CustomPrevArrowWrapper>
  );
};

export default CustomPrevArrow;

CustomPrevArrow.propTypes = {
  onClick: PropTypes.func,
};
