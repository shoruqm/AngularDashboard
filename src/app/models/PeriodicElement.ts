export interface PeriodicElement {
  No: number;
  Item: string;
  Description:string;
  Impact_Reamars_Comments: string;
  Type: string;
  Division: string;
  Proponent: string;
  is_Proponent_involve: string;
  Fund_Source:string;
  CAD_SME: string;
  Theme:string;
  start:string;
  end:string;
  cost:number;
  NPV:string;
  NPV_Justification:string;
  DT_Item: string;
  BP_Item: string;
  Demand: string;
  Note:string;
  Status: string;
  Update:string;
  details: string;

}

export const ELEMENT_DATA: PeriodicElement[] = [
  { No: 1, Item: '3D modeling Visualization using AR/VR', Type: "AR/VR", Division: 'BI & mobile App DIV', CAD_SME : "M",Status:"--", details: "",
  Description:'hhh', Impact_Reamars_Comments:'N/A', Proponent:'Project Managment Dep.', is_Proponent_involve:'hh', Fund_Source:'HR trans.', Theme:'HR', start: 'jan-22', end:'Dec-23',cost:22,NPV:'44MM',NPV_Justification:'eee',DT_Item:'yes', BP_Item:'tttt', Demand:'hh', Note:'kgm',Update:'gkkg'
},
  { No: 2, Item: 'Anytime Learning through Mobile', Type: "Mobility", Division: 'Human Res & Payroll DIV', CAD_SME: "O",Status:"--", details: "",Description:'--', Impact_Reamars_Comments:'N/A', Proponent:'Project Managment Dep.', is_Proponent_involve:'--', Fund_Source:'HR trans.', Theme:'HR', start: 'jan-22', end:'Dec-23',cost:22,NPV:'44MM',NPV_Justification:'--',DT_Item:'yes', BP_Item:'--', Demand:'--', Note:'--',Update:'--'},
  { No: 3, Item: 'Automate Admin Activities', Type: "RPA", Division: 'Human Res & Payroll DIV', CAD_SME: "O",Status:"--",details: "",Description:'--', Impact_Reamars_Comments:'N/A', Proponent:'Project Managment Dep.', is_Proponent_involve:'--', Fund_Source:'HR trans.', Theme:'HR', start: 'jan-22', end:'Dec-23',cost:22,NPV:'44MM',NPV_Justification:'--',DT_Item:'yes', BP_Item:'--', Demand:'--', Note:'--',Update:'--'},
];




//displayedColumn: string[] = ['desc','impact','proponent','ispro','fund','theme','start','end','cost','NPV','NPVJ','DT','BP','demand','note','update',];