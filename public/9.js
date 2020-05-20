(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Panen.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Panen.vue?vue&type=script&lang=js& ***!
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
  name: 'panen',
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    user: 'auth/user'
  })),
  data: function data() {
    return {
      errors: '',
      showModal: false,
      offset: 4,
      produksis: [],
      produksi: {
        id: '',
        nama_ikan: '',
        jumlah_ikan_awal: '',
        panjang_ikan_awal: '',
        berat_ikan_awal: '',
        tanggal_tebar: '',
        tanggal_panen: '',
        tanggal_cuci: '',
        tanggal_pindah: '',
        status_panen: '',
        keramba_id: ''
      },
      meta: {
        current_page: 1,
        from: 1,
        last_page: '',
        path: '',
        per_page: '',
        to: '',
        total: ''
      },
      model: {
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        country: '',
        zipCode: '',
        about: ''
      }
    };
  },
  mounted: function mounted() {
    this.getProduksi();
  },
  methods: {
    getProduksi: function () {
      var _getProduksi = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("apiproduksi?page=".concat(this.meta.current_page)).then(function (response) {
                  _this.produksis = response.data.data;
                  _this.meta = response.data.meta;
                })["catch"](function () {
                  console.log('Fetch Data Error!');
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getProduksi() {
        return _getProduksi.apply(this, arguments);
      }

      return getProduksi;
    }(),
    showPanen: function showPanen(id) {
      this.showModal = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Panen.vue?vue&type=template&id=212ebd77&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Panen.vue?vue&type=template&id=212ebd77& ***!
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
                _c("div", { staticClass: "col-lg-12 col-md-10" }, [
                  _c("h1", { staticClass: "display-2 text-white" }, [
                    _vm._v("Pemanenan")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-white mt-0 mb-5" }, [
                    _vm._v("Daftar produksi yang telah dipanen")
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
              _c(
                "card",
                { attrs: { shadow: "", type: "secondary", noBody: true } },
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
                        _c("div", { staticClass: "col-8" }, [
                          _c("h3", { staticClass: "mb-0" }, [
                            _vm._v("Daftar Produksi")
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-4 d-flex align-items-center justify-content-end"
                          },
                          [
                            _c("base-pagination-dua", {
                              attrs: { pagination: _vm.meta, offset: 1 },
                              on: {
                                paginate: function($event) {
                                  return _vm.getProduksi()
                                }
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.produksis, function(produksi) {
                    return _c(
                      "div",
                      {
                        key: produksi.id,
                        staticClass: "card card-body rounded-0"
                      },
                      [
                        _c("h3", { staticClass: "card-title" }, [
                          _vm._v(_vm._s(produksi.nama_ikan))
                        ]),
                        _vm._v(" "),
                        _c("h3", { staticClass: "card-subtitle text-muted" }, [
                          _vm._v("Keramba " + _vm._s(produksi.keramba_id))
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row mt-3" }, [
                          _c("div", { staticClass: "col" }, [
                            _c(
                              "h4",
                              {
                                staticClass:
                                  "text-center text-uppercase font-weight-light"
                              },
                              [
                                _vm._v(
                                  "\n                                    Jumlah\n                                "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("h3", { staticClass: "text-center" }, [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(produksi.jumlah_ikan_awal) +
                                  " Ekor\n                                "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col" }, [
                            _c(
                              "h4",
                              {
                                staticClass:
                                  "text-center text-uppercase font-weight-light"
                              },
                              [
                                _vm._v(
                                  "\n                                    Ukuran\n                                "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("h3", { staticClass: "text-center" }, [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(produksi.panjang_ikan_awal) +
                                  " cm\n                                "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col" }, [
                            _c(
                              "h4",
                              {
                                staticClass:
                                  "text-center text-uppercase font-weight-light"
                              },
                              [
                                _vm._v(
                                  "\n                                    Berat\n                                "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("h3", { staticClass: "text-center" }, [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(produksi.berat_ikan_awal) +
                                  " Gram\n                                "
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row mt-3" }, [
                          _c("div", { staticClass: "col" }, [
                            _c(
                              "h4",
                              { staticClass: "text-left font-weight-light" },
                              [
                                _vm._v(
                                  "\n                                    Tanggal Tebar\n                                "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col" }, [
                            _c(
                              "h4",
                              {
                                staticClass:
                                  "text-right font-weight-light font-italic"
                              },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(produksi.tanggal_tebar) +
                                    "\n                                "
                                )
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col" }, [
                            _c(
                              "h4",
                              { staticClass: "text-left font-weight-light" },
                              [
                                _vm._v(
                                  "\n                                    Tanggal Panen\n                                "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col" }, [
                            _c(
                              "h4",
                              {
                                staticClass:
                                  "text-right font-weight-light font-italic"
                              },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(produksi.tanggal_tebar) +
                                    "\n                                "
                                )
                              ]
                            )
                          ])
                        ])
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "d-flex justify-content-end",
                      attrs: { slot: "footer" },
                      slot: "footer"
                    },
                    [
                      _c("base-pagination-dua", {
                        attrs: { pagination: _vm.meta, offset: 1 },
                        on: {
                          paginate: function($event) {
                            return _vm.getProduksi()
                          }
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c(
                        "modal",
                        {
                          attrs: {
                            show: _vm.showModal,
                            gradient: "danger",
                            type: "danger"
                          },
                          on: {
                            "update:show": function($event) {
                              _vm.showModal = $event
                            }
                          }
                        },
                        [
                          _c("template", { slot: "header" }, [
                            _c(
                              "h3",
                              {
                                staticClass: "modal-title font-weight-light",
                                attrs: { id: "exampleModalLabel" }
                              },
                              [_vm._v("Lakukan Panen")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("template", { slot: "body" }, [
                            _c(
                              "form",
                              {
                                attrs: { role: "form" },
                                on: {
                                  submit: function($event) {
                                    $event.preventDefault()
                                  }
                                }
                              },
                              [
                                _c("h2", { staticClass: "text-white mb-4" }, [
                                  _vm._v(
                                    "Apakah Anda yakin ingin melakukan panen?"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("p", [
                                  _vm._v(
                                    "Jika sudah dipanen proses produksi selesai dan tidak dapat dikembalikan"
                                  )
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "template",
                            { slot: "footer" },
                            [
                              _c(
                                "base-button",
                                {
                                  staticClass: "text-uppercase",
                                  attrs: {
                                    type: "secondary",
                                    nativeType: "submit"
                                  },
                                  on: { click: function($event) {} }
                                },
                                [_vm._v("Panen")]
                              ),
                              _vm._v(" "),
                              _c(
                                "base-button",
                                {
                                  staticClass:
                                    "text-white text-uppercase ml-auto",
                                  attrs: { type: "link" },
                                  on: {
                                    click: function($event) {
                                      _vm.showModal = false
                                    }
                                  }
                                },
                                [_vm._v("Batal")]
                              )
                            ],
                            1
                          )
                        ],
                        2
                      )
                    ],
                    1
                  )
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

/***/ "./resources/js/views/Panen.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Panen.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Panen_vue_vue_type_template_id_212ebd77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Panen.vue?vue&type=template&id=212ebd77& */ "./resources/js/views/Panen.vue?vue&type=template&id=212ebd77&");
/* harmony import */ var _Panen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Panen.vue?vue&type=script&lang=js& */ "./resources/js/views/Panen.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Panen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Panen_vue_vue_type_template_id_212ebd77___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Panen_vue_vue_type_template_id_212ebd77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Panen.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Panen.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Panen.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Panen.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Panen.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Panen.vue?vue&type=template&id=212ebd77&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Panen.vue?vue&type=template&id=212ebd77& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Panen_vue_vue_type_template_id_212ebd77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Panen.vue?vue&type=template&id=212ebd77& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Panen.vue?vue&type=template&id=212ebd77&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Panen_vue_vue_type_template_id_212ebd77___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Panen_vue_vue_type_template_id_212ebd77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);