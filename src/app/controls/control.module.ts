import { NgModule } from '@angular/core';
import { CurrencyComponent } from './currency.component';
import { FormsModule } from '@angular/forms';

//import { CurrencyDirective } from './currency.directive';

@NgModule({
    imports: [FormsModule],
    exports: [CurrencyComponent],
    declarations: [CurrencyComponent],
    providers: [],
})
export class ControlsModule { }
