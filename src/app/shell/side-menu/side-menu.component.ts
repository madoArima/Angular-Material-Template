import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { PATH } from '../../shared/pathRounting';

interface Nodo {
  name: string;
  children?: Nodo[];
  icon?: string;
  routerLink?: string;
}

const URL_DASHBOARD = '/' + PATH._DASHBOARD + '/';
const URL_FORMS = '/' + PATH._FORMS + '/';
const URL_TABLES = '/' + PATH._TABLES + '/';
const URL_CHARTS = '/' + PATH._CHARTS + '/';
const URL_MAPS = '/' + PATH._MAPS + '/';

const ARBOL: Nodo[] = [
  {
    name: 'Home',
    icon: 'home',
    routerLink: '/' + PATH._HOME
  },
  {
    name: 'Dashboard',
    icon: 'dashboard',
    children: [ 
      { name: 'board-1', routerLink: URL_DASHBOARD + PATH._BOARD_1 },
      { name: 'board-2', routerLink: URL_DASHBOARD + PATH._BOARD_2 }             
    ]
  }, 
  {
    name: 'Forms',
    icon: 'assignment',
    children: [
      { name: 'form-1', routerLink: URL_FORMS + PATH._FORM_1 },
      { name: 'form-2', routerLink: URL_FORMS + PATH._FORM_2 }
    ]
  },
  {
    name: 'Tables',
    icon: 'table_chart',
    children: [
      { name: 'table-1', routerLink: URL_TABLES + PATH._TABLE_1 },
      { name: 'table-2', routerLink: URL_TABLES + PATH._TABLE_2 }
    ]
  },
  {
    name: 'Charts',
    icon: 'insert_chart',
    children: [
      { name: 'chart-1', routerLink: URL_CHARTS + PATH._CHART_1 }
    ]
  },
  {
    name: 'Maps',
    icon: 'place',
    children: [
      { name: 'map-1', routerLink: URL_MAPS + PATH._MAP_1 }
    ]
  }    
];

/** Flat node with expandable and level information */
interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
};

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  private transformer = (node: Nodo, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      icon: node.icon,
      routerLink: node.routerLink,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<FlatNode>(node => node.level, node => node.expandable);
  treeFlattener = new MatTreeFlattener(this.transformer, node => node.level, node => node.expandable, node => node.children);
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = ARBOL;
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;

  ngOnInit() {

  }
}
