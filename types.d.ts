import Timezones from './assets/timezones.json';

declare module 'time-zones' {
    const TimeZones: typeof Timezones= Timezones;
    export = TimeZones;
}