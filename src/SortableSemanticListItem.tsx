import { ReactElement, ReactNode, MouseEvent, useCallback } from "react";
import { Button, List, SemanticICONS } from "semantic-ui-react";

export interface SortableSemanticListItemProps<D> {
  icon?: SemanticICONS;
  header: string;
  data: D;
  onDelete?(d: D): void;
  children?: ReactNode;
}

const SortableSemanticListItem: <D>(
  props: SortableSemanticListItemProps<D>
) => ReactElement<SortableSemanticListItemProps<D>> = ({
  icon,
  header,
  data,
  children,
  onDelete,
}) => {
  const handleDelete = useCallback(
    (ev: MouseEvent<HTMLButtonElement>) => {
      ev.stopPropagation();
      onDelete && onDelete(data);
    },
    [data, onDelete]
  );

  return (
    <div className="item">
      <style jsx>{`
        .item {
          display: list-item;
          table-layout: fixed;
          padding: 0.4em !important;
          list-style-type: none;
          list-style-position: outside;
          line-height: 1.14285714em !important;
        }
        .item.sorting {
          border: 1px dashed rgba(34, 36, 38, 0.15);
          border-width: 1px 0;
          background: rgba(255, 255, 255, 0.6);
        }
        .item.inverted.sorting {
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-width: 1px 0;
          background: rgba(255, 255, 255, 0.7);
          z-index: 1010;
        }
        .item > :global(.icon) {
          display: table-cell;
          min-width: 1.55em;
          padding-right: 0.28571429em;
          vertical-align: top;
        }
        .item > :global(.content) {
          display: table-cell;
          width: 100%;
          padding: 0 0 0 0.5em;
          vertical-align: top;
        }
        .item > :global(.right.floated.content) {
          float: right;
          width: auto;
        }
        .item > :global(.right.floated.content > *:last-child) {
          margin-right: 0;
        }
        .item > :global(.content > .header) {
          font-weight: bold;
        }
        .item > :global(.content > .description > .list) {
          margin: 0;
          padding: 0.25em 0 0 0.5em;
        }
      `}</style>
      {onDelete && (
        <List.Content floated="right">
          <Button
            circular
            color="red"
            size="tiny"
            icon="trash"
            onClick={handleDelete}
          />
        </List.Content>
      )}
      {icon && <List.Icon name={icon} />}
      <List.Content>
        <List.Header>{header}</List.Header>
        {data && children && <List.Description>{children}</List.Description>}
      </List.Content>
    </div>
  );
};

export { SortableSemanticListItem };
