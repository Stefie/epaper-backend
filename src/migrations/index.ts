import * as migration_20251125_105645 from './20251125_105645';
import * as migration_20251125_105656 from './20251125_105656';

export const migrations = [
  {
    up: migration_20251125_105645.up,
    down: migration_20251125_105645.down,
    name: '20251125_105645',
  },
  {
    up: migration_20251125_105656.up,
    down: migration_20251125_105656.down,
    name: '20251125_105656'
  },
];
