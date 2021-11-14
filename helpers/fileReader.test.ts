import { formatLogs } from './fileReader';

describe('format logs', () => {
    it('should format strings into arrays of logs', () => {
        const logs = formatLogs(`page 1
page 2
page 3`);

        expect(logs.length).toEqual(3);
        expect(logs[0].page).toEqual('page');
        expect(logs[0].ip).toEqual('1');
    });

    it('should return an empty array for an empty string', () => {
        const logs = formatLogs('');

        expect(logs.length).toEqual(0);
    });
});