import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IFilter} from "@core/models";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() categories?: string[]|null;
  @Input() activeCategory?: string | null;
  @Input() set filters(value:IFilter|null|undefined){
    if(!value){
      return
    }
    this.filtersForm.patchValue(value)
  }
  @Output() filterEmitter: EventEmitter<IFilter> = new EventEmitter<IFilter>();
  @Output() closeFilter: EventEmitter<void> = new EventEmitter<void>();

  filtersForm:FormGroup = this._fb.group({
    categories: null,
    price: null,
    search: null
  });

  constructor(private _fb: FormBuilder) {
  }

  acceptFilters(){
    if(!this.filtersForm.touched) {
      return
    }
    this.filterEmitter.emit(this.filtersForm.getRawValue())
    this.filtersForm.markAsUntouched()
  }

  resetFilters(){
    this.filtersForm.reset()
    this.filtersForm.markAsTouched()
    this.acceptFilters()
  }
}
