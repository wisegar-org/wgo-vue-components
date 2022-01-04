export interface IWGOInputTextOptions {
  onChange?: any;
  small?: boolean;
  readonly?: boolean;
  rules?: any[];
  required?: boolean;
  clearable?: boolean;
  tooltip?: string;
}
// TODO: Ereditare
export interface IWGOInputNumberOptions extends IWGOInputTextOptions {
  decimal?: number;
}

export interface IWGOInputPlaneTextOptions extends IWGOInputTextOptions {
  maxLength?: number;
}

export interface IWGOInputSelectableOptions {
  label: string;
  value: any;
}
