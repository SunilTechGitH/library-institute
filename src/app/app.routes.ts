import { Routes } from '@angular/router';

import { Home } from './home/home';
import { About } from './about/about';
import { Facilities } from './facilities/facilities';
import { Gallery } from './gallery/gallery';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'facilities', component: Facilities },
  { path: 'gallery', component: Gallery },
  { path: 'contact', component: Contact }
];