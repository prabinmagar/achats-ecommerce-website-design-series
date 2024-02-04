import styled from "styled-components";
import { Container, Section } from "../../styles/styles";
import Title from "../common/Title";
import Slider from "react-slick";
import CustomNextArrow from "../common/CustomNextArrow";
import CustomPrevArrow from "../common/CustomPrevArrow";
import { feedbackData } from "../../data/data";
import { breakpoints, defaultTheme } from "../../styles/themes/default";

const FeedbackItemWrapper = styled.div`
  padding-left: 16px;
  padding-right: 16px;

  @media (max-width: ${breakpoints.sm}) {
    padding: 0;
  }

  .feedback-item-wrap {
    border-radius: 10px;
    border: 1px solid ${defaultTheme.color_platinum};
    padding: 20px;
    height: 320px;
    transition: ${defaultTheme.default_transition};

    &:hover {
      background-color: ${defaultTheme.color_sea_green};
      border-color: ${defaultTheme.color_sea_green};

      .rating {
        color: ${defaultTheme.color_white};
      }

      .feedback-icon {
        border-color: ${defaultTheme.color_white};
      }

      .feedback-body,
      .feedback-intro {
        p,
        span {
          color: ${defaultTheme.color_white};
        }
      }
    }
  }

  .feedback-top {
    column-gap: 18px;
  }

  .feedback-icon {
    border-radius: 100%;
    overflow: hidden;
    border: 2px solid ${defaultTheme.color_white};

    img {
      scale: 1.1;
    }
  }

  .rating {
    margin: 14px 0;
    column-gap: 4px;
  }
`;

const Feedback = () => {
  const settings = {
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Section>
      <Container>
        <Title titleText={"Feedback"} />
        <Slider
          nextArrow={<CustomNextArrow />}
          prevArrow={<CustomPrevArrow />}
          {...settings}
        >
          {feedbackData?.map((feedback) => {
            return (
              <FeedbackItemWrapper key={feedback.id}>
                <div className="feedback-item-wrap bg-white">
                  <div className="feedback-top flex items-center">
                    <div className="feedback-icon">
                      <img
                        src={feedback.imgSource}
                        className="object-fit-cover"
                        alt=""
                      />
                    </div>
                    <div className="feedback-intro">
                      <p className="font-semibold text-base">{feedback.name}</p>
                      <span className="text-sm">{feedback.designation}</span>
                    </div>
                  </div>
                  <ul className="rating text-yellow flex items-center">
                    {[...Array(feedback.rating).keys()].map((index) => (
                      <li key={index}>
                        <i className="bi bi-star-fill"></i>
                      </li>
                    ))}
                    {[...Array(5 - feedback.rating).keys()].map((index) => (
                      <li key={index + feedback.rating}>
                        <i className="bi bi-star"></i>
                      </li>
                    ))}
                  </ul>
                  <div className="feedback-body text-gray">
                    <p className="text-base">{feedback.feedbackText}</p>
                  </div>
                </div>
              </FeedbackItemWrapper>
            );
          })}
        </Slider>
      </Container>
    </Section>
  );
};

export default Feedback;
