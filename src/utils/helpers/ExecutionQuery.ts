import React from 'react';

interface IExecutionQueryItem {
  id: string;
  percentage?: number;
  label?: string;
}

const ExecutionQuery = () => {
  const [query, setQuery] = React.useState<IExecutionQueryItem[]>([]);
  const [isEmpty, setIsEmpty] = React.useState<boolean>(true);

  function _findIndex(item: IExecutionQueryItem): number {
    const { id } = item;
    return query.findIndex((qitem) => qitem.id === id);
  }
  function _findIndexById(id: string) {
    return query.findIndex((qitem) => qitem.id === id);
  }

  function create(item: IExecutionQueryItem) {
    const index = _findIndex(item);
    if (index === -1) {
      // this.query.push(item);
      // this.isEmpty = false;
      setQuery((previousQuery) => previousQuery.concat(item));
      if (isEmpty) {
        setIsEmpty(false);
      }
    }
  }

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
  return { query, isEmpty, create, update, del };
};

export default ExecutionQuery;
