import { ReactElement, ReactNode, useCallback } from "react";
import { List } from "semantic-ui-react";
import {
  SortableContainer,
  SortEnd,
  SortEvent,
  SortEventWithTag,
} from "react-sortable-hoc";

const SortableList = SortableContainer(List);

const tagNames = ["input", "textarea", "select", "option", "button"].map((e) =>
  e.toUpperCase()
);

export interface SortableSemanticListProps<D> {
  children?: ReactNode;
  disabled?: boolean;
  inverted?: boolean;
  items: D[];
  onItemUpdate?(items: D[]): void;
}

const SortableSemanticList: <D>(
  props: SortableSemanticListProps<D>
) => ReactElement = ({ children, disabled, inverted, items, onItemUpdate }) => {
  const handleItemSort = useCallback(
    (sort: SortEnd, _event: SortEvent) => {
      if (!onItemUpdate) {
        return;
      }
      items.splice(sort.newIndex, 0, ...items.splice(sort.oldIndex, 1));
      onItemUpdate(items.slice(0));
    },
    [items, onItemUpdate]
  );

  const shouldCancelSortStart = useCallback(
    (event: SortEvent | SortEventWithTag) => {
      let target = event.target as HTMLElement;
      while (!target || target.tagName !== "DIV") {
        if (tagNames.includes(target.tagName)) {
          return true;
        }
        target = target.parentElement;
      }
      return false;
    },
    []
  );

  return (
    <div className={disabled ? "list" : "sortable list"}>
      <style jsx>{`
        .list {
          margin-top: 0.42857143em;
          padding: 0.42857143em 0;
        }
        .list.sortable {
          user-select: none;
        }
      `}</style>
      <SortableList
        relaxed
        celled
        inverted={inverted}
        helperClass={inverted ? "inverted sorting" : "sorting"}
        shouldCancelStart={shouldCancelSortStart}
        onSortEnd={handleItemSort}
        lockAxis="y"
      >
        {children}
      </SortableList>
    </div>
  );
};

export { SortableSemanticList };
