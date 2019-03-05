import {expectType} from 'tsd-check';
import titleize from '.';

expectType<string>(titleize('foo bar'));
