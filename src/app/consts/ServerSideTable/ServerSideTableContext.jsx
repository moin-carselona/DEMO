import React from 'react';

const ServerSideTableContext = React.createContext();

export function useServerSideTableContext() {
  return React.useContext(ServerSideTableContext);
}

export default ServerSideTableContext;