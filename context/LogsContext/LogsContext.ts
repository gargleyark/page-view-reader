import { createContext } from 'react';

export interface Log {
    page: string;
    ip: string;
}

export interface LogsContext {
    logs: Array<Log>;
    setLogs: (logs: Array<Log>) => void;
};


const ContentContext = createContext<LogsContext>({
    logs: [],
    setLogs: () => {}
});

export default ContentContext;
