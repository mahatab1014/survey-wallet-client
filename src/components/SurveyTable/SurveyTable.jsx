/* eslint-disable react/prop-types */

import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { IoAnalyticsSharp } from "react-icons/io5";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SurveyTable = ({
  index,
  survey,
  handleDeleteSurvey,
  handleAddFeatured,
  handleRemoveFeatured,
}) => {
  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <tr>
      <th>{index}</th>
      <td>
        {survey?.featured !== "true" ? (
          <button
            onClick={() => handleAddFeatured(survey?._id)}
            className="btn btn-xs btn-circle btn-ghost text-orange-color text-xl"
          >
            <FaRegStar />
          </button>
        ) : (
          <button
            onClick={() => handleRemoveFeatured(survey?._id)}
            className="btn btn-xs btn-circle btn-ghost text-orange-color text-xl"
          >
            <FaStar />
          </button>
        )}
      </td>
      <td>
        <Link className="hover:underline" to={`/survey/${survey?._id}`}>{survey?.title}</Link>
      </td>
      <td>
        Yes: <strong>{survey?.options[0]?.vote_count}</strong> No:{" "}
        <strong>{survey?.options[1]?.vote_count}</strong>
      </td>
      <td>{survey?.category}</td>
      <td>{survey?.user?.email}</td>
      <td>{survey?.timestamp < currentDate ? "Expired" : survey?.timestamp}</td>
      <td>
        <button className="btn btn-xs btn-circle btn-info text-white text-xl">
          <IoAnalyticsSharp />
        </button>
      </td>
      <td>
        <button
          onClick={() => handleFeatured(survey?._id)}
          className="btn btn-xs btn-circle btn-ghost text-xl"
        >
          <AiOutlineEdit />
        </button>
      </td>
      <td>
        <button
          onClick={() => handleDeleteSurvey(survey?._id)}
          className="btn btn-xs btn-circle btn-error text-white text-xl"
        >
          <AiOutlineDelete />
        </button>
      </td>
    </tr>
  );
};

export default SurveyTable;
