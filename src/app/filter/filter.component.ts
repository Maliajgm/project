import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent {
    selectedFilter: string;
    filters: string[] = ['Filter 1', 'Filter 2', 'Filter 3']; // Add your filter options here

    @Output() filterChange = new EventEmitter<string>();

    constructor() {
        this.selectedFilter = this.filters[0]; // Set a default filter
    }

    onFilterChange() {
        this.filterChange.emit(this.selectedFilter);
    }
}

