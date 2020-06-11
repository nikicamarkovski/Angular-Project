import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
   @HostBinding('class.open') inOpen = false;
    @HostListener('click') toggleOpen(){
        this.inOpen = !this.inOpen;
    }
}

