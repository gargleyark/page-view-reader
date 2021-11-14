import { useContext } from 'react';
import ContentContext, { LogsContext } from './LogsContext';

const useLogs = (): LogsContext => useContext(ContentContext);

export default useLogs;
