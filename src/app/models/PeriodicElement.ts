export interface PeriodicElement {
  item: string;
  position: number;
  type: string;
  division: string;
  CAD: string;
  status: string;
  details: string;
  desc:string;
  impact: string;
  proponent: string;
  ispro: string;
  fund:string;
  theme:string;
  start:string;
  end:string;
  cost:number;
  NPV:string;
  NPVJ:string;
  DT: string;
  BP: string;
  demand: string;
  note:string;
  update:string;
}

export const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, item: '3D modeling Visualization using AR/VR', type: "AR/VR", division: 'BI & mobile App DIV', CAD : "M",status:"--", details: "",
  desc:'hhh',impact:'N/A', proponent:'Project Managment Dep.', ispro:'hh', fund:'HR trans.', theme:'HR', start: 'jan-22', end:'Dec-23',cost:22,NPV:'44MM',NPVJ:'eee',DT:'yes', BP:'tttt', demand:'hh', note:'kgm',update:'gkkg'
},
  { position: 2, item: 'Anytime Learning through Mobile', type: "Mobility", division: 'Human Res & Payroll DIV', CAD: "O",status:"--", details: "",desc:'--',impact:'N/A', proponent:'Project Managment Dep.', ispro:'--', fund:'HR trans.', theme:'HR', start: 'jan-22', end:'Dec-23',cost:22,NPV:'44MM',NPVJ:'--',DT:'yes', BP:'--', demand:'--', note:'--',update:'--'},
  { position: 3, item: 'Automate Admin Activities', type: "RPA", division: 'Human Res & Payroll DIV', CAD: "O",status:"--",details: "",desc:'--',impact:'N/A', proponent:'Project Managment Dep.', ispro:'--', fund:'HR trans.', theme:'HR', start: 'jan-22', end:'Dec-23',cost:22,NPV:'44MM',NPVJ:'--',DT:'yes', BP:'--', demand:'--', note:'--',update:'--'},
];




//displayedColumn: string[] = ['desc','impact','proponent','ispro','fund','theme','start','end','cost','NPV','NPVJ','DT','BP','demand','note','update',];