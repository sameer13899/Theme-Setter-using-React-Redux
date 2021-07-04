const data = {
  a: 1,
  b: 2,
};

export function dataReducer(data = { a: 1, b: 2 }, action) {
  return data;
}
