export interface PeriodicElement {
  item: string;
  position: number;
  type: string;
  division: string;
  CAD: string;
  details: string;
}

export const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, item: '3D modeling Visualization using AR/VR', type: "AR/VR", division: 'BI & mobile App DIV', CAD: "M", details: ""},
  { position: 2, item: 'Anytime Learning through Mobile', type: "Mobility", division: 'Human Res & Payroll DIV', CAD: "O", details: ""},
  { position: 3, item: 'Automate Admin Activities', type: "RPA", division: 'Human Res & Payroll DIV', CAD: "O", details: ""},
];