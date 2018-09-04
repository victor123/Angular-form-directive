import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input, transition } from "@angular/core";

@Directive({
 selector:'[bgDirective]'
})

export class simpleDirective implements OnInit{
    @Input() defaultColor:string = 'transparent';
    @Input() Highlight:string = 'blue';
    @HostBinding('style.backgroundColor') backgroundColor:string;
    constructor(private el:ElementRef, private renderer:Renderer2) {}
    ngOnInit(){
    //this.renderer.setStyle(this.el.nativeElement,'background-color','blue')
    }

    @HostListener('mouseenter') mouseover(event:Event) {
        this.backgroundColor = this.Highlight;
    //this.renderer.setStyle(this.el.nativeElement,'background-color','blue');
    //this.renderer.setStyle(this.el.nativeElement,'color','white');
    }

    @HostListener('mouseleave') mouseleave(event:Event){
        this.backgroundColor = this.defaultColor
        //this.renderer.setStyle(this.el.nativeElement,'background-color','transparent');
       // this.renderer.setStyle(this.el.nativeElement,'color','black');
    }
    // @HostListener('click') clickable(event: Event) {
    //     this.renderer.setStyle(this.el.nativeElement,'backgroud','blue')

    // }
}