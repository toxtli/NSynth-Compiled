if (typeof displayUI === undefined) {
	var displayUI = false;
}
if (typeof readyState === undefined) {
	var readyState = true;
}

var nsynthPlayer = null;
var NSynthSound = null;

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(419);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(126)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Keyboard = __webpack_require__(356);

var _Selectors = __webpack_require__(365);

var _Waveform = __webpack_require__(377);

var _Slider = __webpack_require__(386);

__webpack_require__(127);

var _Sound = NSynthSound = __webpack_require__(391);

var _Loader = __webpack_require__(402);

var _Orientation = __webpack_require__(405);

var _Splash = __webpack_require__(409);

var _Config = __webpack_require__(338);

var _Supported = __webpack_require__(418);

var supported = new _Supported.Supported(); /**
                                             * Copyright 2017 Google Inc.
                                             *
                                             * Licensed under the Apache License, Version 2.0 (the "License");
                                             * you may not use this file except in compliance with the License.
                                             * You may obtain a copy of the License at
                                             *
                                             *     http://www.apache.org/licenses/LICENSE-2.0
                                             *
                                             * Unless required by applicable law or agreed to in writing, software
                                             * distributed under the License is distributed on an "AS IS" BASIS,
                                             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                             * See the License for the specific language governing permissions and
                                             * limitations under the License.
                                             */

if (supported.works && displayUI) {
	var hidden = document.createElement('div');
	if (!displayUI) {
		hidden.style.display = 'none';
	}
	document.body.appendChild(hidden);
	var keyboard = new _Keyboard.Keyboard(hidden);
	var ready = readyState;
	var carousels = new _Selectors.Selectors(hidden);
	var waveform = new _Waveform.Waveform(hidden);
	var loader = new _Loader.Loader(hidden, keyboard, waveform);
	var slider = new _Slider.Slider(hidden);
	var orientation = new _Orientation.Orientation(hidden);
	var sound = nsynthPlayer = new _Sound.Sound(carousels);
	sound.set(carousels.folder);
	sound.mix = slider.value;
	keyboard.color = slider.color;

	keyboard.on('keyDown', function (key) {
		if (ready) {
			console.log(key);
			sound.noteOn(key);
		}
	});

	keyboard.on('keyUp', function (key) {
		if (ready) {
			sound.noteOff(key);
		}
	});

	slider.on('value', function (val, color) {
		sound.mix = val;
		waveform.mix = val;
		keyboard.color = color;
	});

	slider.on('mousedown', function () {
		if (_Config.Config.interfaceSounds) {
			keyboard.noteOn(60);
			sound.noteOn(60);
		}
	});
	slider.on('mouseup', function () {
		if (_Config.Config.interfaceSounds) {
			keyboard.noteOff(60);
			sound.noteOff(60);
		}
	});

	carousels.on('change', function (folder) {
		loader.load();
		console.log(folder);
		sound.set(folder);
		console.log(slider.value);
		sound.mix = slider.value;
	});

	carousels.on('click', function (file) {
		if (_Config.Config.interfaceSounds) {
			waveform.previewColor(file);
		}
	});

	// SPLASH //////////////////////////////////////////////

	var splash = new _Splash.Splash(document.body);
	splash.on('about', function () {
		ready = readyState;
	});
	splash.on('play', function () {
		ready = true;
	});
}

if (!displayUI) {
	nsynthPlayer = new NSynthSound.Sound({swapped:false});
	nsynthPlayer.set('Balafon2_Bright_Clav6_Bright');
	nsynthPlayer.mix = 0.5;
}

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Config = undefined;

__webpack_require__(127);

// reference colors
var refPurple = document.createElement('div'); /**
                                                * Copyright 2017 Google Inc.
                                                *
                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                * you may not use this file except in compliance with the License.
                                                * You may obtain a copy of the License at
                                                *
                                                *     http://www.apache.org/licenses/LICENSE-2.0
                                                *
                                                * Unless required by applicable law or agreed to in writing, software
                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                * See the License for the specific language governing permissions and
                                                * limitations under the License.
                                                */

refPurple.id = 'purple';
document.body.appendChild(refPurple);
var purple = window.getComputedStyle(refPurple, null).getPropertyValue('background-color');
refPurple.remove();

var refTeal = document.createElement('div');
refTeal.id = 'teal';
document.body.appendChild(refTeal);
var teal = window.getComputedStyle(refTeal, null).getPropertyValue('background-color');
refTeal.remove();

var Config = exports.Config = {
  samplingInterval: 4,
  interfaceSounds: true,
  rootNote: 60,
  octaves: 2,
  interpolationCount: 4,
  title: 'NSynth: Sound Maker',
  subtitle: 'Make unusual new sounds with machine learning.',
  audioFolder: 'http://www.carlostoxtli.com/NSynth-Compiled/sounds',
  teal: teal,
  purple: purple
};

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
module.exports = [[{
	"name": "Trombone",
	"folder": "Bass_Trombone_Solo"
}, {
	"name": "Harp",
	"folder": "Harp"
}, {
	"name": "Piccolo",
	"folder": "Piccolo_Solo_Legato_Vibrato"
}, {
	"name": "Bowed Bass",
	"folder": "Double_Bass_Solo_Staccato"
}, {
	"name": "Sitar",
	"folder": "Suitar_Guitar"
}, {
	"name": "Plucky Synth",
	"folder": "Plucked"
}, {
	"name": "Organ",
	"folder": "So_High"
}, {
	"name": "Upright Bass",
	"folder": "Upright_Bass"
}, {
	"name": "Vibraphone",
	"folder": "Plastic_Vibraphone"
}, {
	"name": "Shamisen",
	"folder": "Shamisen"
}, {
	"name": "Sawtooth Synth",
	"folder": "Dual_Osc6_Vibrato_Bass"
}, {
	"name": "Balafon",
	"folder": "Balafon2_Bright"
}, {
	"name": "Hammer Dulcimer",
	"folder": "Hammer_Dulcimer"
}, {
	"name": "Reversed Guitar",
	"folder": "Guitar-Reverse_FX"
}, {
	"name": "Trumpet",
	"folder": "Cuba_Trumpet"
}, {
	"name": "Flute",
	"folder": "Concert_Flute_Solo_Legato_Vibrato"
}, {
	"name": "Marimba",
	"folder": "Marimba1_Classic"
}], [{
	"name": "Electric Guitar",
	"folder": "Guitar-Dual_Amped_Heavy"
}, {
	"name": "Clarinet",
	"folder": "Clarinet_Combi"
}, {
	"name": "Octaves Synth",
	"folder": "Rhythmic_Octaves_Bass"
}, {
	"name": "Pan Flute",
	"folder": "Pan_Flute_Winds"
}, {
	"name": "Chorus Guitar",
	"folder": "Clean3_Chorus_Guitar"
}, {
	"name": "Plucked Violin",
	"folder": "Violin_Solo"
}, {
	"name": "Clavichord",
	"folder": "Clav6_Bright"
}, {
	"name": "Wurly",
	"folder": "Wurly_Speaker"
}, {
	"name": "Filter Synth",
	"folder": "Sneaky_Bass"
}, {
	"name": "Wow Synth",
	"folder": "Low_Wow"
}, {
	"name": "Goose",
	"folder": "goose"
}, {
	"name": "Cow",
	"folder": "cow"
}, {
	"name": "Thunder",
	"folder": "thunder"
}, {
	"name": "Cat",
	"folder": "cat"
}, {
	"name": "Dog",
	"folder": "dog"
}]];

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Keyboard = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Keyboard = __webpack_require__(357);

var _Keyboard2 = _interopRequireDefault(_Keyboard);

__webpack_require__(362);

var _events = __webpack_require__(337);

var _events2 = _interopRequireDefault(_events);

var _Config = __webpack_require__(338);

var _Draw = __webpack_require__(364);

var _Draw2 = _interopRequireDefault(_Draw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Keyboard = exports.Keyboard = function (_events$EventEmitter) {
	_inherits(Keyboard, _events$EventEmitter);

	function Keyboard(container) {
		_classCallCheck(this, Keyboard);

		var _this = _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this));

		var keyboardContainer = _this.element = document.createElement('div');
		keyboardContainer.id = 'keyboardContainer';
		container.appendChild(keyboardContainer);

		var keyboard = _this._keyboard = new _Keyboard2.default(keyboardContainer, {
			rootNote: 48,
			octaves: 4,
			sustain: 2500
		});

		function resize() {
			var keyWidth = 30;
			var octaves = Math.round(keyboardContainer.clientWidth / keyWidth / 12);
			octaves = Math.max(octaves, 1);
			octaves = Math.min(octaves, 7);
			var bassNote = 48;
			if (octaves > 5) {
				bassNote -= (octaves - 5) * 12;
			}
			if (octaves === 1) {
				bassNote = 60;
			}
			_Config.Config.rootNote = bassNote;
			_Config.Config.octaves = octaves;
			keyboard.rootNote = bassNote;
			keyboard.octaves = octaves;
		}

		window.addEventListener('resize', resize);
		resize();

		keyboard.on('keyDown', function (key) {
			//range check
			if (key >= _Config.Config.rootNote && key <= _Config.Config.rootNote + 12 * _Config.Config.octaves) {
				_this.emit('keyDown', key);
			}
		});

		keyboard.on('keyUp', function (key) {
			//range check
			if (key >= _Config.Config.rootNote && key <= _Config.Config.rootNote + 12 * _Config.Config.octaves) {
				_this.emit('keyUp', key);
			}
		});

		// create a stylesheet
		_this._styleSheet = function () {
			var style = document.createElement('style');
			style.appendChild(document.createTextNode(''));
			document.head.appendChild(style);
			return style.sheet;
		}();
		return _this;
	}

	_createClass(Keyboard, [{
		key: 'noteOn',
		value: function noteOn(num) {
			this._keyboard.keyDown(num);
		}
	}, {
		key: 'noteOff',
		value: function noteOff(num) {
			this._keyboard.keyUp(num);
		}
	}, {
		key: 'active',
		set: function set(active) {
			this._keyboard.active = active;
		}
	}, {
		key: 'color',
		set: function set(color) {
			if (this._styleSheet.cssRules.length) {
				this._styleSheet.cssRules[0].style.cssText = 'background-color:' + color + '!important;';
			} else {
				this._styleSheet.insertRule('#keyboard { background-color:' + color + '!important;}', 0);
			}
		}
	}]);

	return Keyboard;
}(_events2.default.EventEmitter);

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Type = __webpack_require__(358);

var _events = __webpack_require__(337);

var _events2 = _interopRequireDefault(_events);

var _Element = __webpack_require__(359);

var _Midi = __webpack_require__(360);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Keyboard = function (_events$EventEmitter) {
	_inherits(Keyboard, _events$EventEmitter);

	function Keyboard(container) {
		var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
		    _ref$rootNote = _ref.rootNote,
		    rootNote = _ref$rootNote === undefined ? 48 : _ref$rootNote,
		    _ref$octaves = _ref.octaves,
		    octaves = _ref$octaves === undefined ? 4 : _ref$octaves,
		    _ref$sustain = _ref.sustain,
		    sustain = _ref$sustain === undefined ? Infinity : _ref$sustain;

		_classCallCheck(this, Keyboard);

		/**
   * The keyboard attributes
   * @type {Number}
   * @private
   */
		var _this = _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this));

		_this._rootNote = rootNote;
		_this._octaves = octaves;

		/**
   * If the keyboard is active or not
   * @type {Boolean}
   * @private
   */
		_this._active = true;

		/**
   * The sustain time in milliseconds of the note
   * @type {Number}
   */
		_this.sustain = sustain;

		/**
   * the timeouts for stopping the notes
   */
		_this._timeouts = {};

		/**
   * The audio key keyboard
   * @type {AudioKeys}
   */
		_this._keyboardKeys = new _Type.Type();
		_this._keyboardKeys.on('keyDown', function (note) {
			return _this._triggerEvent('keyDown', note);
		});
		_this._keyboardKeys.on('keyUp', function (note) {
			return _this._triggerEvent('keyUp', note);
		});

		/**
   * The piano interface
   */
		_this._keyboardInterface = new _Element.KeyboardElement(container, rootNote, octaves, sustain);
		_this._keyboardInterface.on('keyDown', function (note) {
			return _this._triggerEvent('keyDown', note);
		});
		_this._keyboardInterface.on('keyUp', function (note) {
			return _this._triggerEvent('keyUp', note);
		});

		/**
   * resize handler
   */
		window.addEventListener('resize', _this._resize.bind(_this));

		//the midi input
		_this._midi = new _Midi.Midi();
		_this._midi.on('keyDown', function (note) {
			return _this._triggerEvent('keyDown', note);
		});
		_this._midi.on('keyUp', function (note) {
			return _this._triggerEvent('keyUp', note);
		});
		return _this;
	}

	_createClass(Keyboard, [{
		key: 'keyDown',
		value: function keyDown(note) {
			this._keyboardInterface.keyDown(note);
		}
	}, {
		key: 'keyUp',
		value: function keyUp(note) {
			this._keyboardInterface.keyUp(note);
		}
	}, {
		key: '_triggerEvent',
		value: function _triggerEvent(event, note) {
			if (this.active) {
				this[event](note);
				this.emit(event, note);
			}
		}
	}, {
		key: '_resize',
		value: function _resize() {
			this._keyboardInterface.resize(this._rootNote, this._octaves);
			if (this._octaves > 2) {
				this._keyboardKeys.rootNote = this._rootNote + 12;
			} else {
				this._keyboardKeys.rootNote = this._rootNote;
			}
		}
	}, {
		key: 'octaves',
		get: function get() {
			return this._octaves;
		},
		set: function set(octaves) {
			this._octaves = octaves;
			this._resize();
		}
	}, {
		key: 'rootNote',
		get: function get() {
			return this._rootNote;
		},
		set: function set(rootNote) {
			this._rootNote = rootNote;
			this._resize();
		}
	}, {
		key: 'active',
		set: function set(active) {
			this._active = active;
			this._keyboardInterface.active = active;
			this._keyboardKeys.active = active;
			if (!active) {
				this._keyboardInterface.clear();
			}
		},
		get: function get() {
			return this._active;
		}
	}, {
		key: 'color',
		set: function set(color) {
			this._keyboardInterface.color = color;
		}
	}]);

	return Keyboard;
}(_events2.default.EventEmitter);

module.exports = Keyboard;

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Type = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(337);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Type = exports.Type = function (_events$EventEmitter) {
	_inherits(Type, _events$EventEmitter);

	function Type() {
		_classCallCheck(this, Type);

		var _this = _possibleConstructorReturn(this, (Type.__proto__ || Object.getPrototypeOf(Type)).call(this));

		_this._active = true;

		var activeKeys = [];

		var keyMapping = [65, 87, 83, 69, 68, 70, 84, 71, 89, 72, 85, 74, 75, 79, 76, 80, 186, 222];

		_this.rootNote = 60;

		document.body.addEventListener('keydown', function (e) {
			if (_this._active) {
				var interval = getInterval(e);
				if (interval !== -1 && activeKeys.indexOf(interval) === -1) {
					activeKeys.push(interval);
					_this.emit('keyDown', interval + _this.rootNote);
				}
			}
		});

		document.body.addEventListener('keyup', function (e) {
			if (_this._active) {
				var interval = getInterval(e);
				if (interval !== -1 && activeKeys.indexOf(interval) !== -1) {
					activeKeys.splice(activeKeys.indexOf(interval), 1);
					_this.emit('keyUp', interval + _this.rootNote);
				}
			}
		});

		function getInterval(e) {
			if (keyMapping.indexOf(e.keyCode) !== -1) {
				return keyMapping.indexOf(e.keyCode);
			} else {
				return -1;
			}
		}
		return _this;
	}

	_createClass(Type, [{
		key: 'active',
		set: function set(val) {
			this._active = val;
		}
	}]);

	return Type;
}(_events2.default.EventEmitter);

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.KeyboardElement = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(337);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the 'License');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an 'AS IS' BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var offsets = [0, 0.5, 1, 1.5, 2, 3, 3.5, 4, 4.5, 5, 5.5, 6];

var KeyboardElement = function (_events$EventEmitter) {
	_inherits(KeyboardElement, _events$EventEmitter);

	function KeyboardElement(container) {
		var lowest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 36;
		var octaves = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
		var sustain = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Infinity;

		_classCallCheck(this, KeyboardElement);

		var _this = _possibleConstructorReturn(this, (KeyboardElement.__proto__ || Object.getPrototypeOf(KeyboardElement)).call(this));

		_this._container = document.createElement('div');
		_this._container.id = 'keyboard';
		_this._bindTouchEvents(_this._container);
		container.appendChild(_this._container);

		_this._keys = {};

		_this._mousedown = false;

		_this.active = true;

		_this.sustain = sustain;

		_this.resize(lowest, octaves);

		document.body.addEventListener('mousemove', function (e) {
			var element = document.elementFromPoint(e.pageX, e.pageY);
			if (!element.classList.contains('key')) {
				_this._mousedown = false;
			}
		});

		return _this;
	}

	_createClass(KeyboardElement, [{
		key: 'resize',
		value: function resize(lowest, octaves) {
			this._keys = {};
			// clear the previous ones
			this._container.innerHTML = '';
			// each of the keys
			var keyWidth = 1 / 7 / octaves;
			for (var i = lowest; i < lowest + octaves * 12; i++) {
				var key = document.createElement('div');
				key.classList.add('key');
				var isSharp = [1, 3, 6, 8, 10].indexOf(i % 12) !== -1;
				key.classList.add(isSharp ? 'accidental' : 'natural');
				this._container.appendChild(key);
				// position the element
				var noteOctave = Math.floor(i / 12) - Math.floor(lowest / 12);
				var offset = offsets[i % 12] + noteOctave * 7;
				var keyMargin = keyWidth * (isSharp ? 0.14 : 0);
				key.style.width = (keyWidth - keyMargin) * 100 + '%';
				key.style.left = (offset * keyWidth + keyMargin / 2) * 100 + '%';

				key.id = i.toString();
				this._bindMouseEvents(key);
				this._keys[i] = key;
			}
		}
	}, {
		key: '_bindTouchEvents',
		value: function _bindTouchEvents(container) {
			var _this2 = this;

			var elementFromTouch = function elementFromTouch(touch) {
				return document.elementFromPoint(touch.pageX, touch.pageY);
			};

			var forEachTouch = function forEachTouch(e, fn) {
				e.preventDefault();
				for (var i = 0; i < e.changedTouches.length; i++) {
					var touch = e.changedTouches[i];
					var element = document.elementFromPoint(touch.pageX, touch.pageY);
					if (element) {
						fn(element, e.changedTouches[i]);
					}
				}
			};

			container.addEventListener('touchstart', function (e) {
				forEachTouch(e, function (element, touch) {
					if (!element.classList.contains('active')) {
						_this2.emit('keyDown', parseInt(element.id));
						element.classList.add('touch_' + touch.identifier);
						element.classList.add('active');
					}
				});
			});

			container.addEventListener('touchend', function (e) {
				forEachTouch(e, function (element, touch) {
					_this2.emit('keyUp', parseInt(element.id));
					element.classList.remove('touch_' + touch.identifier);
					element.classList.remove('active');
				});
			});

			container.addEventListener('touchcancel', function (e) {
				forEachTouch(e, function (element, touch) {
					_this2.emit('keyUp', parseInt(element.id));
					element.classList.remove('touch_' + touch.identifier);
					element.classList.remove('active');
				});
			});

			container.addEventListener('touchmove', function (e) {
				forEachTouch(e, function (element, touch) {
					if (!element.classList.contains('active')) {
						//remove the previous touch
						var previousEl = container.querySelector('.touch_' + touch.identifier);
						_this2.emit('keyUp', parseInt(previousEl.id));
						previousEl.classList.remove('touch_' + touch.identifier);
						previousEl.classList.remove('active');
						//add the new one
						_this2.emit('keyDown', parseInt(element.id));
						element.classList.add('touch_' + touch.identifier);
						element.classList.add('active');
					}
				});
			});

			//ignore long press/context menu
			container.addEventListener('contextmenu', function (e) {
				return e.preventDefault();
			});
		}
	}, {
		key: '_bindMouseEvents',
		value: function _bindMouseEvents(key) {
			var _this3 = this;

			key.addEventListener('mouseenter', function (e) {
				if (_this3._mousedown) {
					var noteNum = parseInt(e.target.id);
					_this3.emit('keyDown', noteNum);
				}
			});

			key.addEventListener('mouseout', function (e) {
				if (_this3._mousedown) {
					var noteNum = parseInt(e.target.id);
					_this3.keyUp(noteNum);
					_this3.emit('keyUp', noteNum);
				}
			});

			key.addEventListener('mousedown', function (e) {
				e.preventDefault();
				if (!_this3._mousedown) {
					_this3._mousedown = true;
					var noteNum = parseInt(e.target.id);
					_this3.emit('keyDown', noteNum);
				}
			});

			key.addEventListener('mouseup', function (e) {
				e.preventDefault();
				if (_this3._mousedown) {
					_this3._mousedown = false;
					var noteNum = parseInt(e.target.id);
					_this3.emit('keyUp', noteNum);
				}
			});
		}
	}, {
		key: 'keyDown',
		value: function keyDown(noteNum) {
			if (this._keys.hasOwnProperty(noteNum)) {
				var key = this._keys[noteNum];
				if (!key.classList.contains('active')) {
					key.classList.add('active');
				}
			}
		}
	}, {
		key: 'keyUp',
		value: function keyUp(noteNum) {
			if (this._keys.hasOwnProperty(noteNum)) {
				var key = this._keys[noteNum];
				key.classList.remove('active');
			}
		}
	}, {
		key: 'clear',
		value: function clear() {
			for (var noteNum in this._keys) {
				this._keys[noteNum].classList.remove('active');
			}
		}
	}, {
		key: 'color',
		set: function set(color) {
			this._container.style.backgroundColor = color;
		}
	}, {
		key: 'active',
		set: function set(active) {
			if (active) {
				this._container.classList.add('active');
			} else {
				this._container.classList.remove('active');
			}
		}
	}]);

	return KeyboardElement;
}(_events2.default.EventEmitter);

exports.KeyboardElement = KeyboardElement;

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Midi = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(337);

var _events2 = _interopRequireDefault(_events);

var _webmidi = __webpack_require__(361);

var _webmidi2 = _interopRequireDefault(_webmidi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Midi = function (_events$EventEmitter) {
	_inherits(Midi, _events$EventEmitter);

	function Midi() {
		_classCallCheck(this, Midi);

		var _this = _possibleConstructorReturn(this, (Midi.__proto__ || Object.getPrototypeOf(Midi)).call(this));

		_this._isEnabled = false;
		_this._active = true;

		_webmidi2.default.enable(function (err) {
			if (!err) {
				_this._isEnabled = true;
				if (_webmidi2.default.inputs) {
					_webmidi2.default.inputs.forEach(function (input) {
						return _this._bindInput(input);
					});
				}
				_webmidi2.default.addListener('connected', function (device) {
					if (device.input) {
						_this._bindInput(device.input);
					}
				});
			}
		});
		return _this;
	}

	_createClass(Midi, [{
		key: '_bindInput',
		value: function _bindInput(inputDevice) {
			var _this2 = this;

			if (this._isEnabled) {
				_webmidi2.default.addListener('disconnected', function (device) {
					if (device.input) {
						device.input.removeListener('noteOn');
						device.input.removeListener('noteOff');
					}
				});
				inputDevice.addListener('noteon', 'all', function (event) {
					if (_this2._active) {
						_this2.emit('keyDown', event.note.number);
					}
				});
				inputDevice.addListener('noteoff', 'all', function (event) {
					if (_this2._active) {
						_this2.emit('keyUp', event.note.number);
					}
				});
			}
		}
	}, {
		key: 'active',
		set: function set(val) {
			this._active = val;
		}
	}]);

	return Midi;
}(_events2.default.EventEmitter);

exports.Midi = Midi;

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(363);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(126)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(125)(false);
// imports


// module
exports.push([module.i, "@keyframes attackDecay{0%{background-color:inherit}to{background-color:#1c1c2a}}@keyframes attackDecayHover{0%{background-color:inherit}to{background-color:#606060}}@keyframes release{0%{background-color:inherit}to{background-color:#1c1c2a}}#keyboardContainer{height:100px;position:absolute;bottom:0;left:50%;transform:translate(-50%);width:100%;max-width:600px;overflow:hidden}#keyboardContainer #keyboard{position:absolute;top:0;left:0;height:100%;width:calc(100% - 2 * 2px);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(255,255,255,0);pointer-events:none;background-color:blue}#keyboardContainer #keyboard.active{pointer-events:auto}#keyboardContainer #keyboard .key{position:absolute;height:calc(100% - 2 * 2px);width:10px;left:0;top:0;border:2px solid #fff;z-index:0;cursor:pointer}#keyboardContainer #keyboard .key.accidental{z-index:1;height:50%}#keyboardContainer #keyboard .key.active,#keyboardContainer #keyboard .key:hover{animation-fill-mode:forwards;animation-duration:4s;animation-timing-function:ease-out}#keyboardContainer #keyboard .key:hover.active{animation-name:attackDecayHover}#keyboardContainer #keyboard .key.active{animation-name:attackDecay}#keyboardContainer #keyboard .key{background-color:#1c1c2a;border-color:#464646}#keyboardContainer #keyboard .key:hover{background-color:#606060}#keyboardContainer #keyboard .key.active{background-color:#65bef0}.mobile #keyboard .key:hover:not(.active){background-color:#1c1c2a!important}", ""]);

// exports


/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Selectors = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Carousel = __webpack_require__(366);

var _Names = __webpack_require__(348);

var _Names2 = _interopRequireDefault(_Names);

var _Folders = __webpack_require__(374);

var _Folders2 = _interopRequireDefault(_Folders);

__webpack_require__(375);

var _events = __webpack_require__(337);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Selectors = exports.Selectors = function (_events$EventEmitter) {
	_inherits(Selectors, _events$EventEmitter);

	function Selectors(container) {
		_classCallCheck(this, Selectors);

		//create the selector container
		var _this = _possibleConstructorReturn(this, (Selectors.__proto__ || Object.getPrototypeOf(Selectors)).call(this));

		var selector = document.createElement('div');
		selector.id = 'selector';
		container.appendChild(selector);

		//create two carousels
		var leftCarousel = _this._leftCarousel = new _Carousel.Carousel(selector, _Names2.default[0]);
		var rightCarousel = _this._rightCarousel = new _Carousel.Carousel(selector, _Names2.default[1]);

		//the plus sign
		var plusSign = document.createElement('div');
		plusSign.id = 'plusSign';
		selector.appendChild(plusSign);

		leftCarousel.on('change', function () {
			_this.emit('change', _this.folder);
		});
		rightCarousel.on('change', function () {
			_this.emit('change', _this.folder);
		});

		leftCarousel.on('click', function () {
			return _this.emit('click', _this._leftCarousel.active);
		});
		rightCarousel.on('click', function () {
			return _this.emit('click', _this._rightCarousel.active);
		});
		return _this;
	}

	_createClass(Selectors, [{
		key: 'swapped',
		get: function get() {
			var comboA = this._leftCarousel.active + '_' + this._rightCarousel.active;
			return !_Folders2.default.includes(comboA);
		}
	}, {
		key: 'folder',
		get: function get() {
			var comboA = this._leftCarousel.active + '_' + this._rightCarousel.active;
			var comboB = this._rightCarousel.active + '_' + this._leftCarousel.active;
			if (_Folders2.default.includes(comboA)) {
				return comboA;
			} else if (_Folders2.default.includes(comboB)) {
				return comboB;
			}
		}
	}]);

	return Selectors;
}(_events2.default.EventEmitter);

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Carousel = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(337);

var _events2 = _interopRequireDefault(_events);

__webpack_require__(367);

var _swiper = __webpack_require__(371);

var _swiper2 = _interopRequireDefault(_swiper);

__webpack_require__(372);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Carousel = exports.Carousel = function (_events$EventEmitter) {
	_inherits(Carousel, _events$EventEmitter);

	function Carousel(container, names) {
		_classCallCheck(this, Carousel);

		//make the carousel wrapper
		var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this));

		var wrapper = document.createElement('div');
		wrapper.classList.add('carousel');
		container.appendChild(wrapper);

		var carousel = _this._carousel = document.createElement('div');
		carousel.classList.add('carousel-wrapper');
		carousel.classList.add('swiper-wrapper');
		wrapper.appendChild(carousel);

		_this._names = names;
		//all the child elements
		for (var i = 0; i < names.length; i++) {
			var item = _this._createItem(names[i]);
			carousel.appendChild(item);
		}

		//prev/next buttons
		var nextButton = document.createElement('div');
		nextButton.id = 'next';
		nextButton.classList.add('navigation');
		wrapper.appendChild(nextButton);
		var prevButton = document.createElement('div');
		prevButton.id = 'prev';
		prevButton.classList.add('navigation');
		wrapper.appendChild(prevButton);

		var swiper = _this._swiper = new _swiper2.default(wrapper, {
			direction: 'vertical',
			slidesPerView: 3,
			spaceBetween: 10,
			nextButton: nextButton,
			prevButton: prevButton,
			buttonDisabledClass: 'inactive',
			initialSlide: 0,
			centeredSlides: true,
			loop: true,
			loopedSlides: names.length,
			slideActiveClass: 'active'
		});

		swiper.on('slideChangeEnd', function (e) {
			_this.emit('change', _this.active);
			_this.highlight();
		});

		//indiciator square
		var indicator = document.createElement('div');
		indicator.id = 'indicator';
		wrapper.appendChild(indicator);
		// indicator.addEventListener('click', this.highlight.bind(this))
		//resize the indicator
		function sizeIndicator() {
			indicator.style.height = carousel.querySelector('.item').clientHeight + 'px';
		}
		sizeIndicator();
		window.addEventListener('resize', sizeIndicator);

		// add two fades
		for (var _i = 0; _i < 2; _i++) {
			var fade = document.createElement('span');
			fade.classList.add('fade');
			wrapper.appendChild(fade);
		}

		return _this;
	}

	_createClass(Carousel, [{
		key: 'highlight',
		value: function highlight() {
			var el = this._carousel.querySelector('.active');
			this.emit('click', this.active);
			el.classList.add('highlight');
			setTimeout(function () {
				el.classList.remove('highlight');
			}, 300);
		}
	}, {
		key: '_createItem',
		value: function _createItem(content) {
			var item = document.createElement('div');
			item.classList.add('item');
			item.classList.add('swiper-slide');
			var contentEl = document.createElement('div');
			contentEl.id = 'content';
			contentEl.textContent = content.name;
			item.appendChild(contentEl);
			return item;
		}
	}, {
		key: 'active',
		get: function get() {
			var element = this._names[this._swiper.activeIndex % this._names.length];
			return element.folder;
		}
	}]);

	return Carousel;
}(_events2.default.EventEmitter);

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(368);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(126)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(344);
exports = module.exports = __webpack_require__(125)(false);
// imports


// module
exports.push([module.i, ".carousel{width:40%;min-width:100px;max-width:200px;height:100%;max-height:400px;position:absolute;top:50%;transform:translateY(-50%);overflow:hidden}.carousel #indicator{height:0;top:50%;z-index:1;transform:translateY(-50%);border-radius:3px;border-width:3px;border-style:solid;box-sizing:border-box}.carousel #indicator,.carousel .navigation{width:100%;position:absolute;left:0;cursor:pointer}.carousel .navigation{height:10%;max-height:70px;z-index:2;background-position:50%;background-repeat:no-repeat;border-radius:5px;opacity:.2;transition:opacity .3s,transform .3s}@media (max-width:500px){.carousel .navigation{display:none}}.carousel .navigation.inactive{pointer-events:none;opacity:0}.carousel .navigation:hover{opacity:1}.carousel .navigation:hover:active{transform:scale(1.1)}.carousel #prev{top:24%;background-image:url(" + escape(__webpack_require__(369)) + ");background-size:auto 60px}.carousel #next{bottom:24%;background-image:url(" + escape(__webpack_require__(370)) + ");background-size:auto 60px}.carousel .carousel-wrapper{position:absolute;width:100%;z-index:0}.carousel .carousel-wrapper .item{color:#464646;width:100%;position:relative;transition:color .3s;text-transform:uppercase;font-weight:700;font-size:18px;letter-spacing:2px;transition:background-color .5s}@media (max-width:440px){.carousel .carousel-wrapper .item{font-size:12px}}.carousel .carousel-wrapper .item #content{width:80%;line-height:20px;position:absolute;text-align:center;left:50%;top:50%;transform:translate(-50%,-50%)}.carousel .carousel-wrapper .item.invisible{pointer-events:none;opacity:0}.carousel .carousel-wrapper .item.active{color:#fff;cursor:pointer!important}.carousel .carousel-wrapper .item.highlight{transition:background-color .1s;border-radius:3px}.carousel:first-child #indicator{border-color:#fc5b13}.carousel:first-child .item.active{color:#fc5b13}.carousel:first-child .item.highlight{background-color:rgba(252,91,19,.2)}.carousel:nth-child(2) #indicator{border-color:#65bef0}.carousel:nth-child(2) .item.active{color:#65bef0}.carousel:nth-child(2) .item.highlight{background-color:rgba(101,190,240,.2)}.carousel .fade{position:absolute;left:0;height:20%;width:100%;z-index:1;pointer-events:none;border-style:solid;border-color:#1c1c2a}.carousel .fade:first-of-type{border-width:20px 0 0;top:0;background:linear-gradient(#1c1c2a,rgba(28,28,42,0))}.carousel .fade:nth-of-type(2){border-width:0 0 20px;bottom:0;background:linear-gradient(rgba(28,28,42,0),#1c1c2a)}.mobile .navigation:hover{opacity:.2!important}.mobile .navigation:hover:active{opacity:1!important}", ""]);

// exports


/***/ }),

/***/ 369:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI0ZGRkZGRiI+CiAgICA8cGF0aCBkPSJNNy40MSAxNS40MUwxMiAxMC44M2w0LjU5IDQuNThMMTggMTRsLTYtNi02IDZ6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ 370:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI0ZGRkZGRiI+CiAgICA8cGF0aCBkPSJNNy40MSA3Ljg0TDEyIDEyLjQybDQuNTktNC41OEwxOCA5LjI1bC02IDYtNi02eiIvPgogICAgPHBhdGggZD0iTTAtLjc1aDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = ["Balafon2_Bright_Clarinet_Combi", "Balafon2_Bright_Clav6_Bright", "Balafon2_Bright_Clean3_Chorus_Guitar", "Balafon2_Bright_Guitar-Dual_Amped_Heavy", "Balafon2_Bright_Low_Wow", "Balafon2_Bright_Pan_Flute_Winds", "Balafon2_Bright_Rhythmic_Octaves_Bass", "Balafon2_Bright_Sneaky_Bass", "Balafon2_Bright_Violin_Solo", "Balafon2_Bright_Wurly_Speaker", "Balafon2_Bright_bike_bell", "Balafon2_Bright_cat", "Balafon2_Bright_cow", "Balafon2_Bright_dog", "Balafon2_Bright_goose", "Balafon2_Bright_thunder", "Bass_Trombone_Solo_Clarinet_Combi", "Bass_Trombone_Solo_Clav6_Bright", "Bass_Trombone_Solo_Clean3_Chorus_Guitar", "Bass_Trombone_Solo_Guitar-Dual_Amped_Heavy", "Bass_Trombone_Solo_Low_Wow", "Bass_Trombone_Solo_Pan_Flute_Winds", "Bass_Trombone_Solo_Rhythmic_Octaves_Bass", "Bass_Trombone_Solo_Sneaky_Bass", "Bass_Trombone_Solo_Violin_Solo", "Bass_Trombone_Solo_Wurly_Speaker", "Bass_Trombone_Solo_bike_bell", "Bass_Trombone_Solo_cat", "Bass_Trombone_Solo_cow", "Bass_Trombone_Solo_dog", "Bass_Trombone_Solo_goose", "Bass_Trombone_Solo_thunder", "Concert_Flute_Solo_Legato_Vibrato_Clarinet_Combi", "Concert_Flute_Solo_Legato_Vibrato_Clav6_Bright", "Concert_Flute_Solo_Legato_Vibrato_Clean3_Chorus_Guitar", "Concert_Flute_Solo_Legato_Vibrato_Guitar-Dual_Amped_Heavy", "Concert_Flute_Solo_Legato_Vibrato_Low_Wow", "Concert_Flute_Solo_Legato_Vibrato_Pan_Flute_Winds", "Concert_Flute_Solo_Legato_Vibrato_Rhythmic_Octaves_Bass", "Concert_Flute_Solo_Legato_Vibrato_Sneaky_Bass", "Concert_Flute_Solo_Legato_Vibrato_Violin_Solo", "Concert_Flute_Solo_Legato_Vibrato_Wurly_Speaker", "Concert_Flute_Solo_Legato_Vibrato_bike_bell", "Concert_Flute_Solo_Legato_Vibrato_cat", "Concert_Flute_Solo_Legato_Vibrato_cow", "Concert_Flute_Solo_Legato_Vibrato_dog", "Concert_Flute_Solo_Legato_Vibrato_goose", "Concert_Flute_Solo_Legato_Vibrato_thunder", "Cuba_Trumpet_Clarinet_Combi", "Cuba_Trumpet_Clav6_Bright", "Cuba_Trumpet_Clean3_Chorus_Guitar", "Cuba_Trumpet_Guitar-Dual_Amped_Heavy", "Cuba_Trumpet_Low_Wow", "Cuba_Trumpet_Pan_Flute_Winds", "Cuba_Trumpet_Rhythmic_Octaves_Bass", "Cuba_Trumpet_Sneaky_Bass", "Cuba_Trumpet_Violin_Solo", "Cuba_Trumpet_Wurly_Speaker", "Cuba_Trumpet_bike_bell", "Cuba_Trumpet_cat", "Cuba_Trumpet_cow", "Cuba_Trumpet_dog", "Cuba_Trumpet_goose", "Cuba_Trumpet_thunder", "Double_Bass_Solo_Staccato_Clarinet_Combi", "Double_Bass_Solo_Staccato_Clav6_Bright", "Double_Bass_Solo_Staccato_Clean3_Chorus_Guitar", "Double_Bass_Solo_Staccato_Dual_Osc6_Vibrato_Bass", "Double_Bass_Solo_Staccato_Guitar-Dual_Amped_Heavy", "Double_Bass_Solo_Staccato_Low_Wow", "Double_Bass_Solo_Staccato_Pan_Flute_Winds", "Double_Bass_Solo_Staccato_Rhythmic_Octaves_Bass", "Double_Bass_Solo_Staccato_Sneaky_Bass", "Double_Bass_Solo_Staccato_Violin_Solo", "Double_Bass_Solo_Staccato_Wurly_Speaker", "Double_Bass_Solo_Staccato_bike_bell", "Double_Bass_Solo_Staccato_cat", "Double_Bass_Solo_Staccato_cow", "Double_Bass_Solo_Staccato_dog", "Double_Bass_Solo_Staccato_goose", "Double_Bass_Solo_Staccato_thunder", "Dual_Osc6_Vibrato_Bass_Clarinet_Combi", "Dual_Osc6_Vibrato_Bass_Clav6_Bright", "Dual_Osc6_Vibrato_Bass_Clean3_Chorus_Guitar", "Dual_Osc6_Vibrato_Bass_Guitar-Dual_Amped_Heavy", "Dual_Osc6_Vibrato_Bass_Low_Wow", "Dual_Osc6_Vibrato_Bass_Pan_Flute_Winds", "Dual_Osc6_Vibrato_Bass_Rhythmic_Octaves_Bass", "Dual_Osc6_Vibrato_Bass_Sneaky_Bass", "Dual_Osc6_Vibrato_Bass_Violin_Solo", "Dual_Osc6_Vibrato_Bass_Wurly_Speaker", "Dual_Osc6_Vibrato_Bass_bike_bell", "Dual_Osc6_Vibrato_Bass_cat", "Dual_Osc6_Vibrato_Bass_cow", "Dual_Osc6_Vibrato_Bass_dog", "Dual_Osc6_Vibrato_Bass_goose", "Dual_Osc6_Vibrato_Bass_thunder", "Guitar-Reverse_FX_Clarinet_Combi", "Guitar-Reverse_FX_Clav6_Bright", "Guitar-Reverse_FX_Clean3_Chorus_Guitar", "Guitar-Reverse_FX_Guitar-Dual_Amped_Heavy", "Guitar-Reverse_FX_Low_Wow", "Guitar-Reverse_FX_Pan_Flute_Winds", "Guitar-Reverse_FX_Rhythmic_Octaves_Bass", "Guitar-Reverse_FX_Sneaky_Bass", "Guitar-Reverse_FX_Violin_Solo", "Guitar-Reverse_FX_Wurly_Speaker", "Guitar-Reverse_FX_bike_bell", "Guitar-Reverse_FX_cat", "Guitar-Reverse_FX_cow", "Guitar-Reverse_FX_dog", "Guitar-Reverse_FX_goose", "Guitar-Reverse_FX_thunder", "Hammer_Dulcimer_Clarinet_Combi", "Hammer_Dulcimer_Clav6_Bright", "Hammer_Dulcimer_Clean3_Chorus_Guitar", "Hammer_Dulcimer_Guitar-Dual_Amped_Heavy", "Hammer_Dulcimer_Low_Wow", "Hammer_Dulcimer_Pan_Flute_Winds", "Hammer_Dulcimer_Rhythmic_Octaves_Bass", "Hammer_Dulcimer_Sneaky_Bass", "Hammer_Dulcimer_Violin_Solo", "Hammer_Dulcimer_Wurly_Speaker", "Hammer_Dulcimer_bike_bell", "Hammer_Dulcimer_cat", "Hammer_Dulcimer_cow", "Hammer_Dulcimer_dog", "Hammer_Dulcimer_goose", "Hammer_Dulcimer_thunder", "Harp_Clarinet_Combi", "Harp_Clav6_Bright", "Harp_Clean3_Chorus_Guitar", "Harp_Guitar-Dual_Amped_Heavy", "Harp_Low_Wow", "Harp_Pan_Flute_Winds", "Harp_Rhythmic_Octaves_Bass", "Harp_Sneaky_Bass", "Harp_Violin_Solo", "Harp_Wurly_Speaker", "Harp_bike_bell", "Harp_cat", "Harp_cow", "Harp_dog", "Harp_goose", "Harp_thunder", "Marimba1_Classic_Clarinet_Combi", "Marimba1_Classic_Clav6_Bright", "Marimba1_Classic_Clean3_Chorus_Guitar", "Marimba1_Classic_Guitar-Dual_Amped_Heavy", "Marimba1_Classic_Low_Wow", "Marimba1_Classic_Pan_Flute_Winds", "Marimba1_Classic_Rhythmic_Octaves_Bass", "Marimba1_Classic_Sneaky_Bass", "Marimba1_Classic_Violin_Solo", "Marimba1_Classic_Wurly_Speaker", "Marimba1_Classic_bike_bell", "Marimba1_Classic_cat", "Marimba1_Classic_cow", "Marimba1_Classic_dog", "Marimba1_Classic_goose", "Marimba1_Classic_thunder", "Piccolo_Solo_Legato_Vibrato_Clarinet_Combi", "Piccolo_Solo_Legato_Vibrato_Clav6_Bright", "Piccolo_Solo_Legato_Vibrato_Clean3_Chorus_Guitar", "Piccolo_Solo_Legato_Vibrato_Guitar-Dual_Amped_Heavy", "Piccolo_Solo_Legato_Vibrato_Low_Wow", "Piccolo_Solo_Legato_Vibrato_Pan_Flute_Winds", "Piccolo_Solo_Legato_Vibrato_Rhythmic_Octaves_Bass", "Piccolo_Solo_Legato_Vibrato_Sneaky_Bass", "Piccolo_Solo_Legato_Vibrato_Violin_Solo", "Piccolo_Solo_Legato_Vibrato_Wurly_Speaker", "Piccolo_Solo_Legato_Vibrato_bike_bell", "Piccolo_Solo_Legato_Vibrato_cat", "Piccolo_Solo_Legato_Vibrato_cow", "Piccolo_Solo_Legato_Vibrato_dog", "Piccolo_Solo_Legato_Vibrato_goose", "Piccolo_Solo_Legato_Vibrato_thunder", "Plastic_Vibraphone_Clarinet_Combi", "Plastic_Vibraphone_Clav6_Bright", "Plastic_Vibraphone_Clean3_Chorus_Guitar", "Plastic_Vibraphone_Guitar-Dual_Amped_Heavy", "Plastic_Vibraphone_Low_Wow", "Plastic_Vibraphone_Pan_Flute_Winds", "Plastic_Vibraphone_Rhythmic_Octaves_Bass", "Plastic_Vibraphone_Sneaky_Bass", "Plastic_Vibraphone_Violin_Solo", "Plastic_Vibraphone_Wurly_Speaker", "Plastic_Vibraphone_bike_bell", "Plastic_Vibraphone_cat", "Plastic_Vibraphone_cow", "Plastic_Vibraphone_dog", "Plastic_Vibraphone_goose", "Plastic_Vibraphone_thunder", "Plucked_Clarinet_Combi", "Plucked_Clav6_Bright", "Plucked_Clean3_Chorus_Guitar", "Plucked_Guitar-Dual_Amped_Heavy", "Plucked_Low_Wow", "Plucked_Pan_Flute_Winds", "Plucked_Rhythmic_Octaves_Bass", "Plucked_Sneaky_Bass", "Plucked_Violin_Solo", "Plucked_Wurly_Speaker", "Plucked_bike_bell", "Plucked_cat", "Plucked_cow", "Plucked_dog", "Plucked_goose", "Plucked_thunder", "Shamisen_Clarinet_Combi", "Shamisen_Clav6_Bright", "Shamisen_Clean3_Chorus_Guitar", "Shamisen_Guitar-Dual_Amped_Heavy", "Shamisen_Low_Wow", "Shamisen_Pan_Flute_Winds", "Shamisen_Rhythmic_Octaves_Bass", "Shamisen_Sneaky_Bass", "Shamisen_Violin_Solo", "Shamisen_Wurly_Speaker", "Shamisen_bike_bell", "Shamisen_cat", "Shamisen_cow", "Shamisen_dog", "Shamisen_goose", "Shamisen_thunder", "So_High_Clarinet_Combi", "So_High_Clav6_Bright", "So_High_Clean3_Chorus_Guitar", "So_High_Guitar-Dual_Amped_Heavy", "So_High_Low_Wow", "So_High_Pan_Flute_Winds", "So_High_Rhythmic_Octaves_Bass", "So_High_Sneaky_Bass", "So_High_Violin_Solo", "So_High_Wurly_Speaker", "So_High_bike_bell", "So_High_cat", "So_High_cow", "So_High_dog", "So_High_goose", "So_High_thunder", "Suitar_Guitar_Clarinet_Combi", "Suitar_Guitar_Clav6_Bright", "Suitar_Guitar_Clean3_Chorus_Guitar", "Suitar_Guitar_Guitar-Dual_Amped_Heavy", "Suitar_Guitar_Low_Wow", "Suitar_Guitar_Pan_Flute_Winds", "Suitar_Guitar_Rhythmic_Octaves_Bass", "Suitar_Guitar_Sneaky_Bass", "Suitar_Guitar_Violin_Solo", "Suitar_Guitar_Wurly_Speaker", "Suitar_Guitar_bike_bell", "Suitar_Guitar_cat", "Suitar_Guitar_cow", "Suitar_Guitar_dog", "Suitar_Guitar_goose", "Suitar_Guitar_thunder", "Upright_Bass_Clarinet_Combi", "Upright_Bass_Clav6_Bright", "Upright_Bass_Clean3_Chorus_Guitar", "Upright_Bass_Guitar-Dual_Amped_Heavy", "Upright_Bass_Low_Wow", "Upright_Bass_Pan_Flute_Winds", "Upright_Bass_Rhythmic_Octaves_Bass", "Upright_Bass_Sneaky_Bass", "Upright_Bass_Violin_Solo", "Upright_Bass_Wurly_Speaker", "Upright_Bass_bike_bell", "Upright_Bass_cat", "Upright_Bass_cow", "Upright_Bass_dog", "Upright_Bass_goose", "Upright_Bass_thunder"];

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(376);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(126)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(125)(false);
// imports


// module
exports.push([module.i, "#selector{width:90%;min-width:300px;max-width:600px;position:absolute;left:50%;transform:translate(-50%);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (max-height:640px){#selector{top:0;height:calc(100% - 300px)}}@media (min-height:640px){#selector{top:40px;height:calc(100% - 340px)}}#selector .carousel{position:absolute;display:inline-block;z-index:0}#selector .carousel:first-of-type{left:0}#selector .carousel:nth-of-type(2){right:0}#selector #plusSign{position:absolute;top:50%;left:50%;width:40px;height:40px;line-height:40px;font-size:40px;text-align:center;transform:translate(-50%,-50%)}#selector #plusSign:before{content:\"+\"}", ""]);

// exports


/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Waveform = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

__webpack_require__(378);

var _Analyser = __webpack_require__(380);

var _Analyser2 = _interopRequireDefault(_Analyser);

var _Master = __webpack_require__(342);

var _Master2 = _interopRequireDefault(_Master);

var _Zero = __webpack_require__(384);

var _Zero2 = _interopRequireDefault(_Zero);

var _Config = __webpack_require__(338);

var _Names = __webpack_require__(348);

var _Names2 = _interopRequireDefault(_Names);

var _tween = __webpack_require__(354);

var _tween2 = _interopRequireDefault(_tween);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Waveform = exports.Waveform = function () {
	function Waveform(container) {
		var _this = this;

		_classCallCheck(this, Waveform);

		var waveformContainer = this.element = document.createElement('div');
		waveformContainer.id = 'waveform';
		container.appendChild(waveformContainer);

		var canvas = document.createElement('canvas');
		waveformContainer.appendChild(canvas);

		var context = canvas.getContext('2d');
		var width = context.canvas.width;
		var height = context.canvas.height;

		var analyser = new _Analyser2.default('waveform', window.screen.width > 600 ? 512 : 128);
		analyser.returnType = 'float';
		_Master2.default.connect(analyser);
		var zeros = new _Zero2.default();
		zeros.connect(analyser);

		this._mix = 0.5;
		this._currentMix = this._mix;

		function resize() {
			context.canvas.width = waveformContainer.offsetWidth * 2;
			context.canvas.height = waveformContainer.offsetHeight * 2;
			width = context.canvas.width;
			height = context.canvas.height;
		}

		window.addEventListener('resize', resize);
		resize();

		var animate = function animate() {
			requestAnimationFrame(animate);

			var waveformGradient = context.createLinearGradient(0, 0, width, height);
			if (_this._currentMix > 0.5) {
				waveformGradient.addColorStop(0 + (_this._currentMix - 0.5) * 2, _Config.Config.teal);
				waveformGradient.addColorStop(1, _Config.Config.purple);
			} else {
				waveformGradient.addColorStop(0, _Config.Config.teal);
				waveformGradient.addColorStop(_this._currentMix * 2, _Config.Config.purple);
				// waveformGradient.addColorStop(1, Config.teal)
			}

			context.clearRect(0, 0, width, height);
			var values = analyser.analyse();
			context.beginPath();
			context.lineJoin = 'round';
			context.lineCap = 'round';
			context.lineWidth = 8;
			context.strokeStyle = waveformGradient;
			var amp = values.reduce(function (acc, v) {
				return acc + v * v;
			}) / values.length;
			var max = Math.max.apply(null, values.map(Math.abs));
			var norm = 1;
			if (max > 1) {
				norm = 1 / max;
			}
			var drift = 0.2 * Math.min(Math.pow(amp, 0.5) * 2, 1);
			if (isNaN(drift)) {
				drift = 0;
			}
			var span = 0.9 - drift;

			for (var i = 0, len = values.length; i < len; i++) {
				var sign = values[i] > 0 ? 1 : -1;
				var val = values[i];
				val *= norm;
				val = (val + 1) / 2;
				var x = width * span * (i / len) + width * (1 - span) / 2;
				var y = val * height * 0.9 + height * 0.05;
				if (i === 0) {
					context.moveTo(x, y);
				} else {
					context.lineTo(x, y);
				}
			}
			context.stroke();
		};
		animate();
	}

	_createClass(Waveform, [{
		key: 'previewColor',
		value: function previewColor(folder) {
			if (this._tween) {
				this._tween.stop();
			}
			var self = this;
			//which side is the mix on
			var mix = 1;
			if (_Names2.default[0].findIndex(function (obj) {
				return obj.folder === folder;
			}) !== -1) {
				mix = 0;
			}
			this._currentMix = mix;
			this._tween = new _tween2.default.Tween({
				mix: mix
			}).to({ mix: this._mix }, 1000).onUpdate(function () {
				self._currentMix = this.mix;
			}).delay(300).start();
		}
	}, {
		key: 'mix',
		set: function set(mix) {
			this._mix = 1 - mix;
			this._currentMix = this._mix;
			if (this._tween) {
				this._tween.stop();
			}
		}
	}]);

	return Waveform;
}();

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(379);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(126)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(125)(false);
// imports


// module
exports.push([module.i, "#waveform{height:200px;bottom:100px}#waveform,#waveform canvas{width:100%;position:absolute}#waveform canvas{height:100%;top:0;left:0}", ""]);

// exports


/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Slider = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(387);

var _events = __webpack_require__(337);

var _events2 = _interopRequireDefault(_events);

var _chromaJs = __webpack_require__(389);

var _chromaJs2 = _interopRequireDefault(_chromaJs);

var _Config = __webpack_require__(338);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Slider = exports.Slider = function (_events$EventEmitter) {
	_inherits(Slider, _events$EventEmitter);

	function Slider(container) {
		_classCallCheck(this, Slider);

		var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this));

		var slider = document.createElement('div');
		slider.id = 'slider';
		container.appendChild(slider);

		var input = _this._input = document.createElement('input');
		input.type = 'range';
		input.min = 0;
		input.max = 100;
		input.value = 50;
		slider.appendChild(input);

		var thumb = _this._thumb = document.createElement('thumb');
		thumb.id = 'thumb';
		slider.appendChild(thumb);

		input.addEventListener('touchstart', _this._thumbDown.bind(_this));
		input.addEventListener('touchend', _this._thumbUp.bind(_this));
		input.addEventListener('mousedown', _this._thumbDown.bind(_this));
		input.addEventListener('mouseup', _this._thumbUp.bind(_this));
		input.addEventListener('mouseover', function (e) {
			return thumb.classList.add('hover');
		});
		input.addEventListener('mouseout', function (e) {
			return thumb.classList.remove('hover');
		});
		_this._chromaScale = _chromaJs2.default.scale([_Config.Config.teal, _Config.Config.purple]);
		input.addEventListener('input', _this._setThumb.bind(_this));
		_this._setThumb();
		return _this;
	}

	_createClass(Slider, [{
		key: '_setThumb',
		value: function _setThumb() {
			var color = this._chromaScale(this.value).hex();
			this._thumb.style.left = 'calc(' + this._input.value + '% - ' + Math.round(this._thumb.offsetWidth * (1 - this.value)) + 'px)';
			this._thumb.style.backgroundColor = color;
			this.emit('value', this.value, color);
			return color;
		}
	}, {
		key: '_thumbDown',
		value: function _thumbDown() {
			this.emit('mousedown');
			this._thumb.classList.add('active');
		}
	}, {
		key: '_thumbUp',
		value: function _thumbUp() {
			this._thumb.classList.remove('active');
			this.emit('mouseup');
		}
	}, {
		key: 'value',
		get: function get() {
			return 1 - parseInt(this._input.value) / 100;
		}
	}, {
		key: 'color',
		get: function get() {
			return this._setThumb();
		}
	}]);

	return Slider;
}(_events2.default.EventEmitter);

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(388);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(126)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(125)(false);
// imports


// module
exports.push([module.i, "#slider{position:absolute;max-width:280px;min-width:100px;width:40%;bottom:308px;left:50%;height:8px;transform:translate(-50%);padding:0;z-index:10;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#slider:focus{outline:none}#slider input{-webkit-appearance:none;-moz-appearance:none;appearance:none;position:absolute;height:8px;margin:0;top:0;left:0;width:100%;border-radius:4px}#slider input:focus{outline:none}#slider input::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:36px;height:36px;margin-top:-14px;border-radius:50%;opacity:0;background-color:transparent;cursor:pointer;cursor:hand}#slider input::-moz-range-thumb{-moz-appearance:none;appearance:none;width:36px;height:36px;margin-top:-14px;border-radius:50%;opacity:0;background-color:transparent;cursor:pointer;cursor:hand}#slider input::-ms-thumb{appearance:none;width:36px;height:36px;margin-top:-14px;border-radius:50%;opacity:0;background-color:transparent;cursor:pointer;cursor:hand}#slider input::-webkit-slider-runnable-track{height:8px;cursor:pointer;border-radius:4px;background:linear-gradient(90deg,#fc5b13,#65bef0)}#slider input::-moz-range-track{height:8px;cursor:pointer;border-radius:4px;background:linear-gradient(90deg,#fc5b13,#65bef0)}#slider input::-ms-track{height:8px;cursor:pointer;border-radius:4px;background:linear-gradient(90deg,#fc5b13,#65bef0)}#slider #thumb{width:28px;height:28px;position:absolute;margin-top:-10px;pointer-events:none;border-radius:50%;transition:transform .1s;cursor:pointer}#slider #thumb.hover{transform:scale(1.1)}#slider #thumb.active{transform:scale(.95)}", ""]);

// exports


/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Sound = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _Source = __webpack_require__(392);

var _Config = __webpack_require__(338);

var _Master = __webpack_require__(342);

var _Master2 = _interopRequireDefault(_Master);

var _Frequency = __webpack_require__(352);

var _Frequency2 = _interopRequireDefault(_Frequency);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_Master2.default.volume.value = 2;

var Sound = exports.Sound = function () {
	function Sound(carousel) {
		_classCallCheck(this, Sound);

		this._sources = [];
		this._carousel = carousel;
		this._folder = null;
		this._mix = 0.5;
	}

	_createClass(Sound, [{
		key: 'set',
		value: function set(folder) {
			// dispose the old stuff
			this._folder = folder;
			this._sources.map(function (source) {
				return source.dispose();
			});
			this._sources = [];
			for (var i = 0; i <= _Config.Config.interpolationCount; i++) {
				var source = new _Source.Source(folder, i, _Config.Config.interpolationCount - i);
				this._sources.push(source);
			}
		}
	}, {
		key: 'noteOn',
		value: function noteOn(midi, time) {
			if (this.loaded) {
				var note = (0, _Frequency2.default)(midi, 'midi').toNote();
				this._sources.forEach(function (source) {
					return source.noteOn(note, time);
				});
			}
		}
	}, {
		key: 'noteOff',
		value: function noteOff(midi, time) {
			if (this.loaded) {
				var note = (0, _Frequency2.default)(midi, 'midi').toNote();
				this._sources.forEach(function (source) {
					return source.noteOff(note, time);
				});
			}
		}
	}, {
		key: 'mix',
		set: function set(val) {
			//get the closest interpolation step
			if (this._carousel.swapped) {
				val = 1 - val;
			}
			this._mix = val;
			var floor = Math.floor(val * _Config.Config.interpolationCount);
			var ceil = Math.ceil(val * _Config.Config.interpolationCount);
			if (floor !== ceil) {
				var dist = val * _Config.Config.interpolationCount - floor;
				this._sources[floor].volume = 1 - dist;
				this._sources[ceil].volume = dist;
			} else {
				this._sources[ceil].volume = 1;
			}
			this._sources.forEach(function (src, i) {
				if (i !== ceil && i !== floor) {
					src.volume = 0;
				}
			});
		}
	}, {
		key: 'loaded',
		get: function get() {
			var isLoaded = true;
			this._sources.forEach(function (source) {
				return isLoaded = source.loaded && isLoaded;
			});
			return isLoaded;
		}
	}]);

	return Sound;
}();

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Source = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _MultiSampler = __webpack_require__(393);

var _MultiSampler2 = _interopRequireDefault(_MultiSampler);

var _Tone = __webpack_require__(336);

var _Tone2 = _interopRequireDefault(_Tone);

var _Config = __webpack_require__(338);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var unpitched = ['cat', 'dog', 'thunder', 'cow', 'bike_bell', 'goose'];

var Source = exports.Source = function () {
	function Source(folder, mixA) {
		_classCallCheck(this, Source);

		//generate the sample urls
		var urls = {};
		var isUnpitched = unpitched.findIndex(function (file) {
			return folder.includes(file);
		}) !== -1;
		var dontPitch = mixA === 0 && isUnpitched;

		if (dontPitch) {
			urls[60] = _Config.Config.audioFolder + '/' + folder + '/' + mixA + '_60.mp3';
		} else {
			for (var i = 0; i <= _Config.Config.octaves * (12 / _Config.Config.samplingInterval); i++) {
				var midiNote = i * _Config.Config.samplingInterval + _Config.Config.rootNote;
				console.log(mixA);
				console.log(midiNote);
				urls[midiNote] = _Config.Config.audioFolder + '/' + folder + '/' + mixA + '_' + midiNote + '.mp3';
			}
		}

		this._sampler = new _MultiSampler2.default(urls, {
			volume: -Infinity,
			release: 0.3
		}).toMaster();
	}

	_createClass(Source, [{
		key: 'noteOn',
		value: function noteOn(note) {
			this._sampler.triggerAttack(note, '+0.05', Math.random() * 0.3 + 0.6);
		}
	}, {
		key: 'noteOff',
		value: function noteOff(note) {
			this._sampler.triggerRelease(note, '+0.05');
		}
	}, {
		key: 'dispose',
		value: function dispose() {
			this._sampler.dispose();
		}
	}, {
		key: 'volume',
		set: function set(vol) {
			this._sampler.volume.value = _Tone2.default.gainToDb(vol * 0.4);
			// this._sampler.volume.cancelScheduledValues()
			// this._sampler.volume.rampTo(Tone.gainToDb(vol * 0.8), 0.02)
		},
		get: function get() {
			return this._sample.dbToGain(this._sampler.volume);
		}
	}, {
		key: 'loaded',
		get: function get() {
			return this._sampler.loaded;
		}
	}]);

	return Source;
}();

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Loader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _Buffer = __webpack_require__(347);

var _Buffer2 = _interopRequireDefault(_Buffer);

__webpack_require__(403);

var _Config = __webpack_require__(338);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Loader = exports.Loader = function () {
	function Loader(container, keyboard, waveform) {
		var _this = this;

		_classCallCheck(this, Loader);

		this._keyboard = keyboard;
		this._waveform = waveform;

		_Buffer2.default.on('load', function () {
			return _this.hide();
		});

		this._loader = document.createElement('div');
		this._loader.id = 'loader';
		this._loader.innerHTML = '<svg class="circular" viewBox="25 25 50 50">\n\t\t\t\t\t\t\t\t\t<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>\n\t\t\t\t\t\t\t\t</svg>';
		container.appendChild(this._loader);

		this._loaded = [];

		//initial loader bar
		this.load();
	}

	_createClass(Loader, [{
		key: 'load',
		value: function load(folder) {
			if (_Config.Config.interfaceSounds) {
				this._keyboard.active = false;
				this._loader.classList.add('visible');
				this._keyboard.element.classList.add('loading');
				this._waveform.element.classList.add('loading');
			}
		}
	}, {
		key: 'hide',
		value: function hide() {
			this._keyboard.active = true;
			this._keyboard.element.classList.remove('loading');
			this._waveform.element.classList.remove('loading');
			this._loader.classList.remove('visible');
		}
	}, {
		key: '_progress',
		value: function _progress(prog) {
			this._loader.style.width = prog * 100 + '%';
			this._loader.style.opacity = 1 - prog * 0.9;
		}
	}]);

	return Loader;
}();

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(404);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(126)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(125)(false);
// imports


// module
exports.push([module.i, "#keyboardContainer,#waveform{transition:opacity .1s}#keyboardContainer.loading,#waveform.loading{pointer-events:none;opacity:.2}#loader{width:100%;height:100px;z-index:10;position:absolute;bottom:100px;margin-bottom:-50px;left:0;opacity:0;pointer-events:none}#loader.visible{transition:opacity .1s;opacity:1}#loader .circular{animation:rotate 2s linear infinite;height:100px;transform-origin:center center;width:100px;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}#loader .path{stroke-dasharray:1,200;stroke-dashoffset:0;animation:dash 1.5s ease-in-out infinite,color 6s ease-in-out infinite;stroke-linecap:round}@keyframes rotate{to{transform:rotate(1turn)}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes color{0%,to{stroke:#fc5b13}66%{stroke:#65bef0}}", ""]);

// exports


/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Orientation = undefined;

__webpack_require__(406);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2017 Google Inc.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */

var Orientation = exports.Orientation = function Orientation(container) {
	_classCallCheck(this, Orientation);

	var element = document.createElement('div');
	element.id = 'orientation';

	var text = document.createElement('div');
	text.id = 'text';
	text.textContent = 'rotate your phone';
	element.appendChild(text);

	var img = document.createElement('div');
	img.id = 'rotatePhone';
	element.appendChild(img);

	//test if mobile
	var isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());
	if (isMobile) {
		container.appendChild(element);
		document.body.classList.add('mobile');
	}
};

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(407);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(126)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(344);
exports = module.exports = __webpack_require__(125)(false);
// imports


// module
exports.push([module.i, "#orientation{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#000;z-index:100000000;display:none}#orientation #text{width:200px;height:15px;line-height:15px;font-size:15px;text-align:center;text-transform:uppercase;top:50%}#orientation #rotatePhone,#orientation #text{position:absolute;left:50%;transform:translate(-50%,-50%)}#orientation #rotatePhone{width:50px;height:50px;top:calc(50% - 50px);background-image:url(" + escape(__webpack_require__(408)) + ");background-repeat:no-repeat;background-position:50%}@media (orientation:landscape){#orientation{display:inline-block}}", ""]);

// exports


/***/ }),

/***/ 408:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9Ii04NjEgMTM2MyAxODAgMTQwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IC04NjEgMTM2MyAxODAgMTQwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojZmZmO30NCjwvc3R5bGU+DQo8Zz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTczMS4xLDEzNzkuN2MwLTUuMy00LjQtOS4zLTkuMy05LjNoLTU2LjhjLTUuMywwLTkuMyw0LjQtOS4zLDkuM3YxMDYuNWMwLDUuMyw0LjQsOS4zLDkuMyw5LjNoNTYuNA0KCQljNS4zLDAsOS44LTQuNCw5LjgtOS4zVjEzNzkuN0wtNzMxLjEsMTM3OS43eiBNLTc5Ny4yLDE0ODYuM3YtMTA2LjVoNTYuNHYxMDYuNUgtNzk3LjJ6Ii8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTS04MzcuNiwxNDQ3LjJjLTEwLjItMTAuMi0xMC4yLTI3LjEsMC0zNy43YzMuMS0zLjEsNy4xLTUuMywxMS4xLTYuN3YtOC45Yy02LjIsMS4zLTEyLjQsNC40LTE3LjMsOS4zDQoJCWMtMTMuOCwxMy44LTEzLjgsMzYuNCwwLDUwLjFsLTkuMyw5LjNoMjUuM3YtMjUuM0wtODM3LjYsMTQ0Ny4yeiIvPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tNzEzLjgsMTM5My45djI1LjNsOS4zLTkuM2MxMC4yLDEwLjIsMTAuMiwyNy4xLDAsMzcuN2MtMy4xLDMuMS03LjEsNS4zLTExLjEsNi43djkuMw0KCQljNi4yLTEuMywxMi40LTQuNCwxNy4zLTkuM2MxMy44LTEzLjgsMTMuOC0zNi40LDAtNTAuMWw5LjMtMTAuMkgtNzEzLjh6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Splash = undefined;

var _Config = __webpack_require__(338);

__webpack_require__(410);

var _events = __webpack_require__(337);

var _events2 = _interopRequireDefault(_events);

var _Wiggle = __webpack_require__(416);

var _startaudiocontext = __webpack_require__(417);

var _startaudiocontext2 = _interopRequireDefault(_startaudiocontext);

var _Tone = __webpack_require__(336);

var _Tone2 = _interopRequireDefault(_Tone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Splash = exports.Splash = function (_events$EventEmitter) {
	_inherits(Splash, _events$EventEmitter);

	function Splash(container) {
		_classCallCheck(this, Splash);

		var _this = _possibleConstructorReturn(this, (Splash.__proto__ || Object.getPrototypeOf(Splash)).call(this));

		if (displayUI) {
			var splash = document.createElement('div');
			splash.id = 'splash';
			container.appendChild(splash);

			var titleContainer = document.createElement('div');
			titleContainer.id = 'titleContainer';
			splash.appendChild(titleContainer);

			var title = document.createElement('div');
			title.id = 'title';
			title.textContent = _Config.Config.title;
			titleContainer.appendChild(title);

			var subtitle = document.createElement('div');
			subtitle.id = 'subtitle';
			subtitle.textContent = _Config.Config.subtitle;
			titleContainer.appendChild(subtitle);

			var playButton = document.createElement('div');
			playButton.id = 'playButton';
			titleContainer.appendChild(playButton);

			var playButtonFill = document.createElement('div');
			playButtonFill.id = 'playButtonFill';
			playButton.appendChild(playButtonFill);

			var playButtonText = document.createElement('div');
			playButtonText.id = 'text';
			playButtonText.textContent = 'PLAY';
			playButtonFill.appendChild(playButtonText);

			var playButtonImage = document.createElement('div');
			playButtonImage.id = 'image';
			playButtonFill.appendChild(playButtonImage);

			playButton.addEventListener('click', function (e) {
				splash.classList.add('invisible');
				_this.emit('play');
			});

			(0, _startaudiocontext2.default)(_Tone2.default.context, playButton);

			//the loader
			var loader = new _Wiggle.Wiggle(splash);

			// the page title
			document.querySelector('title').textContent = _Config.Config.title;

			// the badges
			var badges = document.createElement('div');
			badges.id = 'badges';
			splash.appendChild(badges);

			var aiExperiments = document.createElement('a');
			aiExperiments.id = 'aiExperiments';
			aiExperiments.href = 'https://aiexperiments.withgoogle.com';
			aiExperiments.target = '_blank';
			aiExperiments.classList.add('badge');
			badges.appendChild(aiExperiments);

			// break
			var break0 = document.createElement('div');
			break0.classList.add('badgeBreak');
			badges.appendChild(break0);

			var googleFriends = document.createElement('a');
			googleFriends.id = 'googleFriends';
			googleFriends.classList.add('badge');
			badges.appendChild(googleFriends);

			//break two
			var break1 = document.createElement('div');
			break1.classList.add('badgeBreak');
			badges.appendChild(break1);

			var magenta = document.createElement('a');
			magenta.href = 'https://magenta.tensorflow.org/';
			magenta.target = '_blank';
			magenta.id = 'magentaLink';
			magenta.classList.add('badge');
			var imgHtml = '<div id="img"></div>';
			magenta.innerHTML = imgHtml + '<div id="text">Built using <span>Magenta</span></div>';
			badges.appendChild(magenta);

			var privacyAndTerms = document.createElement('div');
			privacyAndTerms.id = 'privacyAndTerms';
			privacyAndTerms.innerHTML = '<a target="_blank" href="https://www.google.com/intl/en/policies/privacy/">Privacy</a><span>&</span><a target="_blank" href="https://www.google.com/intl/en/policies/terms/">Terms</a>';
			splash.appendChild(privacyAndTerms);
		}

		return _this;
	}

	return Splash;
}(_events2.default.EventEmitter);

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(411);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(126)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(344);
exports = module.exports = __webpack_require__(125)(false);
// imports


// module
exports.push([module.i, "#splash{width:100%;height:100%;position:absolute;top:0;left:0;z-index:100;background-color:#1c1c2a;transition:opacity .2s}#splash.invisible{pointer-events:none;opacity:0}#splash #titleContainer{position:absolute;top:40%;left:50%;width:260px;transform:translate(-50%,-50%)}#splash #titleContainer #title{text-transform:uppercase;text-align:center;font-size:30px;letter-spacing:3px;color:#fff}#splash #titleContainer #subtitle{margin-top:35px;text-align:center;color:#fff;opacity:.6;letter-spacing:1px;word-spacing:2px}#splash #titleContainer #howItWorks{width:auto;margin-top:35px;text-align:center;color:#fff;opacity:1;cursor:pointer;letter-spacing:2px;word-spacing:2px;display:inline-block;position:relative;font-size:14px;left:50%;text-decoration:underline;transform:translate(-50%);transition:opacity .1s;color:#fc5b13}#splash #titleContainer #howItWorks:hover{opacity:.6}#splash #titleContainer #playButton{position:relative;width:140px;height:50px;margin-top:35px;text-align:center;margin-left:auto;margin-right:auto;border-radius:3px;background:linear-gradient(90deg,#65bef0,#fc5b13);cursor:pointer;transition:transform .1s}#splash #titleContainer #playButton:hover{transform:scale(1.1)}#splash #titleContainer #playButton:hover:active{transform:scale(1.05)}#splash #titleContainer #playButton #playButtonFill{width:136px;height:46px;line-height:46px;position:absolute;left:2px;top:2px;border-radius:2px;background-color:#1c1c2a}#splash #titleContainer #playButton #playButtonFill #text{right:33px;color:#fff}#splash #titleContainer #playButton #playButtonFill #image{left:33px;width:30px;background-image:url(" + escape(__webpack_require__(412)) + ");background-position:50%;background-size:100% auto;background-repeat:no-repeat;margin-top:1px}#splash #titleContainer #playButton #playButtonFill #image,#splash #titleContainer #playButton #playButtonFill #text{position:absolute;height:100%;top:0}#splash canvas{width:100%;height:120px;position:absolute;bottom:15%}@media (max-width:575px){#splash canvas{height:60px;bottom:90px}}@media (max-height:490px){#splash canvas{height:40px;bottom:90px}}#splash #badges{position:absolute;display:inline-block;bottom:10px;left:10px}@media (max-width:575px){#splash #badges{bottom:30px;width:296px;left:50%;margin-left:-148px}}#splash #badges .badge{display:inline-block;position:relative;margin-right:10px;width:90px;height:45px;background-repeat:no-repeat;background-size:100% 100%;opacity:.7;overflow:hidden}@media (max-width:575px){#splash #badges .badge{width:90px;height:40px;font-size:10px!important;margin-right:8px;opacity:1}}#splash #badges #aiExperiments{background-image:url(" + escape(__webpack_require__(413)) + ")}#splash #badges #aiExperiments:hover{opacity:1}#splash #badges #aiExperiments:hover:active{opacity:.3}#splash #badges #googleFriends{cursor:auto;background-image:url(" + escape(__webpack_require__(414)) + ");margin-right:0}#splash #badges #magentaLink{font-weight:700;font-size:12px;margin-left:0;margin-right:0;color:#fff;overflow:visible}#splash #badges #magentaLink:hover{opacity:1}@media (max-width:575px){#splash #badges #magentaLink{font-size:7px}}#splash #badges #magentaLink div{display:inline-block;position:relative}#splash #badges #magentaLink #img{background-image:url(" + escape(__webpack_require__(415)) + ");background-size:90% 90%;background-position:0;background-repeat:no-repeat;width:45px;height:45px;float:left}@media (max-width:575px){#splash #badges #magentaLink #img{width:40px;height:40px}}#splash #badges #magentaLink #text{margin-top:7px;float:right;height:100%;position:absolute;width:90px}@media (max-width:575px){#splash #badges #magentaLink #text{margin-top:7px;width:50px}}#splash #badges #magentaLink #text span{color:#fff;text-decoration:underline;cursor:pointer}#splash #badges #magentaLink #text span:hover:active{color:#fff}#splash #badges .badgeBreak{display:inline-block;position:relative;margin-right:10px;height:42.75px;background-color:#fff;opacity:.35;width:1px}@media (max-width:575px){#splash #badges .badgeBreak{height:38px;margin-right:8px}}#splash #privacyAndTerms{position:absolute;bottom:10px;right:10px;width:auto;font-weight:400}@media (max-width:575px){#splash #privacyAndTerms{bottom:8px;left:50%;right:auto;transform:translate(-50%)}#splash #privacyAndTerms *{font-size:8px!important}}#splash #privacyAndTerms *{height:14px;line-height:14px;font-size:10px;color:#fff;display:inline;opacity:.7;margin:2px}#splash #privacyAndTerms a{text-decoration:none;cursor:pointer}#splash #privacyAndTerms a:hover{opacity:1}#splash #privacyAndTerms a:hover:active{opacity:.3}", ""]);

// exports


/***/ }),

/***/ 412:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTMxLjcgMTE5LjgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEzMS43IDExOS44IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5bGluZSBmaWxsPSIjZmZmIiBwb2ludHM9IjUyLjYsODcuMSA1Mi42LDYxIDQ2LjMsNjEgNDYuMywyNS41IDMxLjgsMjUuNSAzMS44LDg3LjEgIi8+DQo8cG9seWxpbmUgZmlsbD0iI2ZmZiIgcG9pbnRzPSI3Ny41LDg3LjEgNzcuNSw2MSA3MS4zLDYxIDcxLjMsMjUuNSA2MywyNS41IDYzLDYxIDU2LjcsNjEgNTYuNyw4Ny4xICIvPg0KPHBvbHlsaW5lIGZpbGw9IiNmZmYiIHBvaW50cz0iMTAyLjUsODcuMSAxMDIuNSw2MSAxMDIuNSwyNS41IDk2LjIsMjUuNSA4Ny45LDI1LjUgODcuOSw2MSA4MS43LDYxIDgxLjcsODcuMSAiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ 413:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9Ii04NjEgMTM2MyAyMjAgMTIwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IC04NjEgMTM2MyAyMjAgMTIwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGRkZGO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTg0MS41LDE0MjlsLTEuMy0zLjloLTExLjZsLTEuMywzLjloLTUuM2wxMC43LTMwLjhoMy42bDEwLjcsMzAuOEgtODQxLjV6IE0tODQ4LjUsMTQwNi42bC00LjMsMTMuOWg4LjUNCglMLTg0OC41LDE0MDYuNnoiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tODI5LjgsMTQyMi4yYzIsMCwzLjYsMS42LDMuNiwzLjZjMCwxLjktMS42LDMuNS0zLjYsMy41Yy0xLjksMC0zLjUtMS42LTMuNS0zLjUNCglDLTgzMy40LDE0MjMuOC04MzEuOCwxNDIyLjItODI5LjgsMTQyMi4yIi8+DQo8cmVjdCB4PSItODIxLjMiIHk9IjEzOTguMiIgY2xhc3M9InN0MCIgd2lkdGg9IjUuMiIgaGVpZ2h0PSIzMC44Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTgwOCwxNDIyLjJjMiwwLDMuNiwxLjYsMy42LDMuNmMwLDEuOS0xLjYsMy41LTMuNiwzLjVjLTEuOSwwLTMuNS0xLjYtMy41LTMuNQ0KCUMtODExLjUsMTQyMy44LTgxMCwxNDIyLjItODA4LDE0MjIuMiIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSItODUyLjksMTQ0NC40IC04NTIuOSwxNDUzLjEgLTg0MC4xLDE0NTMuMSAtODQwLjEsMTQ1Ny42IC04NTIuOSwxNDU3LjYgLTg1Mi45LDE0NjYuMSAtODQwLjEsMTQ2Ni4xIA0KCS04NDAuMSwxNDcwLjcgLTg1Ny45LDE0NzAuNyAtODU3LjksMTQzOS45IC04NDAuMSwxNDM5LjkgLTg0MC4xLDE0NDQuNCAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iLTgxOC4xLDE0NzAuNyAtODIzLjYsMTQ3MC43IC04MjcuNiwxNDY0LjEgLTgzMS41LDE0NzAuNyAtODM3LDE0NzAuNyAtODMwLjMsMTQ2MC4zIC04MzYuOSwxNDUwLjEgDQoJLTgzMS4zLDE0NTAuMSAtODI3LjYsMTQ1Ni42IC04MjMuOCwxNDUwLjEgLTgxOC4yLDE0NTAuMSAtODI0LjgsMTQ2MC4zICIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTS04MTAuNCwxNDUyLjljMS4zLTIuMSw0LTMuMyw2LjMtMy4zYzYuMiwwLDEwLjUsNSwxMC41LDEwLjhjMCw1LjgtNC4zLDEwLjgtMTAuNSwxMC44Yy0yLjQsMC01LjEtMS4yLTYuMy0zLjMNCgl2MTMuMWgtNC44di0zMC44aDQuOFYxNDUyLjl6IE0tODEwLjQsMTQ2MC40YzAsMy41LDIuNCw2LjUsNi4xLDYuNWMzLjYsMCw2LTMsNi02LjVzLTIuNC02LjUtNi02LjUNCglDLTgwOCwxNDUzLjktODEwLjQsMTQ1Ni45LTgxMC40LDE0NjAuNCIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTS03ODYuNiwxNDYxLjljMC4yLDIuOSwxLjUsNS4zLDUuNSw1LjNjMi43LDAsMy44LTEuMiw0LjQtMi43aDQuOGMtMC42LDMuNS00LDYuNy05LjIsNi43DQoJYy02LjksMC0xMC4zLTQuOC0xMC4zLTEwLjhjMC02LjIsMy43LTEwLjgsMTAuMS0xMC44YzUuMywwLDkuNSw0LDkuNSw5LjJjMCwwLjcsMCwxLjctMC4yLDNILTc4Ni42eiBNLTc4Ni42LDE0NTguM2gxMC4yDQoJYzAtMy4xLTIuMS01LjEtNS01LjFDLTc4NC4zLDE0NTMuMi03ODYuNiwxNDU0LjktNzg2LjYsMTQ1OC4zIi8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTc1NSwxNDU0LjZjLTAuNy0wLjItMS4xLTAuMi0xLjktMC4yYy00LjEsMC02LjMsMi4zLTYuMyw3LjR2OC44aC00Ljh2LTIwLjVoNC44djMuM2MwLjktMS45LDMuNi0zLjYsNi4zLTMuNg0KCWMwLjcsMCwxLjQsMC4xLDEuOSwwLjNWMTQ1NC42eiIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTS03NDkuMSwxNDM5LjFjMiwwLDMuNiwxLjYsMy42LDMuNmMwLDEuOS0xLjYsMy41LTMuNiwzLjVjLTEuOSwwLTMuNS0xLjYtMy41LTMuNQ0KCUMtNzUyLjYsMTQ0MC43LTc1MSwxNDM5LjEtNzQ5LjEsMTQzOS4xIE0tNzUxLjQsMTQ1MC4xaDQuOHYyMC41aC00LjhWMTQ1MC4xeiIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTS03MTYuMywxNDcwLjd2LTExLjVjMC0zLjMtMS4xLTUuMy0zLjgtNS4zYy0yLjQsMC00LjMsMS41LTQuMyw2LjR2MTAuNGgtNC44di0xMS41YzAtMy4zLTEuMS01LjMtMy43LTUuMw0KCWMtMi40LDAtNC40LDEuNS00LjQsNi40djEwLjRoLTQuOHYtMjAuNWg0Ljh2Mi45YzAuOS0xLjksMy0zLjQsNS43LTMuNGMzLjcsMCw1LjYsMS42LDYuNSwzLjdjMS0yLjEsMy40LTMuNyw2LjMtMy43DQoJYzYuMiwwLDcuNCw0LjIsNy40LDguMXYxM0gtNzE2LjN6Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTcwMy43LDE0NjEuOWMwLjIsMi45LDEuNSw1LjMsNS41LDUuM2MyLjcsMCwzLjgtMS4yLDQuNC0yLjdoNC44Yy0wLjYsMy41LTQsNi43LTkuMiw2LjcNCgljLTYuOSwwLTEwLjMtNC44LTEwLjMtMTAuOGMwLTYuMiwzLjctMTAuOCwxMC4xLTEwLjhjNS4zLDAsOS41LDQsOS41LDkuMmMwLDAuNywwLDEuNy0wLjIsM0gtNzAzLjd6IE0tNzAzLjcsMTQ1OC4zaDEwLjINCgljMC0zLjEtMi4xLTUuMS01LTUuMUMtNzAxLjQsMTQ1My4yLTcwMy43LDE0NTQuOS03MDMuNywxNDU4LjMiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tNjg1LjEsMTQ1MC4xaDQuOHYyLjljMS4zLTIuMiwzLjctMy40LDYuNy0zLjRjMi45LDAsNSwxLjEsNi4yLDIuOGMxLDEuNSwxLjMsMy4zLDEuMyw2LjF2MTIuMmgtNC44VjE0NjANCgljMC0zLjUtMS02LjItNC40LTYuMmMtMy4zLDAtNC45LDIuNy00LjksNi4ydjEwLjZoLTQuOFYxNDUwLjF6Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTY1MC4xLDE0NzAuN2MtMC43LDAuMS0yLjIsMC4zLTMuNiwwLjNjLTIuMywwLTYuNi0wLjMtNi42LTcuMnYtOS41aC0zLjV2LTRoMy41di02LjJoNC44djYuMmg0Ljd2NGgtNC43djguNA0KCWMwLDMuNiwxLjEsNCwzLDRjMC43LDAsMS45LTAuMSwyLjQtMC4yVjE0NzAuN3oiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iLTg1Ny4xLDEzNjUuNiAtODYwLjksMTM2NS42IC04NjAuOSwxMzYzLjQgLTg1MC43LDEzNjMuNCAtODUwLjcsMTM2NS42IC04NTQuNiwxMzY1LjYgLTg1NC42LDEzNzguOCANCgktODU3LjEsMTM3OC44ICIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTS04NDksMTM2My40aDIuNHY2LjZjMC42LTEuMSwxLjgtMS43LDMuMy0xLjdjMS41LDAsMi41LDAuNSwzLjEsMS40YzAuNSwwLjgsMC43LDEuNiwwLjcsM3Y2LjFoLTIuNHYtNS4zDQoJYzAtMS44LTAuNS0zLjEtMi4yLTMuMWMtMS43LDAtMi41LDEuMy0yLjUsMy4xdjUuM2gtMi40VjEzNjMuNHoiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tODM1LjQsMTM2M2MxLDAsMS44LDAuOCwxLjgsMS44YzAsMS0wLjgsMS44LTEuOCwxLjhjLTEsMC0xLjgtMC44LTEuOC0xLjgNCglDLTgzNy4yLDEzNjMuOC04MzYuNCwxMzYzLTgzNS40LDEzNjMgTS04MzYuNiwxMzY4LjVoMi40djEwLjNoLTIuNFYxMzY4LjV6Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTgyMy43LDEzNzUuOWMwLDIuMS0xLjgsMy4xLTQuMSwzLjFjLTIuMiwwLTQuMi0xLjMtNC4yLTMuN2gyLjNjMCwxLjMsMC44LDEuOCwyLDEuOGMwLjksMCwxLjctMC4zLDEuNy0xLjINCgljMC0xLTEtMS0zLjItMS45Yy0xLjQtMC41LTIuNC0xLjEtMi40LTIuOWMwLTEuOSwxLjgtMywzLjktM2MyLjIsMCwzLjksMS41LDMuOSwzLjVoLTIuM2MwLTEtMC41LTEuNi0xLjctMS42DQoJYy0wLjgsMC0xLjUsMC40LTEuNSwxLjFjMCwwLjksMC45LDEsMi44LDEuN0MtODI1LDEzNzMuNS04MjMuNywxMzc0LTgyMy43LDEzNzUuOSIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTS04MTQuNywxMzYzYzEsMCwxLjgsMC44LDEuOCwxLjhjMCwxLTAuOCwxLjgtMS44LDEuOGMtMSwwLTEuOC0wLjgtMS44LTEuOA0KCUMtODE2LjQsMTM2My44LTgxNS42LDEzNjMtODE0LjcsMTM2MyBNLTgxNS45LDEzNjguNWgyLjR2MTAuM2gtMi40VjEzNjguNXoiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tODAyLjksMTM3NS45YzAsMi4xLTEuOCwzLjEtNC4xLDMuMWMtMi4yLDAtNC4yLTEuMy00LjItMy43aDIuM2MwLDEuMywwLjgsMS44LDIsMS44YzAuOSwwLDEuNy0wLjMsMS43LTEuMg0KCWMwLTEtMS0xLTMuMi0xLjljLTEuNC0wLjUtMi40LTEuMS0yLjQtMi45YzAtMS45LDEuOC0zLDMuOC0zYzIuMiwwLDMuOSwxLjUsMy45LDMuNWgtMi4zYzAtMS0wLjUtMS42LTEuNy0xLjYNCgljLTAuOCwwLTEuNSwwLjQtMS41LDEuMWMwLDAuOSwwLjksMSwyLjgsMS43Qy04MDQuMywxMzczLjUtODAyLjksMTM3NC04MDIuOSwxMzc1LjkiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tNzg1LDEzNjguNXYxMC4zaC0yLjR2LTEuNGMtMC42LDEtMiwxLjctMy4yLDEuN2MtMy4xLDAtNS4zLTIuNS01LjMtNS40YzAtMi45LDIuMS01LjQsNS4zLTUuNA0KCWMxLjIsMCwyLjUsMC42LDMuMiwxLjd2LTEuNEgtNzg1eiBNLTc4Ny40LDEzNzMuNmMwLTEuOC0xLjItMy4zLTMtMy4zYy0xLjgsMC0zLDEuNS0zLDMuM3MxLjIsMy4zLDMsMy4zDQoJQy03ODguNiwxMzc2LjktNzg3LjQsMTM3NS40LTc4Ny40LDEzNzMuNiIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTS03ODEuOSwxMzY4LjVoMi40djEuNGMwLjYtMS4xLDEuOC0xLjcsMy4zLTEuN2MxLjUsMCwyLjUsMC41LDMuMSwxLjRjMC41LDAuOCwwLjcsMS42LDAuNywzdjYuMWgtMi40di01LjMNCgljMC0xLjgtMC41LTMuMS0yLjItMy4xYy0xLjcsMC0yLjUsMS4zLTIuNSwzLjF2NS4zaC0yLjRWMTM2OC41eiIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 414:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9Ii04NjEgMTM2MyAyMjAgMTIwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IC04NjEgMTM2MyAyMjAgMTIwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGRkZGO30NCjwvc3R5bGU+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9Ii04NDQuNywxMzc4LjggLTg0Ny4yLDEzNzguOCAtODQ3LjIsMTM2OS4yIC04NTEuMSwxMzc4LjggLTg1MywxMzc4LjggLTg1Ni45LDEzNjkuMiAtODU2LjksMTM3OC44IA0KCS04NTkuNCwxMzc4LjggLTg1OS40LDEzNjMuNCAtODU3LDEzNjMuNCAtODUyLDEzNzQuOCAtODQ3LjEsMTM2My40IC04NDQuNywxMzYzLjQgIi8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTgzMS42LDEzNjguNXYxMC4zaC0yLjR2LTEuNGMtMC42LDEtMiwxLjctMy4yLDEuN2MtMy4xLDAtNS4zLTIuNS01LjMtNS40YzAtMi45LDIuMS01LjQsNS4zLTUuNA0KCWMxLjIsMCwyLjUsMC42LDMuMiwxLjd2LTEuNEgtODMxLjZ6IE0tODM0LDEzNzMuNmMwLTEuOC0xLjItMy4zLTMtMy4zYy0xLjgsMC0zLDEuNS0zLDMuM3MxLjIsMy4zLDMsMy4zDQoJQy04MzUuMSwxMzc2LjktODM0LDEzNzUuNC04MzQsMTM3My42Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTgyMC44LDEzNzcuNGMtMC42LDEtMiwxLjctMy4yLDEuN2MtMy4xLDAtNS4zLTIuNS01LjMtNS40YzAtMi45LDIuMS01LjQsNS4zLTUuNGMxLjIsMCwyLjUsMC42LDMuMiwxLjd2LTYuNQ0KCWgyLjR2MTUuNGgtMi40VjEzNzcuNHogTS04MjAuOCwxMzczLjZjMC0xLjgtMS4yLTMuMy0zLTMuM2MtMS44LDAtMywxLjUtMywzLjNzMS4yLDMuMywzLDMuMw0KCUMtODIyLDEzNzYuOS04MjAuOCwxMzc1LjQtODIwLjgsMTM3My42Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTgxMy43LDEzNzQuNGMwLjEsMS41LDAuNywyLjcsMi44LDIuN2MxLjQsMCwxLjktMC42LDIuMi0xLjNoMi40Yy0wLjMsMS44LTIsMy4zLTQuNiwzLjMNCgljLTMuNSwwLTUuMS0yLjQtNS4xLTUuNGMwLTMuMSwxLjgtNS40LDUuMS01LjRjMi43LDAsNC44LDIsNC44LDQuNmMwLDAuNCwwLDAuOC0wLjEsMS41SC04MTMuN3ogTS04MTMuNywxMzcyLjZoNS4xDQoJYzAtMS42LTEtMi41LTIuNS0yLjVDLTgxMi41LDEzNzAuMS04MTMuNywxMzcwLjktODEzLjcsMTM3Mi42Ii8+DQo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9Ii03OTEuNywxMzcxLjEgLTc5NC40LDEzNzguOCAtNzk2LDEzNzguOCAtODAwLDEzNjguNSAtNzk3LjQsMTM2OC41IC03OTUuMiwxMzc1IC03OTIuOCwxMzY4LjUgDQoJLTc5MC41LDEzNjguNSAtNzg4LjIsMTM3NSAtNzg2LDEzNjguNSAtNzgzLjQsMTM2OC41IC03ODcuNCwxMzc4LjggLTc4OSwxMzc4LjggIi8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTc4MC43LDEzNjNjMSwwLDEuOCwwLjgsMS44LDEuOGMwLDEtMC44LDEuOC0xLjgsMS44Yy0xLDAtMS44LTAuOC0xLjgtMS44DQoJQy03ODIuNSwxMzYzLjgtNzgxLjcsMTM2My03ODAuNywxMzYzIE0tNzgxLjksMTM2OC41aDIuNHYxMC4zaC0yLjRWMTM2OC41eiIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTS03NzAuNywxMzc4LjhjLTAuNCwwLjEtMS4xLDAuMS0xLjgsMC4xYy0xLjIsMC0zLjMtMC4yLTMuMy0zLjZ2LTQuOGgtMS43di0yaDEuN3YtMy4xaDIuNHYzLjFoMi40djJoLTIuNHY0LjINCgljMCwxLjgsMC42LDIsMS41LDJjMC40LDAsMSwwLDEuMi0wLjFWMTM3OC44eiIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTS03NjguOCwxMzYzLjRoMi40djYuNmMwLjYtMS4xLDEuOC0xLjcsMy4zLTEuN2MxLjUsMCwyLjUsMC41LDMuMSwxLjRjMC41LDAuOCwwLjcsMS42LDAuNywzdjYuMWgtMi40di01LjMNCgljMC0xLjgtMC41LTMuMS0yLjItMy4xYy0xLjcsMC0yLjUsMS4zLTIuNSwzLjF2NS4zaC0yLjRWMTM2My40eiIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTS04NTEuOSwxMzk4LjljMCwyLjEtMS44LDMuMS00LjEsMy4xYy0yLjIsMC00LjItMS4zLTQuMi0zLjdoMi4zYzAsMS4zLDAuOCwxLjgsMiwxLjhjMC45LDAsMS43LTAuMywxLjctMS4yDQoJYzAtMS0xLTEtMy4yLTEuOWMtMS40LTAuNS0yLjQtMS4xLTIuNC0yLjljMC0xLjksMS44LTMsMy44LTNjMi4yLDAsMy45LDEuNSwzLjksMy41aC0yLjNjMC0xLTAuNS0xLjYtMS43LTEuNg0KCWMtMC44LDAtMS41LDAuNC0xLjUsMS4xYzAsMC45LDAuOSwxLDIuOCwxLjdDLTg1My4zLDEzOTYuNi04NTEuOSwxMzk3LjEtODUxLjksMTM5OC45Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTg1MC4zLDEzOTYuN2MwLTIuOSwyLjEtNS40LDUuNC01LjRjMy4zLDAsNS40LDIuNSw1LjQsNS40YzAsMi45LTIuMSw1LjQtNS40LDUuNA0KCUMtODQ4LjIsMTQwMi4xLTg1MC4zLDEzOTkuNi04NTAuMywxMzk2LjcgTS04NDEuOSwxMzk2LjdjMC0xLjgtMS4yLTMuMy0zLTMuM2MtMS44LDAtMywxLjUtMywzLjNzMS4yLDMuMywzLDMuMw0KCUMtODQzLDEzOTkuOS04NDEuOSwxMzk4LjQtODQxLjksMTM5Ni43Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTgyNC4yLDE0MDEuOHYtNS43YzAtMS42LTAuNi0yLjctMS45LTIuN2MtMS4yLDAtMi4yLDAuNy0yLjIsMy4ydjUuMmgtMi40di01LjhjMC0xLjYtMC41LTIuNi0xLjktMi42DQoJYy0xLjIsMC0yLjIsMC43LTIuMiwzLjJ2NS4yaC0yLjR2LTEwLjNoMi40djEuNGMwLjQtMC45LDEuNS0xLjcsMi45LTEuN2MxLjksMCwyLjgsMC44LDMuMiwxLjhjMC41LTEsMS43LTEuOCwzLjEtMS44DQoJYzMuMSwwLDMuNywyLjEsMy43LDR2Ni41SC04MjQuMnoiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tODE3LjIsMTM5Ny40YzAuMSwxLjUsMC43LDIuNywyLjgsMi43YzEuNCwwLDEuOS0wLjYsMi4yLTEuM2gyLjRjLTAuMywxLjgtMiwzLjMtNC42LDMuMw0KCWMtMy41LDAtNS4xLTIuNC01LjEtNS40YzAtMy4xLDEuOC01LjQsNS4xLTUuNGMyLjcsMCw0LjgsMiw0LjgsNC42YzAsMC40LDAsMC44LTAuMSwxLjVILTgxNy4yeiBNLTgxNy4yLDEzOTUuNmg1LjENCgljMC0xLjYtMS0yLjUtMi41LTIuNUMtODE2LjEsMTM5My4xLTgxNy4yLDEzOTMuOS04MTcuMiwxMzk1LjYiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tNzk1LjksMTM4OC41Yy0wLjMtMC4xLTAuNy0wLjItMS4xLTAuMmMtMC43LDAtMS42LDAtMS42LDEuNnYxLjVoMi43djJoLTIuN3Y4LjNoLTIuNHYtOC4zaC0yLjF2LTJoMi4xdi0xLjMNCgljMC0zLjksMi41LTQsMy43LTRjMC42LDAsMS4xLDAuMSwxLjQsMC4zVjEzODguNXoiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tNzg3LjYsMTM5My44Yy0wLjQtMC4xLTAuNi0wLjEtMC45LTAuMWMtMiwwLTMuMiwxLjItMy4yLDMuN3Y0LjRoLTIuNHYtMTAuM2gyLjR2MS43YzAuNS0wLjksMS44LTEuOCwzLjItMS44DQoJYzAuNCwwLDAuNywwLDAuOSwwLjJWMTM5My44eiIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTS03ODQuNywxMzg2YzEsMCwxLjgsMC44LDEuOCwxLjhjMCwxLTAuOCwxLjgtMS44LDEuOGMtMSwwLTEuOC0wLjgtMS44LTEuOA0KCUMtNzg2LjUsMTM4Ni44LTc4NS43LDEzODYtNzg0LjcsMTM4NiBNLTc4NS45LDEzOTEuNWgyLjR2MTAuM2gtMi40VjEzOTEuNXoiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tNzc4LjcsMTM5Ny40YzAuMSwxLjUsMC43LDIuNywyLjgsMi43YzEuNCwwLDEuOS0wLjYsMi4yLTEuM2gyLjRjLTAuMywxLjgtMiwzLjMtNC42LDMuMw0KCWMtMy41LDAtNS4xLTIuNC01LjEtNS40YzAtMy4xLDEuOC01LjQsNS4xLTUuNGMyLjcsMCw0LjgsMiw0LjgsNC42YzAsMC40LDAsMC44LTAuMSwxLjVILTc3OC43eiBNLTc3OC43LDEzOTUuNmg1LjENCgljMC0xLjYtMS0yLjUtMi41LTIuNUMtNzc3LjYsMTM5My4xLTc3OC43LDEzOTMuOS03NzguNywxMzk1LjYiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tNzY4LjgsMTM5MS41aDIuNHYxLjRjMC42LTEuMSwxLjgtMS43LDMuMy0xLjdjMS41LDAsMi41LDAuNSwzLjEsMS40YzAuNSwwLjgsMC43LDEuNiwwLjcsM3Y2LjFoLTIuNHYtNS4zDQoJYzAtMS44LTAuNS0zLjEtMi4yLTMuMWMtMS43LDAtMi41LDEuMy0yLjUsMy4xdjUuM2gtMi40VjEzOTEuNXoiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tNzQ4LjgsMTQwMC40Yy0wLjYsMS0yLDEuNy0zLjIsMS43Yy0zLjEsMC01LjMtMi41LTUuMy01LjRjMC0yLjksMi4xLTUuNCw1LjMtNS40YzEuMiwwLDIuNSwwLjYsMy4yLDEuN3YtNi41DQoJaDIuNHYxNS40aC0yLjRWMTQwMC40eiBNLTc0OC44LDEzOTYuN2MwLTEuOC0xLjItMy4zLTMtMy4zYy0xLjgsMC0zLDEuNS0zLDMuM3MxLjIsMy4zLDMsMy4zDQoJQy03NDkuOSwxMzk5LjktNzQ4LjgsMTM5OC40LTc0OC44LDEzOTYuNyIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTS03MzUuOCwxMzk4LjljMCwyLjEtMS44LDMuMS00LjEsMy4xYy0yLjIsMC00LjItMS4zLTQuMi0zLjdoMi4zYzAsMS4zLDAuOCwxLjgsMiwxLjhjMC45LDAsMS43LTAuMywxLjctMS4yDQoJYzAtMS0xLTEtMy4yLTEuOWMtMS40LTAuNS0yLjQtMS4xLTIuNC0yLjljMC0xLjksMS44LTMsMy45LTNjMi4yLDAsMy45LDEuNSwzLjksMy41aC0yLjNjMC0xLTAuNS0xLjYtMS43LTEuNg0KCWMtMC44LDAtMS41LDAuNC0xLjUsMS4xYzAsMC45LDAuOSwxLDIuOCwxLjdDLTczNy4yLDEzOTYuNi03MzUuOCwxMzk3LjEtNzM1LjgsMTM5OC45Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTcyMiwxMzg4LjVjLTAuMy0wLjEtMC43LTAuMi0xLjEtMC4yYy0wLjcsMC0xLjYsMC0xLjYsMS42djEuNWgyLjd2MmgtMi43djguM2gtMi40di04LjNoLTIuMXYtMmgyLjF2LTEuMw0KCWMwLTMuOSwyLjUtNCwzLjctNGMwLjYsMCwxLjEsMC4xLDEuNCwwLjNWMTM4OC41eiIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTS03MTMuNywxMzkzLjhjLTAuNC0wLjEtMC42LTAuMS0wLjktMC4xYy0yLDAtMy4yLDEuMi0zLjIsMy43djQuNGgtMi40di0xMC4zaDIuNHYxLjdjMC41LTAuOSwxLjgtMS44LDMuMi0xLjgNCgljMC40LDAsMC43LDAsMC45LDAuMlYxMzkzLjh6Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTcxMy4zLDEzOTYuN2MwLTIuOSwyLjEtNS40LDUuNC01LjRjMy4zLDAsNS40LDIuNSw1LjQsNS40YzAsMi45LTIuMSw1LjQtNS40LDUuNA0KCUMtNzExLjEsMTQwMi4xLTcxMy4zLDEzOTkuNi03MTMuMywxMzk2LjcgTS03MDQuOCwxMzk2LjdjMC0xLjgtMS4yLTMuMy0zLTMuM2MtMS44LDAtMywxLjUtMywzLjNzMS4yLDMuMywzLDMuMw0KCUMtNzA2LDEzOTkuOS03MDQuOCwxMzk4LjQtNzA0LjgsMTM5Ni43Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTY4Ny4yLDE0MDEuOHYtNS43YzAtMS42LTAuNi0yLjctMS45LTIuN2MtMS4yLDAtMi4yLDAuNy0yLjIsMy4ydjUuMmgtMi40di01LjhjMC0xLjYtMC41LTIuNi0xLjktMi42DQoJYy0xLjIsMC0yLjIsMC43LTIuMiwzLjJ2NS4yaC0yLjR2LTEwLjNoMi40djEuNGMwLjQtMC45LDEuNS0xLjcsMi45LTEuN2MxLjksMCwyLjgsMC44LDMuMiwxLjhjMC41LTEsMS43LTEuOCwzLjEtMS44DQoJYzMuMSwwLDMuNywyLjEsMy43LDR2Ni41SC02ODcuMnoiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tNzkxLjcsMTQ1OC44YzAsNy43LTYsMTMuNC0xMy41LDEzLjRjLTcuNCwwLTEzLjUtNS43LTEzLjUtMTMuNGMwLTcuOCw2LTEzLjQsMTMuNS0xMy40DQoJQy03OTcuNywxNDQ1LjQtNzkxLjcsMTQ1MS03OTEuNywxNDU4LjggTS03OTcuNiwxNDU4LjhjMC00LjgtMy41LTguMS03LjYtOC4xYy00LjEsMC03LjYsMy4zLTcuNiw4LjFjMCw0LjgsMy41LDguMSw3LjYsOC4xDQoJQy04MDEuMSwxNDY2LjktNzk3LjYsMTQ2My42LTc5Ny42LDE0NTguOCIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTS03NjIuNCwxNDU4LjhjMCw3LjctNiwxMy40LTEzLjUsMTMuNGMtNy40LDAtMTMuNS01LjctMTMuNS0xMy40YzAtNy44LDYtMTMuNCwxMy41LTEzLjQNCglDLTc2OC41LDE0NDUuNC03NjIuNCwxNDUxLTc2Mi40LDE0NTguOCBNLTc2OC4zLDE0NTguOGMwLTQuOC0zLjUtOC4xLTcuNi04LjFjLTQuMSwwLTcuNiwzLjMtNy42LDguMWMwLDQuOCwzLjUsOC4xLDcuNiw4LjENCglDLTc3MS44LDE0NjYuOS03NjguMywxNDYzLjYtNzY4LjMsMTQ1OC44Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTczNC40LDE0NDYuMnYyNGMwLDkuOS01LjgsMTQtMTIuNywxNGMtNi41LDAtMTAuNC00LjQtMTEuOS03LjlsNS4xLTIuMWMwLjksMi4yLDMuMSw0LjgsNi44LDQuOA0KCWM0LjQsMCw3LjItMi43LDcuMi03Ljl2LTEuOWgtMC4yYy0xLjMsMS42LTMuOSwzLTcuMSwzYy02LjcsMC0xMi44LTUuOC0xMi44LTEzLjRjMC03LjYsNi4xLTEzLjUsMTIuOC0xMy41YzMuMiwwLDUuNywxLjQsNy4xLDMNCgloMC4ydi0yLjJILTczNC40eiBNLTczOS42LDE0NTguOGMwLTQuNy0zLjEtOC4yLTcuMi04LjJjLTQuMSwwLTcuNSwzLjUtNy41LDguMmMwLDQuNywzLjQsOC4xLDcuNSw4LjENCglDLTc0Mi43LDE0NjYuOS03MzkuNiwxNDYzLjUtNzM5LjYsMTQ1OC44Ii8+DQo8cmVjdCB4PSItNzMwLjUiIHk9IjE0MzIiIGNsYXNzPSJzdDAiIHdpZHRoPSI1LjkiIGhlaWdodD0iMzkuNCIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTS03MDIuMiwxNDYzLjJsNC42LDNjLTEuNSwyLjItNSw1LjktMTEuMiw1LjljLTcuNiwwLTEzLjEtNS45LTEzLjEtMTMuNGMwLTgsNS42LTEzLjQsMTIuNS0xMy40DQoJYzcsMCwxMC40LDUuNSwxMS41LDguNWwwLjYsMS41bC0xNy45LDcuNGMxLjQsMi43LDMuNSw0LjEsNi41LDQuMUMtNzA1LjgsMTQ2Ni45LTcwMy43LDE0NjUuNC03MDIuMiwxNDYzLjIgTS03MTYuMywxNDU4LjRsMTItNQ0KCWMtMC43LTEuNy0yLjYtMi44LTUtMi44Qy03MTIuMiwxNDUwLjYtNzE2LjQsMTQ1My4yLTcxNi4zLDE0NTguNCIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTS04MzkuOSwxNDcyLjJjLTExLjUsMC0yMS4xLTkuMy0yMS4xLTIwLjhzOS42LTIwLjgsMjEuMS0yMC44YzYuMywwLDEwLjksMi41LDE0LjMsNS43bC00LDQNCgljLTIuNC0yLjMtNS43LTQuMS0xMC4zLTQuMWMtOC40LDAtMTQuOSw2LjgtMTQuOSwxNS4xYzAsOC40LDYuNSwxNS4xLDE0LjksMTUuMWM1LjQsMCw4LjUtMi4yLDEwLjUtNC4yYzEuNi0xLjYsMi43LTQsMy4xLTcuMg0KCWgtMTMuNnYtNS43aDE5LjFjMC4yLDEsMC4zLDIuMiwwLjMsMy42YzAsNC4zLTEuMiw5LjUtNC45LDEzLjNDLTgyOSwxNDcwLjItODMzLjcsMTQ3Mi4yLTgzOS45LDE0NzIuMiIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 415:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEXCAYAAAAXwHkbAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAJ9WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjY0MDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjU5NjwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDoxNjYwOWNkNi1jMjM2LTRjNTItODEzNi0xYzNmMDg1MjcyY2E8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTctMDItMTNUMTA6NTY6NTMtMDU6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6MTY2MDljZDYtYzIzNi00YzUyLTgxMzYtMWMzZjA4NTI3MmNhPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNy0wMi0xM1QxMTowMTo1Ny0wNTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDoxMTgyNzU4OC1hNDhjLTQ2YjYtOTE4ZS04YmE2YzcwMGJkZDg8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjExODI3NTg4LWE0OGMtNDZiNi05MThlLThiYTZjNzAwYmRkODwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjJjMzVjNjBlLTMyOTQtMTE3YS04OTMwLWZlYWE2MGI4YTkwMjwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTctMDItMTNUMTA6NTY6NTMtMDU6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDE3LTAyLTEzVDExOjAxOjU3LTA1OjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNy0wMi0xM1QxMTowMTo1Ny0wNTowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Ch0AEZYAAEAASURBVHgB7N0JvCVFdT/wO4ASjSZq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"

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Wiggle = undefined;

var _Config = __webpack_require__(338);

var _tween = __webpack_require__(354);

var _tween2 = _interopRequireDefault(_tween);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2017 Google Inc.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */

var Wiggle = exports.Wiggle = function Wiggle(container) {
	_classCallCheck(this, Wiggle);

	var canvas = document.createElement('canvas');
	container.appendChild(canvas);

	var context = canvas.getContext('2d');
	var width = context.canvas.width;
	var height = context.canvas.height;
	var gradient = context.createLinearGradient(0, 0, width, height);
	var progress = 0;
	var waveHeight = 0.1;

	function resize() {
		context.canvas.width = canvas.offsetWidth * 2;
		context.canvas.height = canvas.offsetHeight * 2;
		width = context.canvas.width;
		height = context.canvas.height;

		gradient = context.createLinearGradient(0, 0, width, height);
		gradient.addColorStop(0, _Config.Config.purple);
		gradient.addColorStop(1, _Config.Config.teal);
		animate(progress);
	}

	window.addEventListener('resize', resize);
	resize();

	function animate(prog) {
		progress = prog;
		var wavH = waveHeight * height;
		context.clearRect(0, 0, width, height);
		context.beginPath();
		context.lineJoin = 'round';
		context.lineWidth = 5;
		context.strokeStyle = gradient;
		var span = 0.9;
		var hideEdges = 10;
		var segments = 3000;
		var lastVal = 0;
		var halfPi = Math.PI / 2;
		for (var i = 0; i < prog * segments; i++) {
			var x = (width + hideEdges * 2) * (i / segments) - hideEdges;
			var amnt = i / segments * width / 8.5;
			var harmonics = 2;
			var wave = 0;
			var position = Math.sin(amnt);
			var crossOver = 0.7;
			if (Math.abs(position) < crossOver) {
				for (var h = 0; h < harmonics; h++) {
					var amp = 1 / (2 * h + 1);
					wave += amp * Math.sin(amnt * (h * 2 + 1));
				}
				lastVal = wave;
			} else {
				wave = lastVal;
			}
			// const y = ((wave+1)/2)*height*span + height*(1-span)/2
			var y = (wave * wavH + height) / 2;
			if (i === 0) {
				context.moveTo(x, y);
			} else {
				context.lineTo(x, y);
			}
		}
		context.stroke();
	}

	var delay = 300;
	var duration = 1400;
	var posTween = new _tween2.default.Tween({
		position: 0
	}).to({
		position: 1
	}, duration).onUpdate(function () {
		animate(this.position, this.height);
	}).easing(_tween2.default.Easing.Cubic.InOut).delay(delay).start();
	/*.onComplete(function(){
 	cancelAnimationFrame(animationId)
 })*/

	var delayOffset = 200;
	var heightTween = new _tween2.default.Tween({
		height: 0.1
	}).to({
		height: 0.8
	}, duration - delayOffset).onUpdate(function () {
		waveHeight = this.height;
	}).easing(_tween2.default.Easing.Elastic.Out).delay(delay + delayOffset).start();

	var animationId = -1;
	function loop() {
		animationId = requestAnimationFrame(loop);
		_tween2.default.update();
	}
	loop();
};

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Supported = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _Tone = __webpack_require__(336);

var _Tone2 = _interopRequireDefault(_Tone);

__webpack_require__(128);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Supported = exports.Supported = function () {
  function Supported() {
    _classCallCheck(this, Supported);

    if (!this.works) {
      var overlay = document.createElement('div');
      overlay.id = 'unsupported';
      document.body.appendChild(overlay);

      var text = document.createElement('div');
      text.id = 'text';
      text.innerHTML = 'Oops, sorry for the tech trouble. <br>For the best experience, view in <a href="https://www.google.com/chrome" target="_blank">Chrome browser</a>.';
      overlay.appendChild(text);
    }
  }

  _createClass(Supported, [{
    key: 'works',
    get: function get() {
      return _Tone2.default.supported;
    }
  }]);

  return Supported;
}();

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(125)(false);
// imports


// module
exports.push([module.i, "#unsupported{position:absolute;top:0;left:0;width:100%;height:100%;z-index:10000000;background-color:#1c1c2a}#unsupported #text{position:absolute;top:50%;left:50%;width:300px;font-size:18px;color:#fff;text-align:center;transform:translate(-50%,-50%)}#unsupported #text a{color:#fff}", ""]);

// exports


/***/ })

}]);