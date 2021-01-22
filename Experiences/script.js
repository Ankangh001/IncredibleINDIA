(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _component = _interopRequireDefault(require("./component"));
    
    var _inView = _interopRequireDefault(require("in-view"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
    
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    
    var Anima = /*#__PURE__*/function (_Component) {
      _inherits(Anima, _Component);
    
      var _super = _createSuper(Anima);
    
      function Anima(site) {
        var _this;
    
        _classCallCheck(this, Anima);
    
        _this = _super.call(this, "page-anim");
        site.components.mount(_assertThisInitialized(_this));
        site.navigation.registerNavigationCallback(_this.enterPage.bind(_assertThisInitialized(_this)));
        _this.t = 100;
        _this.base = 200;
        _this.benter = _this.enter.bind(_assertThisInitialized(_this));
    
        _inView["default"].threshold(0.33);
    
        return _this;
      }
    
      _createClass(Anima, [{
        key: "mount",
        value: function mount(site) {}
      }, {
        key: "enterPage",
        value: function enterPage() {
          var _this2 = this;
    
          var entrys = document.querySelectorAll(".entry");
          entrys.forEach(this.benter);
          (0, _inView["default"])('.scroll').on('enter', function (el) {
            el.querySelectorAll(".anima").forEach(_this2.benter);
            el.classList.remove("scroll");
          });
        }
      }, {
        key: "enter",
        value: function enter(el) {
          var delay = Number(el.getAttribute("data-anima-delay")) || 0;
          setTimeout(function () {
            el.classList.add("in");
          }, delay * this.t + this.base);
        }
      }]);
    
      return Anima;
    }(_component["default"]);
    
    exports["default"] = Anima;
    
    },{"./component":7,"in-view":40}],2:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _component = _interopRequireDefault(require("./component"));
    
    var _cookies = require("../utility/cookies");
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
    
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    
    var Bars = /*#__PURE__*/function (_Component) {
      _inherits(Bars, _Component);
    
      var _super = _createSuper(Bars);
    
      function Bars(site) {
        var _this;
    
        _classCallCheck(this, Bars);
    
        _this = _super.call(this, "cookiebar");
        site.components.mount(_assertThisInitialized(_this));
        return _this;
      }
    
      _createClass(Bars, [{
        key: "mount",
        value: function mount(site) {
          this.initCookieBar();
          this.initEmailBar();
        }
      }, {
        key: "initCookieBar",
        value: function initCookieBar() {
          var _this2 = this;
    
          this.cookieBar = document.getElementById("cookie_bar");
          if (!this.cookieBar) return;
    
          if (!(0, _cookies.getCookie)("unis_cookies_accepted")) {
            this.cookieBar.classList.remove("hide");
            document.getElementById("cookie_accept").addEventListener('click', function () {
              (0, _cookies.setCookie)("unis_cookies_accepted", "1", 1000);
    
              _this2.cookieBar.classList.add("hide");
            });
          }
        }
      }, {
        key: "initEmailBar",
        value: function initEmailBar() {
          var _this3 = this;
    
          this.emailBar = document.getElementById("email_bar");
          if (!this.emailBar) return;
    
          if (document.getElementById("emails-accepted")) {
            (0, _cookies.setCookie)("unis_emails_accepted", "1", 1000);
            return;
          }
    
          if (!(0, _cookies.getCookie)("unis_emails_accepted") && !(0, _cookies.getCookie)("unis_emails_declined")) {
            this.emailBar.classList.remove("hide");
            setTimeout(function () {
              _this3.emailBar.classList.add("in");
            }, 30000);
            document.getElementById("email_decline").addEventListener('click', function () {
              (0, _cookies.setCookie)("unis_emails_declined", "1");
    
              _this3.emailBar.classList.add("hide");
            });
          }
        }
      }]);
    
      return Bars;
    }(_component["default"]);
    
    exports["default"] = Bars;
    
    },{"../utility/cookies":30,"./component":7}],3:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _component = _interopRequireDefault(require("./component"));
    
    var _inView = _interopRequireDefault(require("in-view"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
    
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    
    var BSParralax = /*#__PURE__*/function (_Component) {
      _inherits(BSParralax, _Component);
    
      var _super = _createSuper(BSParralax);
    
      function BSParralax(site) {
        var _this;
    
        _classCallCheck(this, BSParralax);
    
        _this = _super.call(this, "bsparallax");
        site.components.attachToPages(["home", "detail", "default"], _assertThisInitialized(_this));
        _this.browser = site.browser;
        _this.images = [];
        site.browser.addToRenderLoop(_this.render.bind(_assertThisInitialized(_this)));
        site.browser.addToResizeLoop(_this.resize.bind(_assertThisInitialized(_this)));
        _this.bsps = [];
        return _this;
      }
    
      _createClass(BSParralax, [{
        key: "mount",
        value: function mount(site) {
          document.querySelectorAll(".bsp").forEach(this.init.bind(this));
          (0, _inView["default"])('.bsp').on('enter', this.show.bind(this));
          (0, _inView["default"])('.bsp').on('exit', this.hide.bind(this));
        }
      }, {
        key: "unmount",
        value: function unmount() {
          this.bsps = [];
        }
      }, {
        key: "show",
        value: function show(el) {
          var bsp = this.find(el);
          if (bsp) bsp.showing = true;
        }
      }, {
        key: "hide",
        value: function hide(el) {
          var bsp = this.find(el);
          if (bsp) bsp.showing = false;
        }
      }, {
        key: "find",
        value: function find(el) {
          return this.bsps.find(function (o) {
            return o.el == el;
          });
        }
      }, {
        key: "init",
        value: function init(el) {
          var bsp = {
            el: el,
            moves: []
          };
          el.querySelectorAll("[data-bsp]").forEach(function (item, i) {
            bsp.moves.push({
              el: item,
              xSpeed: item.getAttribute("data-bsp-x") ? Number(item.getAttribute("data-bsp-x")) : Number(item.getAttribute("data-bsp")),
              ySpeed: item.getAttribute("data-bsp-y") ? Number(item.getAttribute("data-bsp-y")) : Number(item.getAttribute("data-bsp"))
            });
          });
          this.bsps.push(bsp);
        }
      }, {
        key: "render",
        value: function render() {
          if (this.browser.state.isMobile) return;
          this.bsps.forEach(this.renderOne.bind(this));
        }
      }, {
        key: "renderOne",
        value: function renderOne(bsp) {
          if (!bsp.showing) return;
          var dist = window.innerWidth * 0.012;
          var wobble = 0.5;
          var t = this.browser.state.t;
          var ox = Math.sin(t / 1000) * 0.33 + Math.sin(t / 4000) * 0.33 + Math.sin(t / 10000) * 0.3;
          var oy = Math.sin(t / 1200) * 0.33 + Math.sin(t / 3500) * 0.33 + Math.sin(t / 11000) * 0.3;
          var mx = (this.browser.state.mouse.xLag / window.innerWidth - 0.5 + ox * wobble) * dist;
          var my = (this.browser.state.mouse.yLag / window.innerHeight - 0.5 + oy * wobble) * dist;
          bsp.moves.forEach(function (item, i) {
            var x = item.xSpeed * mx;
            var y = item.ySpeed * my;
            item.el.style.transform = "translate3d(" + x + "px," + y + "px,0)";
          });
        }
      }, {
        key: "resize",
        value: function resize() {}
      }]);
    
      return BSParralax;
    }(_component["default"]);
    
    exports["default"] = BSParralax;
    
    },{"./component":7,"in-view":40}],4:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _component = _interopRequireDefault(require("./component"));
    
    var _cart = _interopRequireDefault(require("../utility/cart"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
    
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    
    var Cart = /*#__PURE__*/function (_Component) {
      _inherits(Cart, _Component);
    
      var _super = _createSuper(Cart);
    
      function Cart(site) {
        var _this;
    
        _classCallCheck(this, Cart);
    
        _this = _super.call(this, "cart");
        _this.cart = (0, _cart["default"])();
        site.components.mount(_assertThisInitialized(_this));
        return _this;
      }
    
      _createClass(Cart, [{
        key: "mount",
        value: function mount(site) {
          this.badge = document.getElementById("cart-badge");
        }
      }, {
        key: "addToCart",
        value: function addToCart(variantId) {
          var _this2 = this;
    
          var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          var properties = arguments.length > 2 ? arguments[2] : undefined;
          var callback = arguments.length > 3 ? arguments[3] : undefined;
          this.cart.add(variantId, quantity, properties, function () {
            if (callback) callback();
    
            _this2.updateCartPill();
          });
        }
      }, {
        key: "changeQuantity",
        value: function changeQuantity(line, quantity, callback) {
          var _this3 = this;
    
          this.cart.change(line, quantity, function () {
            if (callback) callback();
    
            _this3.updateCartPill();
          });
        }
      }, {
        key: "addNote",
        value: function addNote(note, callback) {
          this.cart.addNote(note, callback);
        }
      }, {
        key: "addAttributes",
        value: function addAttributes(attributes, callback) {
          this.cart.addAttributes(attributes, callback);
        }
      }, {
        key: "updateCartPill",
        value: function updateCartPill() {
          var count = this.cart.data.item_count;
          this.badge.innerHTML = count;
        }
      }, {
        key: "showCartLoading",
        value: function showCartLoading() {
          document.documentElement.classList.add("cart-loading");
        }
      }, {
        key: "hideCartLoading",
        value: function hideCartLoading() {
          document.documentElement.classList.remove("cart-loading");
        }
      }]);
    
      return Cart;
    }(_component["default"]);
    
    exports["default"] = Cart;
    
    },{"../utility/cart":29,"./component":7}],5:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _component = _interopRequireDefault(require("./component"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
    
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    
    var CartBar = /*#__PURE__*/function (_Component) {
      _inherits(CartBar, _Component);
    
      var _super = _createSuper(CartBar);
    
      function CartBar(site) {
        var _this;
    
        _classCallCheck(this, CartBar);
    
        _this = _super.call(this, "cartbar");
        _this.browser = site.browser;
        _this.navigation = site.navigation;
        site.components.attachToPages(["detail"], _assertThisInitialized(_this));
        _this.cart = site.components.getComponent("cart");
        _this.fixed = false;
        _this.offsetTop = 0;
        _this.el;
        _this.nav;
        _this.selected;
        _this.variants = [];
        return _this;
      }
    
      _createClass(CartBar, [{
        key: "mount",
        value: function mount(site) {
          this.el = document.getElementById("cartbar");
          this.nav = document.getElementById("navbar");
          this.parseVariants();
          this.initVariantSwitchers();
          this.initCartForm();
          this.initSizingPopup();
        }
      }, {
        key: "unmount",
        value: function unmount() {
          // TODO Remove from render queue
          // TODO Remove from resize queue
          document.documentElement.classList.remove("cartbar-fixed");
          this.variants = [];
          this.selected = null;
        }
      }, {
        key: "render",
        value: function render() {
          this.checkIfFixed();
        }
      }, {
        key: "getOffsetTop",
        value: function getOffsetTop() {
          var _this2 = this;
    
          document.documentElement.classList.remove("cartbar-fixed");
          setTimeout(function () {
            _this2.offsetTop = _this2.el.getBoundingClientRect().top + _this2.browser.state.scrollTop - _this2.nav.offsetHeight;
            _this2.fixed = false;
          }, 10);
        }
      }, {
        key: "checkIfFixed",
        value: function checkIfFixed() {
          if (!this.fixed && this.browser.state.scrollTop > this.offsetTop) {
            document.documentElement.classList.add("cartbar-fixed");
            this.fixed = true;
          }
    
          if (this.fixed && this.browser.state.scrollTop < this.offsetTop) {
            document.documentElement.classList.remove("cartbar-fixed");
            this.fixed = false;
          }
        }
      }, {
        key: "parseVariants",
        value: function parseVariants() {
          var children = document.getElementById("cartbar-variants").children;
    
          for (var i = 0; i < children.length; i++) {
            var el = children[i];
            var vari = {
              id: el.getAttribute("data-variant-id"),
              url: el.getAttribute("data-variant-url"),
              color: el.getAttribute("data-variant-color"),
              gender: el.getAttribute("data-variant-gender"),
              selected: el.getAttribute("data-variant-selected") == "1"
            };
            if (vari.selected) this.selected = vari;
            this.variants.push(vari);
          }
        }
      }, {
        key: "initVariantSwitchers",
        value: function initVariantSwitchers() {
          var _this3 = this;
    
          this.el.querySelectorAll(".switchVariant").forEach(function (el, i) {
            el.addEventListener("change", function () {
              var name = el.name;
              var value = el.value; // Find the variant with everything the same except for the item changed
    
              _this3.variants.forEach(function (vari, i) {
                if ((name == "Color" || name == "Style") && vari.color == value && vari.gender == _this3.selected.gender) _this3.navigation.navigateTo(vari.url);
                if (name == "Gender" && vari.gender == value && vari.color == _this3.selected.color) _this3.navigation.navigateTo(vari.url);
              });
            });
          });
        }
      }, {
        key: "initCartForm",
        value: function initCartForm() {
          var _this4 = this;
    
          this.el.querySelector("form").addEventListener("submit", function (e) {
            e.preventDefault();
    
            _this4.onAddToCart();
          });
        }
      }, {
        key: "onAddToCart",
        value: function onAddToCart() {
          var _this5 = this;
    
          var size = document.getElementById("cartbar-size").value; //console.log(size);
    
          if (size) {
            this.cart.showCartLoading();
            this.cart.addToCart(this.selected.id, 1, {
              Size: size
            }, function () {
              _this5.navigation.navigateTo("/cart", "", function () {
                _this5.cart.hideCartLoading();
              });
            });
          } else {
            //console.log("need size");
            //TODO Redo this based on design
            document.getElementById("cartbar-size").parentNode.classList.add("dropdown--highlight");
          }
        }
      }, {
        key: "initSizingPopup",
        value: function initSizingPopup() {
          document.querySelector('a[href="#show-sizing"]').addEventListener("click", function () {
            document.documentElement.classList.toggle("show-sizing");
          });
          document.getElementById("sizing-toggle").addEventListener("click", function () {
            document.documentElement.classList.toggle("show-sizing");
          });
          document.getElementById("sizing-toggle-mobile").addEventListener("click", function () {
            document.documentElement.classList.toggle("show-sizing");
          });
          document.getElementById("sizing-close").addEventListener("click", function () {
            document.documentElement.classList.remove("show-sizing");
          });
        }
      }]);
    
      return CartBar;
    }(_component["default"]);
    
    exports["default"] = CartBar;
    
    },{"./component":7}],6:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _component = _interopRequireDefault(require("./component"));
    
    var _ajax = require("../utility/ajax");
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
    
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    
    var CartPage = /*#__PURE__*/function (_Component) {
      _inherits(CartPage, _Component);
    
      var _super = _createSuper(CartPage);
    
      function CartPage(site) {
        var _this;
    
        _classCallCheck(this, CartPage);
    
        _this = _super.call(this, "cartpage");
        _this.cart = site.components.getComponent("cart");
        site.components.attachToPages(["cart"], _assertThisInitialized(_this));
        _this.parser = new DOMParser();
        _this.browser = site.browser;
        return _this;
      }
    
      _createClass(CartPage, [{
        key: "mount",
        value: function mount(site) {
          this.initListeners();
        }
      }, {
        key: "initListeners",
        value: function initListeners() {
          document.getElementById("note-submit").addEventListener("click", this.addNote.bind(this));
          document.getElementById("note-text").addEventListener("input", function (e) {
            e.target.classList.add("dirty");
            document.getElementById("note-submit").innerHTML = "Submit";
          });
          this.reinitListeners();
        }
      }, {
        key: "reinitListeners",
        value: function reinitListeners() {
          document.querySelectorAll(".cartRow").forEach(this.initRowListeners.bind(this));
        }
      }, {
        key: "initRowListeners",
        value: function initRowListeners(row) {
          var line = row.getAttribute("data-line");
          row.querySelector(".quantitySelect").addEventListener("change", this.changeQuantity.bind(this, line));
          row.querySelector(".removeItem").addEventListener("click", this.removeItem.bind(this, line));
        }
      }, {
        key: "changeQuantity",
        value: function changeQuantity(line, e) {
          this.cart.showCartLoading();
          this.cart.changeQuantity(line, e.target.value, this.updatePage.bind(this));
        }
      }, {
        key: "changeColor",
        value: function changeColor() {// Leave for now, may be tricky.
        }
      }, {
        key: "removeItem",
        value: function removeItem(line) {
          this.cart.showCartLoading();
          this.cart.changeQuantity(line, 0, this.updatePage.bind(this));
        }
      }, {
        key: "addNote",
        value: function addNote() {
          var _this2 = this;
    
          //console.log("addNote");
          var val = document.getElementById("note-text").value;
          this.cart.showCartLoading();
          this.cart.addNote(val, function () {
            document.getElementById("note-submit").innerHTML = "Saved!";
    
            _this2.updatePage();
          });
        }
      }, {
        key: "updatePage",
        value: function updatePage() {
          var _this3 = this;
    
          (0, _ajax.getAjax)("/cart", function (response) {
            var newDoc = _this3.parser.parseFromString(response, 'text/html');
    
            document.querySelectorAll(".cartSwap").forEach(function (swap, i) {
              var id = swap.id;
              var rep = newDoc.getElementById(id);
    
              if (rep) {
                swap.innerHTML = rep.innerHTML;
    
                _this3.browser.lazy.update();
              } else {
                swap.remove();
              }
            });
    
            _this3.reinitListeners();
    
            _this3.cart.hideCartLoading();
          });
        }
      }]);
    
      return CartPage;
    }(_component["default"]);
    
    exports["default"] = CartPage;
    
    },{"../utility/ajax":27,"./component":7}],7:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    var Component = /*#__PURE__*/function () {
      function Component() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    
        _classCallCheck(this, Component);
    
        this.name = name;
      }
    
      _createClass(Component, [{
        key: "mount",
        value: function mount() {}
      }, {
        key: "unmount",
        value: function unmount() {}
      }]);
    
      return Component;
    }();
    
    exports["default"] = Component;
    
    },{}],8:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _component = _interopRequireDefault(require("./component"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
    
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    
    var CTASlider = /*#__PURE__*/function (_Component) {
      _inherits(CTASlider, _Component);
    
      var _super = _createSuper(CTASlider);
    
      function CTASlider(site) {
        var _this;
    
        _classCallCheck(this, CTASlider);
    
        _this = _super.call(this, "cta-slider");
        site.components.attachToPages(["home", "default"], _assertThisInitialized(_this));
        return _this;
      }
    
      _createClass(CTASlider, [{
        key: "mount",
        value: function mount(site) {
          if (!document.querySelector(".collectionCTA")) return;
          this.init();
        }
      }, {
        key: "init",
        value: function init() {
          this.active = 0;
          this.blocked = false;
          this.count = Number(document.querySelector("[data-cta-count]").getAttribute("data-cta-count"));
          document.querySelector("[data-cta-prev]").addEventListener("click", this.increment.bind(this, -1));
          document.querySelector("[data-cta-next]").addEventListener("click", this.increment.bind(this, 1));
        }
      }, {
        key: "increment",
        value: function increment(n) {
          if (this.blocked) return;
          this.active = (this.active + n + this.count) % this.count;
          this.goToActive();
        }
      }, {
        key: "goToSlide",
        value: function goToSlide(i) {
          if (this.blocked) return;
          this.active = i;
          this.goToActive();
        }
      }, {
        key: "goToActive",
        value: function goToActive() {
          var _this2 = this;
    
          document.querySelectorAll("[data-cta-index]").forEach(function (el, i) {
            if (Number(el.getAttribute("data-cta-index")) == _this2.active) {
              el.classList.remove("stop");
            } else {
              if (!el.classList.contains("stop")) {
                el.classList.add("out");
                setTimeout(function () {
                  el.classList.remove("out");
                }, 500);
              }
    
              el.classList.add("stop");
            }
          });
          this.blocked = true;
          setTimeout(function () {
            _this2.blocked = false;
          }, 500);
        }
      }]);
    
      return CTASlider;
    }(_component["default"]);
    
    exports["default"] = CTASlider;
    
    },{"./component":7}],9:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _component = _interopRequireDefault(require("./component"));
    
    var _dcanvas = _interopRequireDefault(require("../utility/2dcanvas"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
    
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    
    var Cursors = /*#__PURE__*/function (_Component) {
      _inherits(Cursors, _Component);
    
      var _super = _createSuper(Cursors);
    
      function Cursors(site) {
        var _this;
    
        _classCallCheck(this, Cursors);
    
        _this = _super.call(this, "cursors");
        _this.showing = false;
        _this.browser = site.browser;
        site.components.mount(_assertThisInitialized(_this));
        document.addEventListener('swup:animationOutStart', _this.showLoading.bind(_assertThisInitialized(_this)));
        document.addEventListener('swup:animationInStart', _this.hideLoading.bind(_assertThisInitialized(_this)));
        document.addEventListener('swup:animationInDone', _this.endLoading.bind(_assertThisInitialized(_this)));
        return _this;
      }
    
      _createClass(Cursors, [{
        key: "mount",
        value: function mount(site) {
          this.el = document.getElementById("cursor");
          var canvas = this.el.querySelector("canvas");
          if (!canvas) return;
          this.canvas = (0, _dcanvas["default"])(canvas, this.browser);
          this.browser.addToRenderLoop(this.render.bind(this));
          this.initPage();
        }
      }, {
        key: "showLoading",
        value: function showLoading() {
          this.showing = true;
          this.el.classList.add("cursor--show");
        }
      }, {
        key: "hideLoading",
        value: function hideLoading() {
          this.el.classList.remove("cursor--show");
        }
      }, {
        key: "endLoading",
        value: function endLoading() {
          this.showing = false;
          this.initPage();
        }
      }, {
        key: "initPage",
        value: function initPage() {
          var _this2 = this;
    
          document.querySelectorAll("[data-cursor]").forEach(function (item, i) {
            var cursor = item.getAttribute("data-cursor");
    
            if (cursor) {
              item.addEventListener("mouseenter", _this2.show.bind(_this2, cursor));
              item.addEventListener("mouseleave", _this2.hide.bind(_this2, cursor));
            }
          });
        }
      }, {
        key: "show",
        value: function show(cursor) {
          if (cursor) document.documentElement.classList.add("show-cursor-" + cursor);
        }
      }, {
        key: "hide",
        value: function hide(cursor) {
          if (cursor) document.documentElement.classList.remove("show-cursor-" + cursor);
        }
      }, {
        key: "render",
        value: function render() {
          if (!this.browser.isMobile) {
            this.el.style.transform = "translate3d(" + this.browser.state.mouse.xLag + "px, " + this.browser.state.mouse.yLag + "px, 0)";
          }
    
          if (this.showing) {
            var data = this.canvas;
            var ctx = this.canvas.ctx;
            var t = this.browser.state.t / 100;
            var speed = 10;
            ctx.strokeStyle = "#dc3433";
            ctx.lineWidth = 3; // let target = {
            //   x: data.cw/2 + Math.cos(t * speed) * data.cw/4,
            //   y: data.ch/2 + Math.sin(t * speed) * data.ch/4,
            // }
    
            ctx.clearRect(0, 0, data.cw, data.ch);
            var a1 = t;
            var gap = Math.PI * (Math.sin(t * 0.4) + 1) * 0.5;
            var a2 = a1 + gap;
            ctx.beginPath();
            ctx.arc(data.cw / 2, data.ch / 2, data.ch / 4, a1, a2);
            ctx.stroke(); //ctx.fillRect(target.x, target.y, 10, 10);
          }
        }
      }]);
    
      return Cursors;
    }(_component["default"]);
    
    exports["default"] = Cursors;
    
    },{"../utility/2dcanvas":26,"./component":7}],10:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _component = _interopRequireDefault(require("./component"));
    
    var _inView = _interopRequireDefault(require("in-view"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
    
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    
    var FixedList = /*#__PURE__*/function (_Component) {
      _inherits(FixedList, _Component);
    
      var _super = _createSuper(FixedList);
    
      function FixedList(site) {
        var _this;
    
        _classCallCheck(this, FixedList);
    
        _this = _super.call(this, "fixedlist");
        _this.browser = site.browser;
        site.components.attachToPages(["home"], _assertThisInitialized(_this));
        _this.showing = false;
        _this.even = true;
        _this.currentSrc = "";
    
        _this.browser.addToRenderLoop(_this.render.bind(_assertThisInitialized(_this)));
    
        return _this;
      }
    
      _createClass(FixedList, [{
        key: "mount",
        value: function mount(site) {
          var _this2 = this;
    
          this.parseDoc();
          this.calcBounds();
          this.output(true);
          setTimeout(function () {
            _this2.calcBounds();
    
            _this2.output(true);
          }, 1000);
          (0, _inView["default"])('.fixedList').on('enter', function (el) {
            _this2.showing = true;
          });
          (0, _inView["default"])('.fixedList').on('exit', function (el) {
            _this2.showing = false;
          });
        }
      }, {
        key: "unmount",
        value: function unmount() {
          this.showing = false;
          this.currentSrc = "";
        }
      }, {
        key: "parseDoc",
        value: function parseDoc() {
          var _this3 = this;
    
          this.img = document.getElementById("fixedlist-img");
          this.imgEven = document.getElementById("fixedlist-img-even");
          this.imgOdd = document.getElementById("fixedlist-img-odd");
          this.blocks = document.querySelectorAll(".fixedList__block");
          this.items = [];
          this.blocks.forEach(function (item, i) {
            _this3.items.push({
              el: item,
              index: i,
              src: item.querySelector("img").src
            });
          });
          this.img.src = this.items[0].src;
        }
      }, {
        key: "calcBounds",
        value: function calcBounds() {
          var _this4 = this;
    
          this.items.forEach(function (item, i) {
            var bound = item.el.getBoundingClientRect();
            item.center = bound.top + bound.height / 2 + _this4.browser.state.scrollTop;
          });
        }
      }, {
        key: "calcOffsets",
        value: function calcOffsets() {
          var _this5 = this;
    
          this.blocks.forEach(function (item, i) {
            var bound = item.getBoundingClientRect();
    
            _this5.items.push({
              index: i,
              src: item.querySelector("img").src,
              center: bound.top + _this5.browser.state.scrollTop + bound.height / 2
            });
          });
        }
      }, {
        key: "render",
        value: function render() {
          if (!this.browser.isMobile && this.showing) {
            this.output();
          }
        }
      }, {
        key: "resize",
        value: function resize() {
          this.calcBounds();
        }
      }, {
        key: "output",
        value: function output(force) {
          var d = 100000;
          var closest = null;
          var top = this.browser.state.scrollTop + window.innerHeight / 2;
          this.items.forEach(function (item, i) {
            var diff = Math.abs(item.center - top);
    
            if (diff < d) {
              closest = item;
              d = diff;
            }
          });
    
          if (closest && (closest.src != this.currentSrc || force)) {
            var out = this.even ? this.imgEven : this.imgOdd;
            out.style.backgroundImage = "url(".concat(closest.src, ")");
            this.img.classList.remove(this.even ? "odd" : "even");
            this.img.classList.add(this.even ? "even" : "odd");
            this.currentSrc = closest.src;
            this.even = !this.even;
            this.items.forEach(function (item, i) {
              item.el.classList.remove("active");
            });
            closest.el.classList.add("active");
          }
        }
      }]);
    
      return FixedList;
    }(_component["default"]);
    
    exports["default"] = FixedList;
    
    },{"./component":7,"in-view":40}],11:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _component = _interopRequireDefault(require("./component"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
    
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    
    var Grammy = /*#__PURE__*/function (_Component) {
      _inherits(Grammy, _Component);
    
      var _super = _createSuper(Grammy);
    
      function Grammy(site) {
        var _this;
    
        _classCallCheck(this, Grammy);
    
        _this = _super.call(this, "grammy");
        site.components.attachToPages(["default"], _assertThisInitialized(_this));
        _this.cart = site.components.getComponent("cart");
        return _this;
      }
    
      _createClass(Grammy, [{
        key: "mount",
        value: function mount(site) {
          var _this2 = this;
    
          var gf = document.getElementById("grammy-form");
    
          if (gf) {
            var form = gf.querySelector("form");
            form.addEventListener("submit", function (e) {
              e.preventDefault();
              var name = gf.querySelector("input[name='name']").value;
    
              if (name != "") {
                gf.classList.add("grammyForm--loading");
    
                _this2.cart.addAttributes({
                  'Grammy Name': name
                }, function () {
                  window.location.href = '/discount/GRAMMYBAG?redirect=/collections';
                });
              }
            });
          }
        }
      }]);
    
      return Grammy;
    }(_component["default"]);
    
    exports["default"] = Grammy;
    
    },{"./component":7}],12:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _component = _interopRequireDefault(require("./component"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
    
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    
    var Menu = /*#__PURE__*/function (_Component) {
      _inherits(Menu, _Component);
    
      var _super = _createSuper(Menu);
    
      function Menu(site) {
        var _this;
    
        _classCallCheck(this, Menu);
    
        _this = _super.call(this, "menu");
        site.components.mount(_assertThisInitialized(_this));
        site.navigation.registerNavigationCallback(_this.closeMenu);
        site.navigation.registerNavigationCallback(_this.highlightActivePage.bind(_assertThisInitialized(_this)));
        site.navigation.registerNavigationCallback(_this.checkBgColor.bind(_assertThisInitialized(_this)));
        _this.browser = site.browser;
        _this.nav = document.getElementById("nav");
        _this.navLinks = document.querySelectorAll(".nav__link");
        _this.scrolled = false;
        return _this;
      }
    
      _createClass(Menu, [{
        key: "mount",
        value: function mount(site) {
          this.initMenuToggle();
          site.browser.addToRenderLoop(this.render.bind(this));
        }
      }, {
        key: "render",
        value: function render() {
          this.checkIfScrolled();
        }
      }, {
        key: "checkIfScrolled",
        value: function checkIfScrolled() {
          if (!this.scrolled && this.browser.state.scrollTop > 2) {
            document.documentElement.classList.add("scrolled");
            this.scrolled = true;
          }
    
          if (this.scrolled && this.browser.state.scrollTop < 2) {
            document.documentElement.classList.remove("scrolled");
            this.scrolled = false;
          }
        }
      }, {
        key: "initMenuToggle",
        value: function initMenuToggle() {
          var toggle = document.getElementById("menu-toggle");
          if (toggle) toggle.addEventListener("click", this.toggleMenu);
          var overlay = document.getElementById("menu-overlay");
          if (overlay) overlay.addEventListener("click", this.closeMenu);
        }
      }, {
        key: "toggleMenu",
        value: function toggleMenu() {
          document.documentElement.classList.toggle("menu-open");
        }
      }, {
        key: "openMenu",
        value: function openMenu() {
          document.documentElement.classList.add("menu-open");
        }
      }, {
        key: "closeMenu",
        value: function closeMenu() {
          document.documentElement.classList.remove("menu-open");
        }
      }, {
        key: "highlightActivePage",
        value: function highlightActivePage() {
          var active = this.findActivePage();
          this.navLinks.forEach(function (item, i) {
            if (item == active) {
              item.classList.add("nav__link--active");
            } else {
              item.classList.remove("nav__link--active");
            }
          });
        }
      }, {
        key: "findActivePage",
        value: function findActivePage() {
          var prodLink;
          var output;
          this.navLinks.forEach(function (item, i) {
            if (item.href == window.location.href) output = item;
            if (/products/.test(item.href) || /collections/.test(item.href)) prodLink = item;
          });
          if (/products/.test(window.location.pathname) || /collections/.test(window.location.pathname)) output = prodLink;
          return output;
        }
      }, {
        key: "checkBgColor",
        value: function checkBgColor() {
          if (document.querySelector(".section--first.section--black")) {
            document.documentElement.classList.add("menu-dark");
          } else {
            document.documentElement.classList.remove("menu-dark");
          }
        }
      }]);
    
      return Menu;
    }(_component["default"]);
    
    exports["default"] = Menu;
    
    },{"./component":7}],13:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _component = _interopRequireDefault(require("./component"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
    
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    
    var ProductFilter = /*#__PURE__*/function (_Component) {
      _inherits(ProductFilter, _Component);
    
      var _super = _createSuper(ProductFilter);
    
      function ProductFilter(site) {
        var _this;
    
        _classCallCheck(this, ProductFilter);
    
        _this = _super.call(this, "productfilter");
        site.components.attachToPages(["products"], _assertThisInitialized(_this));
        _this.animTime = 400;
        return _this;
      }
    
      _createClass(ProductFilter, [{
        key: "mount",
        value: function mount(site) {
          this.initListeners();
          this.selectCollection();
        }
      }, {
        key: "initListeners",
        value: function initListeners() {
          var _this2 = this;
    
          document.getElementById("category-filter").addEventListener("change", this.selectCollection.bind(this));
          document.querySelectorAll(".productFilter").forEach(function (el, i) {
            el.addEventListener("change", _this2.selectFilter.bind(_this2));
          });
        }
      }, {
        key: "selectCollection",
        value: function selectCollection() {
          var _this3 = this;
    
          var value = document.getElementById("category-filter").value;
          this.animateOut();
          setTimeout(function () {
            document.querySelectorAll(".collectionListing").forEach(function (el, i) {
              var id = el.getAttribute("data-collection");
    
              if (id == value || value == "") {
                el.classList.remove("hide");
              } else {
                el.classList.add("hide");
              }
            });
    
            _this3.animateIn();
          }, this.animTime);
        }
      }, {
        key: "selectFilter",
        value: function selectFilter(e) {
          var _this4 = this;
    
          var value = e.target.value;
          this.animateOut();
          setTimeout(function () {
            document.querySelectorAll(".productCard").forEach(function (el, i) {
              var gender = el.getAttribute("data-gender");
    
              if (gender == value || value == "") {
                el.classList.remove("hide");
              } else {
                el.classList.add("hide");
              }
            });
    
            _this4.animateIn();
          }, this.animTime);
        }
      }, {
        key: "animateOut",
        value: function animateOut() {
          document.querySelectorAll(".collectionListing").forEach(function (el, i) {
            el.classList.remove("in");
          });
        }
      }, {
        key: "animateIn",
        value: function animateIn() {
          setTimeout(function () {
            document.querySelectorAll(".collectionListing").forEach(function (el, i) {
              el.classList.add("in");
            });
          }, 100);
        }
      }]);
    
      return ProductFilter;
    }(_component["default"]);
    
    exports["default"] = ProductFilter;
    
    },{"./component":7}],14:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _component = _interopRequireDefault(require("./component"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
    
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    
    var Related = /*#__PURE__*/function (_Component) {
      _inherits(Related, _Component);
    
      var _super = _createSuper(Related);
    
      function Related(site) {
        var _this;
    
        _classCallCheck(this, Related);
    
        _this = _super.call(this, "related");
        site.components.attachToPages(["detail"], _assertThisInitialized(_this));
        return _this;
      }
    
      _createClass(Related, [{
        key: "mount",
        value: function mount(site) {
          var related = document.getElementById("related");
          if (!related) return;
          var prods = related.querySelectorAll(".productCard");
          var random = this.shuffle(this.toArray(prods));
          random.forEach(function (item, i) {
            if (i >= 2) {
              item.remove();
            }
          });
          related.classList.add("inited");
        }
      }, {
        key: "toArray",
        value: function toArray(domList) {
          var array = [];
          domList.forEach(function (item, i) {
            array.push(item);
          });
          return array;
        }
      }, {
        key: "shuffle",
        value: function shuffle(array) {
          var currentIndex = array.length,
              temporaryValue,
              randomIndex; // While there remain elements to shuffle...
    
          while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1; // And swap it with the current element.
    
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }
    
          return array;
        }
      }]);
    
      return Related;
    }(_component["default"]);
    
    exports["default"] = Related;
    
    },{"./component":7}],15:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _component = _interopRequireDefault(require("./component"));
    
    var _easing = _interopRequireDefault(require("../utility/easing"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
    
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    
    var Template = /*#__PURE__*/function (_Component) {
      _inherits(Template, _Component);
    
      var _super = _createSuper(Template);
    
      function Template(site) {
        var _this;
    
        _classCallCheck(this, Template);
    
        _this = _super.call(this, "scrollimages");
        site.components.attachToPages(["home", "detail", "default"], _assertThisInitialized(_this));
        _this.browser = site.browser;
        _this.images = [];
        site.browser.addToRenderLoop(_this.render.bind(_assertThisInitialized(_this)));
        site.browser.addToResizeLoop(_this.resize.bind(_assertThisInitialized(_this)));
        return _this;
      }
    
      _createClass(Template, [{
        key: "mount",
        value: function mount(site) {
          var _this2 = this;
    
          // this needs to be better
          setTimeout(function () {
            _this2.init();
          }, 1000);
        }
      }, {
        key: "unmount",
        value: function unmount() {
          this.images = [];
        }
      }, {
        key: "init",
        value: function init() {
          var images = document.querySelectorAll(".scrollImage");
          images.forEach(this.initItem.bind(this));
        }
      }, {
        key: "initItem",
        value: function initItem(el) {
          var bounds = el.getBoundingClientRect();
          var si = {
            el: el,
            top: bounds.top + this.browser.state.scrollTop,
            height: bounds.height,
            wrap: el.querySelector(".img__wrap")
          };
          this.images.push(si);
        }
      }, {
        key: "render",
        value: function render() {
          var _this3 = this;
    
          this.images.forEach(function (item, i) {
            var duration = window.innerHeight * 0.66 + item.height * 0.5;
            var diff = item.top - _this3.browser.state.scrollLag - window.innerHeight + duration;
            var ratio = Math.min(1, Math.max(0, diff / duration));
    
            if (ratio > 0 && ratio < 1 || !item.inited) {
              ratio = _easing["default"].easeInQuad(ratio);
              var scale = 1 + ratio * 0.4; //item.wrap.style.transform = "scale("+scale+") translateY("+( (scale-1)*item.height*0.5 )+"px)";
    
              item.wrap.style.transform = "scale(" + scale + ")";
    
              if (!item.inited) {
                item.el.classList.add("inited");
                item.inited = true;
              }
            }
          });
        }
      }, {
        key: "resize",
        value: function resize() {
          var _this4 = this;
    
          this.images.forEach(function (item, i) {
            var bounds = item.el.getBoundingClientRect();
            item.top = bounds.top + _this4.browser.state.scrollTop;
            item.height = bounds.height;
          });
        }
      }]);
    
      return Template;
    }(_component["default"]);
    
    exports["default"] = Template;
    
    },{"../utility/easing":31,"./component":7}],16:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _component = _interopRequireDefault(require("./component"));
    
    var _impetus = _interopRequireDefault(require("impetus"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
    
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    
    var Slider = /*#__PURE__*/function (_Component) {
      _inherits(Slider, _Component);
    
      var _super = _createSuper(Slider);
    
      function Slider(site) {
        var _this;
    
        _classCallCheck(this, Slider);
    
        _this = _super.call(this, "slider");
        site.components.attachToPages(["home", "detail", "default"], _assertThisInitialized(_this));
        _this.sliders = [];
        _this.browser = site.browser;
        return _this;
      }
    
      _createClass(Slider, [{
        key: "mount",
        value: function mount(site) {
          document.querySelectorAll("[data-slider]").forEach(this.initSlider.bind(this));
        }
      }, {
        key: "unmount",
        value: function unmount(site) {
          this.sliders.forEach(function (slider, i) {
            //console.log("destroy", slider.imp);
            if (slider.imp) {
              slider.imp.pause();
              slider.imp = slider.imp.destroy();
            }
          });
          this.sliders = [];
        }
      }, {
        key: "initSlider",
        value: function initSlider(el) {
          var slider = {};
          slider.el = el;
          slider.rail = el.querySelector("[data-slider-rail]");
          slider.children = el.querySelectorAll("[data-slider-child]");
          slider.wraps = el.querySelectorAll(".slider__image .img__wrap");
          slider.offset = 0;
          slider.moved = false;
          slider.scale = !el.getAttribute("data-slider-noscale");
    
          if (slider.children.length > 1) {
            slider.first = slider.children[0];
            slider.last = slider.children[slider.children.length - 1];
            slider.draw = this.draw.bind(slider);
            slider.setBound = this.setBound.bind(slider);
            slider.imp = new _impetus["default"]({
              source: el,
              multiplier: -1,
              boundX: [0, 0],
              bounce: true,
              update: function update(x, y) {
                slider.draw(x);
    
                if (!slider.moved) {
                  slider.el.classList.add("slider--moved");
                  slider.moved = true;
                }
              }
            });
            slider.setBound();
            slider.draw(0);
            this.browser.addToResizeLoop(slider.setBound);
            slider.el.querySelectorAll("img, video").forEach(function (el, i) {
              el.onload = slider.setBound;
            });
            this.sliders.push(slider);
          }
        }
      }, {
        key: "setBound",
        value: function setBound() {
          var slider = this;
          var firstBound = slider.first.getBoundingClientRect();
          var lastBound = slider.last.getBoundingClientRect();
          var bound = Math.max(10, lastBound.left + lastBound.width + firstBound.left - window.innerWidth + slider.offset * 2);
          slider.imp.setBoundX([0, bound]);
        }
      }, {
        key: "draw",
        value: function draw(offset) {
          var slider = this;
          slider.rail.style.transform = "translateX(" + -1 * offset + "px)";
    
          if (slider.scale) {
            slider.children.forEach(function (child, i) {
              var scale = 1 + Math.max(0, (child.offsetLeft - offset - window.innerWidth / 3) / window.innerWidth) * 0.66;
              slider.wraps[i].style.transform = "scale(" + scale + ")";
            });
          }
    
          slider.offset = offset;
        }
      }]);
    
      return Slider;
    }(_component["default"]);
    
    exports["default"] = Slider;
    
    },{"./component":7,"impetus":39}],17:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _component = _interopRequireDefault(require("./component"));
    
    var _inView = _interopRequireDefault(require("in-view"));
    
    var _easing = _interopRequireDefault(require("../utility/easing"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
    
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    
    var StickyScroll = /*#__PURE__*/function (_Component) {
      _inherits(StickyScroll, _Component);
    
      var _super = _createSuper(StickyScroll);
    
      function StickyScroll(site) {
        var _this;
    
        _classCallCheck(this, StickyScroll);
    
        _this = _super.call(this, "template");
        site.components.attachToPages(["default"], _assertThisInitialized(_this));
        _this.wrap = null;
        _this.stick = null;
        _this.inner = null;
        site.browser.addToRenderLoop(_this.render.bind(_assertThisInitialized(_this)));
        site.browser.addToResizeLoop(_this.resize.bind(_assertThisInitialized(_this)));
        return _this;
      }
    
      _createClass(StickyScroll, [{
        key: "mount",
        value: function mount(site) {
          //console.log("sticky");
          this.init();
        }
      }, {
        key: "unmount",
        value: function unmount() {
          this.stick = null;
          this.inner = null;
        }
      }, {
        key: "init",
        value: function init() {
          var wrap = document.querySelector("[data-sticky-scroll]");
    
          if (wrap) {
            this.wrap = wrap;
            this.stick = wrap.querySelector("[data-sticky-stick]");
            this.inner = wrap.querySelector("[data-sticky-inner]");
          }
        }
      }, {
        key: "render",
        value: function render() {
          if (!this.stick) return;
          var top = this.stick.offsetTop;
          var scrollHeight = this.wrap.offsetHeight - this.stick.offsetHeight;
          var ratio = top / scrollHeight;
          ratio = _easing["default"].customEaseInOut(ratio);
          ratio *= 0.8;
          var move = scrollHeight * ratio;
          move *= -1;
    
          if (move != this.moveCache) {
            this.inner.style.transform = "translateX(" + move + "px)";
            this.moveCache = move;
          }
        }
      }, {
        key: "resize",
        value: function resize() {
          if (!this.stick) return;
        }
      }]);
    
      return StickyScroll;
    }(_component["default"]);
    
    exports["default"] = StickyScroll;
    
    },{"../utility/easing":31,"./component":7,"in-view":40}],18:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _component = _interopRequireDefault(require("./component"));
    
    var _dcanvas = _interopRequireDefault(require("../utility/2dcanvas"));
    
    var _inView = _interopRequireDefault(require("in-view"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
    
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    
    var Thread = /*#__PURE__*/function (_Component) {
      _inherits(Thread, _Component);
    
      var _super = _createSuper(Thread);
    
      function Thread(site) {
        var _this;
    
        _classCallCheck(this, Thread);
    
        _this = _super.call(this, "thread");
        _this.browser = site.browser;
        site.components.attachToPages(["home", "detail", "default"], _assertThisInitialized(_this));
        _this.showing = false;
    
        _this.browser.addToRenderLoop(_this.render.bind(_assertThisInitialized(_this))); //this.createThreads();
        //this.n = 0;
    
    
        return _this;
      } // createThreads(){
      //   this.threadCount = 100;
      //   this.threads = [];
      //   for (var i = 0; i < this.threadCount; i++) {
      //     this.threads.push({
      //       pos: {x: 0, y: 0},
      //       prev: {x: 0, y: 0},
      //       angle: 0,
      //       speed: (0.6 + Math.random() * 0.4) * 20,
      //       phase: (0.8 + Math.random() * 0.2) * 4,
      //       offset: Math.random(),
      //     })
      //   }
      // }
    
    
      _createClass(Thread, [{
        key: "mount",
        value: function mount(site) {
          var _this2 = this;
    
          //this.el = document.querySelector(".thread");
          //if(this.el) this.init(this.el);
          this.thread = document.getElementById("thread");
          this.sticky = document.getElementById("thread-sticky");
          this.circle = document.getElementById("thread-circle");
          (0, _inView["default"])('.thread').on('enter', function (el) {
            _this2.showing = true;
          });
          (0, _inView["default"])('.thread').on('exit', function (el) {
            _this2.showing = false;
          });
        }
      }, {
        key: "unmount",
        value: function unmount() {
          this.showing = false;
        }
      }, {
        key: "init",
        value: function init(el) {// let canvas = el.querySelector("canvas");
          // if(!canvas) return;
          // this.canvas = init2dCanvas(canvas, this.browser);
        }
      }, {
        key: "render",
        value: function render() {
          if (this.showing) {
            var ratio = this.sticky.offsetTop / (this.thread.offsetHeight - this.sticky.offsetHeight);
            var scale = 0.8 + ratio * 0.2;
            var offset = ratio * -10;
            this.circle.style.transform = "scale(" + scale + ") translateY(" + offset + "%)";
          }
        } // old_render(){
        //   if(this.showing){
        //     // Setup
        //     let data = this.canvas;
        //     let ctx = this.canvas.ctx;
        //     let t = this.browser.state.t / 1000;
        //     let cut =  data.cw/10
        //     ctx.strokeStyle = "#ffffff";
        //     ctx.lineWidth = 1;
        //     ctx.fillStyle = "#EDEDED";
        //     data.updateMouse();
        //
        //     // Clearing
        //     this.n = (this.n + 1) % 10;
        //     if(this.n == 0){
        //       ctx.globalCompositeOperation = 'destination-out';
        //       ctx.globalAlpha = 0.1;
        //       ctx.fillRect(0,0, data.cw, data.ch);
        //       ctx.globalCompositeOperation = 'source-over';
        //       ctx.globalAlpha = 1;
        //     }
        //
        //
        //
        //     //Rendering
        //     this.threads.forEach((item, i) => {
        //
        //       item.prev.x = item.pos.x;
        //       item.prev.y = item.pos.y;
        //
        //       let dx = data.mouse.x - item.pos.x;
        //       let dy = data.mouse.y - item.pos.y;
        //       let dist = Math.sqrt(dx*dx + dy*dy);
        //       //ctx.globalAlpha = Math.max(0, dist - 20);
        //
        //       let angle = Math.atan2(dy, dx);
        //       angle += Math.sin(item.phase * t + item.offset) * 0.25;
        //
        //       item.pos.x += Math.cos(angle) * item.speed * this.browser.state.rate;
        //       item.pos.y += Math.sin(angle) * item.speed * this.browser.state.rate;
        //
        //       item.pos.x = Math.max(0, Math.min(data.cw, item.pos.x));
        //       item.pos.y = Math.max(0, Math.min(data.ch, item.pos.y));
        //
        //       ctx.beginPath();
        //       ctx.moveTo(item.prev.x, item.prev.y);
        //       ctx.lineTo(item.pos.x, item.pos.y);
        //       ctx.stroke();
        //
        //     });
        //
        //   }
        // }
    
      }]);
    
      return Thread;
    }(_component["default"]);
    
    exports["default"] = Thread;
    
    },{"../utility/2dcanvas":26,"./component":7,"in-view":40}],19:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _component = _interopRequireDefault(require("./component"));
    
    var _inView = _interopRequireDefault(require("in-view"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
    
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    
    var Timeline = /*#__PURE__*/function (_Component) {
      _inherits(Timeline, _Component);
    
      var _super = _createSuper(Timeline);
    
      function Timeline(site) {
        var _this;
    
        _classCallCheck(this, Timeline);
    
        _this = _super.call(this, "timeline");
        site.components.attachToPages(["default"], _assertThisInitialized(_this));
        _this.browser = site.browser;
        _this.blocks = [];
        _this.images = [];
        site.browser.addToRenderLoop(_this.render.bind(_assertThisInitialized(_this)));
        site.browser.addToResizeLoop(_this.resize.bind(_assertThisInitialized(_this)));
        return _this;
      }
    
      _createClass(Timeline, [{
        key: "mount",
        value: function mount(site) {
          this.init();
        }
      }, {
        key: "unmount",
        value: function unmount() {
          this.blocks = [];
          this.images = []; //unmount
        }
      }, {
        key: "init",
        value: function init() {
          if (!document.getElementById("timeline")) return;
          this.createBlocks();
          this.createImages();
          this.calcOffsets();
          setTimeout(this.calcOffsets.bind(this), 1000);
        }
      }, {
        key: "createBlocks",
        value: function createBlocks() {
          var _this2 = this;
    
          this.blocks = [];
          var blockEls = document.querySelectorAll(".timeline__block");
          blockEls.forEach(function (el, i) {
            _this2.blocks.push({
              el: el,
              active: false
            });
          });
        }
      }, {
        key: "createImages",
        value: function createImages() {
          var _this3 = this;
    
          this.images = [];
          var imageEls = document.querySelectorAll(".timeline__image");
          imageEls.forEach(function (el, i) {
            _this3.images.push({
              el: el,
              speed: el.classList.contains("timeline__image--front") ? 1 : -1,
              inView: true
            });
          }); // inView('.timeline__image').on('enter', (el) => {
          //   this.setImageVisibility(el, true);
          // });
          // inView('.timeline__image').on('exit', (el) => {
          //   this.setImageVisibility(el, true);
          // });
        }
      }, {
        key: "setImageVisibility",
        value: function setImageVisibility(el, value) {
          this.images.forEach(function (image, i) {
            if (image.el == el) {
              image.inView = value;
            }
          });
        }
      }, {
        key: "calcOffsets",
        value: function calcOffsets() {
          var _this4 = this;
    
          this.blocks.forEach(function (block, i) {
            block.bounds = block.el.getBoundingClientRect();
            block.top = block.bounds.top + _this4.browser.state.scrollTop;
          });
          this.images.forEach(function (image, i) {
            image.bounds = image.el.parentNode.getBoundingClientRect();
            image.center = image.bounds.top + image.bounds.height / 2 + _this4.browser.state.scrollTop;
          });
        }
      }, {
        key: "render",
        value: function render() {
          this.highlightBlocks();
          this.drawImages();
        }
      }, {
        key: "resize",
        value: function resize() {
          this.calcOffsets();
        }
      }, {
        key: "highlightBlocks",
        value: function highlightBlocks() {
          var _this5 = this;
    
          this.blocks.forEach(function (block, i) {
            var offset = block.top - _this5.browser.state.scrollTop - window.innerHeight / 2;
    
            if (!block.active && offset <= 0) {
              block.el.classList.add("timeline__block--active");
              block.active = true;
            }
    
            if (block.active && offset > 0) {
              block.el.classList.remove("timeline__block--active");
              block.active = false;
            }
          });
        }
      }, {
        key: "drawImages",
        value: function drawImages() {
          var _this6 = this;
    
          if (this.browser.state.isMobile) return;
          this.images.forEach(function (image, i) {
            if (image.inView) {
              var offset = image.center - _this6.browser.state.scrollLag - window.innerHeight / 2;
              var move = offset / window.innerHeight * image.speed * window.innerWidth * 0.05;
              image.el.style.transform = "translateY(" + move + "px)";
            }
          });
        }
      }]);
    
      return Timeline;
    }(_component["default"]);
    
    exports["default"] = Timeline;
    
    },{"./component":7,"in-view":40}],20:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _vanillaLazyload = _interopRequireDefault(require("vanilla-lazyload"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    var BrowserController = /*#__PURE__*/function () {
      function BrowserController(site) {
        _classCallCheck(this, BrowserController);
    
        this.state = {
          scrollTop: this.getScroll(),
          scrollLag: this.getScroll(),
          lag: 5,
          toRender: [],
          toResize: [],
          resizeTimeout: null,
          mouse: {
            x: 0,
            y: 0,
            xLag: 0,
            yLag: 0,
            lag: 8,
            down: false
          },
          dpi: Math.min(2, window.devicePixelRatio || 1),
          t: 0,
          d: Date.now(),
          delta: 0,
          rate: 0,
          rem: 0,
          isMobile: false
        };
        this.site = site;
        this.lazy = new _vanillaLazyload["default"]({});
        this.init();
      }
    
      _createClass(BrowserController, [{
        key: "init",
        value: function init() {
          var _this = this;
    
          this.resizeBaseWork();
          window.addEventListener("scroll", this.onScroll.bind(this));
          window.addEventListener('mousemove', this.onMouseMove.bind(this));
          window.addEventListener('mousedown', this.onMouseDown.bind(this));
          window.addEventListener('mouseup', this.onMouseUp.bind(this));
          window.addEventListener("mouseout", function (e) {
            e = e ? e : window.event;
            var from = e.relatedTarget || e.toElement;
    
            if (!from || from.nodeName == "HTML") {
              _this.onMouseUp();
            }
          });
          window.addEventListener('resize', this.onResize.bind(this));
          this.boundRender = this.renderLoop.bind(this);
          this.renderLoop();
        }
      }, {
        key: "onScroll",
        value: function onScroll(e) {
          this.state.scrollTop = this.getScroll();
        }
      }, {
        key: "getScroll",
        value: function getScroll() {
          return window.pageYOffset || document.documentElement.scrollTop;
        }
      }, {
        key: "onMouseMove",
        value: function onMouseMove(e) {
          this.state.mouse.x = e.clientX;
          this.state.mouse.y = e.clientY;
        }
      }, {
        key: "onMouseDown",
        value: function onMouseDown(e) {
          this.state.mouse.down = true;
        }
      }, {
        key: "onMouseUp",
        value: function onMouseUp(e) {
          this.state.mouse.down = false;
        }
      }, {
        key: "addToRenderLoop",
        value: function addToRenderLoop(callback) {
          this.state.toRender.push(callback);
        }
      }, {
        key: "renderBaseWork",
        value: function renderBaseWork() {
          this.state.delta = Date.now() - this.state.d;
          this.state.t += this.state.delta;
          this.state.d = Date.now();
          this.state.rate = this.state.delta / 16;
          this.state.mouse.xLag += (this.state.mouse.x - this.state.mouse.xLag) / this.state.mouse.lag;
          this.state.mouse.yLag += (this.state.mouse.y - this.state.mouse.yLag) / this.state.mouse.lag;
          this.state.scrollLag += (this.state.scrollTop - this.state.scrollLag) / this.state.lag;
        }
      }, {
        key: "renderLoop",
        value: function renderLoop(e) {
          var _this2 = this;
    
          this.renderBaseWork();
          this.state.toRender.forEach(function (callback) {
            callback(_this2.state.rate);
          });
          requestAnimationFrame(this.boundRender);
        }
      }, {
        key: "addToResizeLoop",
        value: function addToResizeLoop(callback) {
          this.state.toResize.push(callback);
          callback();
        }
      }, {
        key: "resizeBaseWork",
        value: function resizeBaseWork() {
          this.state.rem = window.innerWidth / 100 * (1000 / 1440);
          this.state.isMobile = window.innerWidth <= 1000;
        }
      }, {
        key: "onResize",
        value: function onResize() {
          clearTimeout(this.state.resizeTimeout);
          this.state.resizeTimeout = setTimeout(this.resizeLoop.bind(this), 100);
        }
      }, {
        key: "resizeLoop",
        value: function resizeLoop(e) {
          this.resizeBaseWork();
          this.state.toResize.forEach(function (callback) {
            callback();
          });
        }
      }]);
    
      return BrowserController;
    }();
    
    exports["default"] = BrowserController;
    
    },{"vanilla-lazyload":64}],21:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = initComponents;
    
    var _componentRegister = _interopRequireDefault(require("./componentRegister"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function initComponents(site) {
      site.components = {
        site: site,
        debug: site.debug,
        all: [],
        mounted: [],
        attachedToPages: []
      };
      window.components = site.components;
      site.components.getComponent = getComponent.bind(site.components);
      site.components.mount = mount.bind(site.components);
      site.components.unmount = unmount.bind(site.components);
      site.components.attachToPages = attachToPages.bind(site.components);
      site.components.mountPage = mountPage.bind(site.components);
      site.components.unmountPage = unmountPage.bind(site.components);
      (0, _componentRegister["default"])(site);
    }
    
    function getComponent(name) {
      return this.all.find(function (c) {
        return c.name == name;
      });
    }
    
    function mount(component) {
      this.mounted.push({
        component: component
      });
      component.mount(this.site);
    }
    
    function unmount(component) {//loop through and remove
    }
    
    function attachToPages(pages, component) {
      var _this = this;
    
      pages.forEach(function (path) {
        _this.attachedToPages.push({
          component: component,
          path: path
        });
      });
    }
    
    function mountPage(path) {
      var _this2 = this;
    
      this.attachedToPages.forEach(function (attach) {
        if (attach.path == path) {
          _this2.mounted.push({
            component: attach.component,
            trigger: {
              path: attach.path
            }
          });
    
          attach.component.mount(_this2.site);
        }
      });
    }
    
    function unmountPage(path) {
      var mount;
    
      for (var i = this.mounted.length - 1; i >= 0; i--) {
        mount = this.mounted[i];
    
        if (mount.trigger && mount.trigger.path == path) {
          mount.component.unmount(this.site);
          this.mounted.splice(i, 1);
        }
      }
    }
    
    },{"./componentRegister":22}],22:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = registerComponents;
    
    var _menu = _interopRequireDefault(require("../components/menu"));
    
    var _cart = _interopRequireDefault(require("../components/cart"));
    
    var _cartbar = _interopRequireDefault(require("../components/cartbar"));
    
    var _cartpage = _interopRequireDefault(require("../components/cartpage"));
    
    var _productfilter = _interopRequireDefault(require("../components/productfilter"));
    
    var _anima = _interopRequireDefault(require("../components/anima"));
    
    var _slider = _interopRequireDefault(require("../components/slider"));
    
    var _fixedlist = _interopRequireDefault(require("../components/fixedlist"));
    
    var _cursors = _interopRequireDefault(require("../components/cursors"));
    
    var _thread = _interopRequireDefault(require("../components/thread"));
    
    var _scrollimages = _interopRequireDefault(require("../components/scrollimages"));
    
    var _stickyscroll = _interopRequireDefault(require("../components/stickyscroll"));
    
    var _timeline = _interopRequireDefault(require("../components/timeline"));
    
    var _bsparallax = _interopRequireDefault(require("../components/bsparallax"));
    
    var _bars = _interopRequireDefault(require("../components/bars"));
    
    var _ctaSlider = _interopRequireDefault(require("../components/cta-slider"));
    
    var _related = _interopRequireDefault(require("../components/related"));
    
    var _grammy = _interopRequireDefault(require("../components/grammy"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function registerComponents(site) {
      site.components.all.push(new _menu["default"](site));
      site.components.all.push(new _cart["default"](site));
      site.components.all.push(new _cartbar["default"](site));
      site.components.all.push(new _cartpage["default"](site));
      site.components.all.push(new _productfilter["default"](site));
      site.components.all.push(new _anima["default"](site));
      site.components.all.push(new _slider["default"](site));
      site.components.all.push(new _fixedlist["default"](site));
      site.components.all.push(new _cursors["default"](site));
      site.components.all.push(new _thread["default"](site));
      site.components.all.push(new _scrollimages["default"](site));
      site.components.all.push(new _stickyscroll["default"](site));
      site.components.all.push(new _timeline["default"](site));
      site.components.all.push(new _bsparallax["default"](site));
      site.components.all.push(new _bars["default"](site));
      site.components.all.push(new _related["default"](site));
      site.components.all.push(new _ctaSlider["default"](site));
      site.components.all.push(new _grammy["default"](site));
    }
    
    },{"../components/anima":1,"../components/bars":2,"../components/bsparallax":3,"../components/cart":4,"../components/cartbar":5,"../components/cartpage":6,"../components/cta-slider":8,"../components/cursors":9,"../components/fixedlist":10,"../components/grammy":11,"../components/menu":12,"../components/productfilter":13,"../components/related":14,"../components/scrollimages":15,"../components/slider":16,"../components/stickyscroll":17,"../components/thread":18,"../components/timeline":19}],23:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = initNavigation;
    
    var _swupPage = _interopRequireDefault(require("../utility/swup-page"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function initNavigation(site) {
      site.navigation = {
        site: site,
        debug: site.debug,
        callbacks: []
      };
      site.navigation.enter = enter.bind(site.navigation);
      site.navigation.exit = exit.bind(site.navigation);
      site.navigation.runCallbacks = runCallbacks.bind(site.navigation);
      site.navigation.showPreloader = showPreloader.bind(site.navigation);
      site.navigation.navigateTo = navigateTo.bind(site.navigation);
      site.navigation.registerNavigationCallback = registerNavigationCallback.bind(site.navigation);
      site.navigation.swup = (0, _swupPage["default"])(site.navigation);
    }
    
    function exit() {
      //console.log("exit", this.path);
      this.site.components.unmountPage(this.path);
    }
    
    function runCallbacks() {
      this.callbacks.forEach(function (callback, i) {
        if (callback) callback();
      });
    
      if (this.callback) {
        this.callback();
        this.callback = null;
      }
    }
    
    function enter(runCallbacks) {
      if (runCallbacks) this.runCallbacks();
      window.scrollTo(0, 0);
      this.path = parseLocation(); //console.log("enter", this.path);
    
      this.site.browser.lazy.update();
      this.site.components.mountPage(this.path);
    }
    
    function parseLocation(path) {
      if (!path) path = window.location.pathname;
      if (path == "/") return "home";
      if (/products/.test(path) && path != "/products") return "detail";
      if (path == "/products" || /collections/.test(path)) return "products";
      if (path == "/cart") return "cart";
      return "default";
    }
    
    function navigateTo(url) {
      var transition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var callback = arguments.length > 2 ? arguments[2] : undefined;
      if (callback) this.callback = callback;
      this.swup.loadPage({
        url: url,
        method: 'GET',
        customTransition: transition
      });
    }
    
    function registerNavigationCallback(callback) {
      this.callbacks.push(callback);
    }
    
    function showPreloader(site) {
      site.navigation.enter(false); // let preload = document.getElementById("preload");
      // let message = document.getElementById("preload-message");
      // setTimeout(()=> {
      //   message.classList.add("out");
      // }, 1200);
      // setTimeout(()=> {
    
      document.documentElement.classList.remove("is-animating");
      site.navigation.runCallbacks(); // }, 1700);
      // setTimeout(() => {
      //   preload.remove();
      // }, 10000);
    }
    
    },{"../utility/swup-page":32}],24:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = initSite;
    
    var _browserController = _interopRequireDefault(require("./browserController"));
    
    var _navigationController = _interopRequireDefault(require("./navigationController"));
    
    var _componentController = _interopRequireDefault(require("./componentController"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function initSite() {
      var site = {
        debug: true
      };
      site.browser = new _browserController["default"](site);
      (0, _navigationController["default"])(site);
      (0, _componentController["default"])(site);
      site.navigation.showPreloader(site);
    }
    
    },{"./browserController":20,"./componentController":21,"./navigationController":23}],25:[function(require,module,exports){
    "use strict";
    
    var _siteController = _interopRequireDefault(require("./core/siteController"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    window.addEventListener('DOMContentLoaded', _siteController["default"]);
    
    },{"./core/siteController":24}],26:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = init2dCanvas;
    
    function init2dCanvas(canvas, browser) {
      var bounds = canvas.getBoundingClientRect();
      var data = {
        canvas: canvas,
        ctx: canvas.getContext('2d'),
        browser: browser,
        // left: bounds.left,
        // top: bounds.top + browser.state.scrollTop,
        // width: bounds.width,
        // height: bounds.height,
        mouse: {
          x: 0,
          y: 0
        }
      };
      data.resize = sizeCanvas.bind(data);
      data.resize();
      browser.addToResizeLoop(data.resize);
      data.updateMouse = updateMouse.bind(data);
      return data;
    }
    
    function sizeCanvas() {
      this.cw = this.canvas.offsetWidth * this.browser.state.dpi;
      this.ch = this.canvas.offsetHeight * this.browser.state.dpi;
      this.canvas.width = this.cw;
      this.canvas.height = this.ch;
    }
    
    function updateMouse() {
      var bounds = this.canvas.getBoundingClientRect();
      var rate = this.browser.state.rate;
      var top = this.browser.state.mouse.yLag - bounds.top;
      var left = this.browser.state.mouse.xLag - bounds.left;
      this.mouse.x = left * this.browser.state.dpi;
      this.mouse.y = top * this.browser.state.dpi;
    }
    
    },{}],27:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getAjax = getAjax;
    exports.postAjax = postAjax;
    
    function getAjax(url, success) {
      var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
      xhr.open('GET', url);
    
      xhr.onreadystatechange = function () {
        if (xhr.readyState > 3 && xhr.status == 200) success(xhr.responseText);
      };
    
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.send();
      return xhr;
    }
    
    function postAjax(url, data, success) {
      var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
      xhr.open('POST', url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Accept", "application/json");
    
      xhr.onreadystatechange = function () {
        if (xhr.readyState > 3 && xhr.status == 200) {
          success(JSON.parse(xhr.responseText));
        }
      };
    
      var params = JSON.stringify(data);
      xhr.send(params);
      return xhr;
    }
    
    },{}],28:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = bezier;
    
    /**
     * https://github.com/gre/bezier-easing
     * BezierEasing - use bezier curve for transition easing function
     * by GaÃ«tan Renaudeau 2014 - 2015 â€“ MIT License
     */
    // These values are established by empiricism with tests (tradeoff: performance VS precision)
    var NEWTON_ITERATIONS = 4;
    var NEWTON_MIN_SLOPE = 0.001;
    var SUBDIVISION_PRECISION = 0.0000001;
    var SUBDIVISION_MAX_ITERATIONS = 10;
    var kSplineTableSize = 11;
    var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
    var float32ArraySupported = typeof Float32Array === 'function';
    
    function A(aA1, aA2) {
      return 1.0 - 3.0 * aA2 + 3.0 * aA1;
    }
    
    function B(aA1, aA2) {
      return 3.0 * aA2 - 6.0 * aA1;
    }
    
    function C(aA1) {
      return 3.0 * aA1;
    } // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
    
    
    function calcBezier(aT, aA1, aA2) {
      return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
    } // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
    
    
    function getSlope(aT, aA1, aA2) {
      return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
    }
    
    function binarySubdivide(aX, aA, aB, mX1, mX2) {
      var currentX,
          currentT,
          i = 0;
    
      do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
    
        if (currentX > 0.0) {
          aB = currentT;
        } else {
          aA = currentT;
        }
      } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
    
      return currentT;
    }
    
    function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
      for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
        var currentSlope = getSlope(aGuessT, mX1, mX2);
    
        if (currentSlope === 0.0) {
          return aGuessT;
        }
    
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
      }
    
      return aGuessT;
    }
    
    function LinearEasing(x) {
      return x;
    }
    
    function bezier(mX1, mY1, mX2, mY2) {
      if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
        throw new Error('bezier x values must be in [0, 1] range');
      }
    
      if (mX1 === mY1 && mX2 === mY2) {
        return LinearEasing;
      } // Precompute samples table
    
    
      var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
    
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    
      function getTForX(aX) {
        var intervalStart = 0.0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;
    
        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
          intervalStart += kSampleStepSize;
        }
    
        --currentSample; // Interpolate to provide an initial guess for t
    
        var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);
    
        if (initialSlope >= NEWTON_MIN_SLOPE) {
          return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        } else if (initialSlope === 0.0) {
          return guessForT;
        } else {
          return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
      }
    
      return function BezierEasing(x) {
        // Because JavaScript number are imprecise, we should guarantee the extremes are right.
        if (x === 0) {
          return 0;
        }
    
        if (x === 1) {
          return 1;
        }
    
        return calcBezier(getTForX(x), mY1, mY2);
      };
    }
    
    ;
    
    },{}],29:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = initCart;
    
    var _ajax = require("./ajax");
    
    function initCart(cartJson) {
      var cart = {
        ready: false,
        data: null
      };
      cart.init = init.bind(cart);
      cart.clear = clear.bind(cart);
      cart.add = add.bind(cart);
      cart.change = change.bind(cart);
      cart.refresh = refresh.bind(cart);
      cart.addNote = addNote.bind(cart);
      cart.addAttributes = addAttributes.bind(cart);
      cart.init();
      return cart;
    }
    
    function init() {
      var _this = this;
    
      (0, _ajax.postAjax)("/cart.js", {}, function (response) {
        _this.data = response;
        _this.ready = true; //console.log("Cart Inited", response, response.items.length)
      });
    }
    
    function refresh(callback) {
      var _this2 = this;
    
      (0, _ajax.postAjax)("/cart.js", {}, function (response) {
        _this2.data = response;
        if (callback) callback();
      });
    }
    
    function clear() {
      var _this3 = this;
    
      (0, _ajax.postAjax)("/cart/clear.js", {}, function (response) {
        _this3.data = response; //console.log("Cart Cleared", response, response.items.length)
      });
    }
    
    function add(id, quantity, properties, callback) {
      var _this4 = this;
    
      var data = {
        items: [{
          id: id,
          quantity: quantity,
          properties: properties
        }]
      };
      (0, _ajax.postAjax)('/cart/add.js', data, function (response) {
        //console.log("Added to Cart", response);
        _this4.refresh(callback);
      });
    }
    
    function change(line, quantity, callback) {
      var _this5 = this;
    
      var data = {
        id: line,
        quantity: parseInt(quantity)
      };
      (0, _ajax.postAjax)("/cart/change.js", data, function (response) {
        _this5.data = response; //console.log("Cart Changed", response, response.items.length)
    
        if (callback) callback();
      });
    }
    
    function addNote(note, callback) {
      var _this6 = this;
    
      (0, _ajax.postAjax)("/cart/update.js", {
        note: note
      }, function (response) {
        _this6.data = response; //console.log("Note Added", response, response.items.length);
    
        if (callback) callback();
      });
    }
    
    function addAttributes(attributes, callback) {
      var _this7 = this;
    
      var data = {
        attributes: attributes
      };
      (0, _ajax.postAjax)("/cart/update.js", data, function (response) {
        _this7.data = response;
        console.log("Attribute Added", response);
        if (callback) callback();
      });
    }
    
    },{"./ajax":27}],30:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getCookie = getCookie;
    exports.setCookie = setCookie;
    exports.deleteCookie = deleteCookie;
    
    function getCookie(name) {
      var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
      return v ? v[2] : null;
    }
    
    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
    function deleteCookie(name) {
      setCookie(name, '', -1);
    }
    
    },{}],31:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _bezier = _interopRequireDefault(require("./bezier"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    var _default = {
      // no easing, no acceleration
      linear: function linear(t) {
        return t;
      },
      // accelerating from zero velocity
      easeInQuad: function easeInQuad(t) {
        return t * t;
      },
      // decelerating to zero velocity
      easeOutQuad: function easeOutQuad(t) {
        return t * (2 - t);
      },
      // acceleration until halfway, then deceleration
      easeInOutQuad: function easeInOutQuad(t) {
        return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      },
      // accelerating from zero velocity
      easeInCubic: function easeInCubic(t) {
        return t * t * t;
      },
      // decelerating to zero velocity
      easeOutCubic: function easeOutCubic(t) {
        return --t * t * t + 1;
      },
      // acceleration until halfway, then deceleration
      easeInOutCubic: function easeInOutCubic(t) {
        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      },
      // accelerating from zero velocity
      easeInQuart: function easeInQuart(t) {
        return t * t * t * t;
      },
      // decelerating to zero velocity
      easeOutQuart: function easeOutQuart(t) {
        return 1 - --t * t * t * t;
      },
      // acceleration until halfway, then deceleration
      easeInOutQuart: function easeInOutQuart(t) {
        return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
      },
      // accelerating from zero velocity
      easeInQuint: function easeInQuint(t) {
        return t * t * t * t * t;
      },
      // decelerating to zero velocity
      easeOutQuint: function easeOutQuint(t) {
        return 1 + --t * t * t * t * t;
      },
      // acceleration until halfway, then deceleration
      easeInOutQuint: function easeInOutQuint(t) {
        return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
      },
      customEaseInOut: new _bezier["default"](0.255, 0.000, 0.675, 1.000),
      customEaseIn: new _bezier["default"](0.640, 0.000, 0.685, 0.255)
    };
    exports["default"] = _default;
    
    },{"./bezier":28}],32:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = initSwup;
    
    var _swup = _interopRequireDefault(require("swup"));
    
    var _preloadPlugin = _interopRequireDefault(require("@swup/preload-plugin"));
    
    var _scriptsPlugin = _interopRequireDefault(require("@swup/scripts-plugin"));
    
    var _gaPlugin = _interopRequireDefault(require("@swup/ga-plugin"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function initSwup(navigation) {
      var swup = null;
      var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
      var isEdge = /Edge/.test(navigator.userAgent);
    
      if (!isIE11 && !isEdge) {
        swup = new _swup["default"]({
          cache: false,
          containers: ['#main'],
          plugins: [new _preloadPlugin["default"](), new _scriptsPlugin["default"](), new _gaPlugin["default"]()]
        });
        document.addEventListener('swup:willReplaceContent', navigation.exit.bind(navigation));
        document.addEventListener('swup:contentReplaced', navigation.enter.bind(navigation));
      } else {
        document.querySelectorAll("a").forEach(function (el) {
          var href = el.getAttribute("href");
    
          if (href && href != "#" && href != "" && !/mailto/.test(href) && !/tel/.test(href) && el.getAttribute("target") != "_blank") {
            el.addEventListener("click", function () {
              document.documentElement.classList.add("is-animating");
            });
          }
        });
      }
    
      return swup;
    }
    
    },{"@swup/ga-plugin":33,"@swup/preload-plugin":35,"@swup/scripts-plugin":36,"swup":50}],33:[function(require,module,exports){
    'use strict';
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
    
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    
    var _plugin = require('@swup/plugin');
    
    var _plugin2 = _interopRequireDefault(_plugin);
    
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
    
      return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
    }
    
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
      }
    
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    
    var GaPlugin = function (_Plugin) {
      _inherits(GaPlugin, _Plugin);
    
      function GaPlugin() {
        var _ref;
    
        var _temp, _this, _ret;
    
        _classCallCheck(this, GaPlugin);
    
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
    
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GaPlugin.__proto__ || Object.getPrototypeOf(GaPlugin)).call.apply(_ref, [this].concat(args))), _this), _this.name = "GaPlugin", _temp), _possibleConstructorReturn(_this, _ret);
      }
    
      _createClass(GaPlugin, [{
        key: 'mount',
        value: function mount() {
          var _this2 = this;
    
          this.swup.on('contentReplaced', function (event) {
            if (typeof window.ga === 'function') {
              var title = document.title;
              var url = window.location.pathname + window.location.search;
              window.ga('set', 'title', title);
              window.ga('set', 'page', url);
              window.ga('send', 'pageview');
    
              _this2.swup.log('GA pageview (url \'' + url + '\').');
            } else {
              console.warn('GA is not loaded.');
            }
          });
        }
      }]);
    
      return GaPlugin;
    }(_plugin2["default"]);
    
    exports["default"] = GaPlugin;
    
    },{"@swup/plugin":34}],34:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
    
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    
    var Plugin = function () {
      function Plugin() {
        _classCallCheck(this, Plugin);
    
        this.isSwupPlugin = true;
      }
    
      _createClass(Plugin, [{
        key: "mount",
        value: function mount() {// this is mount method rewritten by class extending
          // and is executed when swup is enabled with plugin
        }
      }, {
        key: "unmount",
        value: function unmount() {// this is unmount method rewritten by class extending
          // and is executed when swup with plugin is disabled
        }
      }, {
        key: "_beforeMount",
        value: function _beforeMount() {// here for any future hidden auto init
        }
      }, {
        key: "_afterUnmount",
        value: function _afterUnmount() {} // here for any future hidden auto-cleanup
        // this is here so we can tell if plugin was created by extending this class
    
      }]);
    
      return Plugin;
    }();
    
    exports["default"] = Plugin;
    
    },{}],35:[function(require,module,exports){
    'use strict';
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
    
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    
    var _plugin = require('@swup/plugin');
    
    var _plugin2 = _interopRequireDefault(_plugin);
    
    var _delegate = require('delegate');
    
    var _delegate2 = _interopRequireDefault(_delegate);
    
    var _utils = require('swup/lib/utils');
    
    var _helpers = require('swup/lib/helpers');
    
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
    
      return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
    }
    
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
      }
    
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    
    var PreloadPlugin = function (_Plugin) {
      _inherits(PreloadPlugin, _Plugin);
    
      function PreloadPlugin() {
        var _ref;
    
        var _temp, _this, _ret;
    
        _classCallCheck(this, PreloadPlugin);
    
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
    
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PreloadPlugin.__proto__ || Object.getPrototypeOf(PreloadPlugin)).call.apply(_ref, [this].concat(args))), _this), _this.name = "PreloadPlugin", _this.onContentReplaced = function () {
          _this.swup.preloadPages();
        }, _this.onMouseover = function (event) {
          var swup = _this.swup;
          swup.triggerEvent('hoverLink', event);
          var link = new _helpers.Link(event.delegateTarget);
    
          if (link.getAddress() !== (0, _helpers.getCurrentUrl)() && !swup.cache.exists(link.getAddress()) && swup.preloadPromise == null) {
            swup.preloadPromise = swup.preloadPage(link.getAddress());
            swup.preloadPromise.route = link.getAddress();
            swup.preloadPromise["finally"](function () {
              swup.preloadPromise = null;
            });
          }
        }, _this.preloadPage = function (pathname) {
          var swup = _this.swup;
          var link = new _helpers.Link(pathname);
          return new Promise(function (resolve, reject) {
            if (link.getAddress() != (0, _helpers.getCurrentUrl)() && !swup.cache.exists(link.getAddress())) {
              (0, _helpers.fetch)({
                url: link.getAddress(),
                headers: swup.options.requestHeaders
              }, function (response) {
                if (response.status === 500) {
                  swup.triggerEvent('serverError');
                  reject();
                } else {
                  // get json data
                  var page = swup.getPageData(response);
    
                  if (page != null) {
                    page.url = link.getAddress();
                    swup.cache.cacheUrl(page, swup.options.debugMode);
                    swup.triggerEvent('pagePreloaded');
                  } else {
                    reject(link.getAddress());
                    return;
                  }
    
                  resolve(swup.cache.getPage(link.getAddress()));
                }
              });
            } else {
              resolve(swup.cache.getPage(link.getAddress()));
            }
          });
        }, _this.preloadPages = function () {
          (0, _utils.queryAll)('[data-swup-preload]').forEach(function (element) {
            _this.swup.preloadPage(element.href);
          });
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }
    
      _createClass(PreloadPlugin, [{
        key: 'mount',
        value: function mount() {
          var swup = this.swup;
          swup._handlers.pagePreloaded = [];
          swup._handlers.hoverLink = [];
          swup.preloadPage = this.preloadPage;
          swup.preloadPages = this.preloadPages; // register mouseover handler
    
          swup.delegatedListeners.mouseover = (0, _delegate2["default"])(document.body, swup.options.linkSelector, 'mouseover', this.onMouseover.bind(this)); // initial preload of page form links with [data-swup-preload]
    
          swup.preloadPages(); // do the same on every content replace
    
          swup.on('contentReplaced', this.onContentReplaced);
        }
      }, {
        key: 'unmount',
        value: function unmount() {
          var swup = this.swup;
          swup._handlers.pagePreloaded = null;
          swup._handlers.hoverLink = null;
          swup.preloadPage = null;
          swup.preloadPages = null;
          swup.delegatedListeners.mouseover.destroy();
          swup.off('contentReplaced', this.onContentReplaced);
        }
      }]);
    
      return PreloadPlugin;
    }(_plugin2["default"]);
    
    exports["default"] = PreloadPlugin;
    
    },{"@swup/plugin":34,"delegate":38,"swup/lib/helpers":47,"swup/lib/utils":61}],36:[function(require,module,exports){
    'use strict';
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
    
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    
      return target;
    };
    
    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
    
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    
    var _plugin = require('@swup/plugin');
    
    var _plugin2 = _interopRequireDefault(_plugin);
    
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
    
      return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
    }
    
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
      }
    
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    
    var arrayify = function arrayify(list) {
      return Array.prototype.slice.call(list);
    };
    
    var ScriptsPlugin = function (_Plugin) {
      _inherits(ScriptsPlugin, _Plugin);
    
      function ScriptsPlugin(options) {
        _classCallCheck(this, ScriptsPlugin);
    
        var _this = _possibleConstructorReturn(this, (ScriptsPlugin.__proto__ || Object.getPrototypeOf(ScriptsPlugin)).call(this));
    
        _this.name = 'ScriptsPlugin';
    
        _this.runScripts = function () {
          var scope = _this.options.head && _this.options.body ? document : _this.options.head ? document.head : document.body;
          var selector = _this.options.optin ? 'script[data-swup-reload-script]' : 'script:not([data-swup-ignore-script])';
          var scripts = arrayify(scope.querySelectorAll(selector));
          scripts.forEach(function (script) {
            return _this.runScript(script);
          });
    
          _this.swup.log('Executed ' + scripts.length + ' scripts.');
        };
    
        _this.runScript = function (originalElement) {
          var element = document.createElement('script');
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;
    
          try {
            for (var _iterator = arrayify(originalElement.attributes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _ref2 = _step.value;
              var name = _ref2.name,
                  value = _ref2.value;
              element.setAttribute(name, value);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"]) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
    
          element.textContent = originalElement.textContent;
          element.setAttribute('async', 'false');
          originalElement.replaceWith(element);
          return element;
        };
    
        var defaultOptions = {
          head: true,
          body: true,
          optin: false
        };
        _this.options = _extends({}, defaultOptions, options);
        return _this;
      }
    
      _createClass(ScriptsPlugin, [{
        key: 'mount',
        value: function mount() {
          this.swup.on('contentReplaced', this.runScripts);
        }
      }, {
        key: 'unmount',
        value: function unmount() {
          this.swup.off('contentReplaced', this.runScripts);
        }
      }]);
    
      return ScriptsPlugin;
    }(_plugin2["default"]);
    
    exports["default"] = ScriptsPlugin;
    
    },{"@swup/plugin":34}],37:[function(require,module,exports){
    "use strict";
    
    var DOCUMENT_NODE_TYPE = 9;
    /**
     * A polyfill for Element.matches()
     */
    
    if (typeof Element !== 'undefined' && !Element.prototype.matches) {
      var proto = Element.prototype;
      proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
    }
    /**
     * Finds the closest parent that matches a selector.
     *
     * @param {Element} element
     * @param {String} selector
     * @return {Function}
     */
    
    
    function closest(element, selector) {
      while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' && element.matches(selector)) {
          return element;
        }
    
        element = element.parentNode;
      }
    }
    
    module.exports = closest;
    
    },{}],38:[function(require,module,exports){
    "use strict";
    
    var closest = require('./closest');
    /**
     * Delegates event to a selector.
     *
     * @param {Element} element
     * @param {String} selector
     * @param {String} type
     * @param {Function} callback
     * @param {Boolean} useCapture
     * @return {Object}
     */
    
    
    function _delegate(element, selector, type, callback, useCapture) {
      var listenerFn = listener.apply(this, arguments);
      element.addEventListener(type, listenerFn, useCapture);
      return {
        destroy: function destroy() {
          element.removeEventListener(type, listenerFn, useCapture);
        }
      };
    }
    /**
     * Delegates event to a selector.
     *
     * @param {Element|String|Array} [elements]
     * @param {String} selector
     * @param {String} type
     * @param {Function} callback
     * @param {Boolean} useCapture
     * @return {Object}
     */
    
    
    function delegate(elements, selector, type, callback, useCapture) {
      // Handle the regular Element usage
      if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
      } // Handle Element-less usage, it defaults to global delegation
    
    
      if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
      } // Handle Selector-based usage
    
    
      if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
      } // Handle Array-like based usage
    
    
      return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
      });
    }
    /**
     * Finds closest match and invokes callback.
     *
     * @param {Element} element
     * @param {String} selector
     * @param {String} type
     * @param {Function} callback
     * @return {Function}
     */
    
    
    function listener(element, selector, type, callback) {
      return function (e) {
        e.delegateTarget = closest(e.target, selector);
    
        if (e.delegateTarget) {
          callback.call(element, e);
        }
      };
    }
    
    module.exports = delegate;
    
    },{"./closest":37}],39:[function(require,module,exports){
    "use strict";
    
    (function (global, factory) {
      if (typeof define === 'function' && define.amd) {
        define(['exports', 'module'], factory);
      } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module);
      } else {
        var mod = {
          exports: {}
        };
        factory(mod.exports, mod);
        global.Impetus = mod.exports;
      }
    })(void 0, function (exports, module) {
      'use strict';
    
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }
    
      var stopThresholdDefault = 0.3;
      var bounceDeceleration = 0.04;
      var bounceAcceleration = 0.11; // fixes weird safari 10 bug where preventDefault is prevented
      // @see https://github.com/metafizzy/flickity/issues/457#issuecomment-254501356
    
      window.addEventListener('touchmove', function () {});
    
      var Impetus = function Impetus(_ref) {
        var _ref$source = _ref.source;
        var sourceEl = _ref$source === undefined ? document : _ref$source;
        var updateCallback = _ref.update;
        var _ref$multiplier = _ref.multiplier;
        var multiplier = _ref$multiplier === undefined ? 1 : _ref$multiplier;
        var _ref$friction = _ref.friction;
        var friction = _ref$friction === undefined ? 0.92 : _ref$friction;
        var initialValues = _ref.initialValues;
        var boundX = _ref.boundX;
        var boundY = _ref.boundY;
        var _ref$bounce = _ref.bounce;
        var bounce = _ref$bounce === undefined ? true : _ref$bounce;
    
        _classCallCheck(this, Impetus);
    
        var boundXmin, boundXmax, boundYmin, boundYmax, pointerLastX, pointerLastY, pointerCurrentX, pointerCurrentY, pointerId, decVelX, decVelY;
        var targetX = 0;
        var targetY = 0;
        var stopThreshold = stopThresholdDefault * multiplier;
        var ticking = false;
        var pointerActive = false;
        var paused = false;
        var decelerating = false;
        var trackingPoints = [];
        /**
         * Initialize instance
         */
    
        (function init() {
          sourceEl = typeof sourceEl === 'string' ? document.querySelector(sourceEl) : sourceEl;
    
          if (!sourceEl) {
            throw new Error('IMPETUS: source not found.');
          }
    
          if (!updateCallback) {
            throw new Error('IMPETUS: update function not defined.');
          }
    
          if (initialValues) {
            if (initialValues[0]) {
              targetX = initialValues[0];
            }
    
            if (initialValues[1]) {
              targetY = initialValues[1];
            }
    
            callUpdateCallback();
          } // Initialize bound values
    
    
          if (boundX) {
            boundXmin = boundX[0];
            boundXmax = boundX[1];
          }
    
          if (boundY) {
            boundYmin = boundY[0];
            boundYmax = boundY[1];
          }
    
          sourceEl.addEventListener('touchstart', onDown);
          sourceEl.addEventListener('mousedown', onDown);
        })();
        /**
         * In edge cases where you may need to
         * reinstanciate Impetus on the same sourceEl
         * this will remove the previous event listeners
         */
    
    
        this.destroy = function () {
          sourceEl.removeEventListener('touchstart', onDown);
          sourceEl.removeEventListener('mousedown', onDown);
          cleanUpRuntimeEvents(); // however it won't "destroy" a reference
          // to instance if you'd like to do that
          // it returns null as a convinience.
          // ex: `instance = instance.destroy();`
    
          return null;
        };
        /**
         * Disable movement processing
         * @public
         */
    
    
        this.pause = function () {
          cleanUpRuntimeEvents();
          pointerActive = false;
          paused = true;
        };
        /**
         * Enable movement processing
         * @public
         */
    
    
        this.resume = function () {
          paused = false;
        };
        /**
         * Update the current x and y values
         * @public
         * @param {Number} x
         * @param {Number} y
         */
    
    
        this.setValues = function (x, y) {
          if (typeof x === 'number') {
            targetX = x;
          }
    
          if (typeof y === 'number') {
            targetY = y;
          }
        };
        /**
         * Update the multiplier value
         * @public
         * @param {Number} val
         */
    
    
        this.setMultiplier = function (val) {
          multiplier = val;
          stopThreshold = stopThresholdDefault * multiplier;
        };
        /**
         * Update boundX value
         * @public
         * @param {Number[]} boundX
         */
    
    
        this.setBoundX = function (boundX) {
          boundXmin = boundX[0];
          boundXmax = boundX[1];
        };
        /**
         * Update boundY value
         * @public
         * @param {Number[]} boundY
         */
    
    
        this.setBoundY = function (boundY) {
          boundYmin = boundY[0];
          boundYmax = boundY[1];
        };
        /**
         * Removes all events set by this instance during runtime
         */
    
    
        function cleanUpRuntimeEvents() {
          // Remove all touch events added during 'onDown' as well.
          document.removeEventListener('touchmove', onMove, getPassiveSupported() ? {
            passive: false
          } : false);
          document.removeEventListener('touchend', onUp);
          document.removeEventListener('touchcancel', stopTracking);
          document.removeEventListener('mousemove', onMove, getPassiveSupported() ? {
            passive: false
          } : false);
          document.removeEventListener('mouseup', onUp);
        }
        /**
         * Add all required runtime events
         */
    
    
        function addRuntimeEvents() {
          cleanUpRuntimeEvents(); // @see https://developers.google.com/web/updates/2017/01/scrolling-intervention
    
          document.addEventListener('touchmove', onMove, getPassiveSupported() ? {
            passive: false
          } : false);
          document.addEventListener('touchend', onUp);
          document.addEventListener('touchcancel', stopTracking);
          document.addEventListener('mousemove', onMove, getPassiveSupported() ? {
            passive: false
          } : false);
          document.addEventListener('mouseup', onUp);
        }
        /**
         * Executes the update function
         */
    
    
        function callUpdateCallback() {
          updateCallback.call(sourceEl, targetX, targetY);
        }
        /**
         * Creates a custom normalized event object from touch and mouse events
         * @param  {Event} ev
         * @returns {Object} with x, y, and id properties
         */
    
    
        function normalizeEvent(ev) {
          if (ev.type === 'touchmove' || ev.type === 'touchstart' || ev.type === 'touchend') {
            var touch = ev.targetTouches[0] || ev.changedTouches[0];
            return {
              x: touch.clientX,
              y: touch.clientY,
              id: touch.identifier
            };
          } else {
            // mouse events
            return {
              x: ev.clientX,
              y: ev.clientY,
              id: null
            };
          }
        }
        /**
         * Initializes movement tracking
         * @param  {Object} ev Normalized event
         */
    
    
        function onDown(ev) {
          var event = normalizeEvent(ev);
    
          if (!pointerActive && !paused) {
            pointerActive = true;
            decelerating = false;
            pointerId = event.id;
            pointerLastX = pointerCurrentX = event.x;
            pointerLastY = pointerCurrentY = event.y;
            trackingPoints = [];
            addTrackingPoint(pointerLastX, pointerLastY);
            addRuntimeEvents();
          }
        }
        /**
         * Handles move events
         * @param  {Object} ev Normalized event
         */
    
    
        function onMove(ev) {
          ev.preventDefault();
          var event = normalizeEvent(ev);
    
          if (pointerActive && event.id === pointerId) {
            pointerCurrentX = event.x;
            pointerCurrentY = event.y;
            addTrackingPoint(pointerLastX, pointerLastY);
            requestTick();
          }
        }
        /**
         * Handles up/end events
         * @param {Object} ev Normalized event
         */
    
    
        function onUp(ev) {
          var event = normalizeEvent(ev);
    
          if (pointerActive && event.id === pointerId) {
            stopTracking();
          }
        }
        /**
         * Stops movement tracking, starts animation
         */
    
    
        function stopTracking() {
          pointerActive = false;
          addTrackingPoint(pointerLastX, pointerLastY);
          startDecelAnim();
          cleanUpRuntimeEvents();
        }
        /**
         * Records movement for the last 100ms
         * @param {number} x
         * @param {number} y [description]
         */
    
    
        function addTrackingPoint(x, y) {
          var time = Date.now();
    
          while (trackingPoints.length > 0) {
            if (time - trackingPoints[0].time <= 100) {
              break;
            }
    
            trackingPoints.shift();
          }
    
          trackingPoints.push({
            x: x,
            y: y,
            time: time
          });
        }
        /**
         * Calculate new values, call update function
         */
    
    
        function updateAndRender() {
          var pointerChangeX = pointerCurrentX - pointerLastX;
          var pointerChangeY = pointerCurrentY - pointerLastY;
          targetX += pointerChangeX * multiplier;
          targetY += pointerChangeY * multiplier;
    
          if (bounce) {
            var diff = checkBounds();
    
            if (diff.x !== 0) {
              targetX -= pointerChangeX * dragOutOfBoundsMultiplier(diff.x) * multiplier;
            }
    
            if (diff.y !== 0) {
              targetY -= pointerChangeY * dragOutOfBoundsMultiplier(diff.y) * multiplier;
            }
          } else {
            checkBounds(true);
          }
    
          callUpdateCallback();
          pointerLastX = pointerCurrentX;
          pointerLastY = pointerCurrentY;
          ticking = false;
        }
        /**
         * Returns a value from around 0.5 to 1, based on distance
         * @param {Number} val
         */
    
    
        function dragOutOfBoundsMultiplier(val) {
          return 0.000005 * Math.pow(val, 2) + 0.0001 * val + 0.55;
        }
        /**
         * prevents animating faster than current framerate
         */
    
    
        function requestTick() {
          if (!ticking) {
            requestAnimFrame(updateAndRender);
          }
    
          ticking = true;
        }
        /**
         * Determine position relative to bounds
         * @param {Boolean} restrict Whether to restrict target to bounds
         */
    
    
        function checkBounds(restrict) {
          var xDiff = 0;
          var yDiff = 0;
    
          if (boundXmin !== undefined && targetX < boundXmin) {
            xDiff = boundXmin - targetX;
          } else if (boundXmax !== undefined && targetX > boundXmax) {
            xDiff = boundXmax - targetX;
          }
    
          if (boundYmin !== undefined && targetY < boundYmin) {
            yDiff = boundYmin - targetY;
          } else if (boundYmax !== undefined && targetY > boundYmax) {
            yDiff = boundYmax - targetY;
          }
    
          if (restrict) {
            if (xDiff !== 0) {
              targetX = xDiff > 0 ? boundXmin : boundXmax;
            }
    
            if (yDiff !== 0) {
              targetY = yDiff > 0 ? boundYmin : boundYmax;
            }
          }
    
          return {
            x: xDiff,
            y: yDiff,
            inBounds: xDiff === 0 && yDiff === 0
          };
        }
        /**
         * Initialize animation of values coming to a stop
         */
    
    
        function startDecelAnim() {
          var firstPoint = trackingPoints[0];
          var lastPoint = trackingPoints[trackingPoints.length - 1];
          var xOffset = lastPoint.x - firstPoint.x;
          var yOffset = lastPoint.y - firstPoint.y;
          var timeOffset = lastPoint.time - firstPoint.time;
          var D = timeOffset / 15 / multiplier;
          decVelX = xOffset / D || 0; // prevent NaN
    
          decVelY = yOffset / D || 0;
          var diff = checkBounds();
    
          if (Math.abs(decVelX) > 1 || Math.abs(decVelY) > 1 || !diff.inBounds) {
            decelerating = true;
            requestAnimFrame(stepDecelAnim);
          }
        }
        /**
         * Animates values slowing down
         */
    
    
        function stepDecelAnim() {
          if (!decelerating) {
            return;
          }
    
          decVelX *= friction;
          decVelY *= friction;
          targetX += decVelX;
          targetY += decVelY;
          var diff = checkBounds();
    
          if (Math.abs(decVelX) > stopThreshold || Math.abs(decVelY) > stopThreshold || !diff.inBounds) {
            if (bounce) {
              var reboundAdjust = 2.5;
    
              if (diff.x !== 0) {
                if (diff.x * decVelX <= 0) {
                  decVelX += diff.x * bounceDeceleration;
                } else {
                  var adjust = diff.x > 0 ? reboundAdjust : -reboundAdjust;
                  decVelX = (diff.x + adjust) * bounceAcceleration;
                }
              }
    
              if (diff.y !== 0) {
                if (diff.y * decVelY <= 0) {
                  decVelY += diff.y * bounceDeceleration;
                } else {
                  var adjust = diff.y > 0 ? reboundAdjust : -reboundAdjust;
                  decVelY = (diff.y + adjust) * bounceAcceleration;
                }
              }
            } else {
              if (diff.x !== 0) {
                if (diff.x > 0) {
                  targetX = boundXmin;
                } else {
                  targetX = boundXmax;
                }
    
                decVelX = 0;
              }
    
              if (diff.y !== 0) {
                if (diff.y > 0) {
                  targetY = boundYmin;
                } else {
                  targetY = boundYmax;
                }
    
                decVelY = 0;
              }
            }
    
            callUpdateCallback();
            requestAnimFrame(stepDecelAnim);
          } else {
            decelerating = false;
          }
        }
      }
      /**
       * @see http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
       */
      ;
    
      module.exports = Impetus;
    
      var requestAnimFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      }();
    
      function getPassiveSupported() {
        var passiveSupported = false;
    
        try {
          var options = Object.defineProperty({}, "passive", {
            get: function get() {
              passiveSupported = true;
            }
          });
          window.addEventListener("test", null, options);
        } catch (err) {}
    
        getPassiveSupported = function getPassiveSupported() {
          return passiveSupported;
        };
    
        return passiveSupported;
      }
    });
    
    },{}],40:[function(require,module,exports){
    "use strict";
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    /*!
     * in-view 0.6.1 - Get notified when a DOM element enters or exits the viewport.
     * Copyright (c) 2016 Cam Wiegert <cam@camwiegert.com> - https://camwiegert.github.io/in-view
     * License: MIT
     */
    !function (t, e) {
      "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.inView = e() : t.inView = e();
    }(void 0, function () {
      return function (t) {
        function e(r) {
          if (n[r]) return n[r].exports;
          var i = n[r] = {
            exports: {},
            id: r,
            loaded: !1
          };
          return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;
        }
    
        var n = {};
        return e.m = t, e.c = n, e.p = "", e(0);
      }([function (t, e, n) {
        "use strict";
    
        function r(t) {
          return t && t.__esModule ? t : {
            "default": t
          };
        }
    
        var i = n(2),
            o = r(i);
        t.exports = o["default"];
      }, function (t, e) {
        function n(t) {
          var e = _typeof(t);
    
          return null != t && ("object" == e || "function" == e);
        }
    
        t.exports = n;
      }, function (t, e, n) {
        "use strict";
    
        function r(t) {
          return t && t.__esModule ? t : {
            "default": t
          };
        }
    
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
    
        var i = n(9),
            o = r(i),
            u = n(3),
            f = r(u),
            s = n(4),
            c = function c() {
          if ("undefined" != typeof window) {
            var t = 100,
                e = ["scroll", "resize", "load"],
                n = {
              history: []
            },
                r = {
              offset: {},
              threshold: 0,
              test: s.inViewport
            },
                i = (0, o["default"])(function () {
              n.history.forEach(function (t) {
                n[t].check();
              });
            }, t);
            e.forEach(function (t) {
              return addEventListener(t, i);
            }), window.MutationObserver && addEventListener("DOMContentLoaded", function () {
              new MutationObserver(i).observe(document.body, {
                attributes: !0,
                childList: !0,
                subtree: !0
              });
            });
    
            var u = function u(t) {
              if ("string" == typeof t) {
                var e = [].slice.call(document.querySelectorAll(t));
                return n.history.indexOf(t) > -1 ? n[t].elements = e : (n[t] = (0, f["default"])(e, r), n.history.push(t)), n[t];
              }
            };
    
            return u.offset = function (t) {
              if (void 0 === t) return r.offset;
    
              var e = function e(t) {
                return "number" == typeof t;
              };
    
              return ["top", "right", "bottom", "left"].forEach(e(t) ? function (e) {
                return r.offset[e] = t;
              } : function (n) {
                return e(t[n]) ? r.offset[n] = t[n] : null;
              }), r.offset;
            }, u.threshold = function (t) {
              return "number" == typeof t && t >= 0 && t <= 1 ? r.threshold = t : r.threshold;
            }, u.test = function (t) {
              return "function" == typeof t ? r.test = t : r.test;
            }, u.is = function (t) {
              return r.test(t, r);
            }, u.offset(0), u;
          }
        };
    
        e["default"] = c();
      }, function (t, e) {
        "use strict";
    
        function n(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
    
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
    
        var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }
    
          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            i = function () {
          function t(e, r) {
            n(this, t), this.options = r, this.elements = e, this.current = [], this.handlers = {
              enter: [],
              exit: []
            }, this.singles = {
              enter: [],
              exit: []
            };
          }
    
          return r(t, [{
            key: "check",
            value: function value() {
              var t = this;
              return this.elements.forEach(function (e) {
                var n = t.options.test(e, t.options),
                    r = t.current.indexOf(e),
                    i = r > -1,
                    o = n && !i,
                    u = !n && i;
                o && (t.current.push(e), t.emit("enter", e)), u && (t.current.splice(r, 1), t.emit("exit", e));
              }), this;
            }
          }, {
            key: "on",
            value: function value(t, e) {
              return this.handlers[t].push(e), this;
            }
          }, {
            key: "once",
            value: function value(t, e) {
              return this.singles[t].unshift(e), this;
            }
          }, {
            key: "emit",
            value: function value(t, e) {
              for (; this.singles[t].length;) {
                this.singles[t].pop()(e);
              }
    
              for (var n = this.handlers[t].length; --n > -1;) {
                this.handlers[t][n](e);
              }
    
              return this;
            }
          }]), t;
        }();
    
        e["default"] = function (t, e) {
          return new i(t, e);
        };
      }, function (t, e) {
        "use strict";
    
        function n(t, e) {
          var n = t.getBoundingClientRect(),
              r = n.top,
              i = n.right,
              o = n.bottom,
              u = n.left,
              f = n.width,
              s = n.height,
              c = {
            t: o,
            r: window.innerWidth - u,
            b: window.innerHeight - r,
            l: i
          },
              a = {
            x: e.threshold * f,
            y: e.threshold * s
          };
          return c.t > e.offset.top + a.y && c.r > e.offset.right + a.x && c.b > e.offset.bottom + a.y && c.l > e.offset.left + a.x;
        }
    
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.inViewport = n;
      }, function (t, e) {
        (function (e) {
          var n = "object" == _typeof(e) && e && e.Object === Object && e;
          t.exports = n;
        }).call(e, function () {
          return this;
        }());
      }, function (t, e, n) {
        var r = n(5),
            i = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
            o = r || i || Function("return this")();
        t.exports = o;
      }, function (t, e, n) {
        function r(t, e, n) {
          function r(e) {
            var n = x,
                r = m;
            return x = m = void 0, E = e, w = t.apply(r, n);
          }
    
          function a(t) {
            return E = t, j = setTimeout(h, e), M ? r(t) : w;
          }
    
          function l(t) {
            var n = t - O,
                r = t - E,
                i = e - n;
            return _ ? c(i, g - r) : i;
          }
    
          function d(t) {
            var n = t - O,
                r = t - E;
            return void 0 === O || n >= e || n < 0 || _ && r >= g;
          }
    
          function h() {
            var t = o();
            return d(t) ? p(t) : void (j = setTimeout(h, l(t)));
          }
    
          function p(t) {
            return j = void 0, T && x ? r(t) : (x = m = void 0, w);
          }
    
          function v() {
            void 0 !== j && clearTimeout(j), E = 0, x = O = m = j = void 0;
          }
    
          function y() {
            return void 0 === j ? w : p(o());
          }
    
          function b() {
            var t = o(),
                n = d(t);
    
            if (x = arguments, m = this, O = t, n) {
              if (void 0 === j) return a(O);
              if (_) return j = setTimeout(h, e), r(O);
            }
    
            return void 0 === j && (j = setTimeout(h, e)), w;
          }
    
          var x,
              m,
              g,
              w,
              j,
              O,
              E = 0,
              M = !1,
              _ = !1,
              T = !0;
    
          if ("function" != typeof t) throw new TypeError(f);
          return e = u(e) || 0, i(n) && (M = !!n.leading, _ = "maxWait" in n, g = _ ? s(u(n.maxWait) || 0, e) : g, T = "trailing" in n ? !!n.trailing : T), b.cancel = v, b.flush = y, b;
        }
    
        var i = n(1),
            o = n(8),
            u = n(10),
            f = "Expected a function",
            s = Math.max,
            c = Math.min;
        t.exports = r;
      }, function (t, e, n) {
        var r = n(6),
            i = function i() {
          return r.Date.now();
        };
    
        t.exports = i;
      }, function (t, e, n) {
        function r(t, e, n) {
          var r = !0,
              f = !0;
          if ("function" != typeof t) throw new TypeError(u);
          return o(n) && (r = "leading" in n ? !!n.leading : r, f = "trailing" in n ? !!n.trailing : f), i(t, e, {
            leading: r,
            maxWait: e,
            trailing: f
          });
        }
    
        var i = n(7),
            o = n(1),
            u = "Expected a function";
        t.exports = r;
      }, function (t, e) {
        function n(t) {
          return t;
        }
    
        t.exports = n;
      }]);
    });
    
    },{}],41:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
    
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    
    var Link = function () {
      function Link(elementOrUrl) {
        _classCallCheck(this, Link);
    
        if (elementOrUrl instanceof Element || elementOrUrl instanceof SVGElement) {
          this.link = elementOrUrl;
        } else {
          this.link = document.createElement('a');
          this.link.href = elementOrUrl;
        }
      }
    
      _createClass(Link, [{
        key: 'getPath',
        value: function getPath() {
          var path = this.link.pathname;
    
          if (path[0] !== '/') {
            path = '/' + path;
          }
    
          return path;
        }
      }, {
        key: 'getAddress',
        value: function getAddress() {
          var path = this.link.pathname + this.link.search;
    
          if (this.link.getAttribute('xlink:href')) {
            path = this.link.getAttribute('xlink:href');
          }
    
          if (path[0] !== '/') {
            path = '/' + path;
          }
    
          return path;
        }
      }, {
        key: 'getHash',
        value: function getHash() {
          return this.link.hash;
        }
      }]);
    
      return Link;
    }();
    
    exports["default"] = Link;
    
    },{}],42:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var classify = function classify(text) {
      var output = text.toString().toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
      .replace(/\//g, '-') // Replace / with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
    
      if (output[0] === '/') output = output.splice(1);
      if (output === '') output = 'homepage';
      return output;
    };
    
    exports["default"] = classify;
    
    },{}],43:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var createHistoryRecord = function createHistoryRecord(url) {
      window.history.pushState({
        url: url || window.location.href.split(window.location.hostname)[1],
        random: Math.random(),
        source: 'swup'
      }, document.getElementsByTagName('title')[0].innerText, url || window.location.href.split(window.location.hostname)[1]);
    };
    
    exports["default"] = createHistoryRecord;
    
    },{}],44:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
    
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    
      return target;
    };
    
    var fetch = function fetch(setOptions) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var defaults = {
        url: window.location.pathname + window.location.search,
        method: 'GET',
        data: null,
        headers: {}
      };
    
      var options = _extends({}, defaults, setOptions);
    
      var request = new XMLHttpRequest();
    
      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (request.status !== 500) {
            callback(request);
          } else {
            callback(request);
          }
        }
      };
    
      request.open(options.method, options.url, true);
      Object.keys(options.headers).forEach(function (key) {
        request.setRequestHeader(key, options.headers[key]);
      });
      request.send(options.data);
      return request;
    };
    
    exports["default"] = fetch;
    
    },{}],45:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var getCurrentUrl = function getCurrentUrl() {
      return window.location.pathname + window.location.search;
    };
    
    exports["default"] = getCurrentUrl;
    
    },{}],46:[function(require,module,exports){
    'use strict';
    
    function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
      return _typeof2(obj);
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
    
    var _utils = require('../utils');
    
    var getDataFromHtml = function getDataFromHtml(html, containers) {
      var fakeDom = document.createElement('html');
      fakeDom.innerHTML = html;
      var blocks = [];
    
      var _loop = function _loop(i) {
        if (fakeDom.querySelector(containers[i]) == null) {
          // page in invalid
          return {
            v: null
          };
        } else {
          (0, _utils.queryAll)(containers[i]).forEach(function (item, index) {
            (0, _utils.queryAll)(containers[i], fakeDom)[index].setAttribute('data-swup', blocks.length); // marks element with data-swup
    
            blocks.push((0, _utils.queryAll)(containers[i], fakeDom)[index].outerHTML);
          });
        }
      };
    
      for (var i = 0; i < containers.length; i++) {
        var _ret = _loop(i);
    
        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }
    
      var json = {
        title: fakeDom.querySelector('title').innerText,
        pageClass: fakeDom.querySelector('body').className,
        originalContent: html,
        blocks: blocks
      }; // to prevent memory leaks
    
      fakeDom.innerHTML = '';
      fakeDom = null;
      return json;
    };
    
    exports["default"] = getDataFromHtml;
    
    },{"../utils":61}],47:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Link = exports.markSwupElements = exports.getCurrentUrl = exports.transitionEnd = exports.fetch = exports.getDataFromHtml = exports.createHistoryRecord = exports.classify = undefined;
    
    var _classify = require('./classify');
    
    var _classify2 = _interopRequireDefault(_classify);
    
    var _createHistoryRecord = require('./createHistoryRecord');
    
    var _createHistoryRecord2 = _interopRequireDefault(_createHistoryRecord);
    
    var _getDataFromHtml = require('./getDataFromHtml');
    
    var _getDataFromHtml2 = _interopRequireDefault(_getDataFromHtml);
    
    var _fetch = require('./fetch');
    
    var _fetch2 = _interopRequireDefault(_fetch);
    
    var _transitionEnd = require('./transitionEnd');
    
    var _transitionEnd2 = _interopRequireDefault(_transitionEnd);
    
    var _getCurrentUrl = require('./getCurrentUrl');
    
    var _getCurrentUrl2 = _interopRequireDefault(_getCurrentUrl);
    
    var _markSwupElements = require('./markSwupElements');
    
    var _markSwupElements2 = _interopRequireDefault(_markSwupElements);
    
    var _Link = require('./Link');
    
    var _Link2 = _interopRequireDefault(_Link);
    
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    
    var classify = exports.classify = _classify2["default"];
    var createHistoryRecord = exports.createHistoryRecord = _createHistoryRecord2["default"];
    var getDataFromHtml = exports.getDataFromHtml = _getDataFromHtml2["default"];
    var fetch = exports.fetch = _fetch2["default"];
    var transitionEnd = exports.transitionEnd = _transitionEnd2["default"];
    var getCurrentUrl = exports.getCurrentUrl = _getCurrentUrl2["default"];
    var markSwupElements = exports.markSwupElements = _markSwupElements2["default"];
    var Link = exports.Link = _Link2["default"];
    
    },{"./Link":41,"./classify":42,"./createHistoryRecord":43,"./fetch":44,"./getCurrentUrl":45,"./getDataFromHtml":46,"./markSwupElements":48,"./transitionEnd":49}],48:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _utils = require('../utils');
    
    var markSwupElements = function markSwupElements(element, containers) {
      var blocks = 0;
    
      var _loop = function _loop(i) {
        if (element.querySelector(containers[i]) == null) {
          console.warn('Element ' + containers[i] + ' is not in current page.');
        } else {
          (0, _utils.queryAll)(containers[i]).forEach(function (item, index) {
            (0, _utils.queryAll)(containers[i], element)[index].setAttribute('data-swup', blocks);
            blocks++;
          });
        }
      };
    
      for (var i = 0; i < containers.length; i++) {
        _loop(i);
      }
    };
    
    exports["default"] = markSwupElements;
    
    },{"../utils":61}],49:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var transitionEnd = function transitionEnd() {
      var el = document.createElement('div');
      var transEndEventNames = {
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'transitionend',
        OTransition: 'oTransitionEnd otransitionend',
        transition: 'transitionend'
      };
    
      for (var name in transEndEventNames) {
        if (el.style[name] !== undefined) {
          return transEndEventNames[name];
        }
      }
    
      return false;
    };
    
    exports["default"] = transitionEnd;
    
    },{}],50:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
    
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    
      return target;
    };
    
    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
    
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }(); // modules
    
    
    var _delegate = require('delegate');
    
    var _delegate2 = _interopRequireDefault(_delegate);
    
    var _Cache = require('./modules/Cache');
    
    var _Cache2 = _interopRequireDefault(_Cache);
    
    var _loadPage = require('./modules/loadPage');
    
    var _loadPage2 = _interopRequireDefault(_loadPage);
    
    var _renderPage = require('./modules/renderPage');
    
    var _renderPage2 = _interopRequireDefault(_renderPage);
    
    var _triggerEvent = require('./modules/triggerEvent');
    
    var _triggerEvent2 = _interopRequireDefault(_triggerEvent);
    
    var _on = require('./modules/on');
    
    var _on2 = _interopRequireDefault(_on);
    
    var _off = require('./modules/off');
    
    var _off2 = _interopRequireDefault(_off);
    
    var _updateTransition = require('./modules/updateTransition');
    
    var _updateTransition2 = _interopRequireDefault(_updateTransition);
    
    var _getAnimationPromises = require('./modules/getAnimationPromises');
    
    var _getAnimationPromises2 = _interopRequireDefault(_getAnimationPromises);
    
    var _getPageData = require('./modules/getPageData');
    
    var _getPageData2 = _interopRequireDefault(_getPageData);
    
    var _plugins = require('./modules/plugins');
    
    var _utils = require('./utils');
    
    var _helpers = require('./helpers');
    
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    
    var Swup = function () {
      function Swup(setOptions) {
        _classCallCheck(this, Swup); // default options
    
    
        var defaults = {
          animateHistoryBrowsing: false,
          animationSelector: '[class*="transition-"]',
          linkSelector: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
          cache: true,
          containers: ['#swup'],
          requestHeaders: {
            'X-Requested-With': 'swup',
            Accept: 'text/html, application/xhtml+xml'
          },
          plugins: [],
          skipPopStateHandling: function skipPopStateHandling(event) {
            return !(event.state && event.state.source === 'swup');
          }
        }; // merge options
    
        var options = _extends({}, defaults, setOptions); // handler arrays
    
    
        this._handlers = {
          animationInDone: [],
          animationInStart: [],
          animationOutDone: [],
          animationOutStart: [],
          animationSkipped: [],
          clickLink: [],
          contentReplaced: [],
          disabled: [],
          enabled: [],
          openPageInNewTab: [],
          pageLoaded: [],
          pageRetrievedFromCache: [],
          pageView: [],
          popState: [],
          samePage: [],
          samePageWithHash: [],
          serverError: [],
          transitionStart: [],
          transitionEnd: [],
          willReplaceContent: []
        }; // variable for id of element to scroll to after render
    
        this.scrollToElement = null; // variable for promise used for preload, so no new loading of the same page starts while page is loading
    
        this.preloadPromise = null; // variable for save options
    
        this.options = options; // variable for plugins array
    
        this.plugins = []; // variable for current transition object
    
        this.transition = {}; // variable for keeping event listeners from "delegate"
    
        this.delegatedListeners = {}; // so we are able to remove the listener
    
        this.boundPopStateHandler = this.popStateHandler.bind(this); // make modules accessible in instance
    
        this.cache = new _Cache2["default"]();
        this.cache.swup = this;
        this.loadPage = _loadPage2["default"];
        this.renderPage = _renderPage2["default"];
        this.triggerEvent = _triggerEvent2["default"];
        this.on = _on2["default"];
        this.off = _off2["default"];
        this.updateTransition = _updateTransition2["default"];
        this.getAnimationPromises = _getAnimationPromises2["default"];
        this.getPageData = _getPageData2["default"];
    
        this.log = function () {}; // here so it can be used by plugins
    
    
        this.use = _plugins.use;
        this.unuse = _plugins.unuse;
        this.findPlugin = _plugins.findPlugin; // enable swup
    
        this.enable();
      }
    
      _createClass(Swup, [{
        key: 'enable',
        value: function enable() {
          var _this = this; // check for Promise support
    
    
          if (typeof Promise === 'undefined') {
            console.warn('Promise is not supported');
            return;
          } // add event listeners
    
    
          this.delegatedListeners.click = (0, _delegate2["default"])(document, this.options.linkSelector, 'click', this.linkClickHandler.bind(this));
          window.addEventListener('popstate', this.boundPopStateHandler); // initial save to cache
    
          var page = (0, _helpers.getDataFromHtml)(document.documentElement.outerHTML, this.options.containers);
          page.url = page.responseURL = (0, _helpers.getCurrentUrl)();
    
          if (this.options.cache) {
            this.cache.cacheUrl(page);
          } // mark swup blocks in html
    
    
          (0, _helpers.markSwupElements)(document.documentElement, this.options.containers); // mount plugins
    
          this.options.plugins.forEach(function (plugin) {
            _this.use(plugin);
          }); // modify initial history record
    
          window.history.replaceState(Object.assign({}, window.history.state, {
            url: window.location.href,
            random: Math.random(),
            source: 'swup'
          }), document.title, window.location.href); // trigger enabled event
    
          this.triggerEvent('enabled'); // add swup-enabled class to html tag
    
          document.documentElement.classList.add('swup-enabled'); // trigger page view event
    
          this.triggerEvent('pageView');
        }
      }, {
        key: 'destroy',
        value: function destroy() {
          var _this2 = this; // remove delegated listeners
    
    
          this.delegatedListeners.click.destroy(); // remove popstate listener
    
          window.removeEventListener('popstate', this.boundPopStateHandler); // empty cache
    
          this.cache.empty(); // unmount plugins
    
          this.options.plugins.forEach(function (plugin) {
            _this2.unuse(plugin);
          }); // remove swup data atributes from blocks
    
          (0, _utils.queryAll)('[data-swup]').forEach(function (element) {
            element.removeAttribute('data-swup');
          }); // remove handlers
    
          this.off(); // trigger disable event
    
          this.triggerEvent('disabled'); // remove swup-enabled class from html tag
    
          document.documentElement.classList.remove('swup-enabled');
        }
      }, {
        key: 'linkClickHandler',
        value: function linkClickHandler(event) {
          // no control key pressed
          if (!event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
            // index of pressed button needs to be checked because Firefox triggers click on all mouse buttons
            if (event.button === 0) {
              this.triggerEvent('clickLink', event);
              event.preventDefault();
              var link = new _helpers.Link(event.delegateTarget);
    
              if (link.getAddress() == (0, _helpers.getCurrentUrl)() || link.getAddress() == '') {
                // link to the same URL
                if (link.getHash() != '') {
                  // link to the same URL with hash
                  this.triggerEvent('samePageWithHash', event);
                  var element = document.querySelector(link.getHash());
    
                  if (element != null) {
                    history.replaceState({
                      url: link.getAddress() + link.getHash(),
                      random: Math.random(),
                      source: 'swup'
                    }, document.title, link.getAddress() + link.getHash());
                  } else {
                    // referenced element not found
                    console.warn('Element for offset not found (' + link.getHash() + ')');
                  }
                } else {
                  // link to the same URL without hash
                  this.triggerEvent('samePage', event);
                }
              } else {
                // link to different url
                if (link.getHash() != '') {
                  this.scrollToElement = link.getHash();
                } // get custom transition from data
    
    
                var customTransition = event.delegateTarget.getAttribute('data-swup-transition'); // load page
    
                this.loadPage({
                  url: link.getAddress(),
                  customTransition: customTransition
                }, false);
              }
            }
          } else {
            // open in new tab (do nothing)
            this.triggerEvent('openPageInNewTab', event);
          }
        }
      }, {
        key: 'popStateHandler',
        value: function popStateHandler(event) {
          if (this.options.skipPopStateHandling(event)) return;
          var link = new _helpers.Link(event.state ? event.state.url : window.location.pathname);
    
          if (link.getHash() !== '') {
            this.scrollToElement = link.getHash();
          } else {
            event.preventDefault();
          }
    
          this.triggerEvent('popState', event);
          this.loadPage({
            url: link.getAddress()
          }, event);
        }
      }]);
    
      return Swup;
    }();
    
    exports["default"] = Swup;
    
    },{"./helpers":47,"./modules/Cache":51,"./modules/getAnimationPromises":52,"./modules/getPageData":53,"./modules/loadPage":54,"./modules/off":55,"./modules/on":56,"./modules/plugins":57,"./modules/renderPage":58,"./modules/triggerEvent":59,"./modules/updateTransition":60,"./utils":61,"delegate":63}],51:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
    
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    
    var Cache = exports.Cache = function () {
      function Cache() {
        _classCallCheck(this, Cache);
    
        this.pages = {};
        this.last = null;
      }
    
      _createClass(Cache, [{
        key: 'cacheUrl',
        value: function cacheUrl(page) {
          if (page.url in this.pages === false) {
            this.pages[page.url] = page;
          }
    
          this.last = this.pages[page.url];
          this.swup.log('Cache (' + Object.keys(this.pages).length + ')', this.pages);
        }
      }, {
        key: 'getPage',
        value: function getPage(url) {
          return this.pages[url];
        }
      }, {
        key: 'getCurrentPage',
        value: function getCurrentPage() {
          return this.getPage(window.location.pathname + window.location.search);
        }
      }, {
        key: 'exists',
        value: function exists(url) {
          return url in this.pages;
        }
      }, {
        key: 'empty',
        value: function empty() {
          this.pages = {};
          this.last = null;
          this.swup.log('Cache cleared');
        }
      }, {
        key: 'remove',
        value: function remove(url) {
          delete this.pages[url];
        }
      }]);
    
      return Cache;
    }();
    
    exports["default"] = Cache;
    
    },{}],52:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _utils = require('../utils');
    
    var _helpers = require('../helpers');
    
    var getAnimationPromises = function getAnimationPromises() {
      var promises = [];
      var animatedElements = (0, _utils.queryAll)(this.options.animationSelector);
      animatedElements.forEach(function (element) {
        var promise = new Promise(function (resolve) {
          element.addEventListener((0, _helpers.transitionEnd)(), function (event) {
            if (element == event.target) {
              resolve();
            }
          });
        });
        promises.push(promise);
      });
      return promises;
    };
    
    exports["default"] = getAnimationPromises;
    
    },{"../helpers":47,"../utils":61}],53:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _helpers = require('../helpers');
    
    var getPageData = function getPageData(request) {
      // this method can be replaced in case other content than html is expected to be received from server
      // this function should always return {title, pageClass, originalContent, blocks, responseURL}
      // in case page has invalid structure - return null
      var html = request.responseText;
      var pageObject = (0, _helpers.getDataFromHtml)(html, this.options.containers);
    
      if (pageObject) {
        pageObject.responseURL = request.responseURL ? request.responseURL : window.location.href;
      } else {
        console.warn('Received page is invalid.');
        return null;
      }
    
      return pageObject;
    };
    
    exports["default"] = getPageData;
    
    },{"../helpers":47}],54:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
    
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    
      return target;
    };
    
    var _helpers = require('../helpers');
    
    var loadPage = function loadPage(data, popstate) {
      var _this = this; // create array for storing animation promises
    
    
      var animationPromises = [],
          xhrPromise = void 0;
    
      var animateOut = function animateOut() {
        _this.triggerEvent('animationOutStart'); // handle classes
    
    
        document.documentElement.classList.add('is-changing');
        document.documentElement.classList.add('is-leaving');
        document.documentElement.classList.add('is-animating');
    
        if (popstate) {
          document.documentElement.classList.add('is-popstate');
        }
    
        document.documentElement.classList.add('to-' + (0, _helpers.classify)(data.url)); // animation promise stuff
    
        animationPromises = _this.getAnimationPromises('out');
        Promise.all(animationPromises).then(function () {
          _this.triggerEvent('animationOutDone');
        }); // create history record if this is not a popstate call
    
        if (!popstate) {
          // create pop element with or without anchor
          var state = void 0;
    
          if (_this.scrollToElement != null) {
            state = data.url + _this.scrollToElement;
          } else {
            state = data.url;
          }
    
          (0, _helpers.createHistoryRecord)(state);
        }
      };
    
      this.triggerEvent('transitionStart', popstate); // set transition object
    
      if (data.customTransition != null) {
        this.updateTransition(window.location.pathname, data.url, data.customTransition);
        document.documentElement.classList.add('to-' + (0, _helpers.classify)(data.customTransition));
      } else {
        this.updateTransition(window.location.pathname, data.url);
      } // start/skip animation
    
    
      if (!popstate || this.options.animateHistoryBrowsing) {
        animateOut();
      } else {
        this.triggerEvent('animationSkipped');
      } // start/skip loading of page
    
    
      if (this.cache.exists(data.url)) {
        xhrPromise = new Promise(function (resolve) {
          resolve();
        });
        this.triggerEvent('pageRetrievedFromCache');
      } else {
        if (!this.preloadPromise || this.preloadPromise.route != data.url) {
          xhrPromise = new Promise(function (resolve, reject) {
            (0, _helpers.fetch)(_extends({}, data, {
              headers: _this.options.requestHeaders
            }), function (response) {
              if (response.status === 500) {
                _this.triggerEvent('serverError');
    
                reject(data.url);
                return;
              } else {
                // get json data
                var page = _this.getPageData(response);
    
                if (page != null) {
                  page.url = data.url;
                } else {
                  reject(data.url);
                  return;
                } // render page
    
    
                _this.cache.cacheUrl(page);
    
                _this.triggerEvent('pageLoaded');
              }
    
              resolve();
            });
          });
        } else {
          xhrPromise = this.preloadPromise;
        }
      } // when everything is ready, handle the outcome
    
    
      Promise.all(animationPromises.concat([xhrPromise])).then(function () {
        // render page
        _this.renderPage(_this.cache.getPage(data.url), popstate);
    
        _this.preloadPromise = null;
      })["catch"](function (errorUrl) {
        // rewrite the skipPopStateHandling function to redirect manually when the history.go is processed
        _this.options.skipPopStateHandling = function () {
          window.location = errorUrl;
          return true;
        }; // go back to the actual page were still at
    
    
        window.history.go(-1);
      });
    };
    
    exports["default"] = loadPage;
    
    },{"../helpers":47}],55:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var off = function off(event, handler) {
      var _this = this;
    
      if (event != null) {
        if (handler != null) {
          if (this._handlers[event] && this._handlers[event].filter(function (savedHandler) {
            return savedHandler === handler;
          }).length) {
            var toRemove = this._handlers[event].filter(function (savedHandler) {
              return savedHandler === handler;
            })[0];
    
            var index = this._handlers[event].indexOf(toRemove);
    
            if (index > -1) {
              this._handlers[event].splice(index, 1);
            }
          } else {
            console.warn("Handler for event '" + event + "' no found.");
          }
        } else {
          this._handlers[event] = [];
        }
      } else {
        Object.keys(this._handlers).forEach(function (keys) {
          _this._handlers[keys] = [];
        });
      }
    };
    
    exports["default"] = off;
    
    },{}],56:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var on = function on(event, handler) {
      if (this._handlers[event]) {
        this._handlers[event].push(handler);
      } else {
        console.warn("Unsupported event " + event + ".");
      }
    };
    
    exports["default"] = on;
    
    },{}],57:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var use = exports.use = function use(plugin) {
      if (!plugin.isSwupPlugin) {
        console.warn('Not swup plugin instance ' + plugin + '.');
        return;
      }
    
      this.plugins.push(plugin);
      plugin.swup = this;
    
      if (typeof plugin._beforeMount === 'function') {
        plugin._beforeMount();
      }
    
      plugin.mount();
      return this.plugins;
    };
    
    var unuse = exports.unuse = function unuse(plugin) {
      var pluginReference = void 0;
    
      if (typeof plugin === 'string') {
        pluginReference = this.plugins.find(function (p) {
          return plugin === p.name;
        });
      } else {
        pluginReference = plugin;
      }
    
      if (!pluginReference) {
        console.warn('No such plugin.');
        return;
      }
    
      pluginReference.unmount();
    
      if (typeof pluginReference._afterUnmount === 'function') {
        pluginReference._afterUnmount();
      }
    
      var index = this.plugins.indexOf(pluginReference);
      this.plugins.splice(index, 1);
      return this.plugins;
    };
    
    var findPlugin = exports.findPlugin = function findPlugin(pluginName) {
      return this.plugins.find(function (p) {
        return pluginName === p.name;
      });
    };
    
    },{}],58:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
    
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    
      return target;
    };
    
    var _utils = require('../utils');
    
    var _helpers = require('../helpers');
    
    var renderPage = function renderPage(page, popstate) {
      var _this = this;
    
      document.documentElement.classList.remove('is-leaving'); // replace state in case the url was redirected
    
      var link = new _helpers.Link(page.responseURL);
    
      if (window.location.pathname !== link.getPath()) {
        window.history.replaceState({
          url: link.getPath(),
          random: Math.random(),
          source: 'swup'
        }, document.title, link.getPath()); // save new record for redirected url
    
        this.cache.cacheUrl(_extends({}, page, {
          url: link.getPath()
        }));
      } // only add for non-popstate transitions
    
    
      if (!popstate || this.options.animateHistoryBrowsing) {
        document.documentElement.classList.add('is-rendering');
      }
    
      this.triggerEvent('willReplaceContent', popstate); // replace blocks
    
      for (var i = 0; i < page.blocks.length; i++) {
        document.body.querySelector('[data-swup="' + i + '"]').outerHTML = page.blocks[i];
      } // set title
    
    
      document.title = page.title;
      this.triggerEvent('contentReplaced', popstate);
      this.triggerEvent('pageView', popstate); // empty cache if it's disabled (because pages could be preloaded and stuff)
    
      if (!this.options.cache) {
        this.cache.empty();
      } // start animation IN
    
    
      setTimeout(function () {
        if (!popstate || _this.options.animateHistoryBrowsing) {
          _this.triggerEvent('animationInStart');
    
          document.documentElement.classList.remove('is-animating');
        }
      }, 10); // handle end of animation
    
      var animationPromises = this.getAnimationPromises('in');
    
      if (!popstate || this.options.animateHistoryBrowsing) {
        Promise.all(animationPromises).then(function () {
          _this.triggerEvent('animationInDone');
    
          _this.triggerEvent('transitionEnd', popstate); // remove "to-{page}" classes
    
    
          document.documentElement.className.split(' ').forEach(function (classItem) {
            if (new RegExp('^to-').test(classItem) || classItem === 'is-changing' || classItem === 'is-rendering' || classItem === 'is-popstate') {
              document.documentElement.classList.remove(classItem);
            }
          });
        });
      } else {
        this.triggerEvent('transitionEnd', popstate);
      } // reset scroll-to element
    
    
      this.scrollToElement = null;
    };
    
    exports["default"] = renderPage;
    
    },{"../helpers":47,"../utils":61}],59:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var triggerEvent = function triggerEvent(eventName, originalEvent) {
      // call saved handlers with "on" method and pass originalEvent object if available
      this._handlers[eventName].forEach(function (handler) {
        try {
          handler(originalEvent);
        } catch (error) {
          console.error(error);
        }
      }); // trigger event on document with prefix "swup:"
    
    
      var event = new CustomEvent('swup:' + eventName, {
        detail: eventName
      });
      document.dispatchEvent(event);
    };
    
    exports["default"] = triggerEvent;
    
    },{}],60:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var updateTransition = function updateTransition(from, to, custom) {
      // transition routes
      this.transition = {
        from: from,
        to: to,
        custom: custom
      };
    };
    
    exports["default"] = updateTransition;
    
    },{}],61:[function(require,module,exports){
    'use strict';
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var query = exports.query = function query(selector) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    
      if (typeof selector !== 'string') {
        return selector;
      }
    
      return context.querySelector(selector);
    };
    
    var queryAll = exports.queryAll = function queryAll(selector) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    
      if (typeof selector !== 'string') {
        return selector;
      }
    
      return Array.prototype.slice.call(context.querySelectorAll(selector));
    };
    
    },{}],62:[function(require,module,exports){
    arguments[4][37][0].apply(exports,arguments)
    },{"dup":37}],63:[function(require,module,exports){
    "use strict";
    
    var closest = require('./closest');
    /**
     * Delegates event to a selector.
     *
     * @param {Element} element
     * @param {String} selector
     * @param {String} type
     * @param {Function} callback
     * @param {Boolean} useCapture
     * @return {Object}
     */
    
    
    function delegate(element, selector, type, callback, useCapture) {
      var listenerFn = listener.apply(this, arguments);
      element.addEventListener(type, listenerFn, useCapture);
      return {
        destroy: function destroy() {
          element.removeEventListener(type, listenerFn, useCapture);
        }
      };
    }
    /**
     * Finds closest match and invokes callback.
     *
     * @param {Element} element
     * @param {String} selector
     * @param {String} type
     * @param {Function} callback
     * @return {Function}
     */
    
    
    function listener(element, selector, type, callback) {
      return function (e) {
        e.delegateTarget = closest(e.target, selector);
    
        if (e.delegateTarget) {
          callback.call(element, e);
        }
      };
    }
    
    module.exports = delegate;
    
    },{"./closest":62}],64:[function(require,module,exports){
    "use strict";
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    !function (n, t) {
      "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (n = n || self).LazyLoad = t();
    }(void 0, function () {
      "use strict";
    
      function n() {
        return (n = Object.assign || function (n) {
          for (var t = 1; t < arguments.length; t++) {
            var e = arguments[t];
    
            for (var i in e) {
              Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
            }
          }
    
          return n;
        }).apply(this, arguments);
      }
    
      var t = "undefined" != typeof window,
          e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
          i = t && "IntersectionObserver" in window,
          a = t && "classList" in document.createElement("p"),
          o = t && window.devicePixelRatio > 1,
          r = {
        elements_selector: ".lazy",
        container: e || t ? document : null,
        threshold: 300,
        thresholds: null,
        data_src: "src",
        data_srcset: "srcset",
        data_sizes: "sizes",
        data_bg: "bg",
        data_bg_hidpi: "bg-hidpi",
        data_bg_multi: "bg-multi",
        data_bg_multi_hidpi: "bg-multi-hidpi",
        data_poster: "poster",
        class_applied: "applied",
        class_loading: "loading",
        class_loaded: "loaded",
        class_error: "error",
        unobserve_completed: !0,
        unobserve_entered: !1,
        cancel_on_exit: !0,
        callback_enter: null,
        callback_exit: null,
        callback_applied: null,
        callback_loading: null,
        callback_loaded: null,
        callback_error: null,
        callback_finish: null,
        callback_cancel: null,
        use_native: !1
      },
          c = function c(t) {
        return n({}, r, t);
      },
          l = function l(n, t) {
        var e,
            i = new n(t);
    
        try {
          e = new CustomEvent("LazyLoad::Initialized", {
            detail: {
              instance: i
            }
          });
        } catch (n) {
          (e = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {
            instance: i
          });
        }
    
        window.dispatchEvent(e);
      },
          s = function s(n, t) {
        return n.getAttribute("data-" + t);
      },
          u = function u(n, t, e) {
        var i = "data-" + t;
        null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
      },
          d = function d(n) {
        return s(n, "ll-status");
      },
          f = function f(n, t) {
        return u(n, "ll-status", t);
      },
          _ = function _(n) {
        return f(n, null);
      },
          g = function g(n) {
        return null === d(n);
      },
          v = function v(n) {
        return "native" === d(n);
      },
          p = ["loading", "loaded", "applied", "error"],
          b = function b(n, t, e, i) {
        n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i));
      },
          h = function h(n, t) {
        a ? n.classList.add(t) : n.className += (n.className ? " " : "") + t;
      },
          m = function m(n, t) {
        a ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
      },
          E = function E(n) {
        return n.llTempImage;
      },
          I = function I(n, t) {
        if (t) {
          var e = t._observer;
          e && e.unobserve(n);
        }
      },
          y = function y(n, t) {
        n && (n.loadingCount += t);
      },
          A = function A(n, t) {
        n && (n.toLoadCount = t);
      },
          L = function L(n) {
        for (var t, e = [], i = 0; t = n.children[i]; i += 1) {
          "SOURCE" === t.tagName && e.push(t);
        }
    
        return e;
      },
          w = function w(n, t, e) {
        e && n.setAttribute(t, e);
      },
          z = function z(n, t) {
        n.removeAttribute(t);
      },
          k = function k(n) {
        return !!n.llOriginalAttrs;
      },
          O = function O(n) {
        if (!k(n)) {
          var t = {};
          t.src = n.getAttribute("src"), t.srcset = n.getAttribute("srcset"), t.sizes = n.getAttribute("sizes"), n.llOriginalAttrs = t;
        }
      },
          C = function C(n) {
        if (k(n)) {
          var t = n.llOriginalAttrs;
          w(n, "src", t.src), w(n, "srcset", t.srcset), w(n, "sizes", t.sizes);
        }
      },
          N = function N(n, t) {
        w(n, "sizes", s(n, t.data_sizes)), w(n, "srcset", s(n, t.data_srcset)), w(n, "src", s(n, t.data_src));
      },
          x = function x(n) {
        z(n, "src"), z(n, "srcset"), z(n, "sizes");
      },
          M = function M(n, t) {
        var e = n.parentNode;
        e && "PICTURE" === e.tagName && L(e).forEach(t);
      },
          R = function R(n, t) {
        L(n).forEach(t);
      },
          G = {
        IMG: function IMG(n, t) {
          M(n, function (n) {
            O(n), N(n, t);
          }), O(n), N(n, t);
        },
        IFRAME: function IFRAME(n, t) {
          w(n, "src", s(n, t.data_src));
        },
        VIDEO: function VIDEO(n, t) {
          R(n, function (n) {
            w(n, "src", s(n, t.data_src));
          }), w(n, "poster", s(n, t.data_poster)), w(n, "src", s(n, t.data_src)), n.load();
        }
      },
          T = function T(n, t) {
        var e = G[n.tagName];
        e && e(n, t);
      },
          D = function D(n, t, e) {
        y(e, 1), h(n, t.class_loading), f(n, "loading"), b(t.callback_loading, n, e);
      },
          F = {
        IMG: function IMG(n, t) {
          u(n, t.data_src, null), u(n, t.data_srcset, null), u(n, t.data_sizes, null), M(n, function (n) {
            u(n, t.data_srcset, null), u(n, t.data_sizes, null);
          });
        },
        IFRAME: function IFRAME(n, t) {
          u(n, t.data_src, null);
        },
        VIDEO: function VIDEO(n, t) {
          u(n, t.data_src, null), u(n, t.data_poster, null), R(n, function (n) {
            u(n, t.data_src, null);
          });
        }
      },
          V = function V(n, t) {
        u(n, t.data_bg_multi, null), u(n, t.data_bg_multi_hidpi, null);
      },
          j = function j(n, t) {
        var e = F[n.tagName];
        e ? e(n, t) : function (n, t) {
          u(n, t.data_bg, null), u(n, t.data_bg_hidpi, null);
        }(n, t);
      },
          P = ["IMG", "IFRAME", "VIDEO"],
          S = function S(n, t) {
        !t || function (n) {
          return n.loadingCount > 0;
        }(t) || function (n) {
          return n.toLoadCount > 0;
        }(t) || b(n.callback_finish, t);
      },
          U = function U(n, t, e) {
        n.addEventListener(t, e), n.llEvLisnrs[t] = e;
      },
          $ = function $(n, t, e) {
        n.removeEventListener(t, e);
      },
          q = function q(n) {
        return !!n.llEvLisnrs;
      },
          H = function H(n) {
        if (q(n)) {
          var t = n.llEvLisnrs;
    
          for (var e in t) {
            var i = t[e];
            $(n, e, i);
          }
    
          delete n.llEvLisnrs;
        }
      },
          B = function B(n, t, e) {
        !function (n) {
          delete n.llTempImage;
        }(n), y(e, -1), function (n) {
          n && (n.toLoadCount -= 1);
        }(e), m(n, t.class_loading), t.unobserve_completed && I(n, e);
      },
          J = function J(n, t, e) {
        var i = E(n) || n;
        q(i) || function (n, t, e) {
          q(n) || (n.llEvLisnrs = {});
          var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
          U(n, i, t), U(n, "error", e);
        }(i, function (a) {
          !function (n, t, e, i) {
            var a = v(t);
            B(t, e, i), h(t, e.class_loaded), f(t, "loaded"), j(t, e), b(e.callback_loaded, t, i), a || S(e, i);
          }(0, n, t, e), H(i);
        }, function (a) {
          !function (n, t, e, i) {
            var a = v(t);
            B(t, e, i), h(t, e.class_error), f(t, "error"), b(e.callback_error, t, i), a || S(e, i);
          }(0, n, t, e), H(i);
        });
      },
          K = function K(n, t, e) {
        !function (n) {
          n.llTempImage = document.createElement("IMG");
        }(n), J(n, t, e), function (n, t, e) {
          var i = s(n, t.data_bg),
              a = s(n, t.data_bg_hidpi),
              r = o && a ? a : i;
          r && (n.style.backgroundImage = 'url("'.concat(r, '")'), E(n).setAttribute("src", r), D(n, t, e));
        }(n, t, e), function (n, t, e) {
          var i = s(n, t.data_bg_multi),
              a = s(n, t.data_bg_multi_hidpi),
              r = o && a ? a : i;
          r && (n.style.backgroundImage = r, function (n, t, e) {
            h(n, t.class_applied), f(n, "applied"), V(n, t), t.unobserve_completed && I(n, t), b(t.callback_applied, n, e);
          }(n, t, e));
        }(n, t, e);
      },
          Q = function Q(n, t, e) {
        !function (n) {
          return P.indexOf(n.tagName) > -1;
        }(n) ? K(n, t, e) : function (n, t, e) {
          J(n, t, e), T(n, t), D(n, t, e);
        }(n, t, e);
      },
          W = ["IMG", "IFRAME"],
          X = function X(n) {
        return n.use_native && "loading" in HTMLImageElement.prototype;
      },
          Y = function Y(n, t, e) {
        n.forEach(function (n) {
          return function (n) {
            return n.isIntersecting || n.intersectionRatio > 0;
          }(n) ? function (n, t, e, i) {
            f(n, "entered"), function (n, t, e) {
              t.unobserve_entered && I(n, e);
            }(n, e, i), b(e.callback_enter, n, t, i), function (n) {
              return p.indexOf(d(n)) >= 0;
            }(n) || Q(n, e, i);
          }(n.target, n, t, e) : function (n, t, e, i) {
            g(n) || (function (n, t, e, i) {
              e.cancel_on_exit && function (n) {
                return "loading" === d(n);
              }(n) && "IMG" === n.tagName && (H(n), function (n) {
                M(n, function (n) {
                  x(n);
                }), x(n);
              }(n), function (n) {
                M(n, function (n) {
                  C(n);
                }), C(n);
              }(n), m(n, e.class_loading), y(i, -1), _(n), b(e.callback_cancel, n, t, i));
            }(n, t, e, i), b(e.callback_exit, n, t, i));
          }(n.target, n, t, e);
        });
      },
          Z = function Z(n) {
        return Array.prototype.slice.call(n);
      },
          nn = function nn(n) {
        return n.container.querySelectorAll(n.elements_selector);
      },
          tn = function tn(n) {
        return function (n) {
          return "error" === d(n);
        }(n);
      },
          en = function en(n, t) {
        return function (n) {
          return Z(n).filter(g);
        }(n || nn(t));
      },
          an = function an(n, e) {
        var a = c(n);
        this._settings = a, this.loadingCount = 0, function (n, t) {
          i && !X(n) && (t._observer = new IntersectionObserver(function (e) {
            Y(e, n, t);
          }, function (n) {
            return {
              root: n.container === document ? null : n.container,
              rootMargin: n.thresholds || n.threshold + "px"
            };
          }(n)));
        }(a, this), function (n, e) {
          t && window.addEventListener("online", function () {
            !function (n, t) {
              var e;
              (e = nn(n), Z(e).filter(tn)).forEach(function (t) {
                m(t, n.class_error), _(t);
              }), t.update();
            }(n, e);
          });
        }(a, this), this.update(e);
      };
    
      return an.prototype = {
        update: function update(n) {
          var t,
              a,
              o = this._settings,
              r = en(n, o);
          A(this, r.length), !e && i ? X(o) ? function (n, t, e) {
            n.forEach(function (n) {
              -1 !== W.indexOf(n.tagName) && (n.setAttribute("loading", "lazy"), function (n, t, e) {
                J(n, t, e), T(n, t), j(n, t), f(n, "native");
              }(n, t, e));
            }), A(e, 0);
          }(r, o, this) : (a = r, function (n) {
            n.disconnect();
          }(t = this._observer), function (n, t) {
            t.forEach(function (t) {
              n.observe(t);
            });
          }(t, a)) : this.loadAll(r);
        },
        destroy: function destroy() {
          this._observer && this._observer.disconnect(), nn(this._settings).forEach(function (n) {
            delete n.llOriginalAttrs;
          }), delete this._observer, delete this._settings, delete this.loadingCount, delete this.toLoadCount;
        },
        loadAll: function loadAll(n) {
          var t = this,
              e = this._settings;
          en(n, e).forEach(function (n) {
            I(n, t), Q(n, e, t);
          });
        }
      }, an.load = function (n, t) {
        var e = c(t);
        Q(n, e);
      }, an.resetStatus = function (n) {
        _(n);
      }, t && function (n, t) {
        if (t) if (t.length) for (var e, i = 0; e = t[i]; i += 1) {
          l(n, e);
        } else l(n, t);
      }(an, window.lazyLoadOptions), an;
    });
    
    },{}]},{},[25]);