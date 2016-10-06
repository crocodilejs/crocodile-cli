'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _yamljs = require('yamljs');

var _yamljs2 = _interopRequireDefault(_yamljs);

var _semverCompare = require('semver-compare');

var _semverCompare2 = _interopRequireDefault(_semverCompare);

var _opn = require('opn');

var _opn2 = _interopRequireDefault(_opn);

var _requestPromiseNative = require('request-promise-native');

var _requestPromiseNative2 = _interopRequireDefault(_requestPromiseNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tic = _chalk2.default.green('✓');
var tac = _chalk2.default.red('✗');

exports.default = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
  var yaml, release, diff, err;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;


          // look for the `.crocodile.yml` file in the current folder
          yaml = _yamljs2.default.load(_path2.default.join(process.cwd(), '.crocodile.yml'));

          if (_lodash2.default.isObject(yaml)) {
            _context.next = 4;
            break;
          }

          throw new Error('We could not detect a file named ".crocodile.yml" in your current working directory.  Please ensure your current working directory is a CrocodileJS project.');

        case 4:
          if (_lodash2.default.isObject(yaml.crocodile)) {
            _context.next = 6;
            break;
          }

          throw new Error('You must have a `crocodile` block in the YAML file');

        case 6:
          if (_lodash2.default.isString(yaml.crocodile.version)) {
            _context.next = 8;
            break;
          }

          throw new Error('Version was missing in the `crocodile` block of the YAML file');

        case 8:
          _context.prev = 8;
          _context.next = 11;
          return (0, _requestPromiseNative2.default)({
            uri: 'https://api.github.com/repos/crocodilejs/crocodile-node-mvc-framework/releases/latest',
            json: true,
            headers: { 'User-Agent': 'CrocodileJS' }
          });

        case 11:
          release = _context.sent;
          diff = (0, _semverCompare2.default)(release.tag_name, yaml.crocodile.version);

          // if version is the same, we're up to date
          // otherwise link the user to the github release page
          // with documentation and notes about the release

          if (!(diff === 1)) {
            _context.next = 20;
            break;
          }

          // 1 = needs upgraded
          console.log(tac + ' You are using an old version of CrocodileJS! Latest version is ' + release.tag_name + ' and you are only on ' + yaml.crocodile.version + '!\n');
          console.log('View the official release and upgrade notes at: ' + _chalk2.default.underline.cyan(release.html_url) + '\n');
          console.log(_chalk2.default.underline('After you upgrade') + ' you will need to update the version specified in the file ".crocodile.yml" found in the root of your CrocodileJS project.');
          (0, _opn2.default)(release.html_url, { wait: false });
          _context.next = 27;
          break;

        case 20:
          if (!(diff === 0)) {
            _context.next = 24;
            break;
          }

          // 0 = no upgrade needed
          console.log(tic + ' Your project is already using latest version of CrocodileJS.  Great work!');
          _context.next = 27;
          break;

        case 24:
          // -1 = you have a version that isn't even out yet!
          err = new Error('You have a version that has not been released yet!');

          err.type = 'VersionUnreleased';
          throw err;

        case 27:
          _context.next = 33;
          break;

        case 29:
          _context.prev = 29;
          _context.t0 = _context['catch'](8);

          if (_context.t0.type !== 'VersionUnreleased') _context.t0.message = 'There was an error with GitHub while looking up the latest release version: ' + _context.t0.message;
          throw _context.t0;

        case 33:

          exit(0);

          _context.next = 41;
          break;

        case 36:
          _context.prev = 36;
          _context.t1 = _context['catch'](0);

          console.log(tac + ' ' + _context.t1.message + '\n');
          console.log('Please try again or file an issue on GitHub: ' + _chalk2.default.underline.cyan('https://github.com/crocodilejs/crocodile-cli/issues/new'));
          exit(1);

        case 41:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined, [[0, 36], [8, 29]]);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy91cGdyYWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU0sTUFBTSxnQkFBTSxLQUFOLENBQVksR0FBWixDQUFaO0FBQ0EsSUFBTSxNQUFNLGdCQUFNLEdBQU4sQ0FBVSxHQUFWLENBQVo7OzZFQUVlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFJWDtBQUNNLGNBTEssR0FLRSxpQkFBSyxJQUFMLENBQVUsZUFBSyxJQUFMLENBQVUsUUFBUSxHQUFSLEVBQVYsRUFBeUIsZ0JBQXpCLENBQVYsQ0FMRjs7QUFBQSxjQU9OLGlCQUFFLFFBQUYsQ0FBVyxJQUFYLENBUE07QUFBQTtBQUFBO0FBQUE7O0FBQUEsZ0JBUUgsSUFBSSxLQUFKLENBQVUsOEpBQVYsQ0FSRzs7QUFBQTtBQUFBLGNBVU4saUJBQUUsUUFBRixDQUFXLEtBQUssU0FBaEIsQ0FWTTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxnQkFXSCxJQUFJLEtBQUosQ0FBVSxvREFBVixDQVhHOztBQUFBO0FBQUEsY0FhTixpQkFBRSxRQUFGLENBQVcsS0FBSyxTQUFMLENBQWUsT0FBMUIsQ0FiTTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxnQkFjSCxJQUFJLEtBQUosQ0FBVSwrREFBVixDQWRHOztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW1CYSxvQ0FBUTtBQUM1QixpQkFBSyx1RkFEdUI7QUFFNUIsa0JBQU0sSUFGc0I7QUFHNUIscUJBQVMsRUFBRSxjQUFjLGFBQWhCO0FBSG1CLFdBQVIsQ0FuQmI7O0FBQUE7QUFtQkgsaUJBbkJHO0FBeUJILGNBekJHLEdBeUJJLDZCQUFJLFFBQVEsUUFBWixFQUFzQixLQUFLLFNBQUwsQ0FBZSxPQUFyQyxDQXpCSjs7QUEyQlQ7QUFDQTtBQUNBOztBQTdCUyxnQkE4QkwsU0FBUyxDQTlCSjtBQUFBO0FBQUE7QUFBQTs7QUErQlA7QUFDQSxrQkFBUSxHQUFSLENBQWUsR0FBZix3RUFBcUYsUUFBUSxRQUE3Riw2QkFBNkgsS0FBSyxTQUFMLENBQWUsT0FBNUk7QUFDQSxrQkFBUSxHQUFSLHNEQUErRCxnQkFBTSxTQUFOLENBQWdCLElBQWhCLENBQXFCLFFBQVEsUUFBN0IsQ0FBL0Q7QUFDQSxrQkFBUSxHQUFSLENBQWUsZ0JBQU0sU0FBTixDQUFnQixtQkFBaEIsQ0FBZjtBQUNBLDZCQUFJLFFBQVEsUUFBWixFQUFzQixFQUFFLE1BQU0sS0FBUixFQUF0QjtBQW5DTztBQUFBOztBQUFBO0FBQUEsZ0JBb0NFLFNBQVMsQ0FwQ1g7QUFBQTtBQUFBO0FBQUE7O0FBcUNQO0FBQ0Esa0JBQVEsR0FBUixDQUFlLEdBQWY7QUF0Q087QUFBQTs7QUFBQTtBQXdDUDtBQUNNLGFBekNDLEdBeUNLLElBQUksS0FBSixDQUFVLG9EQUFWLENBekNMOztBQTBDUCxjQUFJLElBQUosR0FBVyxtQkFBWDtBQTFDTyxnQkEyQ0QsR0EzQ0M7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUErQ1QsY0FBSSxZQUFJLElBQUosS0FBYSxtQkFBakIsRUFDRSxZQUFJLE9BQUosb0ZBQTZGLFlBQUksT0FBakc7QUFoRE87O0FBQUE7O0FBb0RYLGVBQUssQ0FBTDs7QUFwRFc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBdURYLGtCQUFRLEdBQVIsQ0FBZSxHQUFmLFNBQXNCLFlBQUksT0FBMUI7QUFDQSxrQkFBUSxHQUFSLG1EQUE0RCxnQkFBTSxTQUFOLENBQWdCLElBQWhCLENBQXFCLHlEQUFyQixDQUE1RDtBQUNBLGVBQUssQ0FBTDs7QUF6RFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyIsImZpbGUiOiJ1cGdyYWRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IFlBTUwgZnJvbSAneWFtbGpzJztcbmltcG9ydCBjbXAgZnJvbSAnc2VtdmVyLWNvbXBhcmUnO1xuaW1wb3J0IG9wbiBmcm9tICdvcG4nO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAncmVxdWVzdC1wcm9taXNlLW5hdGl2ZSc7XG5cbmNvbnN0IHRpYyA9IGNoYWxrLmdyZWVuKCfinJMnKTtcbmNvbnN0IHRhYyA9IGNoYWxrLnJlZCgn4pyXJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICgpID0+IHtcblxuICB0cnkge1xuXG4gICAgLy8gbG9vayBmb3IgdGhlIGAuY3JvY29kaWxlLnltbGAgZmlsZSBpbiB0aGUgY3VycmVudCBmb2xkZXJcbiAgICBjb25zdCB5YW1sID0gWUFNTC5sb2FkKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnLmNyb2NvZGlsZS55bWwnKSk7XG5cbiAgICBpZiAoIV8uaXNPYmplY3QoeWFtbCkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlIGNvdWxkIG5vdCBkZXRlY3QgYSBmaWxlIG5hbWVkIFwiLmNyb2NvZGlsZS55bWxcIiBpbiB5b3VyIGN1cnJlbnQgd29ya2luZyBkaXJlY3RvcnkuICBQbGVhc2UgZW5zdXJlIHlvdXIgY3VycmVudCB3b3JraW5nIGRpcmVjdG9yeSBpcyBhIENyb2NvZGlsZUpTIHByb2plY3QuJyk7XG5cbiAgICBpZiAoIV8uaXNPYmplY3QoeWFtbC5jcm9jb2RpbGUpKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBoYXZlIGEgYGNyb2NvZGlsZWAgYmxvY2sgaW4gdGhlIFlBTUwgZmlsZScpO1xuXG4gICAgaWYgKCFfLmlzU3RyaW5nKHlhbWwuY3JvY29kaWxlLnZlcnNpb24pKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdWZXJzaW9uIHdhcyBtaXNzaW5nIGluIHRoZSBgY3JvY29kaWxlYCBibG9jayBvZiB0aGUgWUFNTCBmaWxlJyk7XG5cbiAgICB0cnkge1xuXG4gICAgICAvLyBjb21wYXJlIHRoZSBjdXJyZW50IHNlbXZlciB2ZXJzaW9uIHRvIHRoZSBsYXRlc3QgcmVsZWFzZSBmcm9tIEdpdEh1YlxuICAgICAgY29uc3QgcmVsZWFzZSA9IGF3YWl0IHJlcXVlc3Qoe1xuICAgICAgICB1cmk6ICdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL2Nyb2NvZGlsZWpzL2Nyb2NvZGlsZS1ub2RlLW12Yy1mcmFtZXdvcmsvcmVsZWFzZXMvbGF0ZXN0JyxcbiAgICAgICAganNvbjogdHJ1ZSxcbiAgICAgICAgaGVhZGVyczogeyAnVXNlci1BZ2VudCc6ICdDcm9jb2RpbGVKUycgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGRpZmYgPSBjbXAocmVsZWFzZS50YWdfbmFtZSwgeWFtbC5jcm9jb2RpbGUudmVyc2lvbik7XG5cbiAgICAgIC8vIGlmIHZlcnNpb24gaXMgdGhlIHNhbWUsIHdlJ3JlIHVwIHRvIGRhdGVcbiAgICAgIC8vIG90aGVyd2lzZSBsaW5rIHRoZSB1c2VyIHRvIHRoZSBnaXRodWIgcmVsZWFzZSBwYWdlXG4gICAgICAvLyB3aXRoIGRvY3VtZW50YXRpb24gYW5kIG5vdGVzIGFib3V0IHRoZSByZWxlYXNlXG4gICAgICBpZiAoZGlmZiA9PT0gMSkge1xuICAgICAgICAvLyAxID0gbmVlZHMgdXBncmFkZWRcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGFjfSBZb3UgYXJlIHVzaW5nIGFuIG9sZCB2ZXJzaW9uIG9mIENyb2NvZGlsZUpTISBMYXRlc3QgdmVyc2lvbiBpcyAke3JlbGVhc2UudGFnX25hbWV9IGFuZCB5b3UgYXJlIG9ubHkgb24gJHt5YW1sLmNyb2NvZGlsZS52ZXJzaW9ufSFcXG5gKTtcbiAgICAgICAgY29uc29sZS5sb2coYFZpZXcgdGhlIG9mZmljaWFsIHJlbGVhc2UgYW5kIHVwZ3JhZGUgbm90ZXMgYXQ6ICR7Y2hhbGsudW5kZXJsaW5lLmN5YW4ocmVsZWFzZS5odG1sX3VybCl9XFxuYCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke2NoYWxrLnVuZGVybGluZSgnQWZ0ZXIgeW91IHVwZ3JhZGUnKX0geW91IHdpbGwgbmVlZCB0byB1cGRhdGUgdGhlIHZlcnNpb24gc3BlY2lmaWVkIGluIHRoZSBmaWxlIFwiLmNyb2NvZGlsZS55bWxcIiBmb3VuZCBpbiB0aGUgcm9vdCBvZiB5b3VyIENyb2NvZGlsZUpTIHByb2plY3QuYCk7XG4gICAgICAgIG9wbihyZWxlYXNlLmh0bWxfdXJsLCB7IHdhaXQ6IGZhbHNlIH0pO1xuICAgICAgfSBlbHNlIGlmIChkaWZmID09PSAwKSB7XG4gICAgICAgIC8vIDAgPSBubyB1cGdyYWRlIG5lZWRlZFxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aWN9IFlvdXIgcHJvamVjdCBpcyBhbHJlYWR5IHVzaW5nIGxhdGVzdCB2ZXJzaW9uIG9mIENyb2NvZGlsZUpTLiAgR3JlYXQgd29yayFgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIC0xID0geW91IGhhdmUgYSB2ZXJzaW9uIHRoYXQgaXNuJ3QgZXZlbiBvdXQgeWV0IVxuICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ1lvdSBoYXZlIGEgdmVyc2lvbiB0aGF0IGhhcyBub3QgYmVlbiByZWxlYXNlZCB5ZXQhJyk7XG4gICAgICAgIGVyci50eXBlID0gJ1ZlcnNpb25VbnJlbGVhc2VkJztcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLnR5cGUgIT09ICdWZXJzaW9uVW5yZWxlYXNlZCcpXG4gICAgICAgIGVyci5tZXNzYWdlID0gYFRoZXJlIHdhcyBhbiBlcnJvciB3aXRoIEdpdEh1YiB3aGlsZSBsb29raW5nIHVwIHRoZSBsYXRlc3QgcmVsZWFzZSB2ZXJzaW9uOiAke2Vyci5tZXNzYWdlfWA7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuXG4gICAgZXhpdCgwKTtcblxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhgJHt0YWN9ICR7ZXJyLm1lc3NhZ2V9XFxuYCk7XG4gICAgY29uc29sZS5sb2coYFBsZWFzZSB0cnkgYWdhaW4gb3IgZmlsZSBhbiBpc3N1ZSBvbiBHaXRIdWI6ICR7Y2hhbGsudW5kZXJsaW5lLmN5YW4oJ2h0dHBzOi8vZ2l0aHViLmNvbS9jcm9jb2RpbGVqcy9jcm9jb2RpbGUtY2xpL2lzc3Vlcy9uZXcnKX1gKTtcbiAgICBleGl0KDEpO1xuICB9XG5cbn07XG4iXX0=