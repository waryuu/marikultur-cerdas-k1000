(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserProfile.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/UserProfile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'user-profile',
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    authenticated: 'auth/authenticated',
    user: 'auth/user'
  })),
  data: function data() {
    return {
      kelompoks: [],
      kelompok: {
        id: '',
        nama_kelompok: ''
      },
      model: {
        name: '',
        username: '',
        email: ''
      },
      form: {
        password: '',
        password_confirmation: ''
      }
    };
  },
  created: function created() {
    this.fetchKelompok();
    this.model.name = this.user.name;
    this.model.username = this.user.username;
    this.model.email = this.user.email;
    this.model.kelompok_id = this.user.kelompok_id;
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    updateProfile: 'auth/updateProfile'
  }), {
    fetchKelompok: function fetchKelompok() {
      var _this = this;

      fetch('api/apikelompok').then(function (res) {
        return res.json();
      }).then(function (res) {
        _this.kelompoks = res.data;
      });
    },
    submitInfoUser: function submitInfoUser() {
      var _this2 = this;

      this.errors = '';
      this.updateProfile(this.model).then(function () {
        _this2.$router.replace({
          name: 'profil'
        });
      })["catch"](function () {
        _this2.errors = 'Harap isi semua form dengan benar!';
      });
    },
    submitPassword: function submitPassword() {
      var _this3 = this;

      this.errors = '';
      this.updateProfile(this.form).then(function () {
        _this3.$router.replace({
          name: 'profil'
        });
      })["catch"](function () {
        _this3.errors = 'Harap isi semua form dengan benar!';
      });
    },
    consolee: function consolee() {
      console.log(this.model);
      console.log(this.form);
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserProfile.vue?vue&type=template&id=19ecac0f&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/UserProfile.vue?vue&type=template&id=19ecac0f& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "base-header",
        {
          staticClass: "header pb-7 pt-6 pt-lg-7 d-flex align-items-center",
          staticStyle: {
            "min-height": "300px",
            "background-size": "cover",
            "background-position": "center top"
          }
        },
        [
          _c(
            "div",
            { staticClass: "container-fluid d-flex align-items-center" },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-7 col-md-10" }, [
                  _c("h1", { staticClass: "display-2 text-white" }, [
                    _vm._v("Profil")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-white mt-0 mb-5" }, [
                    _vm._v(
                      "Silahkan isi form berikut untuk mengubah data diri Anda"
                    )
                  ])
                ])
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt--7" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col" },
            [
              _c(
                "card",
                { attrs: { shadow: "", type: "secondary" } },
                [
                  _c(
                    "div",
                    {
                      staticClass: "bg-white border-0",
                      attrs: { slot: "header" },
                      slot: "header"
                    },
                    [
                      _c("div", { staticClass: "row align-items-center" }, [
                        _c("div", { staticClass: "col-12" }, [
                          _c("h3", { staticClass: "mb-0" }, [
                            _vm._v("Profil Saya")
                          ])
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("template", { slot: "body" }, [
                    _c(
                      "form",
                      {
                        attrs: { role: "form" },
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.submitInfoUser($event)
                          }
                        }
                      },
                      [
                        _c(
                          "h6",
                          { staticClass: "heading-small text-muted mb-4" },
                          [_vm._v("Informasi Pengguna")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "pl-lg-4" }, [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-6" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "Alamat Email",
                                    placeholder: "jesse@example.com",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.email,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "email", $$v)
                                    },
                                    expression: "model.email"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-lg-6" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "Username",
                                    placeholder: "username",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.username,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "username", $$v)
                                    },
                                    expression: "model.username"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-lg-6" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "Nama",
                                    placeholder: "Nama",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.name,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "name", $$v)
                                    },
                                    expression: "model.name"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "text-center" },
                          [
                            _c(
                              "base-button",
                              {
                                staticClass: "my-4",
                                attrs: { nativeType: "submit", type: "primary" }
                              },
                              [_vm._v("Ubah")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("hr", { staticClass: "my-4" })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "form",
                      {
                        attrs: { role: "form" },
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.submitPassword($event)
                          }
                        }
                      },
                      [
                        _c(
                          "h6",
                          { staticClass: "heading-small text-muted mb-4" },
                          [_vm._v("Ubah Kata Sandi")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "pl-lg-4" }, [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-md-12" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "Kata Sandi Baru",
                                    placeholder: "Masukkan Kata Sandi",
                                    "input-classes": "form-control-alternative",
                                    type: "password"
                                  },
                                  model: {
                                    value: _vm.form.password,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "password", $$v)
                                    },
                                    expression: "form.password"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-12" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "Konfirmasi Kata Sandi",
                                    placeholder: "Masukkan Kata Sandi",
                                    "input-classes": "form-control-alternative",
                                    type: "password"
                                  },
                                  model: {
                                    value: _vm.form.password_confirmation,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.form,
                                        "password_confirmation",
                                        $$v
                                      )
                                    },
                                    expression: "form.password_confirmation"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "text-center" },
                          [
                            _c(
                              "base-button",
                              {
                                staticClass: "my-4",
                                attrs: { nativeType: "submit", type: "primary" }
                              },
                              [_vm._v("Ubah")]
                            )
                          ],
                          1
                        )
                      ]
                    )
                  ])
                ],
                2
              )
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/UserProfile.vue":
/*!********************************************!*\
  !*** ./resources/js/views/UserProfile.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserProfile_vue_vue_type_template_id_19ecac0f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=template&id=19ecac0f& */ "./resources/js/views/UserProfile.vue?vue&type=template&id=19ecac0f&");
/* harmony import */ var _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=script&lang=js& */ "./resources/js/views/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserProfile_vue_vue_type_template_id_19ecac0f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserProfile_vue_vue_type_template_id_19ecac0f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/UserProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/UserProfile.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/UserProfile.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/UserProfile.vue?vue&type=template&id=19ecac0f&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/UserProfile.vue?vue&type=template&id=19ecac0f& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_19ecac0f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=template&id=19ecac0f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserProfile.vue?vue&type=template&id=19ecac0f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_19ecac0f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_19ecac0f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);