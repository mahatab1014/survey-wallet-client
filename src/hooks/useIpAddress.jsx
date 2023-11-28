import { useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useIpAddress = () => {
  const [ipAddress, setIpAddress] = useState({});
  const axiosPublic = useAxiosPublic();
  // axiosSecure
  //   .get("https://api.ipify.org/?format=json")
  //   .then((res) => setIpAddress(res?.data));

  return [ipAddress];
};

export default useIpAddress;
