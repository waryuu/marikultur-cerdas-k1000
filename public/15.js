(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

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
        keramba_sesudah: ''
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
      sensorHumTemp: {
        id: '',
        humidity: '',
        temperature: ''
      },
      sensorPakan: {
        id: '',
        baterai_pakan: '',
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
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.all([axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("apisubproduksi/where?produksi=".concat(this.$route.params.id)), axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("apisensorhumtemp")]).then(axios__WEBPACK_IMPORTED_MODULE_1___default.a.spread(function (responseProd, responseHumTemp) {
                  _this.produksis = responseProd.data.data;
                  _this.sensorHumTemp = responseHumTemp.data;
                  _this.meta = responseProd.data.meta;
                  _this.links = responseProd.data.links;
                  console.log(responseProd.data.data);
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
    }(),
    showSensor: function () {
      var _showSensor = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.showModalSensor = true;
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.all([axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("apisensorsuhu/where?keramba=".concat(id)), axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("apisensordo/where?keramba=".concat(id))]).then(axios__WEBPACK_IMPORTED_MODULE_1___default.a.spread(function (responseSuhu, responseDo) {
                  _this2.sensorSuhu = responseSuhu.data;
                  _this2.sensorDo = responseDo.data;
                }))["catch"](function (error) {
                  console.log('Fetch Sensor Error!');
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function showSensor(_x) {
        return _showSensor.apply(this, arguments);
      }

      return showSensor;
    }(),
    showPakan: function () {
      var _showPakan = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {
        var _this3 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.showModalPakan = true;
                _context3.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("apipakan/where?keramba=".concat(id)).then(function (response) {
                  _this3.sensorPakan = response.data;
                })["catch"](function () {
                  console.log('Fetch Pakan Error!');
                });

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function showPakan(_x2) {
        return _showPakan.apply(this, arguments);
      }

      return showPakan;
    }()
  }
});

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
                    _vm._v("Detail Produksi")
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
          _c("div", { staticClass: "col" }, [
            _c(
              "form",
              { staticClass: "form-inline mr-3 d-none d-flex ml-auto" },
              [
                _c(
                  "div",
                  { staticClass: "form-group mb-0" },
                  [
                    _c("base-input", {
                      staticClass: "input-group-alternative",
                      attrs: {
                        placeholder: "Cari",
                        alternative: "",
                        "addon-right-icon": "fas fa-search"
                      }
                    })
                  ],
                  1
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
                            _vm._v(
                              "Detail Produksi " + _vm._s(_vm.$route.params.id)
                            )
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
                              "h3",
                              {
                                staticClass:
                                  "card-title text-right text-muted font-weight-light mb-0"
                              },
                              [
                                _vm._v(
                                  "\n                                    Produksi " +
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
                        _c("div", { staticClass: "row mb-3" }, [
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
                        _c("div", [
                          _c(
                            "form",
                            {
                              staticClass: "row align-items-center px-3",
                              attrs: { action: "", method: "post" }
                            },
                            [
                              _c(
                                "button",
                                {
                                  staticClass: "col btn btn-secondary",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.showSensor(
                                        produksi.keramba_sesudah
                                      )
                                    }
                                  }
                                },
                                [_vm._v("Sensor IoT")]
                              )
                            ]
                          ),
                          _vm._v(" "),
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
                                    "\n                                            Ubah\n                                        "
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
                                    "\n                                            Pindah\n                                        "
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
                                    "\n                                            Panen\n                                        "
                                  )
                                ]
                              )
                            ],
                            1
                          )
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
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c(
                        "modal",
                        {
                          attrs: { show: _vm.showModalSensor },
                          on: {
                            "update:show": function($event) {
                              _vm.showModalSensor = $event
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
                              [_vm._v("Informasi Sensor")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("template", { slot: "body" }, [
                            _c("p", { staticClass: "text-muted" }, [
                              _vm._v("Suhu Air")
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "font-weight-bold" }, [
                              _vm._v(_vm._s(_vm.sensorSuhu.suhu_air) + " ° C")
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "text-muted" }, [
                              _vm._v("Oksigen Terlarut")
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "font-weight-bold" }, [
                              _vm._v(_vm._s(_vm.sensorDo.do_air))
                            ])
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
                                  attrs: { type: "link" },
                                  on: {
                                    click: function($event) {
                                      _vm.showModalSensor = false
                                    }
                                  }
                                },
                                [_vm._v("Kembali")]
                              )
                            ],
                            1
                          )
                        ],
                        2
                      )
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
                          attrs: { show: _vm.showModalPakan },
                          on: {
                            "update:show": function($event) {
                              _vm.showModalPakan = $event
                            }
                          }
                        },
                        [
                          _c("template", { slot: "header" }, [
                            _c(
                              "h4",
                              {
                                staticClass: "modal-title",
                                attrs: { id: "exampleModalLabel" }
                              },
                              [_vm._v("Informasi Pakan Otomatis")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("template", { slot: "body" }, [
                            _c("div", [
                              _c("p", { staticClass: "text-muted" }, [
                                _vm._v("Baterai")
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-weight-bold" }, [
                                _vm._v(
                                  _vm._s(_vm.sensorPakan.baterai_pakan) + " %"
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "template",
                            { slot: "footer" },
                            [
                              _c(
                                "base-button",
                                {
                                  attrs: { type: "secondary" },
                                  on: {
                                    click: function($event) {
                                      _vm.showModalPakan = false
                                    }
                                  }
                                },
                                [_vm._v("Kembali")]
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
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
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