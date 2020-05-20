(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tebar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Tebar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: 'tebar',
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    user: 'auth/user'
  })),
  data: function data() {
    return {
      errors: '',
      kerambas: [],
      keramba: {
        id: '',
        nama_keramba: ''
      },
      ikans: [{
        nama_ikan: 'Kerapu Cantang'
      }, {
        nama_ikan: 'Kerapu Macan'
      }],
      ikan: {
        nama_ikan: ''
      },
      model: {
        nama_ikan: '',
        jumlah_ikan: '',
        panjang_ikan: '',
        berat_ikan: '',
        tanggal_tebar: '',
        keramba_id: '',
        kelompok_id: '',
        user_id: ''
      }
    };
  },
  created: function created() {
    this.getKeramba();
    this.model.kelompok_id = this.user.kelompok_id;
    this.model.user_id = this.user.id;
  },
  methods: {
    getKeramba: function () {
      var _getKeramba = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        var id;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = this.user.kelompok_id;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("apikeramba/where?kelompok=".concat(id)).then(function (response) {
                  _this.kerambas = response.data;
                })["catch"](function () {
                  console.log('Fetch Data Error!');
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getKeramba() {
        return _getKeramba.apply(this, arguments);
      }

      return getKeramba;
    }(),
    submitPenebaran: function () {
      var _submitPenebaran = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this2 = this;

        var credentials;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.errors = '';
                credentials = this.model;
                console.log(credentials);
                _context2.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('apiproduksi/create', credentials).then(function () {
                  _this2.$router.replace({
                    name: 'beranda'
                  });
                })["catch"](function () {
                  _this2.errors = 'Harap isi semua form dengan benar!';
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function submitPenebaran() {
        return _submitPenebaran.apply(this, arguments);
      }

      return submitPenebaran;
    }(),
    consolee: function consolee() {
      console.log(this.model);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tebar.vue?vue&type=template&id=df413d1a&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Tebar.vue?vue&type=template&id=df413d1a& ***!
  \***************************************************************************************************************************************************************************************************/
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
                    _vm._v("Penebaran")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-white mt-0 mb-5" }, [
                    _vm._v(
                      "Silahkan isi form berikut untuk melakukan penebaran"
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
        _c("div", { staticClass: "row mb-3" }, [
          _c(
            "div",
            { staticClass: "col text-left" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-secondary text-uppercase",
                  attrs: { to: "/beranda" }
                },
                [
                  _vm._v(
                    "\n                        Kembali\n                    "
                  )
                ]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col" },
            [
              _c("card", { attrs: { shadow: "", type: "secondary" } }, [
                _c(
                  "div",
                  {
                    staticClass: "bg-white border-0",
                    attrs: { slot: "header" },
                    slot: "header"
                  },
                  [
                    _c("div", { staticClass: "row align-items-center" }, [
                      _c("div", { staticClass: "col-8" }, [
                        _c("h3", { staticClass: "mb-0" }, [
                          _vm._v("Informasi Penebaran")
                        ])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { attrs: { slot: "body" }, slot: "body" },
                  [
                    [
                      _c(
                        "form",
                        {
                          attrs: { role: "form" },
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.submitPenebaran($event)
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "pl-lg-4" },
                            [
                              _c("div", [
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-lg-12" }, [
                                    _c(
                                      "div",
                                      { staticClass: "form-control-label" },
                                      [_vm._v("Nama Ikan")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "select",
                                      {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.model.nama_ikan,
                                            expression: "model.nama_ikan"
                                          }
                                        ],
                                        staticClass:
                                          "input-group-alternative mb-3 form-control",
                                        on: {
                                          change: function($event) {
                                            var $$selectedVal = Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function(o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function(o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                            _vm.$set(
                                              _vm.model,
                                              "nama_ikan",
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "option",
                                          {
                                            attrs: { disabled: "", value: "" }
                                          },
                                          [_vm._v("Pilih Jenis Ikan")]
                                        ),
                                        _vm._v(" "),
                                        _vm._l(_vm.ikans, function(ikan) {
                                          return _c(
                                            "option",
                                            {
                                              domProps: {
                                                value: ikan.nama_ikan
                                              }
                                            },
                                            [_vm._v(_vm._s(ikan.nama_ikan))]
                                          )
                                        })
                                      ],
                                      2
                                    )
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("base-input", {
                                attrs: {
                                  alternative: "",
                                  label: "Jumlah Ikan",
                                  placeholder: "Masukkan Jumlah Ikan",
                                  "input-classes": "form-control-alternative",
                                  type: "number"
                                },
                                model: {
                                  value: _vm.model.jumlah_ikan,
                                  callback: function($$v) {
                                    _vm.$set(_vm.model, "jumlah_ikan", $$v)
                                  },
                                  expression: "model.jumlah_ikan"
                                }
                              }),
                              _vm._v(" "),
                              _c("base-input", {
                                attrs: {
                                  alternative: "",
                                  label: "Ukuran Ikan (cm)",
                                  placeholder: "Masukkan Ukuran Ikan (cm)",
                                  "input-classes": "form-control-alternative",
                                  type: "number"
                                },
                                model: {
                                  value: _vm.model.panjang_ikan,
                                  callback: function($$v) {
                                    _vm.$set(_vm.model, "panjang_ikan", $$v)
                                  },
                                  expression: "model.panjang_ikan"
                                }
                              }),
                              _vm._v(" "),
                              _c("base-input", {
                                attrs: {
                                  alternative: "",
                                  label: "Berat Ikan (gram)",
                                  placeholder: "Masukkan Berat Ikan (gram)",
                                  "input-classes": "form-control-alternative",
                                  type: "number"
                                },
                                model: {
                                  value: _vm.model.berat_ikan,
                                  callback: function($$v) {
                                    _vm.$set(_vm.model, "berat_ikan", $$v)
                                  },
                                  expression: "model.berat_ikan"
                                }
                              }),
                              _vm._v(" "),
                              _c("base-input", {
                                attrs: {
                                  alternative: "",
                                  label: "Tanggal Tebar",
                                  placeholder: "Masukkan Tanggal Tebar",
                                  "input-classes": "form-control-alternative",
                                  type: "date"
                                },
                                model: {
                                  value: _vm.model.tanggal_tebar,
                                  callback: function($$v) {
                                    _vm.$set(_vm.model, "tanggal_tebar", $$v)
                                  },
                                  expression: "model.tanggal_tebar"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "pl-lg-4" }, [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-lg-12" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-control-label" },
                                  [_vm._v("Lokasi Tebar")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.model.keramba_id,
                                        expression: "model.keramba_id"
                                      }
                                    ],
                                    staticClass:
                                      "input-group-alternative mb-3 form-control",
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.model,
                                          "keramba_id",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "option",
                                      { attrs: { disabled: "", value: "" } },
                                      [_vm._v("Pilih Lokasi Tebar")]
                                    ),
                                    _vm._v(" "),
                                    _vm._l(_vm.kerambas, function(keramba) {
                                      return _c(
                                        "option",
                                        { domProps: { value: keramba.id } },
                                        [_vm._v(_vm._s(keramba.nama_keramba))]
                                      )
                                    })
                                  ],
                                  2
                                )
                              ])
                            ])
                          ])
                        ]
                      )
                    ]
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "text-center d-flex",
                    attrs: { slot: "footer" },
                    slot: "footer"
                  },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-link text-uppercase",
                        attrs: { to: "/beranda" }
                      },
                      [_vm._v("Batal")]
                    ),
                    _vm._v(" "),
                    _c(
                      "base-button",
                      {
                        staticClass: "text-uppercase ml-auto",
                        attrs: { nativeType: "submit", type: "primary" },
                        on: {
                          click: function($event) {
                            return _vm.submitPenebaran()
                          }
                        }
                      },
                      [_vm._v("Simpan")]
                    )
                  ],
                  1
                )
              ])
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

/***/ "./resources/js/views/Tebar.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Tebar.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tebar_vue_vue_type_template_id_df413d1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tebar.vue?vue&type=template&id=df413d1a& */ "./resources/js/views/Tebar.vue?vue&type=template&id=df413d1a&");
/* harmony import */ var _Tebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tebar.vue?vue&type=script&lang=js& */ "./resources/js/views/Tebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tebar_vue_vue_type_template_id_df413d1a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tebar_vue_vue_type_template_id_df413d1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Tebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Tebar.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Tebar.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Tebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Tebar.vue?vue&type=template&id=df413d1a&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Tebar.vue?vue&type=template&id=df413d1a& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tebar_vue_vue_type_template_id_df413d1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Tebar.vue?vue&type=template&id=df413d1a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tebar.vue?vue&type=template&id=df413d1a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tebar_vue_vue_type_template_id_df413d1a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tebar_vue_vue_type_template_id_df413d1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);