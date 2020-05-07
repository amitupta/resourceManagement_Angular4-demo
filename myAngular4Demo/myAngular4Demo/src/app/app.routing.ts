import{NgModule} from '@angular/core';
import{RouterModule, Routes} from '@angular/router';
import{IndexComponentComponent} from './component/index-component/index-component.component';
import{DemoComponentComponent} from './component/demo-component/demo-component.component';
import{HomeComponentComponent} from './component/home-component/home-component.component';
import{LoginComponentComponent} from './component/login-component/login-component.component';
import { GetuserComponent } from './component/getuser/getuser.component';
import { GetuserByidComponent } from './component/getuser-byid/getuser-byid.component';
const AppRoutes:Routes=[
{path:'',component:LoginComponentComponent},
{path:'index',component:IndexComponentComponent},
{path:'home',component:HomeComponentComponent},
{path:'login',component:LoginComponentComponent},
{path:'addResource',component:DemoComponentComponent},
{path:'getResouce',component:GetuserComponent},
{path:'getResourceById',component:GetuserByidComponent},

];

@NgModule({
    imports:[
        RouterModule.forRoot(AppRoutes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{}
