/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{`${title} | Survey Wallet`}</title>
    </Helmet>
  );
};

export default PageTitle;
