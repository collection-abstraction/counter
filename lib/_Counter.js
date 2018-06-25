'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = _Counter;

var _jsError = require('@aureooms/js-error');

var _jsHeapq = require('@aureooms/js-heapq');

var _counts = require('./counts');

var _counts2 = _interopRequireDefault(_counts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _Counter(Map, Dict) {

	var Counter = function Counter(iterable) {

		this.container = new Map();

		if (iterable !== null) this.update(iterable);
	};

	Counter.prototype = new Dict();

	Counter.fromkeys = function (seq) {
		var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


		throw new _jsError.NotImplementedError("Counter.fromkeys() is undefined.  Use Counter(iterable) instead.");
	};

	Counter.prototype.get = function (key) {

		if (this.has(key)) return this.container.get(key);

		return 0;
	};

	Counter.prototype.elements = /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
		var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _ref, _ref2, key, count;

		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_iteratorNormalCompletion = true;
						_didIteratorError = false;
						_iteratorError = undefined;
						_context.prev = 3;
						_iterator = this[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
							_context.next = 18;
							break;
						}

						_ref = _step.value;
						_ref2 = _slicedToArray(_ref, 2);
						key = _ref2[0];
						count = _ref2[1];

					case 10:
						if (!(count-- > 0)) {
							_context.next = 15;
							break;
						}

						_context.next = 13;
						return key;

					case 13:
						_context.next = 10;
						break;

					case 15:
						_iteratorNormalCompletion = true;
						_context.next = 5;
						break;

					case 18:
						_context.next = 24;
						break;

					case 20:
						_context.prev = 20;
						_context.t0 = _context['catch'](3);
						_didIteratorError = true;
						_iteratorError = _context.t0;

					case 24:
						_context.prev = 24;
						_context.prev = 25;

						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}

					case 27:
						_context.prev = 27;

						if (!_didIteratorError) {
							_context.next = 30;
							break;
						}

						throw _iteratorError;

					case 30:
						return _context.finish(27);

					case 31:
						return _context.finish(24);

					case 32:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[3, 20, 24, 32], [25,, 27, 31]]);
	});

	Counter.prototype.increment = function (key) {
		var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;


		this.set(key, this.get(key) + amount);
	};

	Counter.prototype.decrement = function (key) {
		var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;


		this.increment(key, -amount);
	};

	Counter.prototype.update = function (iterable) {
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {

			for (var _iterator2 = iterable[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var key = _step2.value;
				this.increment(key);
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}
	};

	Counter.prototype.add = function (other) {
		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {

			for (var _iterator3 = other[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				var _ref3 = _step3.value;

				var _ref4 = _slicedToArray(_ref3, 2);

				var key = _ref4[0];
				var count = _ref4[1];
				this.increment(key, count);
			}
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3.return) {
					_iterator3.return();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}
	};

	Counter.prototype.subtract = function (other) {
		var _iteratorNormalCompletion4 = true;
		var _didIteratorError4 = false;
		var _iteratorError4 = undefined;

		try {

			for (var _iterator4 = other[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
				var _ref5 = _step4.value;

				var _ref6 = _slicedToArray(_ref5, 2);

				var key = _ref6[0];
				var count = _ref6[1];
				this.decrement(key, count);
			}
		} catch (err) {
			_didIteratorError4 = true;
			_iteratorError4 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion4 && _iterator4.return) {
					_iterator4.return();
				}
			} finally {
				if (_didIteratorError4) {
					throw _iteratorError4;
				}
			}
		}
	};

	Counter.prototype.most_common = function () {
		var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.len();


		return (0, _jsHeapq.nlargest)(_counts2.default, n, this);
	};

	return Counter;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fQ291bnRlci5qcyJdLCJuYW1lcyI6WyJfQ291bnRlciIsIk1hcCIsIkRpY3QiLCJDb3VudGVyIiwiaXRlcmFibGUiLCJjb250YWluZXIiLCJ1cGRhdGUiLCJwcm90b3R5cGUiLCJmcm9ta2V5cyIsInNlcSIsInZhbHVlIiwiTm90SW1wbGVtZW50ZWRFcnJvciIsImdldCIsImtleSIsImhhcyIsImVsZW1lbnRzIiwiY291bnQiLCJpbmNyZW1lbnQiLCJhbW91bnQiLCJzZXQiLCJkZWNyZW1lbnQiLCJhZGQiLCJvdGhlciIsInN1YnRyYWN0IiwibW9zdF9jb21tb24iLCJuIiwibGVuIiwiY291bnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkFLd0JBLFE7O0FBTHhCOztBQUNBOztBQUVBOzs7Ozs7QUFFZSxTQUFTQSxRQUFULENBQW9CQyxHQUFwQixFQUEwQkMsSUFBMUIsRUFBaUM7O0FBRS9DLEtBQU1DLFVBQVUsU0FBVkEsT0FBVSxDQUFXQyxRQUFYLEVBQXNCOztBQUVyQyxPQUFLQyxTQUFMLEdBQWlCLElBQUlKLEdBQUosRUFBakI7O0FBRUEsTUFBS0csYUFBYSxJQUFsQixFQUF5QixLQUFLRSxNQUFMLENBQWFGLFFBQWI7QUFFekIsRUFORDs7QUFRQUQsU0FBUUksU0FBUixHQUFvQixJQUFJTCxJQUFKLEVBQXBCOztBQUVBQyxTQUFRSyxRQUFSLEdBQW1CLFVBQVdDLEdBQVgsRUFBZ0M7QUFBQSxNQUFmQyxLQUFlLHVFQUFQLElBQU87OztBQUVsRCxRQUFNLElBQUlDLDRCQUFKLENBQXlCLGtFQUF6QixDQUFOO0FBRUEsRUFKRDs7QUFNQVIsU0FBUUksU0FBUixDQUFrQkssR0FBbEIsR0FBd0IsVUFBV0MsR0FBWCxFQUFpQjs7QUFFeEMsTUFBSyxLQUFLQyxHQUFMLENBQVVELEdBQVYsQ0FBTCxFQUF1QixPQUFPLEtBQUtSLFNBQUwsQ0FBZU8sR0FBZixDQUFvQkMsR0FBcEIsQ0FBUDs7QUFFdkIsU0FBTyxDQUFQO0FBRUEsRUFORDs7QUFRQVYsU0FBUUksU0FBUixDQUFrQlEsUUFBbEIsd0NBQTZCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUVDLElBRkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBRWhCRixTQUZnQjtBQUVWRyxXQUZVOztBQUFBO0FBQUEsWUFJbkJBLFVBQVUsQ0FKUztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGFBSUNILEdBSkQ7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBN0I7O0FBVUFWLFNBQVFJLFNBQVIsQ0FBa0JVLFNBQWxCLEdBQThCLFVBQVdKLEdBQVgsRUFBOEI7QUFBQSxNQUFiSyxNQUFhLHVFQUFKLENBQUk7OztBQUUzRCxPQUFLQyxHQUFMLENBQVVOLEdBQVYsRUFBZ0IsS0FBS0QsR0FBTCxDQUFVQyxHQUFWLElBQWtCSyxNQUFsQztBQUVBLEVBSkQ7O0FBTUFmLFNBQVFJLFNBQVIsQ0FBa0JhLFNBQWxCLEdBQThCLFVBQVdQLEdBQVgsRUFBOEI7QUFBQSxNQUFiSyxNQUFhLHVFQUFKLENBQUk7OztBQUUzRCxPQUFLRCxTQUFMLENBQWdCSixHQUFoQixFQUFzQixDQUFDSyxNQUF2QjtBQUVBLEVBSkQ7O0FBTUFmLFNBQVFJLFNBQVIsQ0FBa0JELE1BQWxCLEdBQTJCLFVBQVdGLFFBQVgsRUFBc0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBRWhELHlCQUFpQkEsUUFBakI7QUFBQSxRQUFVUyxHQUFWO0FBQTRCLFNBQUtJLFNBQUwsQ0FBZ0JKLEdBQWhCO0FBQTVCO0FBRmdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJaEQsRUFKRDs7QUFNQVYsU0FBUUksU0FBUixDQUFrQmMsR0FBbEIsR0FBd0IsVUFBV0MsS0FBWCxFQUFtQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFFMUMseUJBQTZCQSxLQUE3QjtBQUFBOztBQUFBOztBQUFBLFFBQVlULEdBQVo7QUFBQSxRQUFrQkcsS0FBbEI7QUFBcUMsU0FBS0MsU0FBTCxDQUFnQkosR0FBaEIsRUFBc0JHLEtBQXRCO0FBQXJDO0FBRjBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJMUMsRUFKRDs7QUFNQWIsU0FBUUksU0FBUixDQUFrQmdCLFFBQWxCLEdBQTZCLFVBQVdELEtBQVgsRUFBbUI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBRS9DLHlCQUE2QkEsS0FBN0I7QUFBQTs7QUFBQTs7QUFBQSxRQUFZVCxHQUFaO0FBQUEsUUFBa0JHLEtBQWxCO0FBQXFDLFNBQUtJLFNBQUwsQ0FBZ0JQLEdBQWhCLEVBQXNCRyxLQUF0QjtBQUFyQztBQUYrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSS9DLEVBSkQ7O0FBTUFiLFNBQVFJLFNBQVIsQ0FBa0JpQixXQUFsQixHQUFnQyxZQUE2QjtBQUFBLE1BQWxCQyxDQUFrQix1RUFBZCxLQUFLQyxHQUFMLEVBQWM7OztBQUU1RCxTQUFPLHVCQUFVQyxnQkFBVixFQUFtQkYsQ0FBbkIsRUFBdUIsSUFBdkIsQ0FBUDtBQUVBLEVBSkQ7O0FBTUEsUUFBT3RCLE9BQVA7QUFFQSIsImZpbGUiOiJfQ291bnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5vdEltcGxlbWVudGVkRXJyb3IgfSBmcm9tICdAYXVyZW9vbXMvanMtZXJyb3InIDtcbmltcG9ydCB7IG5sYXJnZXN0IH0gZnJvbSAnQGF1cmVvb21zL2pzLWhlYXBxJyA7XG5cbmltcG9ydCBjb3VudHMgZnJvbSAnLi9jb3VudHMnIDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX0NvdW50ZXIgKCBNYXAgLCBEaWN0ICkge1xuXG5cdGNvbnN0IENvdW50ZXIgPSBmdW5jdGlvbiAoIGl0ZXJhYmxlICkge1xuXG5cdFx0dGhpcy5jb250YWluZXIgPSBuZXcgTWFwKCApIDtcblxuXHRcdGlmICggaXRlcmFibGUgIT09IG51bGwgKSB0aGlzLnVwZGF0ZSggaXRlcmFibGUgKSA7XG5cblx0fSA7XG5cblx0Q291bnRlci5wcm90b3R5cGUgPSBuZXcgRGljdCggKSA7XG5cblx0Q291bnRlci5mcm9ta2V5cyA9IGZ1bmN0aW9uICggc2VxICwgdmFsdWUgPSBudWxsICkge1xuXG5cdFx0dGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoIFwiQ291bnRlci5mcm9ta2V5cygpIGlzIHVuZGVmaW5lZC4gIFVzZSBDb3VudGVyKGl0ZXJhYmxlKSBpbnN0ZWFkLlwiICkgO1xuXG5cdH0gO1xuXG5cdENvdW50ZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICgga2V5ICkge1xuXG5cdFx0aWYgKCB0aGlzLmhhcygga2V5ICkgKSByZXR1cm4gdGhpcy5jb250YWluZXIuZ2V0KCBrZXkgKSA7XG5cblx0XHRyZXR1cm4gMCA7XG5cblx0fSA7XG5cblx0Q291bnRlci5wcm90b3R5cGUuZWxlbWVudHMgPSBmdW5jdGlvbiogKCApIHtcblxuXHRcdGZvciAoIGxldCBbIGtleSAsIGNvdW50IF0gb2YgdGhpcyApIHtcblxuXHRcdFx0d2hpbGUgKCBjb3VudCAtLT4gMCApIHlpZWxkIGtleSA7XG5cblx0XHR9XG5cblx0fSA7XG5cblx0Q291bnRlci5wcm90b3R5cGUuaW5jcmVtZW50ID0gZnVuY3Rpb24gKCBrZXkgLCBhbW91bnQgPSAxICkge1xuXG5cdFx0dGhpcy5zZXQoIGtleSAsIHRoaXMuZ2V0KCBrZXkgKSArIGFtb3VudCApIDtcblxuXHR9IDtcblxuXHRDb3VudGVyLnByb3RvdHlwZS5kZWNyZW1lbnQgPSBmdW5jdGlvbiAoIGtleSAsIGFtb3VudCA9IDEgKSB7XG5cblx0XHR0aGlzLmluY3JlbWVudCgga2V5ICwgLWFtb3VudCApIDtcblxuXHR9IDtcblxuXHRDb3VudGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoIGl0ZXJhYmxlICkge1xuXG5cdFx0Zm9yICggbGV0IGtleSBvZiBpdGVyYWJsZSApIHRoaXMuaW5jcmVtZW50KCBrZXkgKSA7XG5cblx0fSA7XG5cblx0Q291bnRlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKCBvdGhlciApIHtcblxuXHRcdGZvciAoIGxldCBbIGtleSAsIGNvdW50IF0gb2Ygb3RoZXIgKSB0aGlzLmluY3JlbWVudCgga2V5ICwgY291bnQgKSA7XG5cblx0fSA7XG5cblx0Q291bnRlci5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbiAoIG90aGVyICkge1xuXG5cdFx0Zm9yICggbGV0IFsga2V5ICwgY291bnQgXSBvZiBvdGhlciApIHRoaXMuZGVjcmVtZW50KCBrZXkgLCBjb3VudCApIDtcblxuXHR9IDtcblxuXHRDb3VudGVyLnByb3RvdHlwZS5tb3N0X2NvbW1vbiA9IGZ1bmN0aW9uICggbiA9IHRoaXMubGVuKCApICkge1xuXG5cdFx0cmV0dXJuIG5sYXJnZXN0KCBjb3VudHMgLCBuICwgdGhpcyApIDtcblxuXHR9IDtcblxuXHRyZXR1cm4gQ291bnRlciA7XG5cbn1cbiJdfQ==