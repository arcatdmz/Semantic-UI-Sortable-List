import { ReactElement, ReactNode } from "react";
import { SemanticICONS } from "semantic-ui-react";
export interface SortableSemanticListItemProps<D> {
    icon?: SemanticICONS;
    header: string;
    data: D;
    onDelete?(d: D): void;
    children?: ReactNode;
}
declare const SortableSemanticListItem: <D>(props: SortableSemanticListItemProps<D>) => ReactElement<SortableSemanticListItemProps<D>>;
export { SortableSemanticListItem };
