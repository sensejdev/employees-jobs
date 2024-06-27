import { ProfileGrid } from "components/common/ProfileGrid";
import useFetch from "hooks/useFetch";
import { EMPLOYEES } from "modules/api/endpoints";
import { selectAppState } from "modules/app/selectors";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

export function Employees() {
  const { response, performFetch } = useFetch(EMPLOYEES);
  const { loading, data } = response;
  const appState = useSelector(selectAppState);

  useEffect(() => {
    performFetch();
  }, [performFetch]);

  const preparedData = useMemo(() => {
    if (!Array.isArray(data)) {
      return [];
    }

    if (!appState.selectedJob) {
      return data;
    }

    return data.filter((employee) => employee.job === appState.selectedJob);
  }, [data, appState.selectedJob]);

  return (
    <div>
      <ProfileGrid loading={loading} services={preparedData} />
    </div>
  );
}
