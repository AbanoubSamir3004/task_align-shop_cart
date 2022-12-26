import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-stand-alone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-stand-alone.component.html',
  styleUrls: ['./test-stand-alone.component.css']
})
export class TestStandAloneComponent {

}
