import {Dict} from '@collection-abstraction/dict';

import BaseCounter from './BaseCounter.js';

// eslint-disable-next-line new-cap
const Counter = BaseCounter(Map, Dict);

export default Counter;
