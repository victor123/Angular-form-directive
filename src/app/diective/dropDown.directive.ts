import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector:'[dropDown]'
})

export class dropDownDirective {
@HostBinding('class.open') Open:boolean = false;

 @HostListener('click') toggleMenu(){
     this.Open = !this.Open
 }
}