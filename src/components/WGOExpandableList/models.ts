export interface WGOListItem {
  [key: string]: unknown;
}

export interface WGOPropToEdit {
  label: string;
  prop: string;
  tooltip?: string | ((item: WGOListItem) => string);
  type?: "number" | "text" | "date" | "select";
  value?: (item: WGOListItem) => string;
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
  click: (item?: WGOListItem) => unknown;
  disabled?: (item?: WGOListItem) => boolean;
}

export interface WGOExpandableListOptions {
  showAddButton: boolean;
  labelShowAddButton: string;
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
    click: (item?: WGOListItem) => unknown;
  }[];
  onAddItem: (item: WGOListItem, callback: () => {}) => unknown;
  onEditItem: (item: WGOListItem, callback: () => {}) => unknown;
  onDeleteItem: (item: WGOListItem, index: number) => unknown;
  filterItems?: (items: WGOListItem[], filter: WGOListItem) => WGOListItem[];
}

export const DefaultWGOExpandableListOptions: WGOExpandableListOptions = {
  showAddButton: true,
  labelShowAddButton: "Nuovo",
  textDeleteConfirm: "Confermi la cancellazione",
  disableFullscreen: false,
  disableExportExcel: false,
  disableExportCSV: false,
  disableExportClipboard: false,
  disableFilters: false,
  headerButtons: [],
  expandedButtons: [],
  onAddItem: (item: WGOListItem) => {},
  onEditItem: (item: WGOListItem) => {},
  onDeleteItem: (item: WGOListItem) => {},
};
