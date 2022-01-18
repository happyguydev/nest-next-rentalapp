(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "D:\\Workspace\\Company Skill Tests\\Mica\\rental-app\\src\\client\\pages\\index.tsx";


const Home = ({
  infoList
}) => {
  const {
    0: cityStr,
    1: setCityStr
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: addressStr,
    1: setAddressStr
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: roomVal,
    1: setRoomValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
  const {
    0: priceVal,
    1: setPriceValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1000);
  const {
    0: infoListData,
    1: setInfoListData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: showAddFields,
    1: setShowAddFields
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: addCityStr,
    1: setAddCityStr
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: addAddressStr,
    1: setAddAddressStr
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: addRoomVal,
    1: setAddRoomValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
  const {
    0: addPriceVal,
    1: setAddPriceValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1000);
  const {
    0: equipmentsList,
    1: setEquipmentsList
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: equipmentValue,
    1: setEquipmentValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);

  const search = async () => {
    const res = await fetch('http://localhost:3000/dummy/search?rooms=' + roomVal + '&price=' + priceVal + '&city=' + cityStr + '&address=' + addressStr);
    const data = await res.json();
    setInfoListData(data);
  };

  const showAddFieldsItems = async () => {
    const res = await fetch('http://localhost:3000/equipment');
    const equipments = await res.json();
    setEquipmentsList(equipments);
    setShowAddFields(true);
  };

  const addItem = async () => {
    if (addCityStr === '' || addAddressStr === '') {
      alert('Insert City or Address!');
      return;
    }

    const res = await fetch('/dummy/add', {
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
    const list = await res.json();

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
      search();
    } else {
      alert('Error!');
    }
  };

  const cancelAddItem = () => {
    setAddCityStr('');
    setAddAddressStr('');
    setShowAddFields(false);
  };

  const removeItem = async id => {
    if (!confirm('Do you want to delete?')) return;
    const res = await fetch('http://localhost:3000/dummy/remove/' + id, {
      method: 'DELETE'
    });
    const list = await res.json();

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
  };

  const onChangeRoomValue = async (value, addFlag = false) => {
    if (addFlag) {
      setAddRoomValue(value);
      return;
    }

    setRoomValue(value);
  };

  const onChangePriceValue = (value, addFlag = false) => {
    if (addFlag) {
      setAddPriceValue(value);
      return;
    }

    setPriceValue(value);
  };

  const onChangeCityText = (str, addFlag = false) => {
    if (addFlag) {
      setAddCityStr(str);
      return;
    }

    setCityStr(str);
  };

  const onChangeAddressText = (str, addFlag = false) => {
    if (addFlag) {
      setAddAddressStr(str);
      return;
    }

    setAddressStr(str);
  };

  const onChangeEquipment = data => {
    setEquipmentValue(Array.from(data, item => Number(item.value)));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    search();
  }, [infoList, cityStr, addressStr, roomVal, priceVal]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "list",
    children: [!showAddFields ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "list_header",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          onChange: e => onChangeCityText(e.target.value),
          value: cityStr,
          placeholder: "Search City"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          onChange: e => onChangeAddressText(e.target.value),
          value: addressStr,
          placeholder: "Search Address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "list_header",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Rooms: ", roomVal]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: "list_slider",
            type: "range",
            min: "1",
            max: "10",
            step: "1",
            value: roomVal,
            onChange: e => onChangeRoomValue(Number(e.target.value))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Price: ", priceVal]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: "list_slider",
            type: "range",
            min: "1000",
            max: "10000",
            step: "100",
            value: priceVal,
            onChange: e => onChangePriceValue(Number(e.target.value))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "list_action",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          onClick: () => showAddFieldsItems(),
          children: "Add apartment"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 11
      }, undefined)]
    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "list_header",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          onChange: e => onChangeCityText(e.target.value, true),
          value: addCityStr,
          placeholder: "Add City"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          onChange: e => onChangeAddressText(e.target.value, true),
          value: addAddressStr,
          placeholder: "Add Address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "list_header",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Rooms: ", addRoomVal]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: "list_slider",
            type: "range",
            min: "1",
            max: "10",
            step: "1",
            value: addRoomVal,
            onChange: e => onChangeRoomValue(Number(e.target.value), true)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Price: ", addPriceVal]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: "list_slider",
            type: "range",
            min: "1000",
            max: "10000",
            step: "100",
            value: addPriceVal,
            onChange: e => onChangePriceValue(Number(e.target.value), true)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "list_equipment",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
          name: "equipment",
          id: "equipment",
          onChange: e => onChangeEquipment(e.target.selectedOptions),
          multiple: true,
          children: equipmentsList.map((item, index) => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: item.id,
              children: item.name
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 19
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "list_action",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          onClick: () => addItem(),
          children: "Ok"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          onClick: () => cancelAddItem(),
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 11
      }, undefined)]
    }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "content",
      children: infoListData && infoListData.map((item, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "content_item",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                  children: "City: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 231,
                  columnNumber: 23
                }, undefined), item.city]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 230,
                columnNumber: 21
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                  children: "Address: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 235,
                  columnNumber: 23
                }, undefined), item.address]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 234,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                  children: "Rooms: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 241,
                  columnNumber: 23
                }, undefined), item.rooms]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 240,
                columnNumber: 21
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                  children: "Price: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 245,
                  columnNumber: 23
                }, undefined), item.price]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: item.equipments.map((equipment, index) => {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: equipment.equipmentData.name
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 252,
                    columnNumber: 32
                  }, undefined);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 250,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              onClick: () => removeItem(item.id),
              children: "Remove"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 17
          }, undefined)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 15
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "list_result",
      children: ["Matches ", infoListData && infoListData.length, " results"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 139,
    columnNumber: 5
  }, undefined);
};

const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/dummy/all');
  const infoList = await res.json(); // console.log(infoList)

  return {
    props: {
      infoList
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJIb21lIiwiaW5mb0xpc3QiLCJjaXR5U3RyIiwic2V0Q2l0eVN0ciIsInVzZVN0YXRlIiwiYWRkcmVzc1N0ciIsInNldEFkZHJlc3NTdHIiLCJyb29tVmFsIiwic2V0Um9vbVZhbHVlIiwicHJpY2VWYWwiLCJzZXRQcmljZVZhbHVlIiwiaW5mb0xpc3REYXRhIiwic2V0SW5mb0xpc3REYXRhIiwic2hvd0FkZEZpZWxkcyIsInNldFNob3dBZGRGaWVsZHMiLCJhZGRDaXR5U3RyIiwic2V0QWRkQ2l0eVN0ciIsImFkZEFkZHJlc3NTdHIiLCJzZXRBZGRBZGRyZXNzU3RyIiwiYWRkUm9vbVZhbCIsInNldEFkZFJvb21WYWx1ZSIsImFkZFByaWNlVmFsIiwic2V0QWRkUHJpY2VWYWx1ZSIsImVxdWlwbWVudHNMaXN0Iiwic2V0RXF1aXBtZW50c0xpc3QiLCJlcXVpcG1lbnRWYWx1ZSIsInNldEVxdWlwbWVudFZhbHVlIiwic2VhcmNoIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInNob3dBZGRGaWVsZHNJdGVtcyIsImVxdWlwbWVudHMiLCJhZGRJdGVtIiwiYWxlcnQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjaXR5IiwiYWRkcmVzcyIsInJvb21zIiwicHJpY2UiLCJlcXVpcG1lbnRJZHMiLCJsaXN0Iiwic3RhdHVzQ29kZSIsImNhbmNlbEFkZEl0ZW0iLCJyZW1vdmVJdGVtIiwiaWQiLCJjb25maXJtIiwib25DaGFuZ2VSb29tVmFsdWUiLCJ2YWx1ZSIsImFkZEZsYWciLCJvbkNoYW5nZVByaWNlVmFsdWUiLCJvbkNoYW5nZUNpdHlUZXh0Iiwic3RyIiwib25DaGFuZ2VBZGRyZXNzVGV4dCIsIm9uQ2hhbmdlRXF1aXBtZW50IiwiQXJyYXkiLCJmcm9tIiwiaXRlbSIsIk51bWJlciIsInVzZUVmZmVjdCIsImUiLCJ0YXJnZXQiLCJzZWxlY3RlZE9wdGlvbnMiLCJtYXAiLCJpbmRleCIsIm5hbWUiLCJlcXVpcG1lbnQiLCJlcXVpcG1lbnREYXRhIiwibGVuZ3RoIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQVNBLE1BQU1BLElBQTZCLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDdEQsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJGLCtDQUFRLENBQUMsRUFBRCxDQUE1QztBQUNBLFFBQU07QUFBQSxPQUFDRyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUEwQkosK0NBQVEsQ0FBQyxDQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTRCTiwrQ0FBUSxDQUFDLElBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ08sWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NSLCtDQUFRLENBQUMsRUFBRCxDQUFoRDtBQUNBLFFBQU07QUFBQSxPQUFDUyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DViwrQ0FBUSxDQUFDLEtBQUQsQ0FBbEQ7QUFFQSxRQUFNO0FBQUEsT0FBQ1csVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJaLCtDQUFRLENBQUMsRUFBRCxDQUE1QztBQUNBLFFBQU07QUFBQSxPQUFDYSxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DZCwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ2UsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBZ0NoQiwrQ0FB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QURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUE4QkU7QUFBQSxtQ0FDRTtBQUFHLGtCQUFJLEVBQUMsR0FBUjtBQUFZLHFCQUFPLEVBQUUsTUFBTXBCLFVBQVUsQ0FBQ2EsSUFBSSxDQUFDWixFQUFOLENBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkE5QkY7QUFBQSxXQUFTbUIsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBc0NELE9BdkNEO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwRkYsZUErSEU7QUFBRyxlQUFTLEVBQUMsYUFBYjtBQUFBLDZCQUFvQzFELFlBQVksSUFBSUEsWUFBWSxDQUFDOEQsTUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9IRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQW1JRCxDQW5RRDs7QUFxUU8sTUFBTUMsa0JBQWtCLEdBQUcsWUFBWTtBQUM1QyxRQUFNOUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyxpQ0FBRCxDQUF2QjtBQUNBLFFBQU01QixRQUFRLEdBQUcsTUFBTTJCLEdBQUcsQ0FBQ0csSUFBSixFQUF2QixDQUY0QyxDQUc1Qzs7QUFDQSxTQUFPO0FBQUU0QyxTQUFLLEVBQUU7QUFBRTFFO0FBQUY7QUFBVCxHQUFQO0FBQ0QsQ0FMTTtBQU9QLCtEQUFlRCxJQUFmLEU7Ozs7Ozs7Ozs7O0FDclJBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcblxuaW1wb3J0IHsgSW5mb3JtYXRpb24gfSBmcm9tICd+c2VydmVyL21vZHVsZXMvZW50aXRpZXMvaW5mb3JtYXRpb24uZW50aXR5J1xuXG50eXBlIEhvbWVQYWdlUHJvcHMgPSB7XG4gIGluZm9MaXN0OiBJbmZvcm1hdGlvbltdXG59XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlPEhvbWVQYWdlUHJvcHM+ID0gKHsgaW5mb0xpc3QgfSkgPT4ge1xuICBjb25zdCBbY2l0eVN0ciwgc2V0Q2l0eVN0cl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2FkZHJlc3NTdHIsIHNldEFkZHJlc3NTdHJdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtyb29tVmFsLCBzZXRSb29tVmFsdWVdID0gdXNlU3RhdGUoMSlcbiAgY29uc3QgW3ByaWNlVmFsLCBzZXRQcmljZVZhbHVlXSA9IHVzZVN0YXRlKDEwMDApXG4gIGNvbnN0IFtpbmZvTGlzdERhdGEsIHNldEluZm9MaXN0RGF0YV0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW3Nob3dBZGRGaWVsZHMsIHNldFNob3dBZGRGaWVsZHNdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgW2FkZENpdHlTdHIsIHNldEFkZENpdHlTdHJdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFthZGRBZGRyZXNzU3RyLCBzZXRBZGRBZGRyZXNzU3RyXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbYWRkUm9vbVZhbCwgc2V0QWRkUm9vbVZhbHVlXSA9IHVzZVN0YXRlKDEpXG4gIGNvbnN0IFthZGRQcmljZVZhbCwgc2V0QWRkUHJpY2VWYWx1ZV0gPSB1c2VTdGF0ZSgxMDAwKVxuICBjb25zdCBbZXF1aXBtZW50c0xpc3QsIHNldEVxdWlwbWVudHNMaXN0XSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbZXF1aXBtZW50VmFsdWUsIHNldEVxdWlwbWVudFZhbHVlXSA9IHVzZVN0YXRlKFtdKVxuXG4gIGNvbnN0IHNlYXJjaCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2R1bW15L3NlYXJjaD9yb29tcz0nICsgcm9vbVZhbCArICcmcHJpY2U9JyArIHByaWNlVmFsICsgJyZjaXR5PScgKyBjaXR5U3RyICsgJyZhZGRyZXNzPScgKyBhZGRyZXNzU3RyKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgc2V0SW5mb0xpc3REYXRhKGRhdGEpXG4gIH1cblxuICBjb25zdCBzaG93QWRkRmllbGRzSXRlbXMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9lcXVpcG1lbnQnKVxuICAgIGNvbnN0IGVxdWlwbWVudHMgPSBhd2FpdCByZXMuanNvbigpXG4gICAgc2V0RXF1aXBtZW50c0xpc3QoZXF1aXBtZW50cylcbiAgICBzZXRTaG93QWRkRmllbGRzKHRydWUpXG4gIH1cblxuICBjb25zdCBhZGRJdGVtID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChhZGRDaXR5U3RyID09PSAnJyB8fCBhZGRBZGRyZXNzU3RyID09PSAnJykge1xuICAgICAgYWxlcnQoJ0luc2VydCBDaXR5IG9yIEFkZHJlc3MhJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvZHVtbXkvYWRkJywge1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgY2l0eTogYWRkQ2l0eVN0cixcbiAgICAgICAgYWRkcmVzczogYWRkQWRkcmVzc1N0cixcbiAgICAgICAgcm9vbXM6IGFkZFJvb21WYWwsXG4gICAgICAgIHByaWNlOiBhZGRQcmljZVZhbCxcbiAgICAgICAgZXF1aXBtZW50SWRzOiBlcXVpcG1lbnRWYWx1ZVxuICAgICAgfSlcbiAgICB9KVxuICAgIGNvbnN0IGxpc3QgPSBhd2FpdCByZXMuanNvbigpXG4gICAgaWYgKGxpc3Quc3RhdHVzQ29kZSAhPT0gNTAwKSB7XG4gICAgICBhbGVydCgnU3VjY2Vzc2Z1bGx5IGFkZGVkIScpXG4gICAgICBzZXRTaG93QWRkRmllbGRzKGZhbHNlKVxuICAgICAgc2V0Q2l0eVN0cignJylcbiAgICAgIHNldEFkZHJlc3NTdHIoJycpXG4gICAgICBzZXRSb29tVmFsdWUoMSlcbiAgICAgIHNldFByaWNlVmFsdWUoMTAwMClcbiAgICAgIHNldEFkZENpdHlTdHIoJycpXG4gICAgICBzZXRBZGRBZGRyZXNzU3RyKCcnKVxuICAgICAgc2V0QWRkUm9vbVZhbHVlKDEpXG4gICAgICBzZXRBZGRQcmljZVZhbHVlKDEwMDApXG4gICAgICBzZWFyY2goKVxuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydCgnRXJyb3IhJylcbiAgICB9XG4gIH1cblxuICBjb25zdCBjYW5jZWxBZGRJdGVtID0gKCkgPT4ge1xuICAgIHNldEFkZENpdHlTdHIoJycpXG4gICAgc2V0QWRkQWRkcmVzc1N0cignJylcbiAgICBzZXRTaG93QWRkRmllbGRzKGZhbHNlKVxuICB9XG5cbiAgY29uc3QgcmVtb3ZlSXRlbSA9IGFzeW5jIChpZDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCFjb25maXJtKCdEbyB5b3Ugd2FudCB0byBkZWxldGU/JykpIHJldHVyblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvZHVtbXkvcmVtb3ZlLycgKyBpZCwge1xuICAgICAgbWV0aG9kOiAnREVMRVRFJ1xuICAgIH0pXG4gICAgY29uc3QgbGlzdCA9IGF3YWl0IHJlcy5qc29uKClcbiAgICBpZiAobGlzdCkge1xuICAgICAgYWxlcnQoJ1N1Y2Nlc3NmdWxseSBEZWxldGVkIScpXG4gICAgICBzZXRTaG93QWRkRmllbGRzKGZhbHNlKVxuICAgICAgc2V0Q2l0eVN0cignJylcbiAgICAgIHNldEFkZHJlc3NTdHIoJycpXG4gICAgICBzZXRSb29tVmFsdWUoMSlcbiAgICAgIHNldFByaWNlVmFsdWUoMTAwMClcbiAgICAgIHNlYXJjaCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KCdFcnJvciEnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG9uQ2hhbmdlUm9vbVZhbHVlID0gYXN5bmMgKHZhbHVlOiBudW1iZXIsIGFkZEZsYWcgPSBmYWxzZSkgPT4ge1xuICAgIGlmIChhZGRGbGFnKSB7XG4gICAgICBzZXRBZGRSb29tVmFsdWUodmFsdWUpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgc2V0Um9vbVZhbHVlKHZhbHVlKVxuICB9XG5cbiAgY29uc3Qgb25DaGFuZ2VQcmljZVZhbHVlID0gKHZhbHVlOiBudW1iZXIsIGFkZEZsYWcgPSBmYWxzZSkgPT4ge1xuICAgIGlmIChhZGRGbGFnKSB7XG4gICAgICBzZXRBZGRQcmljZVZhbHVlKHZhbHVlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNldFByaWNlVmFsdWUodmFsdWUpXG4gIH1cblxuICBjb25zdCBvbkNoYW5nZUNpdHlUZXh0ID0gKHN0cjogc3RyaW5nLCBhZGRGbGFnID0gZmFsc2UpID0+IHtcbiAgICBpZiAoYWRkRmxhZykge1xuICAgICAgc2V0QWRkQ2l0eVN0cihzdHIpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgc2V0Q2l0eVN0cihzdHIpXG4gIH1cblxuICBjb25zdCBvbkNoYW5nZUFkZHJlc3NUZXh0ID0gKHN0cjogc3RyaW5nLCBhZGRGbGFnID0gZmFsc2UpID0+IHtcbiAgICBpZiAoYWRkRmxhZykge1xuICAgICAgc2V0QWRkQWRkcmVzc1N0cihzdHIpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgc2V0QWRkcmVzc1N0cihzdHIpXG4gIH1cblxuICBjb25zdCBvbkNoYW5nZUVxdWlwbWVudCA9IChkYXRhOiBIVE1MQ29sbGVjdGlvbk9mPEhUTUxPcHRpb25FbGVtZW50PikgPT4ge1xuICAgIHNldEVxdWlwbWVudFZhbHVlKEFycmF5LmZyb20oZGF0YSwgaXRlbSA9PiBOdW1iZXIoaXRlbS52YWx1ZSkpKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZWFyY2goKVxuICB9LCBbaW5mb0xpc3QsIGNpdHlTdHIsIGFkZHJlc3NTdHIsIHJvb21WYWwsIHByaWNlVmFsXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgeyFzaG93QWRkRmllbGRzID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9oZWFkZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZUNpdHlUZXh0KGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e2NpdHlTdHJ9IHBsYWNlaG9sZGVyPVwiU2VhcmNoIENpdHlcIiAvPlxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlQWRkcmVzc1RleHQoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17YWRkcmVzc1N0cn0gcGxhY2Vob2xkZXI9XCJTZWFyY2ggQWRkcmVzc1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2hlYWRlclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHA+Um9vbXM6IHtyb29tVmFsfTwvcD5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImxpc3Rfc2xpZGVyXCIgdHlwZT1cInJhbmdlXCIgbWluPVwiMVwiIG1heD1cIjEwXCIgc3RlcD1cIjFcIiB2YWx1ZT17cm9vbVZhbH0gb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2VSb29tVmFsdWUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwPlByaWNlOiB7cHJpY2VWYWx9PC9wPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0X3NsaWRlclwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICBtaW49XCIxMDAwXCJcbiAgICAgICAgICAgICAgICBtYXg9XCIxMDAwMFwiXG4gICAgICAgICAgICAgICAgc3RlcD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlVmFsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlUHJpY2VWYWx1ZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9hY3Rpb25cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gc2hvd0FkZEZpZWxkc0l0ZW1zKCl9PlxuICAgICAgICAgICAgICBBZGQgYXBhcnRtZW50XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaGVhZGVyXCI+XG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2VDaXR5VGV4dChlLnRhcmdldC52YWx1ZSwgdHJ1ZSl9IHZhbHVlPXthZGRDaXR5U3RyfSBwbGFjZWhvbGRlcj1cIkFkZCBDaXR5XCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZUFkZHJlc3NUZXh0KGUudGFyZ2V0LnZhbHVlLCB0cnVlKX0gdmFsdWU9e2FkZEFkZHJlc3NTdHJ9IHBsYWNlaG9sZGVyPVwiQWRkIEFkZHJlc3NcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9oZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwPlJvb21zOiB7YWRkUm9vbVZhbH08L3A+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3Rfc2xpZGVyXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgICAgICAgIG1heD1cIjEwXCJcbiAgICAgICAgICAgICAgICBzdGVwPVwiMVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2FkZFJvb21WYWx9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2VSb29tVmFsdWUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSwgdHJ1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwPlByaWNlOiB7YWRkUHJpY2VWYWx9PC9wPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0X3NsaWRlclwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICBtaW49XCIxMDAwXCJcbiAgICAgICAgICAgICAgICBtYXg9XCIxMDAwMFwiXG4gICAgICAgICAgICAgICAgc3RlcD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2FkZFByaWNlVmFsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlUHJpY2VWYWx1ZShOdW1iZXIoZS50YXJnZXQudmFsdWUpLCB0cnVlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9lcXVpcG1lbnRcIj5cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImVxdWlwbWVudFwiIGlkPVwiZXF1aXBtZW50XCIgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2VFcXVpcG1lbnQoZS50YXJnZXQuc2VsZWN0ZWRPcHRpb25zKX0gbXVsdGlwbGU+XG4gICAgICAgICAgICAgIHtlcXVpcG1lbnRzTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9hY3Rpb25cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gYWRkSXRlbSgpfT5cbiAgICAgICAgICAgICAgT2tcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gY2FuY2VsQWRkSXRlbSgpfT5cbiAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgIHtpbmZvTGlzdERhdGEgJiZcbiAgICAgICAgICBpbmZvTGlzdERhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q2l0eTogPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY2l0eX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5BZGRyZXNzOiA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5hZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlJvb21zOiA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5yb29tc31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5QcmljZTogPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucHJpY2V9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmVxdWlwbWVudHMubWFwKChlcXVpcG1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtpbmRleH0+e2VxdWlwbWVudC5lcXVpcG1lbnREYXRhLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHJlbW92ZUl0ZW0oaXRlbS5pZCl9PlxuICAgICAgICAgICAgICAgICAgICBSZW1vdmVcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgICA8cCBjbGFzc05hbWU9XCJsaXN0X3Jlc3VsdFwiPk1hdGNoZXMge2luZm9MaXN0RGF0YSAmJiBpbmZvTGlzdERhdGEubGVuZ3RofSByZXN1bHRzPC9wPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvZHVtbXkvYWxsJylcbiAgY29uc3QgaW5mb0xpc3QgPSBhd2FpdCByZXMuanNvbigpXG4gIC8vIGNvbnNvbGUubG9nKGluZm9MaXN0KVxuICByZXR1cm4geyBwcm9wczogeyBpbmZvTGlzdCB9IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==