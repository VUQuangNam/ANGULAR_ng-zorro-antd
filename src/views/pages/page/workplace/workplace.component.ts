import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-workplace',
    templateUrl: './workplace.component.html',
    styleUrls: ['./style.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class WorkplaceComponent {
    array = [1, 2, 3, 4];
    effect = 'scrollx';
    expandSet = new Set<number>();

    constructor() { }
    listOfData = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park'
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park'
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park'
        }
    ];

    listOfData2 = [
        {
            id: 1,
            name: 'John Brown',
            age: 32,
            expand: false,
            address: 'New York No. 1 Lake Park',
            description: '<span>' + '123' + '</span>'
        },
        {
            id: 2,
            name: 'Jim Green',
            age: 42,
            expand: false,
            address: 'London No. 1 Lake Park',
            description: '<span>' + '456' + '</span>'
        },
        {
            id: 3,
            name: 'Joe Black',
            age: 32,
            expand: false,
            address: 'Sidney No. 1 Lake Park',
            description: '<span>' + '789' + '</span>'
        }
    ];

    onExpandChange(id: number, checked: boolean): void {
        if (checked) {
            this.expandSet.add(id);
        } else {
            this.expandSet.delete(id);
        }
    }
}
