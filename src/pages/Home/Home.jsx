import Container from "../../components/Container/Container";
import SectionBanner from "../../components/SectionBanner/SectionBanner";
import HeroSlider from "./HeroSlider/HeroSlider";
import SurveyCard from "../../components/Cards/SurveyCard";
import useSurveysData from "../../hooks/useSurveysData";

const Home = () => {
  const [surveyData] = useSurveysData();

  const featuredData = surveyData?.filter((item) => item?.featured === "true");

  const latestData = surveyData?.filter(
    (item) => item?.create_date !== undefined
  );
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-5">
            {featuredData?.map((data) => {
              const surveyTotalVote = data.options.reduce(
                (acc, option) => acc + parseInt(option.vote_count),
                0
              );
              return (
                <SurveyCard
                  key={data._id}
                  surveyTotalVote={surveyTotalVote}
                  card={data}
                  badge={"Featured"}
                />
              );
            })}
          </div>
        </Container>
      </section>
      <section>
        <SectionBanner heading="Latest Surveys" />
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-5">
            {latestSixSurveys?.map((data) => {
              const surveyTotalVote = data.options.reduce(
                (acc, option) => acc + parseInt(option.vote_count),
                0
              );
              return (
                <SurveyCard
                  key={data._id}
                  surveyTotalVote={surveyTotalVote}
                  card={data}
                />
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
