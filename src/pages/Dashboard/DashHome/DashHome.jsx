import SpinnerLoader from "../../../components/PreLoader/SpinnerLoader";
import useTotalCount from "../../../hooks/useTotalCount";
import moment from "moment";

const DashHome = () => {
  const [totalCount, totalCountLoading] = useTotalCount();

  if (totalCountLoading) {
    return <SpinnerLoader />;
  }

  const date = moment().format("MMMM Do YYYY");


  console.log(date);
  
  return (
    <section>
      <div className="flex justify-center py-10">
        <div className="stats stats-vertical lg:stats-horizontal shadow">
          <div className="stat place-items-center">
            <div className="stat-title">Total USER</div>
            <div className="stat-value text-secondary">
              {totalCount?.total_user}
            </div>
            <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title">Total Survey</div>
            <div className="stat-value">{totalCount?.total_survey}</div>
            <div className="stat-desc">From Start to {date}</div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title">Total Comments</div>
            <div className="stat-value">{totalCount?.total_comment}</div>
            <div className="stat-desc">From Start to {date}</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Total Revenue</div>
            <div className="stat-value">
              ${totalCount?.total_revenue[0]?.total}
            </div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashHome;
