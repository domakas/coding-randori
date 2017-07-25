Coding Randori by Visma Lietuva
===============

This project contains some tasks with unit tests for pair programming (Randori) sessions.

Pair programming tasks:
----------------------
* romanNumbers
* time

Refactoring tasks:
------------------
* song (credit to [sleepyfox](https://github.com/sleepyfox/code-dojo-39))
* tennis (credit to [emilybache](https://github.com/emilybache/Tennis-Refactoring-Kata))
* yatzy (credit to [emilybache](https://github.com/emilybache/Yatzy-Refactoring-Kata))

Codegolf tasks:
---------------
* codegolf/socks
* codegolf/xmasTree

Running project:
----------------
Install project dependencies:
```bash
npm install
```

Run tests:
```bash
npm run test
```

Don't forget to uncomment some implementations in `karma.conf.js` file.
By default all tests are skipped. Replace `xdescribe` with `describe` in tests which you want to run.