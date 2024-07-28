enum FilterPaginationLengthEnum {
  TWENTY_FIVE = 25,
  FIFTY = 50,
  HUNDRED = 100,
}

export class Sort<T> {
  by: 'ASC' | 'DESC';
  field: keyof T;
}

export class Paginated {
  length: FilterPaginationLengthEnum;
  page: number;
}

export class DefaultFilter<T> {
  search: string;
  sort: Sort<T>;
  pagination: Paginated;
}
