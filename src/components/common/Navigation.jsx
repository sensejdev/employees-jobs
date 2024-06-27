import { Spin } from "antd";
import { NavigationItem } from "./NavigationItem";

export function Navigation({ loading, services }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem 0.2rem",
      }}
    >
      {loading || !services ? (
        <Spin />
      ) : (
        services.map(({ id, jobId, title }) => {
          if (title) {
            return <NavigationItem key={id} jobId={jobId} title={title} />;
          }

          return null;
        })
      )}
    </div>
  );
}
