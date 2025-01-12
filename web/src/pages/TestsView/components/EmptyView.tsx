import { Icon } from "@iconify/react";
import { Title, Text, Button } from "@mantine/core";
import { apiSlice } from "../../../store/slices/apiSlice";

export const EmptyView = () => {
  // API
  const getTestsAPIState = apiSlice.endpoints.getTests.useQueryState({});
  const getTestsAPI = apiSlice.endpoints.getTests.useQuerySubscription({});

  // HANDLERS
  const onRefresh = () => {
    getTestsAPI.refetch();
  };

  // DRAW
  return (
    <div className="w-fit mx-auto h-full flex items-center justify-center flex-col gap-8">
      <Icon icon="iconoir:file-not-found" height={80} />
      <div className="w-full flex items-center justify-center flex-col gap-0">
        <Title order={2}>Unable to connect to server</Title>
        <Text c="dimmed" size="lg" ta="center">
          Please ensure the local server is up and running
        </Text>
      </div>
      <Button
        fullWidth
        variant="light"
        size="lg"
        onClick={onRefresh}
        loading={getTestsAPIState.isFetching}
      >
        Refresh
      </Button>
    </div>
  );
};
