import { minmax } from '../utils';

const [ min, max, total ] = [ 1, 32, 32 * 32 ];

export default
function parse_grid(size) {
  let [x, y] = (size + '')
    .replace(/\s+/g, '')
    .replace(/[,，xX]+/, 'x')
    .split('x')
    .map(Number);

  const max_val = (x == 1 || y == 1) ? total : max;

  const ret = {
    x: minmax(x || min, 1, max_val),
    y: minmax(y || x || min, 1, max_val)
  };

  return Object.assign({}, ret,
    { count: ret.x * ret.y }
  );
}
