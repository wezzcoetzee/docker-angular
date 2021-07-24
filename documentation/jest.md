# Jest

## Commands

- `test` - running all tests once, then completing.
- `test:watch` - running the tests continuously, watching for changes (using git to check for files with modifications made to them).
- `test:ci` - acting like the test, but running all tests using only a single thread (which is good if your buildserver is limited on processor cores). Furthermore it will restrict snapshot testing (more on that later) only to verify (and not update when encountering a test without a snapshot present).
