export const encode = (obj) => {
  const str = JSON.stringify(obj);
  const encoded = btoa(str);

  return encoded;
};

export const decode = (str) => {
  const decoded = atob(str);
  const obj = JSON.parse(decoded);

  return obj;
}