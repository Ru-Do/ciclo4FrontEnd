import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './pages/shared/nav/nav.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { FiltroPublicacionesComponent } from './pages/filtro-publicaciones/filtro-publicaciones.component';
import { VolunteerFormComponent } from './pages/volunteer-form/volunteer-form.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { FundacionesComponent } from './pages/fundaciones/fundaciones.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    UserProfileComponent,
    FooterComponent,
    RegistroComponent,
    ForgotPasswordComponent,
    FiltroPublicacionesComponent,
    EmpresasComponent,
    FundacionesComponent,
    VolunteerFormComponent,
    PerfilUsuarioComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      maxOpened: 5
    }), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

