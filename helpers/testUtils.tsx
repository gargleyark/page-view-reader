import { render } from "@testing-library/react";
import LogsContext, { Log } from '../context/LogsContext/LogsContext'

const Providers = ({ children }: { children: JSX.Element}) => {
  const logs: Array<Log> = [
    {
      page: '/home',
      ip: '1'
    },
    {
      page: '/home',
      ip: '1'
    },
    {
      page: '/about',
      ip: '1'
    },
    {
      page: '/about',
      ip: '1'
    },
    {
      page: '/about',
      ip: '2'
    },
    {
      page: '/about',
      ip: '2'
    }
  ];

  const setLogs = () => {};

  return (
    <LogsContext.Provider value={{ logs, setLogs }}>
      { children }
    </LogsContext.Provider >
  );
};

const customRender = (ui: JSX.Element, options: Record<string, string> = {}) =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";

export { customRender as render };