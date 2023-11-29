import SpinnerLoader from "../../../components/PreLoader/SpinnerLoader";
import useAdmin from "../../../hooks/useAdmin";
import useTotalCount from "../../../hooks/useTotalCount";
import moment from "moment";

const DashHome = () => {
  const [totalCount, totalCountLoading] = useTotalCount();
  const [isAdmin, isAdminLoading] = useAdmin();

  if (isAdminLoading && totalCountLoading) {
    return <SpinnerLoader />;
  }

  const date = moment().format("MMMM Do YYYY");

  return (
    <section>
      {isAdmin === "admin" ? (
        <>
          <div className="flex justify-center py-10">
            <div className="stats stats-vertical lg:stats-horizontal shadow">
              <div className="stat place-items-center">
                <div className="stat-title">Total USER</div>
                <div className="stat-value text-secondary">
                  {String(totalCount?.total_user)}
                </div>
                <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
              </div>
              <div className="stat place-items-center">
                <div className="stat-title">Total Survey</div>
                <div className="stat-value">
                  {String(totalCount?.total_survey)}
                </div>
                <div className="stat-desc">From Start to {date}</div>
              </div>
              <div className="stat place-items-center">
                <div className="stat-title">Total Comments</div>
                <div className="stat-value">
                  {String(totalCount?.total_comment)}
                </div>
                <div className="stat-desc">From Start to {String(date)}</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title">Total Revenue</div>
                <div className="stat-value">
                  ${String(totalCount?.total_revenue[0]?.total)}
                </div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="mt-5 md:mt-0 md:p-5">
            <div className="mockup-window border bg-base-300">
              <div className="flex flex-col items-center px-4 py-16 bg-base-200">
                <h2 className="text-3xl">Sorry To Say</h2>
                <p className="text-lg mb-5">Here is your dashboard</p>
                <div className="diff aspect-[16/4]">
                  <div className="diff-item-1">
                    <div className="bg-primary text-primary-content text-3xl md:text-7xl font-black grid place-content-center">
                      DASHBOARD
                    </div>
                  </div>
                  <div className="diff-item-2">
                    <div className="bg-base-200 text-3xl md:text-7xl font-black grid place-content-center">
                      DASHBOARD
                    </div>
                  </div>
                  <div className="diff-resizer"></div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default DashHome;
