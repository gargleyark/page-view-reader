import React from "react";
import useLogs from '../../context/LogsContext/useLogs';
import PageViewData from '../PageViewData';

const UniquePageViews = (): JSX.Element => {
  const { logs } = useLogs();

  const pagesWithUniqueIPs = logs.reduce<Record<string, Array<string>>>((prev, { page, ip }) => {
    if (prev[page] && !prev[page].includes(ip)) {
      return { ...prev, [page]: [...prev[page], ip]}
    }
    if (!prev[page]) {
      return { ...prev, [page]: [ip]}
    }

    return prev;
  }, {});

  const uniqueIPCount = Object.entries(pagesWithUniqueIPs).map(([path, ips]) => ({
    path,
    count: ips.length
  }));

  return (
    <div>
      <h2>Unique page views</h2>
      {
        uniqueIPCount
          .sort((a, b) => b.count - a.count)
          .map(({path, count}) => <PageViewData key={path} path={path} count={count} label="unique views" />)
      }
    </div>
  );
}

export default UniquePageViews;