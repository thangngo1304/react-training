export type QueryParamsType<T extends Record<string, string | number | boolean>> = {
  page: number;
  limit: number;
  sortBy: string;
  name: string;
} & T;

export type AllowedQueryKeys<T extends Record<string, string | number | boolean>> =
  keyof QueryParamsType<T>;

/**
 *
 * @param params params query string
 * @returns {string}
 */
export const queryParams = <T extends Record<string, string | number | boolean>>(
  params: QueryParamsType<T>
): string => {
  const queryString = Object.keys(params)
    .filter((key) => !!params[key as AllowedQueryKeys<T>])
    .map((key) => `${key}=${params[key as AllowedQueryKeys<T>]}`)
    .join('&');

  return queryString;
};
