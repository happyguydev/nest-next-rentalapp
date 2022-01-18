self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "D:\\Workspace\\Company Skill Tests\\Mica\\rental-app\\src\\client\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();



var Home = function Home(_ref) {
  _s();

  var infoList = _ref.infoList;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      cityStr = _useState[0],
      setCityStr = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      addressStr = _useState2[0],
      setAddressStr = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1),
      roomVal = _useState3[0],
      setRoomValue = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1000),
      priceVal = _useState4[0],
      setPriceValue = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      infoListData = _useState5[0],
      setInfoListData = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      showAddFields = _useState6[0],
      setShowAddFields = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      addCityStr = _useState7[0],
      setAddCityStr = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      addAddressStr = _useState8[0],
      setAddAddressStr = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1),
      addRoomVal = _useState9[0],
      setAddRoomValue = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1000),
      addPriceVal = _useState10[0],
      setAddPriceValue = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      equipmentsList = _useState11[0],
      setEquipmentsList = _useState11[1];

  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      equipmentValue = _useState12[0],
      setEquipmentValue = _useState12[1];

  var showAddFieldsItems = /*#__PURE__*/function () {
    var _ref2 = (0,D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var res, equipments;
      return D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('http://localhost:3000/equipment');

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.json();

            case 5:
              equipments = _context.sent;
              setEquipmentsList(equipments);
              setShowAddFields(true);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function showAddFieldsItems() {
      return _ref2.apply(this, arguments);
    };
  }();

  var addItem = /*#__PURE__*/function () {
    var _ref3 = (0,D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var res, list;
      return D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(addCityStr === '' || addAddressStr === '')) {
                _context2.next = 3;
                break;
              }

              alert('Insert City or Address!');
              return _context2.abrupt("return");

            case 3:
              _context2.next = 5;
              return fetch('/dummy/add', {
                method: 'post',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  city: addCityStr,
                  address: addAddressStr,
                  rooms: addRoomVal,
                  price: addPriceVal,
                  equipmentIds: equipmentValue
                })
              });

            case 5:
              res = _context2.sent;
              _context2.next = 8;
              return res.json();

            case 8:
              list = _context2.sent;

              if (list.statusCode !== 500) {
                alert('Successfully added!');
                setShowAddFields(false);
                setCityStr('');
                setAddressStr('');
                setRoomValue(1);
                setPriceValue(1000);
                setAddCityStr('');
                setAddAddressStr('');
                setAddRoomValue(1);
                setAddPriceValue(1000);
              } else {
                alert('Error!');
              }

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function addItem() {
      return _ref3.apply(this, arguments);
    };
  }();

  var cancelAddItem = function cancelAddItem() {
    setAddCityStr('');
    setAddAddressStr('');
    setShowAddFields(false);
  };

  var removeItem = /*#__PURE__*/function () {
    var _ref4 = (0,D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(id) {
      var res, list;
      return D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (confirm('Do you want to delete?')) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              _context3.next = 4;
              return fetch('http://localhost:3000/dummy/remove/' + id, {
                method: 'DELETE'
              });

            case 4:
              res = _context3.sent;
              _context3.next = 7;
              return res.json();

            case 7:
              list = _context3.sent;

              if (list) {
                alert('Successfully Deleted!');
                setShowAddFields(false);
                setCityStr('');
                setAddressStr('');
                setRoomValue(1);
                setPriceValue(1000);
              } else {
                alert('Error!');
              }

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function removeItem(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  var onChangeRoomValue = /*#__PURE__*/function () {
    var _ref5 = (0,D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(value) {
      var addFlag,
          _args4 = arguments;
      return D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              addFlag = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : false;

              if (!addFlag) {
                _context4.next = 4;
                break;
              }

              setAddRoomValue(value);
              return _context4.abrupt("return");

            case 4:
              setRoomValue(value);

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function onChangeRoomValue(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();

  var onChangePriceValue = function onChangePriceValue(value) {
    var addFlag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (addFlag) {
      setAddPriceValue(value);
      return;
    }

    setPriceValue(value);
  };

  var onChangeCityText = function onChangeCityText(str) {
    var addFlag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (addFlag) {
      setAddCityStr(str);
      return;
    }

    setCityStr(str);
  };

  var onChangeAddressText = function onChangeAddressText(str) {
    var addFlag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (addFlag) {
      setAddAddressStr(str);
      return;
    }

    setAddressStr(str);
  };

  var onChangeEquipment = function onChangeEquipment(data) {
    setEquipmentValue(Array.from(data, function (item) {
      return Number(item.value);
    }));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    function search() {
      return _search.apply(this, arguments);
    }

    function _search() {
      _search = (0,D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5() {
        var res, data;
        return D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return fetch('http://localhost:3000/dummy/search?rooms=' + roomVal + '&price=' + priceVal + '&city=' + cityStr + '&address=' + addressStr);

              case 2:
                res = _context5.sent;
                _context5.next = 5;
                return res.json();

              case 5:
                data = _context5.sent;
                setInfoListData(data);

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));
      return _search.apply(this, arguments);
    }

    search();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "list",
    children: [!showAddFields ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "list_header",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          onChange: function onChange(e) {
            return onChangeCityText(e.target.value);
          },
          value: cityStr,
          placeholder: "Search City"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          onChange: function onChange(e) {
            return onChangeAddressText(e.target.value);
          },
          value: addressStr,
          placeholder: "Search Address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "list_header",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Rooms: ", roomVal]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: "list_slider",
            type: "range",
            min: "1",
            max: "10",
            step: "1",
            value: roomVal,
            onChange: function onChange(e) {
              return onChangeRoomValue(Number(e.target.value));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Price: ", priceVal]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: "list_slider",
            type: "range",
            min: "1000",
            max: "10000",
            step: "100",
            value: priceVal,
            onChange: function onChange(e) {
              return onChangePriceValue(Number(e.target.value));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "list_action",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          onClick: function onClick() {
            return showAddFieldsItems();
          },
          children: "Add apartment"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 11
      }, _this)]
    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "list_header",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          onChange: function onChange(e) {
            return onChangeCityText(e.target.value, true);
          },
          value: addCityStr,
          placeholder: "Add City"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          onChange: function onChange(e) {
            return onChangeAddressText(e.target.value, true);
          },
          value: addAddressStr,
          placeholder: "Add Address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "list_header",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Rooms: ", addRoomVal]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: "list_slider",
            type: "range",
            min: "1",
            max: "10",
            step: "1",
            value: addRoomVal,
            onChange: function onChange(e) {
              return onChangeRoomValue(Number(e.target.value), true);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Price: ", addPriceVal]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: "list_slider",
            type: "range",
            min: "1000",
            max: "10000",
            step: "100",
            value: addPriceVal,
            onChange: function onChange(e) {
              return onChangePriceValue(Number(e.target.value), true);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "list_equipment",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
          name: "equipment",
          id: "equipment",
          onChange: function onChange(e) {
            return onChangeEquipment(e.target.selectedOptions);
          },
          multiple: true,
          children: equipmentsList.map(function (item, index) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: item.id,
              children: item.name
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 19
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "list_action",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          onClick: function onClick() {
            return addItem();
          },
          children: "Ok"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          onClick: function onClick() {
            return cancelAddItem();
          },
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 11
      }, _this)]
    }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "content",
      children: infoListData && infoListData.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "content_item",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                  children: "City: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 23
                }, _this), item.city]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                  children: "Address: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 233,
                  columnNumber: 23
                }, _this), item.address]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                  children: "Rooms: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 239,
                  columnNumber: 23
                }, _this), item.rooms]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 238,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                  children: "Price: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 243,
                  columnNumber: 23
                }, _this), item.price]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: item.equipments.map(function (equipment, index) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: equipment.equipmentData.name
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 250,
                    columnNumber: 32
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 248,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 247,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              onClick: function onClick() {
                return removeItem(item.id);
              },
              children: "Remove"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 256,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 17
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 15
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "list_result",
      children: ["Matches ", infoListData && infoListData.length, " results"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 137,
    columnNumber: 5
  }, _this);
};

_s(Home, "7VQsDhhJuIG75MjRvauHXfbrD6g=");

_c = Home;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJpbmZvTGlzdCIsInVzZVN0YXRlIiwiY2l0eVN0ciIsInNldENpdHlTdHIiLCJhZGRyZXNzU3RyIiwic2V0QWRkcmVzc1N0ciIsInJvb21WYWwiLCJzZXRSb29tVmFsdWUiLCJwcmljZVZhbCIsInNldFByaWNlVmFsdWUiLCJpbmZvTGlzdERhdGEiLCJzZXRJbmZvTGlzdERhdGEiLCJzaG93QWRkRmllbGRzIiwic2V0U2hvd0FkZEZpZWxkcyIsImFkZENpdHlTdHIiLCJzZXRBZGRDaXR5U3RyIiwiYWRkQWRkcmVzc1N0ciIsInNldEFkZEFkZHJlc3NTdHIiLCJhZGRSb29tVmFsIiwic2V0QWRkUm9vbVZhbHVlIiwiYWRkUHJpY2VWYWwiLCJzZXRBZGRQcmljZVZhbHVlIiwiZXF1aXBtZW50c0xpc3QiLCJzZXRFcXVpcG1lbnRzTGlzdCIsImVxdWlwbWVudFZhbHVlIiwic2V0RXF1aXBtZW50VmFsdWUiLCJzaG93QWRkRmllbGRzSXRlbXMiLCJmZXRjaCIsInJlcyIsImpzb24iLCJlcXVpcG1lbnRzIiwiYWRkSXRlbSIsImFsZXJ0IiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY2l0eSIsImFkZHJlc3MiLCJyb29tcyIsInByaWNlIiwiZXF1aXBtZW50SWRzIiwibGlzdCIsInN0YXR1c0NvZGUiLCJjYW5jZWxBZGRJdGVtIiwicmVtb3ZlSXRlbSIsImlkIiwiY29uZmlybSIsIm9uQ2hhbmdlUm9vbVZhbHVlIiwidmFsdWUiLCJhZGRGbGFnIiwib25DaGFuZ2VQcmljZVZhbHVlIiwib25DaGFuZ2VDaXR5VGV4dCIsInN0ciIsIm9uQ2hhbmdlQWRkcmVzc1RleHQiLCJvbkNoYW5nZUVxdWlwbWVudCIsImRhdGEiLCJBcnJheSIsImZyb20iLCJpdGVtIiwiTnVtYmVyIiwidXNlRWZmZWN0Iiwic2VhcmNoIiwiZSIsInRhcmdldCIsInNlbGVjdGVkT3B0aW9ucyIsIm1hcCIsImluZGV4IiwibmFtZSIsImVxdWlwbWVudCIsImVxdWlwbWVudERhdGEiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQVNBLElBQU1BLElBQTZCLEdBQUcsU0FBaENBLElBQWdDLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUN4QkMsK0NBQVEsQ0FBQyxFQUFELENBRGdCO0FBQUEsTUFDL0NDLE9BRCtDO0FBQUEsTUFDdENDLFVBRHNDOztBQUFBLG1CQUVsQkYsK0NBQVEsQ0FBQyxFQUFELENBRlU7QUFBQSxNQUUvQ0csVUFGK0M7QUFBQSxNQUVuQ0MsYUFGbUM7O0FBQUEsbUJBR3RCSiwrQ0FBUSxDQUFDLENBQUQsQ0FIYztBQUFBLE1BRy9DSyxPQUgrQztBQUFBLE1BR3RDQyxZQUhzQzs7QUFBQSxtQkFJcEJOLCtDQUFRLENBQUMsSUFBRCxDQUpZO0FBQUEsTUFJL0NPLFFBSitDO0FBQUEsTUFJckNDLGFBSnFDOztBQUFBLG1CQUtkUiwrQ0FBUSxDQUFDLEVBQUQsQ0FMTTtBQUFBLE1BSy9DUyxZQUwrQztBQUFBLE1BS2pDQyxlQUxpQzs7QUFBQSxtQkFNWlYsK0NBQVEsQ0FBQyxLQUFELENBTkk7QUFBQSxNQU0vQ1csYUFOK0M7QUFBQSxNQU1oQ0MsZ0JBTmdDOztBQUFBLG1CQVFsQlosK0NBQVEsQ0FBQyxFQUFELENBUlU7QUFBQSxNQVEvQ2EsVUFSK0M7QUFBQSxNQVFuQ0MsYUFSbUM7O0FBQUEsbUJBU1pkLCtDQUFRLENBQUMsRUFBRCxDQVRJO0FBQUEsTUFTL0NlLGFBVCtDO0FBQUEsTUFTaENDLGdCQVRnQzs7QUFBQSxtQkFVaEJoQiwrQ0FBUSxDQUFDLENBQUQsQ0FWUTtBQUFBLE1BVS9DaUIsVUFWK0M7QUFBQSxNQVVuQ0MsZUFWbUM7O0FBQUEsb0JBV2RsQiwrQ0FBUSxDQUFDLElBQUQsQ0FYTTtBQUFBLE1BVy9DbUIsV0FYK0M7QUFBQSxN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LG1DQUNFO0FBQUcsa0JBQUksRUFBQyxHQUFSO0FBQVkscUJBQU8sRUFBRTtBQUFBLHVCQUFNdEIsVUFBVSxDQUFDYyxJQUFJLENBQUNiLEVBQU4sQ0FBaEI7QUFBQSxlQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBOUJGO0FBQUEsV0FBU3FCLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQXNDRCxPQXZDRDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwRkYsZUErSEU7QUFBRyxlQUFTLEVBQUMsYUFBYjtBQUFBLDZCQUFvQzFELFlBQVksSUFBSUEsWUFBWSxDQUFDOEQsTUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBL0hGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUlELENBalFEOztHQUFNekUsSTs7S0FBQUEsSTs7QUEwUU4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzg0MzE2NDZjYTUwZDhkNzQxY2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5cbmltcG9ydCB7IEluZm9ybWF0aW9uIH0gZnJvbSAnfnNlcnZlci9tb2R1bGVzL2VudGl0aWVzL2luZm9ybWF0aW9uLmVudGl0eSdcblxudHlwZSBIb21lUGFnZVByb3BzID0ge1xuICBpbmZvTGlzdDogSW5mb3JtYXRpb25bXVxufVxuXG5jb25zdCBIb21lOiBOZXh0UGFnZTxIb21lUGFnZVByb3BzPiA9ICh7IGluZm9MaXN0IH0pID0+IHtcbiAgY29uc3QgW2NpdHlTdHIsIHNldENpdHlTdHJdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFthZGRyZXNzU3RyLCBzZXRBZGRyZXNzU3RyXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbcm9vbVZhbCwgc2V0Um9vbVZhbHVlXSA9IHVzZVN0YXRlKDEpXG4gIGNvbnN0IFtwcmljZVZhbCwgc2V0UHJpY2VWYWx1ZV0gPSB1c2VTdGF0ZSgxMDAwKVxuICBjb25zdCBbaW5mb0xpc3REYXRhLCBzZXRJbmZvTGlzdERhdGFdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtzaG93QWRkRmllbGRzLCBzZXRTaG93QWRkRmllbGRzXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IFthZGRDaXR5U3RyLCBzZXRBZGRDaXR5U3RyXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbYWRkQWRkcmVzc1N0ciwgc2V0QWRkQWRkcmVzc1N0cl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2FkZFJvb21WYWwsIHNldEFkZFJvb21WYWx1ZV0gPSB1c2VTdGF0ZSgxKVxuICBjb25zdCBbYWRkUHJpY2VWYWwsIHNldEFkZFByaWNlVmFsdWVdID0gdXNlU3RhdGUoMTAwMClcbiAgY29uc3QgW2VxdWlwbWVudHNMaXN0LCBzZXRFcXVpcG1lbnRzTGlzdF0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2VxdWlwbWVudFZhbHVlLCBzZXRFcXVpcG1lbnRWYWx1ZV0gPSB1c2VTdGF0ZShbXSlcblxuICBjb25zdCBzaG93QWRkRmllbGRzSXRlbXMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9lcXVpcG1lbnQnKVxuICAgIGNvbnN0IGVxdWlwbWVudHMgPSBhd2FpdCByZXMuanNvbigpXG4gICAgc2V0RXF1aXBtZW50c0xpc3QoZXF1aXBtZW50cylcbiAgICBzZXRTaG93QWRkRmllbGRzKHRydWUpXG4gIH1cblxuICBjb25zdCBhZGRJdGVtID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChhZGRDaXR5U3RyID09PSAnJyB8fCBhZGRBZGRyZXNzU3RyID09PSAnJykge1xuICAgICAgYWxlcnQoJ0luc2VydCBDaXR5IG9yIEFkZHJlc3MhJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvZHVtbXkvYWRkJywge1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgY2l0eTogYWRkQ2l0eVN0cixcbiAgICAgICAgYWRkcmVzczogYWRkQWRkcmVzc1N0cixcbiAgICAgICAgcm9vbXM6IGFkZFJvb21WYWwsXG4gICAgICAgIHByaWNlOiBhZGRQcmljZVZhbCxcbiAgICAgICAgZXF1aXBtZW50SWRzOiBlcXVpcG1lbnRWYWx1ZVxuICAgICAgfSlcbiAgICB9KVxuICAgIGNvbnN0IGxpc3QgPSBhd2FpdCByZXMuanNvbigpXG4gICAgaWYgKGxpc3Quc3RhdHVzQ29kZSAhPT0gNTAwKSB7XG4gICAgICBhbGVydCgnU3VjY2Vzc2Z1bGx5IGFkZGVkIScpXG4gICAgICBzZXRTaG93QWRkRmllbGRzKGZhbHNlKVxuICAgICAgc2V0Q2l0eVN0cignJylcbiAgICAgIHNldEFkZHJlc3NTdHIoJycpXG4gICAgICBzZXRSb29tVmFsdWUoMSlcbiAgICAgIHNldFByaWNlVmFsdWUoMTAwMClcbiAgICAgIHNldEFkZENpdHlTdHIoJycpXG4gICAgICBzZXRBZGRBZGRyZXNzU3RyKCcnKVxuICAgICAgc2V0QWRkUm9vbVZhbHVlKDEpXG4gICAgICBzZXRBZGRQcmljZVZhbHVlKDEwMDApXG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KCdFcnJvciEnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNhbmNlbEFkZEl0ZW0gPSAoKSA9PiB7XG4gICAgc2V0QWRkQ2l0eVN0cignJylcbiAgICBzZXRBZGRBZGRyZXNzU3RyKCcnKVxuICAgIHNldFNob3dBZGRGaWVsZHMoZmFsc2UpXG4gIH1cblxuICBjb25zdCByZW1vdmVJdGVtID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcbiAgICBpZiAoIWNvbmZpcm0oJ0RvIHlvdSB3YW50IHRvIGRlbGV0ZT8nKSkgcmV0dXJuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9kdW1teS9yZW1vdmUvJyArIGlkLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnXG4gICAgfSlcbiAgICBjb25zdCBsaXN0ID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIGlmIChsaXN0KSB7XG4gICAgICBhbGVydCgnU3VjY2Vzc2Z1bGx5IERlbGV0ZWQhJylcbiAgICAgIHNldFNob3dBZGRGaWVsZHMoZmFsc2UpXG4gICAgICBzZXRDaXR5U3RyKCcnKVxuICAgICAgc2V0QWRkcmVzc1N0cignJylcbiAgICAgIHNldFJvb21WYWx1ZSgxKVxuICAgICAgc2V0UHJpY2VWYWx1ZSgxMDAwKVxuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydCgnRXJyb3IhJylcbiAgICB9XG4gIH1cblxuICBjb25zdCBvbkNoYW5nZVJvb21WYWx1ZSA9IGFzeW5jICh2YWx1ZTogbnVtYmVyLCBhZGRGbGFnID0gZmFsc2UpID0+IHtcbiAgICBpZiAoYWRkRmxhZykge1xuICAgICAgc2V0QWRkUm9vbVZhbHVlKHZhbHVlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNldFJvb21WYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IG9uQ2hhbmdlUHJpY2VWYWx1ZSA9ICh2YWx1ZTogbnVtYmVyLCBhZGRGbGFnID0gZmFsc2UpID0+IHtcbiAgICBpZiAoYWRkRmxhZykge1xuICAgICAgc2V0QWRkUHJpY2VWYWx1ZSh2YWx1ZSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZXRQcmljZVZhbHVlKHZhbHVlKVxuICB9XG5cbiAgY29uc3Qgb25DaGFuZ2VDaXR5VGV4dCA9IChzdHI6IHN0cmluZywgYWRkRmxhZyA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKGFkZEZsYWcpIHtcbiAgICAgIHNldEFkZENpdHlTdHIoc3RyKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNldENpdHlTdHIoc3RyKVxuICB9XG5cbiAgY29uc3Qgb25DaGFuZ2VBZGRyZXNzVGV4dCA9IChzdHI6IHN0cmluZywgYWRkRmxhZyA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKGFkZEZsYWcpIHtcbiAgICAgIHNldEFkZEFkZHJlc3NTdHIoc3RyKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNldEFkZHJlc3NTdHIoc3RyKVxuICB9XG5cbiAgY29uc3Qgb25DaGFuZ2VFcXVpcG1lbnQgPSAoZGF0YTogSFRNTENvbGxlY3Rpb25PZjxIVE1MT3B0aW9uRWxlbWVudD4pID0+IHtcbiAgICBzZXRFcXVpcG1lbnRWYWx1ZShBcnJheS5mcm9tKGRhdGEsIGl0ZW0gPT4gTnVtYmVyKGl0ZW0udmFsdWUpKSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gc2VhcmNoKCkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9kdW1teS9zZWFyY2g/cm9vbXM9JyArIHJvb21WYWwgKyAnJnByaWNlPScgKyBwcmljZVZhbCArICcmY2l0eT0nICsgY2l0eVN0ciArICcmYWRkcmVzcz0nICsgYWRkcmVzc1N0cilcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgICBzZXRJbmZvTGlzdERhdGEoZGF0YSlcbiAgICB9XG5cbiAgICBzZWFyY2goKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgeyFzaG93QWRkRmllbGRzID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9oZWFkZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZUNpdHlUZXh0KGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e2NpdHlTdHJ9IHBsYWNlaG9sZGVyPVwiU2VhcmNoIENpdHlcIiAvPlxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlQWRkcmVzc1RleHQoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17YWRkcmVzc1N0cn0gcGxhY2Vob2xkZXI9XCJTZWFyY2ggQWRkcmVzc1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2hlYWRlclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHA+Um9vbXM6IHtyb29tVmFsfTwvcD5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImxpc3Rfc2xpZGVyXCIgdHlwZT1cInJhbmdlXCIgbWluPVwiMVwiIG1heD1cIjEwXCIgc3RlcD1cIjFcIiB2YWx1ZT17cm9vbVZhbH0gb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2VSb29tVmFsdWUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwPlByaWNlOiB7cHJpY2VWYWx9PC9wPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0X3NsaWRlclwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICBtaW49XCIxMDAwXCJcbiAgICAgICAgICAgICAgICBtYXg9XCIxMDAwMFwiXG4gICAgICAgICAgICAgICAgc3RlcD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlVmFsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlUHJpY2VWYWx1ZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9hY3Rpb25cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gc2hvd0FkZEZpZWxkc0l0ZW1zKCl9PlxuICAgICAgICAgICAgICBBZGQgYXBhcnRtZW50XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaGVhZGVyXCI+XG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2VDaXR5VGV4dChlLnRhcmdldC52YWx1ZSwgdHJ1ZSl9IHZhbHVlPXthZGRDaXR5U3RyfSBwbGFjZWhvbGRlcj1cIkFkZCBDaXR5XCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZUFkZHJlc3NUZXh0KGUudGFyZ2V0LnZhbHVlLCB0cnVlKX0gdmFsdWU9e2FkZEFkZHJlc3NTdHJ9IHBsYWNlaG9sZGVyPVwiQWRkIEFkZHJlc3NcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9oZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwPlJvb21zOiB7YWRkUm9vbVZhbH08L3A+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3Rfc2xpZGVyXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgICAgICAgIG1heD1cIjEwXCJcbiAgICAgICAgICAgICAgICBzdGVwPVwiMVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2FkZFJvb21WYWx9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2VSb29tVmFsdWUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSwgdHJ1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwPlByaWNlOiB7YWRkUHJpY2VWYWx9PC9wPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0X3NsaWRlclwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICBtaW49XCIxMDAwXCJcbiAgICAgICAgICAgICAgICBtYXg9XCIxMDAwMFwiXG4gICAgICAgICAgICAgICAgc3RlcD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2FkZFByaWNlVmFsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlUHJpY2VWYWx1ZShOdW1iZXIoZS50YXJnZXQudmFsdWUpLCB0cnVlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9lcXVpcG1lbnRcIj5cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImVxdWlwbWVudFwiIGlkPVwiZXF1aXBtZW50XCIgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2VFcXVpcG1lbnQoZS50YXJnZXQuc2VsZWN0ZWRPcHRpb25zKX0gbXVsdGlwbGU+XG4gICAgICAgICAgICAgIHtlcXVpcG1lbnRzTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9hY3Rpb25cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gYWRkSXRlbSgpfT5cbiAgICAgICAgICAgICAgT2tcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gY2FuY2VsQWRkSXRlbSgpfT5cbiAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgIHtpbmZvTGlzdERhdGEgJiZcbiAgICAgICAgICBpbmZvTGlzdERhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q2l0eTogPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY2l0eX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5BZGRyZXNzOiA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5hZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlJvb21zOiA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5yb29tc31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5QcmljZTogPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucHJpY2V9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmVxdWlwbWVudHMubWFwKChlcXVpcG1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtpbmRleH0+e2VxdWlwbWVudC5lcXVpcG1lbnREYXRhLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHJlbW92ZUl0ZW0oaXRlbS5pZCl9PlxuICAgICAgICAgICAgICAgICAgICBSZW1vdmVcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgICA8cCBjbGFzc05hbWU9XCJsaXN0X3Jlc3VsdFwiPk1hdGNoZXMge2luZm9MaXN0RGF0YSAmJiBpbmZvTGlzdERhdGEubGVuZ3RofSByZXN1bHRzPC9wPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvZHVtbXkvYWxsJylcbiAgY29uc3QgaW5mb0xpc3QgPSBhd2FpdCByZXMuanNvbigpXG4gIGNvbnNvbGUubG9nKGluZm9MaXN0KVxuICByZXR1cm4geyBwcm9wczogeyBpbmZvTGlzdCB9IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==