import Swal from "sweetalert2";
import PageTitle from "../../../components/PageTitle/PageTitle";
import SurveyTable from "../../../components/SurveyTable/SurveyTable";
import useSurveysData from "../../../hooks/useSurveysData";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const DashSurveyList = () => {
  const [surveysData, refetch] = useSurveysData();

  const axiosSecure = useAxiosSecure();

  const handleDeleteSurvey = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/survey/${id}`).then(() => {
          Swal.fire({
            title: "Deleted!",
            text: "Survey has been deleted.",
            icon: "success",
          }).then(() => {
            refetch();
          });
        });
      }
    });
  };
  const handleAddFeatured = (id) => {
    const postData = {
      featured: "true",
    };
    axiosSecure.post(`/survey-featured/${id}`, postData).then(() => {
      const dataRefetch = refetch();
      toast.promise(dataRefetch, {
        loading: "Adding...",
        success: <b>Featured added!</b>,
        error: <b>Could not added.</b>,
      });
    });
  };
  const handleRemoveFeatured = (id) => {
    const postData = {
      featured: "false",
    };
    axiosSecure.post(`/survey-featured/${id}`, postData).then(() => {
      const dataRefetch = refetch();
      toast.promise(dataRefetch, {
        loading: "Removing...",
        success: <b>Featured removed!</b>,
        error: <b>Could not remove.</b>,
      });
    });
  };

  return (
    <section>
      <PageTitle title="Survey List" />
      <div className="title py-8">
        <h2 className="text-3xl text-center">Survey List</h2>
        <div className="text-center">
          <span className="inline-block w-40 h-1 bg-orange-color rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Featured</th>
              <th>Name</th>
              <th className="tooltip tooltip-bottom" data-tip="Yes : No">
                Vote Data
              </th>
              <th>Category</th>
              <th>User</th>
              <th>Expire date</th>
              <th>Analytics</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {surveysData.map((survey, index) => (
              <SurveyTable
                key={survey?._id}
                survey={survey}
                index={index}
                handleDeleteSurvey={handleDeleteSurvey}
                handleAddFeatured={handleAddFeatured}
                handleRemoveFeatured={handleRemoveFeatured}
              />
            ))}
          </tbody>
          {/* <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>company</th>
              <th>location</th>
              <th>Last Login</th>
              <th>Favorite Color</th>
            </tr>
          </tfoot> */}
        </table>
      </div>
    </section>
  );
};

export default DashSurveyList;
