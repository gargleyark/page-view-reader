import React from "react";
import useLogs from '../../context/LogsContext/useLogs';
import PageViewData from '../PageViewData';

const AllPageViews = (): JSX.Element => {
  const { logs } = useLogs();

  const pageViewCount = logs.reduce<Record<string, number>>((prev, { page }) => {
    if (prev[page]) {
      return { ...prev, [page]: prev[page] + 1}
    }

    return { ...prev, [page]: 1}
  }, {});

  return (
    <div>
      <h2>All page views</h2>
      {
        Object.entries(pageViewCount)
          .sort((a, b) => b[1] - a[1])
          .map(([path, count]) => <PageViewData key={path} path={path} count={count} label="page views" />)
      }
    </div>
  );
}

export default AllPageViews;