'use strict';

require('shelljs/global');

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _importDir = require('import-dir');

var _importDir2 = _interopRequireDefault(_importDir);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _updateNotifier = require('update-notifier');

var _updateNotifier2 = _interopRequireDefault(_updateNotifier);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

var _crocodile = require('../.crocodile');

var _crocodile2 = _interopRequireDefault(_crocodile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commands = (0, _importDir2.default)('./commands');

console.log(_chalk2.default.green(_crocodile2.default));
console.log('🐊  ' + _chalk2.default.bold('CrocodileJS') + ' is a ' + _chalk2.default.underline('Node MVC framework') + ' that lets you ' + _chalk2.default.underline('chew apart') + ' JavaScript - ' + _chalk2.default.underline.cyan('https://crocodilejs.com') + '\n');

_commander2.default.version(_package2.default.version);

_commander2.default.command('chew <dir> [version]').description('Create a new CrocodileJS project').action(commands.chew);

_commander2.default.command('upgrade').description('Upgrade your existing CrocodileJS project').action(commands.upgrade);

_commander2.default.command('issues').description('Open GitHub issues for CrocodileJS').action(commands.issues);

_commander2.default.command('docs').description('Read CrocodileJS documentation on GitHub').action(commands.docs);

_commander2.default.command('license').description('Purchase a commercial CrocodileJS license').action(commands.license);

_commander2.default.command('rock').description('I wonder what this does?').action(commands.rock);

if (process.argv.length <= 2) _commander2.default.outputHelp();else _commander2.default.parse(process.argv);

(0, _updateNotifier2.default)({ pkg: _package2.default }).notify();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxXQUFXLHlCQUFVLFlBQVYsQ0FBakI7O0FBRUEsUUFBUSxHQUFSLENBQVksZ0JBQU0sS0FBTixxQkFBWjtBQUNBLFFBQVEsR0FBUixVQUE2QixnQkFBTSxJQUFOLENBQVcsYUFBWCxDQUE3QixjQUErRCxnQkFBTSxTQUFOLENBQWdCLG9CQUFoQixDQUEvRCx1QkFBc0gsZ0JBQU0sU0FBTixDQUFnQixZQUFoQixDQUF0SCxzQkFBb0ssZ0JBQU0sU0FBTixDQUFnQixJQUFoQixDQUFxQix5QkFBckIsQ0FBcEs7O0FBRUEsb0JBQVEsT0FBUixDQUFnQixrQkFBSSxPQUFwQjs7QUFFQSxvQkFDRyxPQURILENBQ1csc0JBRFgsRUFFRyxXQUZILENBRWUsa0NBRmYsRUFHRyxNQUhILENBR1UsU0FBUyxJQUhuQjs7QUFLQSxvQkFDRyxPQURILENBQ1csU0FEWCxFQUVHLFdBRkgsQ0FFZSwyQ0FGZixFQUdHLE1BSEgsQ0FHVSxTQUFTLE9BSG5COztBQUtBLG9CQUNHLE9BREgsQ0FDVyxRQURYLEVBRUcsV0FGSCxDQUVlLG9DQUZmLEVBR0csTUFISCxDQUdVLFNBQVMsTUFIbkI7O0FBS0Esb0JBQ0csT0FESCxDQUNXLE1BRFgsRUFFRyxXQUZILENBRWUsMENBRmYsRUFHRyxNQUhILENBR1UsU0FBUyxJQUhuQjs7QUFLQSxvQkFDRyxPQURILENBQ1csU0FEWCxFQUVHLFdBRkgsQ0FFZSwyQ0FGZixFQUdHLE1BSEgsQ0FHVSxTQUFTLE9BSG5COztBQUtBLG9CQUNHLE9BREgsQ0FDVyxNQURYLEVBRUcsV0FGSCxDQUVlLDBCQUZmLEVBR0csTUFISCxDQUdVLFNBQVMsSUFIbkI7O0FBS0EsSUFBSSxRQUFRLElBQVIsQ0FBYSxNQUFiLElBQXVCLENBQTNCLEVBQ0Usb0JBQVEsVUFBUixHQURGLEtBR0Msb0JBQVEsS0FBUixDQUFjLFFBQVEsSUFBdEI7O0FBRUQsOEJBQWUsRUFBRSxzQkFBRixFQUFmLEVBQXdCLE1BQXhCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgJ3NoZWxsanMvZ2xvYmFsJztcbmltcG9ydCBwcm9ncmFtIGZyb20gJ2NvbW1hbmRlcic7XG5pbXBvcnQgaW1wb3J0RGlyIGZyb20gJ2ltcG9ydC1kaXInO1xuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcbmltcG9ydCB1cGRhdGVOb3RpZmllciBmcm9tICd1cGRhdGUtbm90aWZpZXInO1xuXG5pbXBvcnQgcGtnIGZyb20gJy4uL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgQ1JPQ09ESUxFIGZyb20gJy4uLy5jcm9jb2RpbGUnO1xuXG5jb25zdCBjb21tYW5kcyA9IGltcG9ydERpcignLi9jb21tYW5kcycpO1xuXG5jb25zb2xlLmxvZyhjaGFsay5ncmVlbihDUk9DT0RJTEUpKTtcbmNvbnNvbGUubG9nKGBcXHVEODNEXFx1REMwQSAgJHtjaGFsay5ib2xkKCdDcm9jb2RpbGVKUycpfSBpcyBhICR7Y2hhbGsudW5kZXJsaW5lKCdOb2RlIE1WQyBmcmFtZXdvcmsnKX0gdGhhdCBsZXRzIHlvdSAke2NoYWxrLnVuZGVybGluZSgnY2hldyBhcGFydCcpfSBKYXZhU2NyaXB0IC0gJHtjaGFsay51bmRlcmxpbmUuY3lhbignaHR0cHM6Ly9jcm9jb2RpbGVqcy5jb20nKX1cXG5gKTtcblxucHJvZ3JhbS52ZXJzaW9uKHBrZy52ZXJzaW9uKTtcblxucHJvZ3JhbVxuICAuY29tbWFuZCgnY2hldyA8ZGlyPiBbdmVyc2lvbl0nKVxuICAuZGVzY3JpcHRpb24oJ0NyZWF0ZSBhIG5ldyBDcm9jb2RpbGVKUyBwcm9qZWN0JylcbiAgLmFjdGlvbihjb21tYW5kcy5jaGV3KTtcblxucHJvZ3JhbVxuICAuY29tbWFuZCgndXBncmFkZScpXG4gIC5kZXNjcmlwdGlvbignVXBncmFkZSB5b3VyIGV4aXN0aW5nIENyb2NvZGlsZUpTIHByb2plY3QnKVxuICAuYWN0aW9uKGNvbW1hbmRzLnVwZ3JhZGUpO1xuXG5wcm9ncmFtXG4gIC5jb21tYW5kKCdpc3N1ZXMnKVxuICAuZGVzY3JpcHRpb24oJ09wZW4gR2l0SHViIGlzc3VlcyBmb3IgQ3JvY29kaWxlSlMnKVxuICAuYWN0aW9uKGNvbW1hbmRzLmlzc3Vlcyk7XG5cbnByb2dyYW1cbiAgLmNvbW1hbmQoJ2RvY3MnKVxuICAuZGVzY3JpcHRpb24oJ1JlYWQgQ3JvY29kaWxlSlMgZG9jdW1lbnRhdGlvbiBvbiBHaXRIdWInKVxuICAuYWN0aW9uKGNvbW1hbmRzLmRvY3MpO1xuXG5wcm9ncmFtXG4gIC5jb21tYW5kKCdsaWNlbnNlJylcbiAgLmRlc2NyaXB0aW9uKCdQdXJjaGFzZSBhIGNvbW1lcmNpYWwgQ3JvY29kaWxlSlMgbGljZW5zZScpXG4gIC5hY3Rpb24oY29tbWFuZHMubGljZW5zZSk7XG5cbnByb2dyYW1cbiAgLmNvbW1hbmQoJ3JvY2snKVxuICAuZGVzY3JpcHRpb24oJ0kgd29uZGVyIHdoYXQgdGhpcyBkb2VzPycpXG4gIC5hY3Rpb24oY29tbWFuZHMucm9jayk7XG5cbmlmIChwcm9jZXNzLmFyZ3YubGVuZ3RoIDw9IDIpXG4gIHByb2dyYW0ub3V0cHV0SGVscCgpO1xuZWxzZVxuXHRwcm9ncmFtLnBhcnNlKHByb2Nlc3MuYXJndik7XG5cbnVwZGF0ZU5vdGlmaWVyKHsgcGtnIH0pLm5vdGlmeSgpO1xuIl19