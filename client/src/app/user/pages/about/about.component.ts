import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
