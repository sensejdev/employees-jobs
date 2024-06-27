import { Card, Flex, Spin } from "antd";

export function ProfileGrid({ loading, services = [] }) {
  return (
    <Flex wrap justify="space-around" gap="1rem">
      {loading || !services ? (
        <Spin />
      ) : (
        services.map((employee) => (
          <Card
            key={employee.id}
            title={employee.name}
            bordered={true}
            style={{ flexBasis: 300 }}
          >
            <p>
              <strong>About:</strong> {employee.about}
            </p>
            <p>
              <strong>Email:</strong> {employee.email}
            </p>
            <p>
              <strong>Job:</strong> {employee.job}
            </p>
          </Card>
        ))
      )}
    </Flex>
  );
}
