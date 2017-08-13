import { curry } from 'ramda';
import styled from 'styled-components';

const  withStyle = curry((mixin, component) => styled(component)`${mixin}`);

export default withStyle;
export { withStyle };
