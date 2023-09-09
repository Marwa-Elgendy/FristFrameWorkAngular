import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NAVComponent {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e:any) {
    let menu = document.querySelector(".navbar");
    let scrollDown = "scroll-down";
    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 30) {
        menu?.classList.remove('py-4');
        return;
      }
      else if(currentScroll == 0){
        menu?.classList.add('py-4');
      }
    })
}}



