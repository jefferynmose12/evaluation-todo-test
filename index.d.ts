declare module "lodash/fp/getOr" {
  function getOr<T, U>(defaultValue: U, path: string | string[], object: T): U;
  export = getOr;
}
