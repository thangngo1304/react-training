export const setCookie = (cname: string, value: string, exSeconds: number) =>
  (document.cookie = `${cname}=${value}; max-age=${exSeconds}`);

export const clearCookie = (name: string) => setCookie(name, '', 0);
