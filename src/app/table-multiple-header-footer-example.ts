import {Component} from '@angular/core';
import {Transaction} from '../table-footer-row/table-footer-row-example';

/**
 * @title Table with multiple header and footer rows
 */
@Component({
  selector: 'table-multiple-header-footer-example',
  styleUrls: ['table-multiple-header-footer-example.css'],
  templateUrl: 'table-multiple-header-footer-example.html',
})
export class TableMultipleHeaderFooterExample {
  displayedColumns: string[] = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
}


/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */