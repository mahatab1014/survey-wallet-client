import Container from "../../components/Container/Container";
import SectionBanner from "../../components/SectionBanner/SectionBanner";
import HeroSlider from "./HeroSlider/HeroSlider";
import SurveyCard from "../../components/Cards/SurveyCard";
import useSurveysData from "../../hooks/useSurveysData";
import FaqForHome from "./FaqForHome";
import { useEffect } from "react";
import Aos from "aos";

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

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <>
      <HeroSlider />

      <section data-aos="fade-up">
        <Container>
          <div className="py-16">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 capitalize dark:text-white">
              explore our awesome
            </h2>

            <div className="diff aspect-[16/2] mt-3 rounded-box">
              <div className="diff-item-1">
                <div className="bg-primary text-primary-content text-2xl lg:text-8xl font-black grid place-content-center">
                  Survey Wallet
                </div>
              </div>
              <div className="diff-item-2">
                <div className="bg-base-200 text-2xl lg:text-8xl font-black grid place-content-center">
                  Survey Wallet
                </div>
              </div>
              <div className="diff-resizer"></div>
            </div>

            {/* <iframe
              className="min-w-full mt-12 h-64 md:h-[450px] rounded-xl overflow-hidden"
              src="https://vimeo.com/showcase/7060635/video/525707984/embed"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowfullscreen=""
            ></iframe> */}

            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2">
              <div
                className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700"
                data-aos="fade-right"
              >
                <div className="md:flex md:items-start md:-mx-4">
                  <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </span>

                  <div className="mt-4 md:mx-4 md:mt-0">
                    <h4 className="text-xl font-medium text-gray-700 capitalize dark:text-white">
                      Pro Membership for Enhanced Engagement
                    </h4>

                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                      Elevate your surveying experience by unlocking exclusive
                      features with our Pro Membership. Enjoy advanced
                      analytics, priority support, and the ability to leave
                      insightful comments on surveys.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700"
                data-aos="fade-left"
              >
                <div className="md:flex md:items-start md:-mx-4">
                  <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                  </span>

                  <div className="mt-4 md:mx-4 md:mt-0">
                    <h4 className="text-xl font-medium text-gray-700 capitalize dark:text-white">
                      Intuitive Dashboard for Seamless Survey Management
                    </h4>

                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                      Take control with our user-friendly dashboard. Admins can
                      effortlessly manage users, control survey visibility, and
                      analyze responses through interactive charts. Surveyors
                      benefit from streamlined survey creation and feedback
                      management.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700"
                data-aos="fade-right"
              >
                <div className="md:flex md:items-start md:-mx-4">
                  <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                      />
                    </svg>
                  </span>

                  <div className="mt-4 md:mx-4 md:mt-0">
                    <h4 className="text-xl font-medium text-gray-700 capitalize dark:text-white">
                      Robust Access Control for Customized Permissions
                    </h4>

                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                      Tailor user roles to match your team's responsibilities.
                      Admins wield comprehensive control, surveyors manage
                      survey creation and feedback, regular users participate,
                      and Pro members enjoy additional commenting privileges.
                      Achieve effective collaboration with customized
                      permissions.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700"
                data-aos="fade-left"
              >
                <div className="md:flex md:items-start md:-mx-4">
                  <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </span>

                  <div className="mt-4 md:mx-4 md:mt-0">
                    <h4 className="text-xl font-medium text-gray-700 capitalize dark:text-white">
                      Responsive Design for Any Device
                    </h4>

                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                      Access surveys anytime, anywhere! Our application is
                      designed to seamlessly adapt to various devices, ensuring
                      a consistent and enjoyable experience on desktops,
                      tablets, and mobiles. Engage with surveys on the go
                      without compromising on functionality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section data-aos="fade-up">
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
      <section data-aos="fade-up">
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

      <section className="bg-base-200" data-aos="fade-up">
        <Container>
          <FaqForHome />
        </Container>
      </section>

      <section data-aos="fade-up">
        <Container>
          <div className="relative flex">
            <div className="min-h-screen lg:w-1/3"></div>
            <div className="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>

            <div className="flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
              <h4 className="text-2xl font-semibold text-gray-800 capitalize md:text-4xl dark:text-white">
                What our <span className="text-blue-500">customers</span> <br />{" "}
                are saying
              </h4>

              <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
                <img
                  className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />

                <div className="mt-8 lg:px-10 lg:mt-0">
                  <h5 className="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                    A Game-Changer for Survey Enthusiasts!
                  </h5>

                  <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                    “ I've been using this survey platform for months, and it
                    has completely transformed the way I engage with opinions
                    and feedback. The Pro Membership offers incredible insights,
                    and the user-friendly dashboard makes survey management a
                    breeze. Whether you're a casual participant or a dedicated
                    surveyor, this application's responsive design ensures a
                    seamless experience across all devices. It's more than just
                    surveys; it's a game-changer for anyone passionate about
                    understanding perspectives! ”
                  </p>

                  <h3 className="mt-6 text-lg font-medium text-blue-500">
                    Ronik Ederson
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Marketing Manager at Stech
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-12 lg:justify-start">
                <button
                  title="left arrow"
                  className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  title="right arrow"
                  className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
