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

  var search = /*#__PURE__*/function () {
    var _ref2 = (0,D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var res, data;
      return D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('http://localhost:3000/dummy/search?rooms=' + roomVal + '&price=' + priceVal + '&city=' + cityStr + '&address=' + addressStr);

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.json();

            case 5:
              data = _context.sent;
              setInfoListData(data);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function search() {
      return _ref2.apply(this, arguments);
    };
  }();

  var showAddFieldsItems = /*#__PURE__*/function () {
    var _ref3 = (0,D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var res, equipments;
      return D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch('http://localhost:3000/equipment');

            case 2:
              res = _context2.sent;
              _context2.next = 5;
              return res.json();

            case 5:
              equipments = _context2.sent;
              setEquipmentsList(equipments);
              setShowAddFields(true);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function showAddFieldsItems() {
      return _ref3.apply(this, arguments);
    };
  }();

  var addItem = /*#__PURE__*/function () {
    var _ref4 = (0,D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
      var res, list;
      return D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(addCityStr === '' || addAddressStr === '')) {
                _context3.next = 3;
                break;
              }

              alert('Insert City or Address!');
              return _context3.abrupt("return");

            case 3:
              _context3.next = 5;
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
              res = _context3.sent;
              _context3.next = 8;
              return res.json();

            case 8:
              list = _context3.sent;

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
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function addItem() {
      return _ref4.apply(this, arguments);
    };
  }();

  var cancelAddItem = function cancelAddItem() {
    setAddCityStr('');
    setAddAddressStr('');
    setShowAddFields(false);
  };

  var removeItem = /*#__PURE__*/function () {
    var _ref5 = (0,D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(id) {
      var res, list;
      return D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (confirm('Do you want to delete?')) {
                _context4.next = 2;
                break;
              }

              return _context4.abrupt("return");

            case 2:
              _context4.next = 4;
              return fetch('http://localhost:3000/dummy/remove/' + id, {
                method: 'DELETE'
              });

            case 4:
              res = _context4.sent;
              _context4.next = 7;
              return res.json();

            case 7:
              list = _context4.sent;

              if (list) {
                alert('Successfully Deleted!');
                setShowAddFields(false);
                setCityStr('');
                setAddressStr('');
                setRoomValue(1);
                setPriceValue(1000);
                search();
              } else {
                alert('Error!');
              }

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function removeItem(_x) {
      return _ref5.apply(this, arguments);
    };
  }();

  var onChangeRoomValue = /*#__PURE__*/function () {
    var _ref6 = (0,D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5(value) {
      var addFlag,
          _args5 = arguments;
      return D_Workspace_Company_Skill_Tests_Mica_rental_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              addFlag = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : false;

              if (!addFlag) {
                _context5.next = 4;
                break;
              }

              setAddRoomValue(value);
              return _context5.abrupt("return");

            case 4:
              setRoomValue(value);

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function onChangeRoomValue(_x2) {
      return _ref6.apply(this, arguments);
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
    search();
  }, [infoList, cityStr, addressStr, roomVal, priceVal]);
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
          lineNumber: 142,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          onChange: function onChange(e) {
            return onChangeAddressText(e.target.value);
          },
          value: addressStr,
          placeholder: "Search Address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "list_header",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Rooms: ", roomVal]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 147,
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
            lineNumber: 148,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Price: ", priceVal]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
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
            lineNumber: 152,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
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
          lineNumber: 164,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
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
          lineNumber: 172,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          onChange: function onChange(e) {
            return onChangeAddressText(e.target.value, true);
          },
          value: addAddressStr,
          placeholder: "Add Address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "list_header",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Rooms: ", addRoomVal]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 177,
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
            lineNumber: 178,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Price: ", addPriceVal]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 189,
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
            lineNumber: 190,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 175,
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
              lineNumber: 205,
              columnNumber: 19
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 201,
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
          lineNumber: 213,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          onClick: function onClick() {
            return cancelAddItem();
          },
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 212,
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
                  lineNumber: 230,
                  columnNumber: 23
                }, _this), item.city]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                  children: "Address: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
                  columnNumber: 23
                }, _this), item.address]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                  children: "Rooms: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 23
                }, _this), item.rooms]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                  children: "Price: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 23
                }, _this), item.price]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: item.equipments.map(function (equipment, index) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: equipment.equipmentData.name
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 251,
                    columnNumber: 32
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 249,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 227,
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
              lineNumber: 257,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 17
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 15
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "list_result",
      children: ["Matches ", infoListData && infoListData.length, " results"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 138,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJpbmZvTGlzdCIsInVzZVN0YXRlIiwiY2l0eVN0ciIsInNldENpdHlTdHIiLCJhZGRyZXNzU3RyIiwic2V0QWRkcmVzc1N0ciIsInJvb21WYWwiLCJzZXRSb29tVmFsdWUiLCJwcmljZVZhbCIsInNldFByaWNlVmFsdWUiLCJpbmZvTGlzdERhdGEiLCJzZXRJbmZvTGlzdERhdGEiLCJzaG93QWRkRmllbGRzIiwic2V0U2hvd0FkZEZpZWxkcyIsImFkZENpdHlTdHIiLCJzZXRBZGRDaXR5U3RyIiwiYWRkQWRkcmVzc1N0ciIsInNldEFkZEFkZHJlc3NTdHIiLCJhZGRSb29tVmFsIiwic2V0QWRkUm9vbVZhbHVlIiwiYWRkUHJpY2VWYWwiLCJzZXRBZGRQcmljZVZhbHVlIiwiZXF1aXBtZW50c0xpc3QiLCJzZXRFcXVpcG1lbnRzTGlzdCIsImVxdWlwbWVudFZhbHVlIiwic2V0RXF1aXBtZW50VmFsdWUiLCJzZWFyY2giLCJmZXRjaCIsInJlcyIsImpzb24iLCJkYXRhIiwic2hvd0FkZEZpZWxkc0l0ZW1zIiwiZXF1aXBtZW50cyIsImFkZEl0ZW0iLCJhbGVydCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNpdHkiLCJhZGRyZXNzIiwicm9vbXMiLCJwcmljZSIsImVxdWlwbWVudElkcyIsImxpc3QiLCJzdGF0dXNDb2RlIiwiY2FuY2VsQWRkSXRlbSIsInJlbW92ZUl0ZW0iLCJpZCIsImNvbmZpcm0iLCJvbkNoYW5nZVJvb21WYWx1ZSIsInZhbHVlIiwiYWRkRmxhZyIsIm9uQ2hhbmdlUHJpY2VWYWx1ZSIsIm9uQ2hhbmdlQ2l0eVRleHQiLCJzdHIiLCJvbkNoYW5nZUFkZHJlc3NUZXh0Iiwib25DaGFuZ2VFcXVpcG1lbnQiLCJBcnJheSIsImZyb20iLCJpdGVtIiwiTnVtYmVyIiwidXNlRWZmZWN0IiwiZSIsInRhcmdldCIsInNlbGVjdGVkT3B0aW9ucyIsIm1hcCIsImluZGV4IiwibmFtZSIsImVxdWlwbWVudCIsImVxdWlwbWVudERhdGEiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQVNBLElBQU1BLElBQTZCLEdBQUcsU0FBaENBLElBQWdDLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUN4QkMsK0NBQVEsQ0FBQyxFQUFELENBRGdCO0FBQUEsTUFDL0NDLE9BRCtDO0FBQUEsTUFDdENDLFVBRHNDOztBQUFBLG1CQUVsQkYsK0NBQVEsQ0FBQyxFQUFELENBRlU7QUFBQSxNQUUvQ0csVUFGK0M7QUFBQSxNQUVuQ0MsYUFGbUM7O0FBQUEsbUJBR3RCSiwrQ0FBUSxDQUFDLENBQUQsQ0FIYztBQUFBLE1BRy9DSyxPQUgrQztBQUFBLE1BR3RDQyxZQUhzQzs7QUFBQSxtQkFJcEJOLCtDQUFRLENBQUMsSUFBRCxDQUpZO0FBQUEsTUFJL0NPLFFBSitDO0FBQUEsTUFJckNDLGFBSnFDOztBQUFBLG1CQUtkUiwrQ0FBUSxDQUFDLEVBQUQsQ0FMTTtBQUFBLE1BSy9DUyxZQUwrQztBQUFBLE1BS2pDQyxlQUxpQzs7QUFBQSxtQkFNWlYsK0NBQVEsQ0FBQyxLQUFELENBTkk7QUFBQSxNQU0vQ1csYUFOK0M7QUFBQSxNQU1oQ0MsZ0JBTmdDOztBQUFBLG1CQVFsQlosK0NBQVEsQ0FBQyxFQUFELENBUlU7QUFBQSxNQVEvQ2EsVUFSK0M7QUFBQSxNQVFuQ0MsYUFSbUM7O0FBQUEsbUJBU1pkLCtDQUFRLENBQUMsRUFBRCxDQVRJO0FBQUEsTUFTL0NlLGFBVCtDO0FBQUEsTUFTaENDLGdCQVRnQzs7QUFBQSxtQkFVaEJoQiwrQ0FBUSxDQUFDLENBQUQsQ0FWUTtBQUFBLE1BVS9DaUIsVUFWK0M7QUFBQSxNQVVuQ0MsZUFWbUM7O0FBQUEsb0JBV2RsQiwrQ0FBUSxDQUFDLElBQUQsQ0FYTTtBQUFBLE1BVy9DbUIsV0FYK0M7QUFBQSxN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QUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBOEJFO0FBQUEsbUNBQ0U7QUFBRyxrQkFBSSxFQUFDLEdBQVI7QUFBWSxxQkFBTyxFQUFFO0FBQUEsdUJBQU1wQixVQUFVLENBQUNhLElBQUksQ0FBQ1osRUFBTixDQUFoQjtBQUFBLGVBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE5QkY7QUFBQSxXQUFTbUIsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBc0NELE9BdkNEO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBGRixlQStIRTtBQUFHLGVBQVMsRUFBQyxhQUFiO0FBQUEsNkJBQW9DMUQsWUFBWSxJQUFJQSxZQUFZLENBQUM4RCxNQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEvSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtSUQsQ0FsUUQ7O0dBQU16RSxJOztLQUFBQSxJOztBQTJRTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ZTU3OGZmNDUxNTVlY2E5OWEwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcblxuaW1wb3J0IHsgSW5mb3JtYXRpb24gfSBmcm9tICd+c2VydmVyL21vZHVsZXMvZW50aXRpZXMvaW5mb3JtYXRpb24uZW50aXR5J1xuXG50eXBlIEhvbWVQYWdlUHJvcHMgPSB7XG4gIGluZm9MaXN0OiBJbmZvcm1hdGlvbltdXG59XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlPEhvbWVQYWdlUHJvcHM+ID0gKHsgaW5mb0xpc3QgfSkgPT4ge1xuICBjb25zdCBbY2l0eVN0ciwgc2V0Q2l0eVN0cl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2FkZHJlc3NTdHIsIHNldEFkZHJlc3NTdHJdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtyb29tVmFsLCBzZXRSb29tVmFsdWVdID0gdXNlU3RhdGUoMSlcbiAgY29uc3QgW3ByaWNlVmFsLCBzZXRQcmljZVZhbHVlXSA9IHVzZVN0YXRlKDEwMDApXG4gIGNvbnN0IFtpbmZvTGlzdERhdGEsIHNldEluZm9MaXN0RGF0YV0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW3Nob3dBZGRGaWVsZHMsIHNldFNob3dBZGRGaWVsZHNdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgW2FkZENpdHlTdHIsIHNldEFkZENpdHlTdHJdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFthZGRBZGRyZXNzU3RyLCBzZXRBZGRBZGRyZXNzU3RyXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbYWRkUm9vbVZhbCwgc2V0QWRkUm9vbVZhbHVlXSA9IHVzZVN0YXRlKDEpXG4gIGNvbnN0IFthZGRQcmljZVZhbCwgc2V0QWRkUHJpY2VWYWx1ZV0gPSB1c2VTdGF0ZSgxMDAwKVxuICBjb25zdCBbZXF1aXBtZW50c0xpc3QsIHNldEVxdWlwbWVudHNMaXN0XSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbZXF1aXBtZW50VmFsdWUsIHNldEVxdWlwbWVudFZhbHVlXSA9IHVzZVN0YXRlKFtdKVxuXG4gIGNvbnN0IHNlYXJjaCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2R1bW15L3NlYXJjaD9yb29tcz0nICsgcm9vbVZhbCArICcmcHJpY2U9JyArIHByaWNlVmFsICsgJyZjaXR5PScgKyBjaXR5U3RyICsgJyZhZGRyZXNzPScgKyBhZGRyZXNzU3RyKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgc2V0SW5mb0xpc3REYXRhKGRhdGEpXG4gIH1cblxuICBjb25zdCBzaG93QWRkRmllbGRzSXRlbXMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9lcXVpcG1lbnQnKVxuICAgIGNvbnN0IGVxdWlwbWVudHMgPSBhd2FpdCByZXMuanNvbigpXG4gICAgc2V0RXF1aXBtZW50c0xpc3QoZXF1aXBtZW50cylcbiAgICBzZXRTaG93QWRkRmllbGRzKHRydWUpXG4gIH1cblxuICBjb25zdCBhZGRJdGVtID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChhZGRDaXR5U3RyID09PSAnJyB8fCBhZGRBZGRyZXNzU3RyID09PSAnJykge1xuICAgICAgYWxlcnQoJ0luc2VydCBDaXR5IG9yIEFkZHJlc3MhJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvZHVtbXkvYWRkJywge1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgY2l0eTogYWRkQ2l0eVN0cixcbiAgICAgICAgYWRkcmVzczogYWRkQWRkcmVzc1N0cixcbiAgICAgICAgcm9vbXM6IGFkZFJvb21WYWwsXG4gICAgICAgIHByaWNlOiBhZGRQcmljZVZhbCxcbiAgICAgICAgZXF1aXBtZW50SWRzOiBlcXVpcG1lbnRWYWx1ZVxuICAgICAgfSlcbiAgICB9KVxuICAgIGNvbnN0IGxpc3QgPSBhd2FpdCByZXMuanNvbigpXG4gICAgaWYgKGxpc3Quc3RhdHVzQ29kZSAhPT0gNTAwKSB7XG4gICAgICBhbGVydCgnU3VjY2Vzc2Z1bGx5IGFkZGVkIScpXG4gICAgICBzZXRTaG93QWRkRmllbGRzKGZhbHNlKVxuICAgICAgc2V0Q2l0eVN0cignJylcbiAgICAgIHNldEFkZHJlc3NTdHIoJycpXG4gICAgICBzZXRSb29tVmFsdWUoMSlcbiAgICAgIHNldFByaWNlVmFsdWUoMTAwMClcbiAgICAgIHNldEFkZENpdHlTdHIoJycpXG4gICAgICBzZXRBZGRBZGRyZXNzU3RyKCcnKVxuICAgICAgc2V0QWRkUm9vbVZhbHVlKDEpXG4gICAgICBzZXRBZGRQcmljZVZhbHVlKDEwMDApXG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KCdFcnJvciEnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNhbmNlbEFkZEl0ZW0gPSAoKSA9PiB7XG4gICAgc2V0QWRkQ2l0eVN0cignJylcbiAgICBzZXRBZGRBZGRyZXNzU3RyKCcnKVxuICAgIHNldFNob3dBZGRGaWVsZHMoZmFsc2UpXG4gIH1cblxuICBjb25zdCByZW1vdmVJdGVtID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcbiAgICBpZiAoIWNvbmZpcm0oJ0RvIHlvdSB3YW50IHRvIGRlbGV0ZT8nKSkgcmV0dXJuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9kdW1teS9yZW1vdmUvJyArIGlkLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnXG4gICAgfSlcbiAgICBjb25zdCBsaXN0ID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIGlmIChsaXN0KSB7XG4gICAgICBhbGVydCgnU3VjY2Vzc2Z1bGx5IERlbGV0ZWQhJylcbiAgICAgIHNldFNob3dBZGRGaWVsZHMoZmFsc2UpXG4gICAgICBzZXRDaXR5U3RyKCcnKVxuICAgICAgc2V0QWRkcmVzc1N0cignJylcbiAgICAgIHNldFJvb21WYWx1ZSgxKVxuICAgICAgc2V0UHJpY2VWYWx1ZSgxMDAwKVxuICAgICAgc2VhcmNoKClcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoJ0Vycm9yIScpXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb25DaGFuZ2VSb29tVmFsdWUgPSBhc3luYyAodmFsdWU6IG51bWJlciwgYWRkRmxhZyA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKGFkZEZsYWcpIHtcbiAgICAgIHNldEFkZFJvb21WYWx1ZSh2YWx1ZSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZXRSb29tVmFsdWUodmFsdWUpXG4gIH1cblxuICBjb25zdCBvbkNoYW5nZVByaWNlVmFsdWUgPSAodmFsdWU6IG51bWJlciwgYWRkRmxhZyA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKGFkZEZsYWcpIHtcbiAgICAgIHNldEFkZFByaWNlVmFsdWUodmFsdWUpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgc2V0UHJpY2VWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IG9uQ2hhbmdlQ2l0eVRleHQgPSAoc3RyOiBzdHJpbmcsIGFkZEZsYWcgPSBmYWxzZSkgPT4ge1xuICAgIGlmIChhZGRGbGFnKSB7XG4gICAgICBzZXRBZGRDaXR5U3RyKHN0cilcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZXRDaXR5U3RyKHN0cilcbiAgfVxuXG4gIGNvbnN0IG9uQ2hhbmdlQWRkcmVzc1RleHQgPSAoc3RyOiBzdHJpbmcsIGFkZEZsYWcgPSBmYWxzZSkgPT4ge1xuICAgIGlmIChhZGRGbGFnKSB7XG4gICAgICBzZXRBZGRBZGRyZXNzU3RyKHN0cilcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZXRBZGRyZXNzU3RyKHN0cilcbiAgfVxuXG4gIGNvbnN0IG9uQ2hhbmdlRXF1aXBtZW50ID0gKGRhdGE6IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTE9wdGlvbkVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0RXF1aXBtZW50VmFsdWUoQXJyYXkuZnJvbShkYXRhLCBpdGVtID0+IE51bWJlcihpdGVtLnZhbHVlKSkpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNlYXJjaCgpXG4gIH0sIFtpbmZvTGlzdCwgY2l0eVN0ciwgYWRkcmVzc1N0ciwgcm9vbVZhbCwgcHJpY2VWYWxdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICB7IXNob3dBZGRGaWVsZHMgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2hlYWRlclwiPlxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlQ2l0eVRleHQoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17Y2l0eVN0cn0gcGxhY2Vob2xkZXI9XCJTZWFyY2ggQ2l0eVwiIC8+XG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2VBZGRyZXNzVGV4dChlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXthZGRyZXNzU3RyfSBwbGFjZWhvbGRlcj1cIlNlYXJjaCBBZGRyZXNzXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cD5Sb29tczoge3Jvb21WYWx9PC9wPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibGlzdF9zbGlkZXJcIiB0eXBlPVwicmFuZ2VcIiBtaW49XCIxXCIgbWF4PVwiMTBcIiBzdGVwPVwiMVwiIHZhbHVlPXtyb29tVmFsfSBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZVJvb21WYWx1ZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHA+UHJpY2U6IHtwcmljZVZhbH08L3A+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3Rfc2xpZGVyXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgIG1pbj1cIjEwMDBcIlxuICAgICAgICAgICAgICAgIG1heD1cIjEwMDAwXCJcbiAgICAgICAgICAgICAgICBzdGVwPVwiMTAwXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJpY2VWYWx9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2VQcmljZVZhbHVlKE51bWJlcihlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2FjdGlvblwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiBzaG93QWRkRmllbGRzSXRlbXMoKX0+XG4gICAgICAgICAgICAgIEFkZCBhcGFydG1lbnRcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9oZWFkZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZUNpdHlUZXh0KGUudGFyZ2V0LnZhbHVlLCB0cnVlKX0gdmFsdWU9e2FkZENpdHlTdHJ9IHBsYWNlaG9sZGVyPVwiQWRkIENpdHlcIiAvPlxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlQWRkcmVzc1RleHQoZS50YXJnZXQudmFsdWUsIHRydWUpfSB2YWx1ZT17YWRkQWRkcmVzc1N0cn0gcGxhY2Vob2xkZXI9XCJBZGQgQWRkcmVzc1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2hlYWRlclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHA+Um9vbXM6IHthZGRSb29tVmFsfTwvcD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdF9zbGlkZXJcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgbWluPVwiMVwiXG4gICAgICAgICAgICAgICAgbWF4PVwiMTBcIlxuICAgICAgICAgICAgICAgIHN0ZXA9XCIxXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YWRkUm9vbVZhbH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZVJvb21WYWx1ZShOdW1iZXIoZS50YXJnZXQudmFsdWUpLCB0cnVlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHA+UHJpY2U6IHthZGRQcmljZVZhbH08L3A+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3Rfc2xpZGVyXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgIG1pbj1cIjEwMDBcIlxuICAgICAgICAgICAgICAgIG1heD1cIjEwMDAwXCJcbiAgICAgICAgICAgICAgICBzdGVwPVwiMTAwXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YWRkUHJpY2VWYWx9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2VQcmljZVZhbHVlKE51bWJlcihlLnRhcmdldC52YWx1ZSksIHRydWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2VxdWlwbWVudFwiPlxuICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiZXF1aXBtZW50XCIgaWQ9XCJlcXVpcG1lbnRcIiBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZUVxdWlwbWVudChlLnRhcmdldC5zZWxlY3RlZE9wdGlvbnMpfSBtdWx0aXBsZT5cbiAgICAgICAgICAgICAge2VxdWlwbWVudHNMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2FjdGlvblwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtKCl9PlxuICAgICAgICAgICAgICBPa1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiBjYW5jZWxBZGRJdGVtKCl9PlxuICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAge2luZm9MaXN0RGF0YSAmJlxuICAgICAgICAgIGluZm9MaXN0RGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5DaXR5OiA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jaXR5fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkFkZHJlc3M6IDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Um9vbXM6IDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnJvb21zfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlByaWNlOiA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZXF1aXBtZW50cy5tYXAoKGVxdWlwbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2luZGV4fT57ZXF1aXBtZW50LmVxdWlwbWVudERhdGEubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gcmVtb3ZlSXRlbShpdGVtLmlkKX0+XG4gICAgICAgICAgICAgICAgICAgIFJlbW92ZVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImxpc3RfcmVzdWx0XCI+TWF0Y2hlcyB7aW5mb0xpc3REYXRhICYmIGluZm9MaXN0RGF0YS5sZW5ndGh9IHJlc3VsdHM8L3A+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9kdW1teS9hbGwnKVxuICBjb25zdCBpbmZvTGlzdCA9IGF3YWl0IHJlcy5qc29uKClcbiAgY29uc29sZS5sb2coaW5mb0xpc3QpXG4gIHJldHVybiB7IHByb3BzOiB7IGluZm9MaXN0IH0gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwic291cmNlUm9vdCI6IiJ9