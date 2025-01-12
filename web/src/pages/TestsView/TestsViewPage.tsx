import { Skeleton } from "@mantine/core";
import { apiSlice } from "../../store/slices/apiSlice";
import { EmptyView } from "./components/EmptyView";

export const TestsViewPage = () => {
  // API
  const getTestsAPI = apiSlice.useGetTestsQuery({});

  // VARIABLES
  const tests = getTestsAPI.data?.data ?? [];

  // DRAW
  return (
    <Skeleton visible={getTestsAPI.isLoading} className="w-full h-full">
      {getTestsAPI.error ? (
        <EmptyView />
      ) : tests.length > 0 ? (
        <div>Data View</div>
      ) : (
        <EmptyView />
      )}
    </Skeleton>
  );
};
