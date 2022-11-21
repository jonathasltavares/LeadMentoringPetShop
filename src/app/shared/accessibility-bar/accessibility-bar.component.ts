import { Component } from '@angular/core';

@Component({
  selector: 'app-accessibility-bar',
  templateUrl: './accessibility-bar.component.html',
  styleUrls: ['./accessibility-bar.component.css']
})
export class AccessibilityBarComponent {
  font_size =16
  constructor() { 
  }

  ngOnInit(): void {
  }

  setFontSize(id:string){
    if(id==='a-' && this.font_size>10){
      this.font_size -= 2
    }else if(id==='a+' && this.font_size<22){
      this.font_size += 2
    }else if(id==='a'){
      this.font_size = 16
    }

    let htmlRoot:HTMLElement = <HTMLElement> document.getElementsByTagName("html")[0]
    if(htmlRoot != null){
      htmlRoot.style.fontSize = `${this.font_size}px`
    }
  }
}
