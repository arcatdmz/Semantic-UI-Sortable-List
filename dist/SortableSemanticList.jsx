"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.SortableSemanticList = void 0;
var react_1 = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var react_sortable_hoc_1 = require("react-sortable-hoc");
var SortableList = react_sortable_hoc_1.SortableContainer(semantic_ui_react_1.List);
var tagNames = ["input", "textarea", "select", "option", "button"].map(function (e) {
    return e.toUpperCase();
});
var SortableSemanticList = function (_a) {
    var children = _a.children, disabled = _a.disabled, inverted = _a.inverted, items = _a.items, onItemUpdate = _a.onItemUpdate;
    var handleItemSort = react_1.useCallback(function (sort, _event) {
        if (!onItemUpdate) {
            return;
        }
        items.splice.apply(items, __spreadArrays([sort.newIndex, 0], items.splice(sort.oldIndex, 1)));
        onItemUpdate(items.slice(0));
    }, [items, onItemUpdate]);
    var shouldCancelSortStart = react_1.useCallback(function (event) {
        var target = event.target;
        while (!target || target.tagName !== "DIV") {
            if (tagNames.includes(target.tagName)) {
                return true;
            }
            target = target.parentElement;
        }
        return false;
    }, []);
    return (<div className={disabled ? "list" : "sortable list"}>
      <style jsx>{"\n        .list {\n          margin-top: 0.42857143em;\n          padding: 0.42857143em 0;\n        }\n        .list.sortable {\n          user-select: none;\n        }\n      "}</style>
      <SortableList relaxed celled inverted={inverted} helperClass={inverted ? "inverted sorting" : "sorting"} shouldCancelStart={shouldCancelSortStart} onSortEnd={handleItemSort} lockAxis="y">
        {children}
      </SortableList>
    </div>);
};
exports.SortableSemanticList = SortableSemanticList;
