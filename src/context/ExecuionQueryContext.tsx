import React from 'react';
import { createContext } from 'use-context-selector';
// import { Container } from './styles';

interface IExecutionQueryItem {
  id: string;
  percentage?: number;
  label?: string;
}

interface ExecutionQueryContextType {
  query: IExecutionQueryItem[];
  isEmpty: boolean;

  create: (item: IExecutionQueryItem) => void;
}

export const ExecutionQueryContext = createContext<ExecutionQueryContextType>(
  {} as ExecutionQueryContextType
);
export const ExecutionQueryContextProvider: React.FC = ({ children }) => {
  const [query, setQuery] = React.useState<IExecutionQueryItem[]>([]);
  const [isEmpty, setIsEmpty] = React.useState<boolean>(true);

  function _findIndex(item: IExecutionQueryItem): number {
    const { id } = item;
    return query.findIndex((qitem) => qitem.id === id);
  }
  function _findIndexById(id: string) {
    return query.findIndex((qitem) => qitem.id === id);
  }

  const create = React.useCallback(
    (item: IExecutionQueryItem) => {
      const index = _findIndex(item);
      if (index === -1) {
        // this.query.push(item);
        // this.isEmpty = false;
        setQuery((previousQuery) => previousQuery.concat(item));
        if (isEmpty) {
          setIsEmpty(false);
        }
      }
    },
    [_findIndex, isEmpty]
  );

  function update(item: IExecutionQueryItem) {
    const index = _findIndex(item);
    if (index >= 0) {
      // this.query[index] = item;
      setQuery((previousQuery) => {
        previousQuery[index] = item;
        return previousQuery;
      });
    }
  }

  function del(id: string) {
    const index = _findIndexById(id);
    if (index >= 0) {
      // this.query.splice(index, 1);
      // if (this.query.length === 0) {
      //   this.isEmpty = true;
      // }
      setQuery((previousQuery) => previousQuery.slice(index, 1));
      if (query.length === 0) {
        setIsEmpty(false);
      }
    }
  }

  return (
    <ExecutionQueryContext.Provider value={{ query, isEmpty, create }}>
      {children}
    </ExecutionQueryContext.Provider>
  );
};
