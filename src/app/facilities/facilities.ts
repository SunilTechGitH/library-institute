import { Component } from '@angular/core';
import { Navbar } from '../shared/navbar/navbar';
import { Footer } from "../shared/footer/footer";

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [Navbar, Footer],
  templateUrl: './facilities.html',
  styleUrl: './facilities.css'
})
export class Facilities {}