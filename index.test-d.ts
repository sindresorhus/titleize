import {expectType} from 'tsd';
import titleize = require('.');

expectType<string>(titleize('foo bar'));
