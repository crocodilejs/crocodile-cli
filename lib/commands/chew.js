'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _childProcessPromise = require('child-process-promise');

var _childProcessPromise2 = _interopRequireDefault(_childProcessPromise);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _ora = require('ora');

var _ora2 = _interopRequireDefault(_ora);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _opn = require('opn');

var _opn2 = _interopRequireDefault(_opn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tic = _chalk2.default.green('✓');
var tac = _chalk2.default.red('✗');
var opts = { stdio: 'ignore' };

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(dir, version) {
    var spinner, exists, tag;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:

            if (!which('git')) {
              console.log(_chalk2.default.red('You are missing `git` on your system, please install it'));
              exit(1);
            }

            spinner = (0, _ora2.default)('Installing CrocodileJS to "' + dir + '"...').start();

            // check if the dir already exists, if it does then fail

            try {
              exists = _fs2.default.statSync(dir);

              if (exists.isDirectory()) {
                spinner.stop();
                console.log(tac + ' Directory "' + dir + '" already exists, please enter a new directory name and try again');
                exit(1);
              }
            } catch (err) {
              spinner.text = tic + ' Directory "' + dir + '" does not exist and is OK to create';
            }

            _context.prev = 3;


            spinner.text = 'Cloning repository from GitHub';

            _context.next = 7;
            return _childProcessPromise2.default.exec('git clone --depth=1 --branch=master https://github.com/crocodilejs/crocodile-node-mvc-framework.git ' + dir, opts);

          case 7:

            // change directory to the newly clone repo
            spinner.text = 'Changing directory to newly cloned repository';
            cd(dir);

            // only pull the latest release
            // <http://goo.gl/52I5HA>
            spinner.text = 'Pulling latest GitHub release';
            _context.next = 12;
            return _childProcessPromise2.default.exec('git fetch --tags', opts);

          case 12:
            tag = version;

            if (version) {
              _context.next = 19;
              break;
            }

            // determine latest tag
            spinner.text = 'Determining latest tag';
            _context.next = 17;
            return _childProcessPromise2.default.exec('git describe --tags `git rev-list --tags --max-count=1`', { encoding: 'utf8' });

          case 17:
            tag = _context.sent;


            // trim trailing line breaks
            tag = tag.stdout.trim();

          case 19:

            // checkout latest tag
            spinner.text = 'Downloading CrocodileJS version ' + tag;
            _context.next = 22;
            return _childProcessPromise2.default.exec('git checkout ' + tag, opts);

          case 22:

            // remove the git commmit history
            spinner.text = 'Removing git commit history';
            rm('-rf', '.git');

            // remove the media folder
            spinner.text = 'Removing media folder';
            rm('-rf', 'media');

            // copy over the environment file for us to complete
            spinner.text = 'Copying environment file';
            cp('.env.example', '.env');

            // initialize git state on the repository clone
            spinner.text = 'Initializing new git state of repository';
            _context.next = 31;
            return _childProcessPromise2.default.exec('git init', opts);

          case 31:

            // stop the spinner
            spinner.stop();

            // tell user it was successful
            console.log(tic + ' You have successfully created a new CrocodileJS project in "' + dir + '"\n');

            // mention twitter link
            console.log('Tweet it: ' + _chalk2.default.underline.cyan('https://goo.gl/I0d780') + '\n');

            exit(0);

            _context.next = 45;
            break;

          case 37:
            _context.prev = 37;
            _context.t0 = _context['catch'](3);


            // cleanup
            rm('-rf', dir);

            // stop the spinner
            spinner.stop();

            // output error and open github issues
            console.log(tac + ' An error occured while cloning the repository from GitHub, please try again or file an issue with the below output:\n');
            console.log(_context.t0 && _context.t0.stack);
            (0, _opn2.default)('https://github.com/crocodilejs/crocodile-node-mvc-framework/issues/new', { wait: false });

            exit(1);

          case 45:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[3, 37]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9jaGV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxNQUFNLGdCQUFNLEtBQU4sQ0FBWSxHQUFaLENBQVo7QUFDQSxJQUFNLE1BQU0sZ0JBQU0sR0FBTixDQUFVLEdBQVYsQ0FBWjtBQUNBLElBQU0sT0FBTyxFQUFFLE9BQU8sUUFBVCxFQUFiOzs7d0VBRWUsaUJBQU8sR0FBUCxFQUFZLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUViLGdCQUFJLENBQUMsTUFBTSxLQUFOLENBQUwsRUFBbUI7QUFDakIsc0JBQVEsR0FBUixDQUFZLGdCQUFNLEdBQU4sQ0FBVSx5REFBVixDQUFaO0FBQ0EsbUJBQUssQ0FBTDtBQUNEOztBQUVLLG1CQVBPLEdBT0csbURBQWtDLEdBQWxDLFdBQTZDLEtBQTdDLEVBUEg7O0FBU2I7O0FBQ0EsZ0JBQUk7QUFDSSxvQkFESixHQUNhLGFBQUcsUUFBSCxDQUFZLEdBQVosQ0FEYjs7QUFFRixrQkFBSSxPQUFPLFdBQVAsRUFBSixFQUEwQjtBQUN4Qix3QkFBUSxJQUFSO0FBQ0Esd0JBQVEsR0FBUixDQUFlLEdBQWYsb0JBQWlDLEdBQWpDO0FBQ0EscUJBQUssQ0FBTDtBQUNEO0FBQ0YsYUFQRCxDQU9FLE9BQU8sR0FBUCxFQUFZO0FBQ1osc0JBQVEsSUFBUixHQUFrQixHQUFsQixvQkFBb0MsR0FBcEM7QUFDRDs7QUFuQlk7OztBQXVCWCxvQkFBUSxJQUFSLEdBQWUsZ0NBQWY7O0FBdkJXO0FBQUEsbUJBeUJMLDhCQUFhLElBQWIsMEdBQXlILEdBQXpILEVBQWdJLElBQWhJLENBekJLOztBQUFBOztBQTJCWDtBQUNBLG9CQUFRLElBQVIsR0FBZSwrQ0FBZjtBQUNBLGVBQUcsR0FBSDs7QUFFQTtBQUNBO0FBQ0Esb0JBQVEsSUFBUixHQUFlLCtCQUFmO0FBakNXO0FBQUEsbUJBa0NMLDhCQUFhLElBQWIsQ0FBa0Isa0JBQWxCLEVBQXNDLElBQXRDLENBbENLOztBQUFBO0FBb0NQLGVBcENPLEdBb0NELE9BcENDOztBQUFBLGdCQXFDTixPQXJDTTtBQUFBO0FBQUE7QUFBQTs7QUFzQ1Q7QUFDQSxvQkFBUSxJQUFSLEdBQWUsd0JBQWY7QUF2Q1M7QUFBQSxtQkF3Q0csOEJBQWEsSUFBYixDQUNWLHlEQURVLEVBRVYsRUFBRSxVQUFVLE1BQVosRUFGVSxDQXhDSDs7QUFBQTtBQXdDVCxlQXhDUzs7O0FBNkNUO0FBQ0Esa0JBQU0sSUFBSSxNQUFKLENBQVcsSUFBWCxFQUFOOztBQTlDUzs7QUFpRFg7QUFDQSxvQkFBUSxJQUFSLHdDQUFrRCxHQUFsRDtBQWxEVztBQUFBLG1CQW1ETCw4QkFBYSxJQUFiLG1CQUFrQyxHQUFsQyxFQUF5QyxJQUF6QyxDQW5ESzs7QUFBQTs7QUFxRFg7QUFDQSxvQkFBUSxJQUFSLEdBQWUsNkJBQWY7QUFDQSxlQUFHLEtBQUgsRUFBVSxNQUFWOztBQUVBO0FBQ0Esb0JBQVEsSUFBUixHQUFlLHVCQUFmO0FBQ0EsZUFBRyxLQUFILEVBQVUsT0FBVjs7QUFFQTtBQUNBLG9CQUFRLElBQVIsR0FBZSwwQkFBZjtBQUNBLGVBQUcsY0FBSCxFQUFtQixNQUFuQjs7QUFFQTtBQUNBLG9CQUFRLElBQVIsR0FBZSwwQ0FBZjtBQWxFVztBQUFBLG1CQW1FTCw4QkFBYSxJQUFiLENBQWtCLFVBQWxCLEVBQThCLElBQTlCLENBbkVLOztBQUFBOztBQXFFWDtBQUNBLG9CQUFRLElBQVI7O0FBRUE7QUFDQSxvQkFBUSxHQUFSLENBQWUsR0FBZixxRUFBa0YsR0FBbEY7O0FBRUE7QUFDQSxvQkFBUSxHQUFSLGdCQUF5QixnQkFBTSxTQUFOLENBQWdCLElBQWhCLENBQXFCLHVCQUFyQixDQUF6Qjs7QUFFQSxpQkFBSyxDQUFMOztBQTlFVztBQUFBOztBQUFBO0FBQUE7QUFBQTs7O0FBa0ZYO0FBQ0EsZUFBRyxLQUFILEVBQVUsR0FBVjs7QUFFQTtBQUNBLG9CQUFRLElBQVI7O0FBRUE7QUFDQSxvQkFBUSxHQUFSLENBQWUsR0FBZjtBQUNBLG9CQUFRLEdBQVIsQ0FBWSxlQUFPLFlBQUksS0FBdkI7QUFDQSwrQkFBSSx3RUFBSixFQUE4RSxFQUFFLE1BQU0sS0FBUixFQUE5RTs7QUFFQSxpQkFBSyxDQUFMOztBQTdGVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6ImNoZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBjaGlsZFByb2Nlc3MgZnJvbSAnY2hpbGQtcHJvY2Vzcy1wcm9taXNlJztcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgb3JhIGZyb20gJ29yYSc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IG9wbiBmcm9tICdvcG4nO1xuXG5jb25zdCB0aWMgPSBjaGFsay5ncmVlbign4pyTJyk7XG5jb25zdCB0YWMgPSBjaGFsay5yZWQoJ+KclycpO1xuY29uc3Qgb3B0cyA9IHsgc3RkaW86ICdpZ25vcmUnIH07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChkaXIsIHZlcnNpb24pID0+IHtcblxuICBpZiAoIXdoaWNoKCdnaXQnKSkge1xuICAgIGNvbnNvbGUubG9nKGNoYWxrLnJlZCgnWW91IGFyZSBtaXNzaW5nIGBnaXRgIG9uIHlvdXIgc3lzdGVtLCBwbGVhc2UgaW5zdGFsbCBpdCcpKTtcbiAgICBleGl0KDEpO1xuICB9XG5cbiAgY29uc3Qgc3Bpbm5lciA9IG9yYShgSW5zdGFsbGluZyBDcm9jb2RpbGVKUyB0byBcIiR7ZGlyfVwiLi4uYCkuc3RhcnQoKTtcblxuICAvLyBjaGVjayBpZiB0aGUgZGlyIGFscmVhZHkgZXhpc3RzLCBpZiBpdCBkb2VzIHRoZW4gZmFpbFxuICB0cnkge1xuICAgIGNvbnN0IGV4aXN0cyA9IGZzLnN0YXRTeW5jKGRpcik7XG4gICAgaWYgKGV4aXN0cy5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICBzcGlubmVyLnN0b3AoKTtcbiAgICAgIGNvbnNvbGUubG9nKGAke3RhY30gRGlyZWN0b3J5IFwiJHtkaXJ9XCIgYWxyZWFkeSBleGlzdHMsIHBsZWFzZSBlbnRlciBhIG5ldyBkaXJlY3RvcnkgbmFtZSBhbmQgdHJ5IGFnYWluYCk7XG4gICAgICBleGl0KDEpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgc3Bpbm5lci50ZXh0ID0gYCR7dGljfSBEaXJlY3RvcnkgXCIke2Rpcn1cIiBkb2VzIG5vdCBleGlzdCBhbmQgaXMgT0sgdG8gY3JlYXRlYDtcbiAgfVxuXG4gIHRyeSB7XG5cbiAgICBzcGlubmVyLnRleHQgPSAnQ2xvbmluZyByZXBvc2l0b3J5IGZyb20gR2l0SHViJztcblxuICAgIGF3YWl0IGNoaWxkUHJvY2Vzcy5leGVjKGBnaXQgY2xvbmUgLS1kZXB0aD0xIC0tYnJhbmNoPW1hc3RlciBodHRwczovL2dpdGh1Yi5jb20vY3JvY29kaWxlanMvY3JvY29kaWxlLW5vZGUtbXZjLWZyYW1ld29yay5naXQgJHtkaXJ9YCwgb3B0cyk7XG5cbiAgICAvLyBjaGFuZ2UgZGlyZWN0b3J5IHRvIHRoZSBuZXdseSBjbG9uZSByZXBvXG4gICAgc3Bpbm5lci50ZXh0ID0gJ0NoYW5naW5nIGRpcmVjdG9yeSB0byBuZXdseSBjbG9uZWQgcmVwb3NpdG9yeSc7XG4gICAgY2QoZGlyKTtcblxuICAgIC8vIG9ubHkgcHVsbCB0aGUgbGF0ZXN0IHJlbGVhc2VcbiAgICAvLyA8aHR0cDovL2dvby5nbC81Mkk1SEE+XG4gICAgc3Bpbm5lci50ZXh0ID0gJ1B1bGxpbmcgbGF0ZXN0IEdpdEh1YiByZWxlYXNlJztcbiAgICBhd2FpdCBjaGlsZFByb2Nlc3MuZXhlYygnZ2l0IGZldGNoIC0tdGFncycsIG9wdHMpO1xuXG4gICAgbGV0IHRhZyA9IHZlcnNpb247XG4gICAgaWYgKCF2ZXJzaW9uKSB7XG4gICAgICAvLyBkZXRlcm1pbmUgbGF0ZXN0IHRhZ1xuICAgICAgc3Bpbm5lci50ZXh0ID0gJ0RldGVybWluaW5nIGxhdGVzdCB0YWcnO1xuICAgICAgdGFnID0gYXdhaXQgY2hpbGRQcm9jZXNzLmV4ZWMoXG4gICAgICAgICdnaXQgZGVzY3JpYmUgLS10YWdzIGBnaXQgcmV2LWxpc3QgLS10YWdzIC0tbWF4LWNvdW50PTFgJyxcbiAgICAgICAgeyBlbmNvZGluZzogJ3V0ZjgnIH1cbiAgICAgICk7XG5cbiAgICAgIC8vIHRyaW0gdHJhaWxpbmcgbGluZSBicmVha3NcbiAgICAgIHRhZyA9IHRhZy5zdGRvdXQudHJpbSgpO1xuICAgIH1cblxuICAgIC8vIGNoZWNrb3V0IGxhdGVzdCB0YWdcbiAgICBzcGlubmVyLnRleHQgPSBgRG93bmxvYWRpbmcgQ3JvY29kaWxlSlMgdmVyc2lvbiAke3RhZ31gO1xuICAgIGF3YWl0IGNoaWxkUHJvY2Vzcy5leGVjKGBnaXQgY2hlY2tvdXQgJHt0YWd9YCwgb3B0cyk7XG5cbiAgICAvLyByZW1vdmUgdGhlIGdpdCBjb21tbWl0IGhpc3RvcnlcbiAgICBzcGlubmVyLnRleHQgPSAnUmVtb3ZpbmcgZ2l0IGNvbW1pdCBoaXN0b3J5JztcbiAgICBybSgnLXJmJywgJy5naXQnKTtcblxuICAgIC8vIHJlbW92ZSB0aGUgbWVkaWEgZm9sZGVyXG4gICAgc3Bpbm5lci50ZXh0ID0gJ1JlbW92aW5nIG1lZGlhIGZvbGRlcic7XG4gICAgcm0oJy1yZicsICdtZWRpYScpO1xuXG4gICAgLy8gY29weSBvdmVyIHRoZSBlbnZpcm9ubWVudCBmaWxlIGZvciB1cyB0byBjb21wbGV0ZVxuICAgIHNwaW5uZXIudGV4dCA9ICdDb3B5aW5nIGVudmlyb25tZW50IGZpbGUnO1xuICAgIGNwKCcuZW52LmV4YW1wbGUnLCAnLmVudicpO1xuXG4gICAgLy8gaW5pdGlhbGl6ZSBnaXQgc3RhdGUgb24gdGhlIHJlcG9zaXRvcnkgY2xvbmVcbiAgICBzcGlubmVyLnRleHQgPSAnSW5pdGlhbGl6aW5nIG5ldyBnaXQgc3RhdGUgb2YgcmVwb3NpdG9yeSc7XG4gICAgYXdhaXQgY2hpbGRQcm9jZXNzLmV4ZWMoJ2dpdCBpbml0Jywgb3B0cyk7XG5cbiAgICAvLyBzdG9wIHRoZSBzcGlubmVyXG4gICAgc3Bpbm5lci5zdG9wKCk7XG5cbiAgICAvLyB0ZWxsIHVzZXIgaXQgd2FzIHN1Y2Nlc3NmdWxcbiAgICBjb25zb2xlLmxvZyhgJHt0aWN9IFlvdSBoYXZlIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIGEgbmV3IENyb2NvZGlsZUpTIHByb2plY3QgaW4gXCIke2Rpcn1cIlxcbmApO1xuXG4gICAgLy8gbWVudGlvbiB0d2l0dGVyIGxpbmtcbiAgICBjb25zb2xlLmxvZyhgVHdlZXQgaXQ6ICR7Y2hhbGsudW5kZXJsaW5lLmN5YW4oJ2h0dHBzOi8vZ29vLmdsL0kwZDc4MCcpfVxcbmApO1xuXG4gICAgZXhpdCgwKTtcblxuICB9IGNhdGNoIChlcnIpIHtcblxuICAgIC8vIGNsZWFudXBcbiAgICBybSgnLXJmJywgZGlyKTtcblxuICAgIC8vIHN0b3AgdGhlIHNwaW5uZXJcbiAgICBzcGlubmVyLnN0b3AoKTtcblxuICAgIC8vIG91dHB1dCBlcnJvciBhbmQgb3BlbiBnaXRodWIgaXNzdWVzXG4gICAgY29uc29sZS5sb2coYCR7dGFjfSBBbiBlcnJvciBvY2N1cmVkIHdoaWxlIGNsb25pbmcgdGhlIHJlcG9zaXRvcnkgZnJvbSBHaXRIdWIsIHBsZWFzZSB0cnkgYWdhaW4gb3IgZmlsZSBhbiBpc3N1ZSB3aXRoIHRoZSBiZWxvdyBvdXRwdXQ6XFxuYCk7XG4gICAgY29uc29sZS5sb2coZXJyICYmIGVyci5zdGFjayk7XG4gICAgb3BuKCdodHRwczovL2dpdGh1Yi5jb20vY3JvY29kaWxlanMvY3JvY29kaWxlLW5vZGUtbXZjLWZyYW1ld29yay9pc3N1ZXMvbmV3JywgeyB3YWl0OiBmYWxzZSB9KTtcblxuICAgIGV4aXQoMSk7XG5cbiAgfVxuXG59O1xuIl19