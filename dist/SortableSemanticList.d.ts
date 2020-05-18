import { ReactElement, ReactNode } from "react";
export interface SortableSemanticListProps<D> {
    children?: ReactNode;
    disabled?: boolean;
    inverted?: boolean;
    items: D[];
    onItemUpdate?(items: D[]): void;
}
declare const SortableSemanticList: <D>(props: SortableSemanticListProps<D>) => ReactElement;
export { SortableSemanticList };
