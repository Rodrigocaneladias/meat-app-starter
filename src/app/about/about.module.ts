import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AboutComponent } from './about.component';

const ROUTES: Routes = [
    {path:"", component: AboutComponent}
]
@NgModule({
    imports:[
        RouterModule.forChild(ROUTES)
    ],
    declarations:[
        AboutComponent
    ]
})

export class AboutModule {};