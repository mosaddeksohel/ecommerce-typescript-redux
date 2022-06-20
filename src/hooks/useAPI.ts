import { useEffect, useState } from "react";

type StatusType = "idle" | "pending" | "success" | "error";
const useAPI = <T>(asyncService: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [error, seterror] = useState<string | null>(null);
  const [status, setstatus] = useState<StatusType>("idle");

  useEffect(() => {
    setstatus("pending");
    seterror(null);
    asyncService()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        seterror(err.message);
      });
  }, []);

  return {
    data,
    status,
  };
};

export default useAPI;
