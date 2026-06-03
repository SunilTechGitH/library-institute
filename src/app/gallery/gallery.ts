import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../shared/navbar/navbar';
import { Footer } from '../shared/footer/footer';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {

  photos = [
    'assets/images/BannerImage.jpg',
    'assets/images/SunilPhoto.jpeg'
  ];

}