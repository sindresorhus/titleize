import {expectType} from 'tsd';
import titleize from './index.js';

expectType<string>(titleize('foo bar'));
