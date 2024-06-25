import { Spin } from "antd";
import { Card } from "antd";

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
            return (
              <Card
                type="inner"
                key={id}
                style={{
                  width: "300px",
                }}
              >
                {title}
              </Card>
            );
          }

          return null;
        })
      )}
    </div>
  );
}
