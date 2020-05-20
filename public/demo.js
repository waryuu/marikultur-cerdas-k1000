(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'beranda',
  data: function data() {
    return {
      errors: '',
      totalProd: [{
        minggu: '12',
        bulan: '30',
        tahun: '50'
      }],
      totalIkan: [{
        nama: 'Kerapu Cantang',
        jumlah: '4000'
      }, {
        nama: 'Kerapu Macan',
        jumlah: '1000'
      }],
      sensorHumTemp: {
        id: '',
        humidity: '',
        temperature: ''
      }
    };
  },
  mounted: function mounted() {
    this.getSensorHumTemp();
  },
  methods: {
    getSensorHumTemp: function () {
      var _getSensorHumTemp = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("apisensorhumtemp").then(function (response) {
                  _this.sensorHumTemp = response.data;
                })["catch"](function () {
                  console.log('Fetch Data Error!');
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getSensorHumTemp() {
        return _getSensorHumTemp.apply(this, arguments);
      }

      return getSensorHumTemp;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6& ***!
  \*******************************************************************************************************************************************************************************************************/
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
          staticClass: "mb-8 pt-4 pb-4 pt-md-8",
          attrs: { type: "gradient-primary" }
        },
        [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col" }, [
                _c("div", { staticClass: "align-items-center mt-3 mb-3" }, [
                  _c("h3", { staticClass: "text-center text-primary mb-0" }, [
                    _c("i", { staticClass: "fas fa-map-marker-alt" }),
                    _vm._v(" Kepulauan Seribu")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col" }, [
                _c(
                  "div",
                  { staticClass: "align-items-center mt-3 mb-3 text-center" },
                  [
                    _c("img", {
                      staticClass: "mx-auto",
                      staticStyle: { width: "65px", height: "65px" },
                      attrs: {
                        src:
                          "https://www.bmkg.go.id/asset/img/weather_icon/ID/cerah%20berawan-pm.png",
                        alt: "..."
                      }
                    }),
                    _vm._v(" "),
                    _c("h4", { staticClass: "mb-0 font-weight-light" }, [
                      _vm._v("Cerah Berawan")
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row ml-4 mr-4" }, [
              _c("div", { staticClass: "col-8" }, [
                _c("div", { staticClass: "mt-3 mb-3" }, [
                  _c("h3", { staticClass: "mb-0 font-weight-light" }, [
                    _c("i", { staticClass: "fas fa-temperature-low" }),
                    _vm._v(" Suhu")
                  ]),
                  _vm._v(" "),
                  _c("h3", { staticClass: "mb-0 font-weight-light" }, [
                    _c("i", { staticClass: "fas fa-hand-holding-water" }),
                    _vm._v(" Kelembaban")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col" }, [
                _c("div", { staticClass: "mt-3 mb-3" }, [
                  _c(
                    "h3",
                    { staticClass: "text-right font-weight-light mb-0" },
                    [_vm._v(_vm._s(_vm.sensorHumTemp.temperature) + "°C")]
                  ),
                  _vm._v(" "),
                  _c(
                    "h3",
                    { staticClass: "text-right font-weight-light mb-0" },
                    [_vm._v(_vm._s(_vm.sensorHumTemp.humidity) + "%")]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row mt-3 mb-3 ml-2 mr-2" },
              [
                _c(
                  "router-link",
                  { staticClass: "col", attrs: { to: "/tebar" } },
                  [
                    _c(
                      "div",
                      { staticClass: "card border-0 align-items-center" },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "icon icon-shape text-white rounded-circle mb-3 shadow bg-gradient-primary"
                          },
                          [_c("i", { staticClass: "fas fa-fish" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "h4",
                          {
                            staticClass:
                              "card-title text-center font-weight-light mb-0"
                          },
                          [_vm._v("Penebaran")]
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  { staticClass: "col", attrs: { to: "/produksi" } },
                  [
                    _c(
                      "div",
                      { staticClass: "card border-0 align-items-center" },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "icon icon-shape text-white rounded-circle mb-3 shadow bg-gradient-primary"
                          },
                          [_c("i", { staticClass: "fas fa-user-edit" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "h4",
                          {
                            staticClass:
                              "card-title text-center font-weight-light mb-0"
                          },
                          [_vm._v("Pembesaran")]
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  { staticClass: "col", attrs: { to: "/panen" } },
                  [
                    _c(
                      "div",
                      { staticClass: "card border-0 align-items-center" },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "icon icon-shape text-white rounded-circle mb-3 shadow bg-gradient-primary"
                          },
                          [_c("i", { staticClass: "fas fa-clipboard-list" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "h4",
                          {
                            staticClass:
                              "card-title text-center font-weight-light mb-0"
                          },
                          [_vm._v("Panen")]
                        )
                      ]
                    )
                  ]
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt--7" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col" },
            [
              _c("card", { attrs: { shadow: "", noBody: true } }, [
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
                          _vm._v("Total Produksi")
                        ])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", [
                  _c(
                    "div",
                    { staticClass: "table-responsive" },
                    [
                      _c(
                        "base-table",
                        {
                          staticClass: "table align-items-center table-flush",
                          attrs: {
                            "thead-classes": "thead-light",
                            "tbody-classes": "list",
                            data: _vm.totalProd
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var row = ref.row
                                return [
                                  _c("td", { attrs: { scope: "row" } }, [
                                    _c(
                                      "span",
                                      { staticClass: "font-weight-bold" },
                                      [_vm._v(_vm._s(row.minggu))]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _c(
                                      "span",
                                      { staticClass: "font-weight-bold" },
                                      [_vm._v(_vm._s(row.bulan))]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _c(
                                      "span",
                                      { staticClass: "font-weight-bold" },
                                      [_vm._v(_vm._s(row.tahun))]
                                    )
                                  ])
                                ]
                              }
                            }
                          ])
                        },
                        [
                          _c("template", { slot: "columns" }, [
                            _c("th", [_vm._v("Minggu ini")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Bulan ini")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Tahun ini")])
                          ])
                        ],
                        2
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "d-flex justify-content-end",
                    attrs: { slot: "footer" },
                    slot: "footer"
                  },
                  [
                    _c("a", { attrs: { href: "/produksi" } }, [
                      _vm._v("Lihat Semua Produksi")
                    ])
                  ]
                )
              ])
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt-3" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col" },
            [
              _c("card", { attrs: { shadow: "", noBody: true } }, [
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
                          _vm._v("Total Ikan Saat Ini")
                        ])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", [
                  _c(
                    "div",
                    { staticClass: "table-responsive" },
                    [
                      _c(
                        "base-table",
                        {
                          staticClass: "table align-items-center table-flush",
                          attrs: {
                            "thead-classes": "thead-light",
                            "tbody-classes": "list",
                            data: _vm.totalIkan
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var row = ref.row
                                return [
                                  _c("td", { attrs: { scope: "row" } }, [
                                    _c(
                                      "span",
                                      { staticClass: "font-weight-bold" },
                                      [_vm._v(_vm._s(row.nama))]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _c(
                                      "span",
                                      { staticClass: "font-weight-bold" },
                                      [_vm._v(_vm._s(row.jumlah))]
                                    )
                                  ])
                                ]
                              }
                            }
                          ])
                        },
                        [
                          _c("template", { slot: "columns" }, [
                            _c("th", [_vm._v("Nama Ikan")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Jumlah Ikan")])
                          ])
                        ],
                        2
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "d-flex justify-content-end",
                    attrs: { slot: "footer" },
                    slot: "footer"
                  },
                  [
                    _vm._v(
                      "\n                        Total 5000 Ikan\n                    "
                    )
                  ]
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

/***/ "./resources/js/views/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Dashboard.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=1f79daf6& */ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=1f79daf6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);