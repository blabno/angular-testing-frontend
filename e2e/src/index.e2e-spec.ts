import * as seeder from '../../backend/seed/seeder';
import * as waitForDependencies from '../../backend/test/waitForDependencies';

const INIT_TESTS_TIMEOUT = 60000;

beforeAll(() => waitForDependencies(INIT_TESTS_TIMEOUT));
beforeAll(() => seeder.recreateIndexes());
