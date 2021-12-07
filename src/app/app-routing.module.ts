import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
//import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { FiltroPublicacionesComponent } from './pages/filtro-publicaciones/filtro-publicaciones.component';
import { VolunteerFormComponent } from './pages/volunteer-form/volunteer-form.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { FundacionesComponent } from './pages/fundaciones/fundaciones.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  //{ path: 'profile', component: UserProfileComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'filtroPublicaciones', component: FiltroPublicacionesComponent },
  { path: 'volunteerForm', component: VolunteerFormComponent },
  { path: 'volunteerFormEditar/:id', component: VolunteerFormComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'empresasEditar/:id', component: EmpresasComponent },
  { path: 'fundaciones', component: FundacionesComponent },
  { path: 'fundacionesEditar/:id', component: FundacionesComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'perfil', component: PerfilUsuarioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
