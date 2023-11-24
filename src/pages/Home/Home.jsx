import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import SectionBanner from "../../components/SectionBanner/SectionBanner";
import HeroSlider from "./HeroSlider/HeroSlider";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios("/survey.json").then((response) => setData(response.data));
  }, []);

  const featuredData = data?.filter((item) => item?.featured === "true");

  const latestData = data?.filter((item) => item?.create_date !== undefined);
  const sortedData = latestData?.sort(
    (a, b) => new Date(b.create_date) - new Date(a.create_date)
  );
  const latestSixSurveys = sortedData?.slice(0, 6);

  return (
    <>
      <HeroSlider />

      <section>
        <SectionBanner heading="Featured Surveys" />
        <Container>
          <div className="grid grid-cols-3 py-10 gap-5">
            {featuredData?.map((data, index) => {
              const surveyTotalVote = data.options.reduce(
                (acc, option) => acc + parseInt(option.vote_count),
                0
              );
              return (
                <div className="card card-compact shadow-xl" key={index}>
                  <figure className="relative">
                    <img src={data.cover} alt="" />
                    <span className="absolute top-3 right-3 badge">
                      Featured
                    </span>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{data.title}</h2>
                    <p>{data.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <strong>Total Votes : </strong>
                        <span>{surveyTotalVote}</span>
                      </div>
                      <div>
                        <button className="primary-button !btn-sm">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
      <section>
        <SectionBanner heading="Latest Surveys" />
        <Container>
          <div className="grid grid-cols-3 py-10 gap-5">
            {latestSixSurveys?.map((data, index) => {
              const surveyTotalVote = data.options.reduce(
                (acc, option) => acc + parseInt(option.vote_count),
                0
              );
              return (
                <div className="card card-compact shadow-xl" key={index}>
                  <figure className="relative">
                    <img src={data.cover} alt="" />
                    <span className="absolute top-3 right-3 badge">Latest</span>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{data.title}</h2>
                    <p>{data.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <strong>Total Votes : </strong>
                        <span>{surveyTotalVote}</span>
                      </div>
                      <div>
                        <button className="primary-button !btn-sm">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
