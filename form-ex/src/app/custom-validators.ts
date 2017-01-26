import { Directive, Input, forwardRef} from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

// selector: '[min][formControlName],[min][formControl],[min][ngModel]',

@Directive({
    selector: '[min][ngModel]',
    providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => MinValueValidator), multi: true }],
    host: { '[attr.min]': 'min ? min : null' }
})
export class MinValueValidator implements Validator {
    @Input() min: string;

    validate(control: AbstractControl): { [key: string]: any } {
        return this.min != null ? this._validate(control) : null;
    }

    private _validate(control: AbstractControl) {
        const min = Number.parseInt(this.min, 10);
        return control.value > min ? null : {'min': `최소 ${this.min}보다 큰 값을 입력하세요`};
    }
}

@Directive({
    selector: '[max][ngModel]',
    providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => MaxValueValidator), multi: true }],
    host: { '[attr.max]': 'max ? max : null' }
})
export class MaxValueValidator implements Validator {
    @Input() max: string;

    validate(control: AbstractControl): { [key: string]: any } {
        return this.max != null ? this._validate(control) : null;
    }

    private _validate(control: AbstractControl) {
        const max = Number.parseInt(this.max, 10);
        return control.value <= max ? null : {'max': `최대 ${this.max}보다 작은 값을 입력하세요`};
    }
}