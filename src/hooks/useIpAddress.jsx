import { useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useIpAddress = () => {
  const [ipAddress, setIpAddress] = useState({});
  const axiosSecure = useAxiosSecure();
  // axiosSecure
  //   .get("https://api.ipify.org/?format=json")
  //   .then((res) => setIpAddress(res?.data));

  return [ipAddress];
};

export default useIpAddress;
