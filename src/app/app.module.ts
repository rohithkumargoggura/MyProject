import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './loginForm/login-form.component';
import { EqualValidator } from './loginForm/password.match.directive';
import { ListUsers } from './viewusers/viewusers.component';
import { UpdateUser } from './update/update.component';
import { ViewUsers } from './services/viewusers.service';
import { RouterModule , Routes} from '@angular/router';
import { UserService } from './services/user.service';
import { UpdateService } from './services/update.service';
import {HttpClientModule} from '@angular/common/http';

import { DoughnutChartComponent,  BarChartComponent , PieChartComponent} from 'angular-d3-charts';

import {BarChart} from './d3/d3-bar-chart/barchart.component';
import {MultiBarChart} from './d3/multi-bar-chart/multibar.component';
import {PiChart} from './d3/pie-chart-demo/piechart.component'

import { PieChartComponent1 } from './d3/pie-chart/pie-chart.component';
import {DataService} from './d3/pie-chart/data.service';

import {Bars} from './c3/bars/bars1.component';
import {Bars1} from './c3/bars1/bars2.component';
import {UserStories} from './services/userstories.service';
import {MultiValue} from './c3/pie-chart/pie.component';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {Bar3} from './c3/bars3/bar3.component';
import {CommentD} from './c3/cd/comment.component';

import {CD} from './c3/cd1/cd.component';
import {CDE} from './c3/cd2/cd2.component';
import {CommentDistributionService} from './c3/cd2/comment.service';
import {DistributionOfResponsesService} from './c3/cd2/distribution.service';

const appRoutes = [
  {
    path: '',
    component: LoginFormComponent
  },
  
  {
    path: 'viewusers',
    component: ListUsers
  },
  {
    path: 'update',
    component: UpdateUser
  },
  {
    path: 'barchart',
    component: BarChart
  },
  {
    path: 'multibar',
    component: MultiBarChart
  },
  {
    path: 'piechart',
    component: PieChartComponent1
  },
  {
    path: 'pichart',
    component: PiChart
  },
  {
    path: 'bars',
    component: Bars
  },
  {
    path: 'bars1',
    component: Bars1
  },
  {
    path: 'multi',
    component: MultiValue
  },
  {
    path: 'bar3',
    component: Bar3
  },
  {
    path: 'cd',
    component: CommentD
  },
  {
    path: 'cd1',
    component: CD
  },
  {
    path: 'cd2',
    component: CDE
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    EqualValidator,
    ListUsers,
    UpdateUser,
    DoughnutChartComponent, 
    PieChartComponent,
    PieChartComponent1, 
    BarChartComponent,
    BarChart,
    MultiBarChart,
    PiChart,
    Bars,
    Bars1,
    MultiValue,
    Bar3,
    CommentD,
    CD,
    CDE
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    DropdownModule,
    BrowserAnimationsModule
  ],
  providers: [ UserService , ViewUsers , UpdateService , DataService , UserStories ,CommentDistributionService, DistributionOfResponsesService],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
