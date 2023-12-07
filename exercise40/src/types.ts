export interface Field {
  type: string;
  required: boolean;
  name: string;
  label: string | string[];
  default: any;
}

export interface Section {
  subtitle: string;
  fields: Field[];
}
