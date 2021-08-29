interface IExecutionQueryItem {
  id: string;
  percentage?: number;
  label?: string;
}

export default class ExecutionQuery {
  query: IExecutionQueryItem[];
  isEmpty: boolean;

  constructor() {
    this.query = [];
    this.isEmpty = true;
  }

  _findIndex(item: IExecutionQueryItem): number {
    const { id } = item;
    return this.query.findIndex((qitem) => qitem.id === id);
  }

  _findIndexById(id: string) {
    return this.query.findIndex((qitem) => qitem.id === id);
  }

  create(item: IExecutionQueryItem) {
    const index = this._findIndex(item);
    if (index === -1) {
      this.query.push(item);
      this.isEmpty = false;
    }
  }

  read() {
    if (!this.isEmpty) {
      return this.query[0];
    }
  }

  update(item: IExecutionQueryItem) {
    const index = this._findIndex(item);
    if (index >= 0) {
      this.query[index] = item;
    }
  }

  delete(id: string) {
    const index = this._findIndexById(id);
    if (index >= 0) {
      this.query.splice(index, 1);
      if (this.query.length === 0) {
        this.isEmpty = true;
      }
    }
  }
}
