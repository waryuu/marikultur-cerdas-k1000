(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProduksiDetail.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ProduksiDetail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'produksi-detail',
  data: function data() {
    return {
      errors: '',
      showModalSensor: false,
      showModalPakan: false,
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
        keramba_sesudah: '',
        suhu_air: '',
        do_air: ''
      },
      cucis: [],
      cuci: {
        tanggal_cuci: ''
      },
      pindahs: [],
      pindah: {
        tanggal_pindah: ''
      },
      sensorSuhu: {
        id: '',
        suhu_air: '',
        keramba_id: ''
      },
      sensorDo: {
        id: '',
        do_air: '',
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
      links: {
        first: '',
        last: '',
        prev: '',
        next: ''
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
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.all([axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("apisubproduksi/where?produksi=".concat(this.$route.params.id))]).then(axios__WEBPACK_IMPORTED_MODULE_1___default.a.spread(function (responseProd) {
                  _this.produksis = responseProd.data.data;
                  _this.meta = responseProd.data.meta;
                  _this.links = responseProd.data.links;
                }))["catch"](function (error) {
                  console.log('Fetch Data Produksi Error!');
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
    }() // async showSensor(id){
    //     this.showModalSensor = true;
    //     await axios.all([
    //         axios.get(`apisensorsuhu/where?keramba=${id}`),
    //         axios.get(`apisensordo/where?keramba=${id}`)
    //     ])
    //     .then(axios.spread((responseSuhu, responseDo) => {
    //         this.sensorSuhu = responseSuhu.data;
    //         this.sensorDo = responseDo.data;
    //     }))
    //     .catch(function (error) {
    //         console.log('Fetch Sensor Error!');
    //     });
    // }

  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProduksiDetail.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ProduksiDetail.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.alert{\n    border-radius: .25rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProduksiDetail.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ProduksiDetail.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ProduksiDetail.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProduksiDetail.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProduksiDetail.vue?vue&type=template&id=7694435a&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ProduksiDetail.vue?vue&type=template&id=7694435a& ***!
  \************************************************************************************************************************************************************************************************************/
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
                    _vm._v("Detail")
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
                            _vm._v("Detail produksi")
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
                              attrs: { pagination: _vm.meta, offset: 0 },
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
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col" }, [
                            _c(
                              "h3",
                              { staticClass: "card-title text-left mb-0" },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(produksi.nama_ikan) +
                                    "\n                                "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col" }, [
                            _c(
                              "h5",
                              {
                                staticClass:
                                  "card-title text-right text-muted font-weight-light mb-0"
                              },
                              [
                                _vm._v(
                                  "\n                                    ID-" +
                                    _vm._s(_vm.$route.params.id) +
                                    "." +
                                    _vm._s(produksi.id) +
                                    "\n                                "
                                )
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row mt-3 mb-2" }, [
                          _c("div", { staticClass: "col" }, [
                            _c(
                              "h3",
                              {
                                staticClass:
                                  "card-subtitle text-left text-muted"
                              },
                              [
                                _vm._v(
                                  "\n                                    Keramba " +
                                    _vm._s(produksi.keramba_sesudah) +
                                    "\n                                "
                                )
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row mt-2" }, [
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
                                  _vm._s(produksi.jumlah_ikan) +
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
                                  _vm._s(produksi.panjang_ikan) +
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
                                  _vm._s(produksi.berat_ikan) +
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
                                  "\n                                    Tanggal Mencuci\n                                "
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
                                  "text-right font-italic font-weight-light"
                              },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(produksi.tanggal_cuci) +
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
                                  "\n                                    Tanggal Pindah\n                                "
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
                                  "text-right font-italic font-weight-light"
                              },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(produksi.tanggal_pindah) +
                                    "\n                                "
                                )
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        produksi.status_panen === "Pembesaran"
                          ? _c("div", [
                              _c(
                                "div",
                                { staticClass: "row mb-3 mt-2 ml-1 mr-1" },
                                [
                                  produksi.suhu_air != null &&
                                  produksi.suhu_air.length
                                    ? _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col card border-0 mr-1 bg-info",
                                          staticStyle: {
                                            "border-radius": "0.25rem"
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "row ml-1 mr-1 mt-2"
                                            },
                                            [
                                              _c(
                                                "h3",
                                                {
                                                  staticClass:
                                                    "card-title mb-0 text-white"
                                                },
                                                [_vm._v("Suhu Air")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "row ml-1 mr-1 mb-2"
                                            },
                                            [
                                              _c(
                                                "h4",
                                                {
                                                  staticClass:
                                                    "card-title font-weight-light mb-0 text-white"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(produksi.suhu_air) +
                                                      " ° C"
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  produksi.do_air != null &&
                                  produksi.do_air.length
                                    ? _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col card border-0 ml-1 bg-info",
                                          staticStyle: {
                                            "border-radius": "0.25rem"
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "row ml-1 mr-1 mt-2"
                                            },
                                            [
                                              _c(
                                                "h3",
                                                {
                                                  staticClass:
                                                    "card-title mb-0 text-white"
                                                },
                                                [_vm._v("Oksigen")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "row ml-1 mr-1 mb-2"
                                            },
                                            [
                                              _c(
                                                "h4",
                                                {
                                                  staticClass:
                                                    "card-title font-weight-light mb-0 text-white"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(produksi.do_air) +
                                                      " %"
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "div",
                                  { staticClass: "row mt-3 px-3" },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "col btn btn-primary",
                                        attrs: {
                                          to: {
                                            name: "ubah",
                                            params: { id: produksi.id }
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                                Ubah\n                                            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "col btn btn-primary",
                                        attrs: {
                                          to: {
                                            name: "pindah",
                                            params: { id: produksi.id }
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                                Pindah\n                                            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "col btn btn-primary",
                                        attrs: {
                                          to: {
                                            name: "panen",
                                            params: { id: produksi.id }
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                                Panen\n                                            "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ])
                            ])
                          : _c("div", [
                              _c("div", { staticClass: "row mb-3" }, [
                                _c("div", { staticClass: "col" }, [
                                  _c(
                                    "h4",
                                    {
                                      staticClass: "text-left font-weight-light"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                        Tanggal Panen\n                                    "
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
                                        "text-right font-italic font-weight-light"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(produksi.tanggal_panen) +
                                          "\n                                    "
                                      )
                                    ]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "col" },
                                  [
                                    _c(
                                      "base-alert",
                                      { attrs: { type: "warning" } },
                                      [
                                        _c(
                                          "span",
                                          { staticClass: "alert-inner--icon" },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fas fa-exclamation-triangle"
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          { staticClass: "alert-inner--text" },
                                          [
                                            _c("strong", [
                                              _vm._v(
                                                "Subproduksi sudah dipanen!"
                                              )
                                            ])
                                          ]
                                        )
                                      ]
                                    )
                                  ],
                                  1
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
                        attrs: { pagination: _vm.meta, offset: 0 },
                        on: {
                          paginate: function($event) {
                            return _vm.getProduksi()
                          }
                        }
                      })
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

/***/ "./resources/js/views/ProduksiDetail.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/ProduksiDetail.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProduksiDetail_vue_vue_type_template_id_7694435a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProduksiDetail.vue?vue&type=template&id=7694435a& */ "./resources/js/views/ProduksiDetail.vue?vue&type=template&id=7694435a&");
/* harmony import */ var _ProduksiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProduksiDetail.vue?vue&type=script&lang=js& */ "./resources/js/views/ProduksiDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProduksiDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProduksiDetail.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/ProduksiDetail.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProduksiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProduksiDetail_vue_vue_type_template_id_7694435a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProduksiDetail_vue_vue_type_template_id_7694435a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ProduksiDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ProduksiDetail.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/ProduksiDetail.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProduksiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProduksiDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProduksiDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProduksiDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ProduksiDetail.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/ProduksiDetail.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProduksiDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ProduksiDetail.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProduksiDetail.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProduksiDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProduksiDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProduksiDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProduksiDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProduksiDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/ProduksiDetail.vue?vue&type=template&id=7694435a&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/ProduksiDetail.vue?vue&type=template&id=7694435a& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProduksiDetail_vue_vue_type_template_id_7694435a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProduksiDetail.vue?vue&type=template&id=7694435a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProduksiDetail.vue?vue&type=template&id=7694435a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProduksiDetail_vue_vue_type_template_id_7694435a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProduksiDetail_vue_vue_type_template_id_7694435a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);