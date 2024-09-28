import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-view-1',
  standalone: true,
  imports: [],
  templateUrl: './simple-view-1.component.html',
  styleUrl: './simple-view-1.component.scss'
})
export class SimpleView1Component implements OnInit {
    @Input({required: true}) simpleViewCustomName!: string;

    ngOnInit(): void {
        console.log('sw:', this.simpleViewCustomName);
    }
}
