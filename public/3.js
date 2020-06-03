(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'page-visits-table',
  data: function data() {
    return {
      tableData: [{
        page: '/argon/',
        visitors: '4,569',
        unique: '340',
        bounceRate: '46,53%',
        bounceRateDirection: 'up'
      }, {
        page: '/argon/index.html',
        visitors: '3,985',
        unique: '319',
        bounceRate: '46,53%',
        bounceRateDirection: 'down'
      }, {
        page: '/argon/charts.html',
        visitors: '3,513',
        unique: '294',
        bounceRate: '36,49%',
        bounceRateDirection: 'down'
      }, {
        page: '/argon/tables.html',
        visitors: '2,050',
        unique: '147',
        bounceRate: '50,87%',
        bounceRateDirection: 'up'
      }, {
        page: '/argon/profile.html',
        visitors: '1,795',
        unique: '190',
        bounceRate: '46,53%',
        bounceRateDirection: 'down'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'social-traffic-table',
  data: function data() {
    return {
      tableData: [{
        name: 'Facebook',
        visitors: '1,480',
        progress: 60,
        progressType: 'gradient-danger'
      }, {
        name: 'LinkedIn',
        visitors: '5,480',
        progress: 70,
        progressType: 'gradient-success'
      }, {
        name: 'Google',
        visitors: '4,807',
        progress: 80,
        progressType: 'gradient-primary'
      }, {
        name: 'Instagram',
        visitors: '3,678',
        progress: 75,
        progressType: 'gradient-info'
      }, {
        name: 'Twitter',
        visitors: '2,645',
        progress: 30,
        progressType: 'gradient-warning'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DashboardBackup.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DashboardBackup.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Charts_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Charts/config */ "./resources/js/components/Charts/config.js");
/* harmony import */ var _components_Charts_LineChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Charts/LineChart */ "./resources/js/components/Charts/LineChart.js");
/* harmony import */ var _components_Charts_BarChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Charts/BarChart */ "./resources/js/components/Charts/BarChart.js");
/* harmony import */ var _Dashboard_SocialTrafficTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dashboard/SocialTrafficTable */ "./resources/js/views/Dashboard/SocialTrafficTable.vue");
/* harmony import */ var _Dashboard_PageVisitsTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dashboard/PageVisitsTable */ "./resources/js/views/Dashboard/PageVisitsTable.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Charts


 // Tables



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    LineChart: _components_Charts_LineChart__WEBPACK_IMPORTED_MODULE_1__["default"],
    BarChart: _components_Charts_BarChart__WEBPACK_IMPORTED_MODULE_2__["default"],
    PageVisitsTable: _Dashboard_PageVisitsTable__WEBPACK_IMPORTED_MODULE_4__["default"],
    SocialTrafficTable: _Dashboard_SocialTrafficTable__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      bigLineChart: {
        allData: [[0, 20, 10, 30, 15, 40, 20, 60, 60], [0, 20, 5, 25, 10, 30, 15, 40, 40]],
        activeIndex: 0,
        chartData: {
          datasets: [],
          labels: []
        },
        extraOptions: _components_Charts_config__WEBPACK_IMPORTED_MODULE_0__["blueChartOptions"]
      },
      redBarChart: {
        chartData: {
          labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Sales',
            data: [25, 20, 30, 22, 17, 29]
          }]
        }
      }
    };
  },
  methods: {
    initBigChart: function initBigChart(index) {
      var chartData = {
        datasets: [{
          label: 'Performance',
          data: this.bigLineChart.allData[index]
        }],
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      };
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    }
  },
  mounted: function mounted() {
    this.initBigChart(0);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=template&id=425e7b26&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=template&id=425e7b26& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "table-responsive" },
      [
        _c(
          "base-table",
          {
            attrs: { "thead-classes": "thead-light", data: _vm.tableData },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c("th", { attrs: { scope: "row" } }, [
                      _vm._v("\n          " + _vm._s(row.page) + "\n        ")
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n          " + _vm._s(row.visitors) + "\n        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v("\n          " + _vm._s(row.unique) + "\n        ")
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("i", {
                        staticClass: "fas fa-arrow-up text-success mr-3",
                        class:
                          row.bounceRateDirection === "up"
                            ? "text-success"
                            : "text-danger"
                      }),
                      _vm._v(
                        "\n          " + _vm._s(row.bounceRate) + "\n        "
                      )
                    ])
                  ]
                }
              }
            ])
          },
          [
            _c("template", { slot: "columns" }, [
              _c("th", [_vm._v("Page name")]),
              _vm._v(" "),
              _c("th", [_vm._v("Visitors")]),
              _vm._v(" "),
              _c("th", [_vm._v("Unique users")]),
              _vm._v(" "),
              _c("th", [_vm._v("Bounce rate")])
            ])
          ],
          2
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-0" }, [
      _c("div", { staticClass: "row align-items-center" }, [
        _c("div", { staticClass: "col" }, [
          _c("h3", { staticClass: "mb-0" }, [_vm._v("Page visits")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col text-right" }, [
          _c(
            "a",
            { staticClass: "btn btn-sm btn-primary", attrs: { href: "#!" } },
            [_vm._v("See all")]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=template&id=66e6ad10&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=template&id=66e6ad10& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-header border-0" }, [
      _c("div", { staticClass: "row align-items-center" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col text-right" },
          [
            _c("base-button", { attrs: { size: "sm", type: "primary" } }, [
              _vm._v("See all")
            ])
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "table-responsive" },
      [
        _c(
          "base-table",
          {
            attrs: { "thead-classes": "thead-light", data: _vm.tableData },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c("th", { attrs: { scope: "row" } }, [
                      _vm._v("\n          " + _vm._s(row.name) + "\n        ")
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n          " + _vm._s(row.visitors) + "\n        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "div",
                        { staticClass: "d-flex align-items-center" },
                        [
                          _c("span", { staticClass: "mr-2" }, [
                            _vm._v(_vm._s(row.progress) + "%")
                          ]),
                          _vm._v(" "),
                          _c("base-progress", {
                            staticClass: "pt-0",
                            attrs: {
                              type: row.progressType,
                              "show-percentage": false,
                              value: row.progress
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ]
                }
              }
            ])
          },
          [
            _c("template", { slot: "columns" }, [
              _c("th", [_vm._v("Referral")]),
              _vm._v(" "),
              _c("th", [_vm._v("Visitors")]),
              _vm._v(" "),
              _c("th")
            ])
          ],
          2
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h3", { staticClass: "mb-0" }, [_vm._v("Social traffic")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DashboardBackup.vue?vue&type=template&id=713b64b2&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DashboardBackup.vue?vue&type=template&id=713b64b2& ***!
  \*************************************************************************************************************************************************************************************************************/
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
          staticClass: "pb-6 pb-8 pt-5 pt-md-8",
          attrs: { type: "gradient-success" }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Total traffic",
                      type: "gradient-red",
                      "sub-title": "350,897",
                      icon: "ni ni-active-40"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 3.48%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Total traffic",
                      type: "gradient-orange",
                      "sub-title": "2,356",
                      icon: "ni ni-chart-pie-35"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 12.18%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Sales",
                      type: "gradient-green",
                      "sub-title": "924",
                      icon: "ni ni-money-coins"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-danger mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-down" }),
                        _vm._v(" 5.72%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Performance",
                      type: "gradient-info",
                      "sub-title": "49,65%",
                      icon: "ni ni-chart-bar-32"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 54.8%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
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
            { staticClass: "col-xl-8 mb-5 mb-xl-0" },
            [
              _c(
                "card",
                {
                  attrs: { type: "default", "header-classes": "bg-transparent" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "row align-items-center",
                      attrs: { slot: "header" },
                      slot: "header"
                    },
                    [
                      _c("div", { staticClass: "col" }, [
                        _c(
                          "h6",
                          {
                            staticClass: "text-light text-uppercase ls-1 mb-1"
                          },
                          [_vm._v("Overview")]
                        ),
                        _vm._v(" "),
                        _c("h5", { staticClass: "h3 text-white mb-0" }, [
                          _vm._v("Sales value")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c(
                          "ul",
                          { staticClass: "nav nav-pills justify-content-end" },
                          [
                            _c("li", { staticClass: "nav-item mr-2 mr-md-0" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link py-2 px-3",
                                  class: {
                                    active: _vm.bigLineChart.activeIndex === 0
                                  },
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.initBigChart(0)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    { staticClass: "d-none d-md-block" },
                                    [_vm._v("Month")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "d-md-none" }, [
                                    _vm._v("M")
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link py-2 px-3",
                                  class: {
                                    active: _vm.bigLineChart.activeIndex === 1
                                  },
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.initBigChart(1)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    { staticClass: "d-none d-md-block" },
                                    [_vm._v("Week")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "d-md-none" }, [
                                    _vm._v("W")
                                  ])
                                ]
                              )
                            ])
                          ]
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("line-chart", {
                    ref: "bigChart",
                    attrs: {
                      height: 350,
                      "chart-data": _vm.bigLineChart.chartData,
                      "extra-options": _vm.bigLineChart.extraOptions
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xl-4" },
            [
              _c(
                "card",
                { attrs: { "header-classes": "bg-transparent" } },
                [
                  _c(
                    "div",
                    {
                      staticClass: "row align-items-center",
                      attrs: { slot: "header" },
                      slot: "header"
                    },
                    [
                      _c("div", { staticClass: "col" }, [
                        _c(
                          "h6",
                          {
                            staticClass: "text-uppercase text-muted ls-1 mb-1"
                          },
                          [_vm._v("Performance")]
                        ),
                        _vm._v(" "),
                        _c("h5", { staticClass: "h3 mb-0" }, [
                          _vm._v("Total orders")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("bar-chart", {
                    ref: "barChart",
                    attrs: {
                      height: 350,
                      "chart-data": _vm.redBarChart.chartData
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row mt-5" }, [
          _c(
            "div",
            { staticClass: "col-xl-8 mb-5 mb-xl-0" },
            [_c("page-visits-table")],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xl-4" },
            [_c("social-traffic-table")],
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

/***/ "./resources/js/views/Dashboard/PageVisitsTable.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/Dashboard/PageVisitsTable.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageVisitsTable_vue_vue_type_template_id_425e7b26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageVisitsTable.vue?vue&type=template&id=425e7b26& */ "./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=template&id=425e7b26&");
/* harmony import */ var _PageVisitsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageVisitsTable.vue?vue&type=script&lang=js& */ "./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageVisitsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageVisitsTable_vue_vue_type_template_id_425e7b26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageVisitsTable_vue_vue_type_template_id_425e7b26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Dashboard/PageVisitsTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageVisitsTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=template&id=425e7b26&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=template&id=425e7b26& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_template_id_425e7b26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageVisitsTable.vue?vue&type=template&id=425e7b26& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/PageVisitsTable.vue?vue&type=template&id=425e7b26&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_template_id_425e7b26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_template_id_425e7b26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Dashboard/SocialTrafficTable.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/Dashboard/SocialTrafficTable.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SocialTrafficTable_vue_vue_type_template_id_66e6ad10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SocialTrafficTable.vue?vue&type=template&id=66e6ad10& */ "./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=template&id=66e6ad10&");
/* harmony import */ var _SocialTrafficTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocialTrafficTable.vue?vue&type=script&lang=js& */ "./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SocialTrafficTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SocialTrafficTable_vue_vue_type_template_id_66e6ad10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SocialTrafficTable_vue_vue_type_template_id_66e6ad10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Dashboard/SocialTrafficTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SocialTrafficTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=template&id=66e6ad10&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=template&id=66e6ad10& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_template_id_66e6ad10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SocialTrafficTable.vue?vue&type=template&id=66e6ad10& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/SocialTrafficTable.vue?vue&type=template&id=66e6ad10&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_template_id_66e6ad10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_template_id_66e6ad10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/DashboardBackup.vue":
/*!************************************************!*\
  !*** ./resources/js/views/DashboardBackup.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardBackup_vue_vue_type_template_id_713b64b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardBackup.vue?vue&type=template&id=713b64b2& */ "./resources/js/views/DashboardBackup.vue?vue&type=template&id=713b64b2&");
/* harmony import */ var _DashboardBackup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardBackup.vue?vue&type=script&lang=js& */ "./resources/js/views/DashboardBackup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardBackup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardBackup_vue_vue_type_template_id_713b64b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardBackup_vue_vue_type_template_id_713b64b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/DashboardBackup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/DashboardBackup.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/DashboardBackup.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardBackup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardBackup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DashboardBackup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardBackup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/DashboardBackup.vue?vue&type=template&id=713b64b2&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/DashboardBackup.vue?vue&type=template&id=713b64b2& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardBackup_vue_vue_type_template_id_713b64b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardBackup.vue?vue&type=template&id=713b64b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DashboardBackup.vue?vue&type=template&id=713b64b2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardBackup_vue_vue_type_template_id_713b64b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardBackup_vue_vue_type_template_id_713b64b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);