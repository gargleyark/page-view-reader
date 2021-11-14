import React from "react";
import useLogs from '../../context/LogsContext/useLogs';

interface PageViewDataProps {
  path: string;
  count: number;
  label: string;
}

const PageViewData = ({
  path, count, label
}: PageViewDataProps): JSX.Element => {
  return (
    <div>
      <span>{ path }</span>:{` `}
      <span>{ count } { label }</span>
    </div>
  );
}

export default PageViewData;