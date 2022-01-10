export interface ListItem {
  [key: string]: unknown;
}

export interface PropToEdit {
  label: string;
  prop: string;
  tooltip?: string | ((item: ListItem) => string);
  type?: "number" | "text" | "date" | "select";
  value?: (item: ListItem) => string;
  options?: unknown;
  required?: boolean;
  visible?: boolean;
  class?: string;
  columns?: number;
}

export interface WGOExpandableHeaderButton {
  icon: string;
  tooltip: string;
  click: () => unknown;
}

export interface WGOExpandableButton {
  icon: string;
  tooltip: string;
  click: (item?: ListItem) => unknown;
  disabled?: (item?: ListItem) => boolean;
}

export interface WGOExpandableListOptions {
  showAddButton: boolean;
  labelshowAddButton: string;
  textDeleteConfirm: string;
  labelAddDialog?: string;
  labelFilterDialog?: string;
  editReactive?: boolean;
  editorStyle?: string;
  disableFullscreen?: boolean;
  labelFullscreenButton?: boolean;
  disableExportExcel?: boolean;
  labelExportExcelButton?: boolean;
  disableExportCSV?: boolean;
  labelExportCSVButton?: boolean;
  disableExportClipboard?: boolean;
  labelExportClipboardButton?: boolean;
  textExportClipboardMsg?: boolean;
  disableFilters?: boolean;
  labelFiltersButton?: boolean;
  disableSelectColumns?: boolean;
  labelSelectColumnsButton?: boolean;
  minHeight?: number;
  bordered?: boolean;
  maxLabels?: number;
  maxLines?: number;
  headerButtons?: {
    icon: string;
    tooltip: string;
    click: () => unknown;
  }[];
  expandedButtons?: {
    icon: string;
    tooltip: string;
    click: (item?: ListItem) => unknown;
  }[];
  onAddItem: (item: ListItem, callback: () => {}) => unknown;
  onEditItem: (item: ListItem, callback: () => {}) => unknown;
  onDeleteItem: (item: ListItem, index: number) => unknown;
  filterItems?: (items: ListItem[], filter: ListItem) => ListItem[];
}

export const DefaultWGOExpandableListOptions: WGOExpandableListOptions = {
  showAddButton: true,
  labelshowAddButton: "Nuovo",
  textDeleteConfirm: "Confermi la cancellazione",
  disableFullscreen: false,
  disableExportExcel: false,
  disableExportCSV: false,
  disableExportClipboard: false,
  disableFilters: false,
  headerButtons: [],
  expandedButtons: [],
  onAddItem: (item: ListItem) => {},
  onEditItem: (item: ListItem) => {},
  onDeleteItem: (item: ListItem) => {},
};
