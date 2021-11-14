import { Log } from '../context/LogsContext/LogsContext';

export const formatLogs = (logs: string): Array<Log> => {
    return logs
        .split(/\n/)
        .filter(exists => !!exists)
        .map(log => ({
            page: log.split(' ')[0],
            ip: log.split(' ')[1],
        }))
}

export const getFileContent = (file: Blob) => {
    return new Promise<Array<Log>>((resolve) => {
        var fileReader = new FileReader();  
        fileReader.onloadend = () => resolve(formatLogs(`${fileReader.result}`));
        fileReader.onerror = () => resolve([]);
        fileReader.readAsText(file);
    });
};