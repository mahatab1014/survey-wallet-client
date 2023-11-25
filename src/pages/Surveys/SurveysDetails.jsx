/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Container from "../../components/Container/Container";
import PrimaryHeading from "../../components/Heading/PrimaryHeading";
import { RadioGroup } from "@headlessui/react";
import {
  FaCheck,
  FaComment,
  FaShare,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa6";

import useAuth from "../../hooks/useAuth";
import PageTitle from "../../components/PageTitle/PageTitle";
import useSingleData from "../../hooks/useSingleData";
import { toast } from "react-hot-toast";

const SurveysDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [singleSurveyData, refetch] = useSingleData(id);
  const { likes, dis_likes, comments } = singleSurveyData;

  const [participate, setParticipate] = useState({});
  const [userSurveyLiked, setUserSurveyLiked] = useState({});
  const [userSurveyDisLiked, setUserSurveyDisLiked] = useState({});
  const [selected, setSelected] = useState();
  const handlePostSurvey = () => {
    const updatedOptions = singleSurveyData.options.map((option) => {
      if (option.name === "yes" && selected === "yes") {
        return { ...option, vote_count: parseInt(option.vote_count) + 1 };
      } else if (option.name === "no" && selected === "no") {
        return { ...option, vote_count: parseInt(option.vote_count) + 1 };
      } else {
        return option;
      }
    });
    const updatedUser = user?.email;

    const postData = {
      options: updatedOptions,
      participate_user: { user: updatedUser, vote: selected },
    };

    axiosSecure.post(`/survey/${id}`, postData).then((response) => {
      console.log(response.data);
      refetch();
    });
  };

  const handleLikes = async () => {
    const numberLike = parseInt(likes);

    const incressOne = numberLike + 1;
    const postData = {
      likes: incressOne,
      user_liked: {
        users_name: user?.displayName,
        email: user?.email,
        uid: user?.uid,
      },
    };
    if (!userSurveyLiked.liked) {
      axiosSecure
        .post(`/survey-likes-comments/${singleSurveyData?._id}`, postData)
        .then((res) => {
          console.log(res.data);
          refetch();
        });
    } else {
      toast.success("You already liked it");
    }
  };
  const handleDislikes = async () => {
    const numberDislikes = parseInt(dis_likes);
    const incressOne = numberDislikes + 1;
    const postData = {
      dis_likes: incressOne,
      user_dis_liked: {
        users_name: user?.displayName,
        email: user?.email,
        uid: user?.uid,
      },
    };

    if (!userSurveyDisLiked.dis_liked) {
      axiosSecure
        .post(`/survey-likes-comments/${singleSurveyData?._id}`, postData)
        .then((res) => {
          console.log(res.data);
          refetch();
        });
    } else {
      toast.success("You already disliked it");
    }
  };

  useEffect(() => {
    if (user && singleSurveyData && id) {
      axiosSecure
        .get(`/survey-parti-user?email=${user?.email}&id=${id}`)
        .then((response) => {
          setParticipate(response.data);
        });
      axiosSecure
        .get(`/survey-liked-user?email=${user?.email}&id=${id}`)
        .then((response) => {
          setUserSurveyLiked(response.data);
        });
      axiosSecure
        .get(`/survey-dis-liked-user?email=${user?.email}&id=${id}`)
        .then((response) => {
          setUserSurveyDisLiked(response.data);
        });
    }
  }, [axiosSecure, id, user, singleSurveyData]);

  console.log(userSurveyLiked);

  return (
    <section>
      <PageTitle title={singleSurveyData?.title} />
      <Container>
        <div className="py-10">
          <div className="card">
            <figure className="h-80">
              <img src={singleSurveyData?.cover} alt="" />
            </figure>
            <div className="card-body p-0 my-10">
              <PrimaryHeading heading_h1={singleSurveyData?.title} />
              <p>{singleSurveyData?.description}</p>

              <RadioGroup value={selected} onChange={setSelected}>
                <RadioGroup.Label className="sr-only">
                  Server size
                </RadioGroup.Label>
                <div className="space-y-2">
                  {singleSurveyData?.options?.map((survey) => (
                    <RadioGroup.Option
                      key={survey?.name}
                      value={survey?.name}
                      className={({ active, checked }) =>
                        `${
                          active
                            ? "ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300"
                            : ""
                        }
                  ${checked ? "bg-sky-900/75 text-white" : "bg-white"}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                      }
                    >
                      {({ checked }) => (
                        <>
                          <div className="flex w-full items-center justify-between">
                            <div className="flex items-center">
                              <div className="text-sm">
                                <RadioGroup.Label
                                  as="p"
                                  className={`font-medium capitalize  ${
                                    checked ? "text-white" : "text-gray-900"
                                  }`}
                                >
                                  {survey.name}
                                </RadioGroup.Label>
                                <RadioGroup.Description
                                  as="span"
                                  className={`inline ${
                                    checked ? "text-sky-100" : "text-gray-500"
                                  }`}
                                >
                                  <span aria-hidden="true">
                                    Total Vote : {survey?.vote_count}
                                  </span>{" "}
                                </RadioGroup.Description>
                              </div>
                            </div>
                            {checked && (
                              <div className="shrink-0 text-white">
                                <FaCheck className="text-xl" />
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}

                  <div className="text-center pt-5">
                    {participate.participate === true && (
                      <>
                        <p className="">
                          You Already Participate in this survey
                        </p>
                        <p className="uppercase mb-3">
                          Your given vote : {participate?.vote_data?.vote}
                        </p>
                      </>
                    )}
                    <button
                      disabled={participate?.participate}
                      onClick={handlePostSurvey}
                      className="primary-button btn-wide"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div className="card-body p-0">
              <div className="max-w-lg m-auto">
                <div
                  className="flex flex-wrap items-end justify-between lg:[&>div>span]:flex-nowrap
          [&>div]:flex [&>div]:flex-col
          text-center mb-2 gap-3"
                >
                  <div className="">
                    <span className="text-xs">{likes} Likes</span>
                    <button
                      disabled={userSurveyDisLiked?.dis_liked}
                      onClick={handleLikes}
                      className={`btn btn-sm  ${
                        userSurveyLiked?.liked && "btn-info"
                      }`}
                    >
                      <FaThumbsUp />
                      Like
                    </button>
                  </div>
                  <div className="">
                    <span className="text-xs">{dis_likes} Dislikes</span>
                    <button
                      disabled={userSurveyLiked?.liked}
                      onClick={handleDislikes}
                      className={`btn btn-sm  ${
                        userSurveyDisLiked?.dis_liked && "btn-info"
                      }`}
                    >
                      <FaThumbsDown />
                      Dislike
                    </button>
                  </div>

                  <div>
                    <span className="text-xs">
                      {!comments ? 0 : comments} Comments
                    </span>
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
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SurveysDetails;
