import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../shared/navbar/navbar';
import { Footer } from "../shared/footer/footer";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  images = [
    {
      path: 'assets/images/BannerImage.jpg',
      title: 'Welcome to The Big Institution & Library',
      description: 'Best Library in Town with modern facilities.'
    },
    {
      path: 'assets/images/SunilPhoto.jpeg',
      title: 'Best Library In Town',
      description: 'Fully AC campus with high-speed Wi-Fi and power backup.'
    }
  ];

}