"use strict";
exports.__esModule = true;
exports.SortableSemanticListItem = void 0;
var react_1 = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var SortableSemanticListItem = function (_a) {
    var icon = _a.icon, header = _a.header, data = _a.data, children = _a.children, onDelete = _a.onDelete;
    var handleDelete = react_1.useCallback(function (ev) {
        ev.stopPropagation();
        onDelete && onDelete(data);
    }, [data, onDelete]);
    return (<div className="item">
      <style jsx>{"\n        .item {\n          display: list-item;\n          table-layout: fixed;\n          padding: 0.4em !important;\n          list-style-type: none;\n          list-style-position: outside;\n          line-height: 1.14285714em !important;\n        }\n        .item.sorting {\n          border: 1px dashed rgba(34, 36, 38, 0.15);\n          border-width: 1px 0;\n          background: rgba(255, 255, 255, 0.6);\n        }\n        .item.inverted.sorting {\n          border: 1px solid rgba(255, 255, 255, 0.8);\n          border-width: 1px 0;\n          background: rgba(255, 255, 255, 0.7);\n          z-index: 1010;\n        }\n        .item > :global(.icon) {\n          display: table-cell;\n          min-width: 1.55em;\n          padding-right: 0.28571429em;\n          vertical-align: top;\n        }\n        .item > :global(.content) {\n          display: table-cell;\n          width: 100%;\n          padding: 0 0 0 0.5em;\n          vertical-align: top;\n        }\n        .item > :global(.right.floated.content) {\n          float: right;\n          width: auto;\n        }\n        .item > :global(.right.floated.content > *:last-child) {\n          margin-right: 0;\n        }\n        .item > :global(.content > .header) {\n          font-weight: bold;\n        }\n        .item > :global(.content > .description > .list) {\n          margin: 0;\n          padding: 0.25em 0 0 0.5em;\n        }\n      "}</style>
      {onDelete && (<semantic_ui_react_1.List.Content floated="right">
          <semantic_ui_react_1.Button circular color="red" size="tiny" icon="trash" onClick={handleDelete}/>
        </semantic_ui_react_1.List.Content>)}
      {icon && <semantic_ui_react_1.List.Icon name={icon}/>}
      <semantic_ui_react_1.List.Content>
        <semantic_ui_react_1.List.Header>{header}</semantic_ui_react_1.List.Header>
        {data && children && <semantic_ui_react_1.List.Description>{children}</semantic_ui_react_1.List.Description>}
      </semantic_ui_react_1.List.Content>
    </div>);
};
exports.SortableSemanticListItem = SortableSemanticListItem;
