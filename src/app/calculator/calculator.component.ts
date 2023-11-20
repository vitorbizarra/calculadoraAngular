import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  result: number = 0;

  onSubmit(f: NgForm) {
    let numA: number = f.value.numA
    let numB: number = f.value.numB
    let operator: string = f.value.operator

    this.result = eval(`${numA}${operator}${numB}`)
  }
}
