import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "antd";
import { filterEmployees } from "modules/app/actions";
import { selectAppState } from "modules/app/selectors";

export function NavigationItem({ jobId, title }) {
  const dispatch = useDispatch();
  const appState = useSelector(selectAppState);
  const action = useCallback(() => {
    dispatch(filterEmployees(jobId));
  }, [jobId, dispatch]);

  return (
    <Card
      bordered={jobId === appState.selectedJob}
      onClick={action}
      type="inner"
      style={{
        width: "300px",
      }}
    >
      {title}
    </Card>
  );
}
