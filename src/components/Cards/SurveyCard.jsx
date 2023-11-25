/* eslint-disable react/prop-types */

import useAuth from "../../hooks/useAuth";
import "./SurveyCard.css";
import { FaComment, FaShare, FaThumbsDown, FaThumbsUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SurveyCard = ({ card, surveyTotalVote, badge }) => {
  const { user } = useAuth();

  return (
    <div className="card card-compact shadow-xl" id="survey-card">
      <div className="card-body mt-3">
        <h2 className="card-title">{card.title}</h2>
        <p>{card.description}</p>
      </div>
      <figure className="relative overflow-hidden h-60">
        <img className="transition-all" src={card.cover} alt="" />
        {badge && <span className="absolute top-3 right-3 badge">{badge}</span>}
      </figure>

      <div className="card-body">
        {user && (
          <div
            className="flex items-end justify-between lg:[&>div>span]:flex-nowrap
          [&>div]:flex [&>div]:flex-col
          text-center mb-2"
          >
            <div className="">
              <span className="text-xs">{card?.likes} Likes</span>
              <span className="btn btn-sm">
                <FaThumbsUp />
                Like
              </span>
            </div>
            <div className="!hidden sm:!flex md:!hidden xl:!flex">
              <span className="text-xs">{card?.dis_likes} Dislikes</span>
              <span className="btn btn-sm">
                <FaThumbsDown />
                Dislike
              </span>
            </div>

            <div>
              <span className="text-xs">{card?.comment} Comments</span>
              <span className="btn btn-sm">
                <FaComment />
                Comments
              </span>
            </div>
            <div>
              {/* <span>0 </span> */}
              <span className="btn btn-sm">
                <FaShare />
                Share
              </span>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div>
            <strong>Total Votes : </strong>
            <span>{surveyTotalVote}</span>
          </div>
          <div>
            <Link to={`/survey/${card._id}`}>
              <button className="primary-button !btn-sm">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyCard;
