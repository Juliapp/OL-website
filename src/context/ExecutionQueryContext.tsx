import React, { useReducer, Reducer, useEffect } from 'react';
import { createContext } from 'use-context-selector';

interface QuerySchema {
  id: string;
  percentage?: number;
  label?: string;
}

interface IExecutionQuerySchema {
  isEmpty: boolean;
  query: QuerySchema[];
}

interface ExecutionQueryContextType {
  state: IExecutionQuerySchema;
  dispatch: React.Dispatch<IExecutionQueryAction>;
}

export const ExecutionQueryContext = createContext<ExecutionQueryContextType>(
  {} as ExecutionQueryContextType
);

export enum dispatchType {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

interface IExecutionQueryAction {
  type: dispatchType;
  param: QuerySchema;
}

const executionQueryReducer = (
  state: IExecutionQuerySchema,
  action: IExecutionQueryAction
) => {
  const { type, param } = action;

  const index = state.query.findIndex(({ id }) => id === action.param.id);

  switch (type) {
    case 'CREATE':
      console.log('creating new task');
      if (index === -1) {
        state.query.push(param);
        if (state.isEmpty) {
          state.isEmpty = false;
        }
      }
      return state;
    case 'UPDATE':
      if (index >= 0) {
        state.query[index] = param;
      }
      return state;
    case 'DELETE':
      console.log('deleting task');
      if (index >= 0) {
        state.query.splice(index, 1);
        state.isEmpty = state.query.length === 0;
      }
      return state;
    default:
      return state;
  }
};

const initialState: IExecutionQuerySchema = {
  isEmpty: true,
  query: [],
};

export const ExecutionQueryContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<
    Reducer<IExecutionQuerySchema, IExecutionQueryAction>
  >(executionQueryReducer, initialState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <ExecutionQueryContext.Provider value={{ state, dispatch }}>
      {children}
    </ExecutionQueryContext.Provider>
  );
};

// import React, { useCallback, useEffect } from 'react';
// import { createContext } from 'use-context-selector';
// // import { Container } from './styles';

// interface IExecutionQueryItem {
//   id: string;
//   percentage?: number;
//   label?: string;
// }

// interface ExecutionQueryContextType {
//   query: IExecutionQueryItem[];
//   isEmpty: boolean;

//   create: (item: IExecutionQueryItem) => void;
//   update: (item: IExecutionQueryItem) => void;
//   del: (id: string) => void;
// }

// export const ExecutionQueryContext = createContext<ExecutionQueryContextType>(
//   {} as ExecutionQueryContextType
// );
// export const ExecutionQueryContextProvider: React.FC = ({ children }) => {
//   const [query, setQuery] = React.useState<IExecutionQueryItem[]>([]);
//   const [isEmpty, setIsEmpty] = React.useState<boolean>(true);

//   const _findIndex = useCallback(
//     (item: IExecutionQueryItem) => {
//       const { id } = item;
//       return query.findIndex((qitem) => qitem.id === id);
//     },
//     [query]
//   );

//   const _findIndexById = useCallback(
//     (id: string) => {
//       console.log(query);
//       return query.findIndex((qitem) => qitem.id === id);
//     },
//     [query]
//   );

//   const create = (item: IExecutionQueryItem) => {
//     const index = _findIndex(item);
//     if (index === -1) {
//       // this.query.push(item);
//       // this.isEmpty = false;
//       console.log('criando  o item');
//       setQuery((previousQuery) => previousQuery.concat(item));
//       if (isEmpty) {
//         setIsEmpty(false);
//       }
//     }
//   };

//   const update = useCallback(
//     (item: IExecutionQueryItem) => {
//       const index = _findIndex(item);
//       if (index >= 0) {
//         // this.query[index] = item;
//         setQuery((previousQuery) => {
//           previousQuery[index] = item;
//           return previousQuery;
//         });
//       }
//     },
//     [_findIndex]
//   );

//   const del = (id: string) => {
//     const index = _findIndexById(id);
//     console.log(query);
//     console.log(index);
//     if (index >= 0) {
//       // this.query.splice(index, 1);
//       // if (this.query.length === 0) {
//       //   this.isEmpty = true;
//       // }
//       setQuery((previousQuery) => previousQuery.slice(index, 1));
//       if (query.length === 0) {
//         setIsEmpty(false);
//       }
//     }
//   };

//   useEffect(() => {
//     console.log(query);
//   }, [query]);

//   return (
//     <ExecutionQueryContext.Provider
//       value={{ query, isEmpty, create, update, del }}
//     >
//       {children}
//     </ExecutionQueryContext.Provider>
//   );
// };
