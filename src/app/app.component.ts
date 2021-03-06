import {slideInAnimation} from "./models/animations";
import {Component} from "@angular/core";
import {Router, RouterOutlet} from '@angular/router';
import {DeclarationService} from "./services/declaration.service";
import {UserService} from "./services/user.service";
import {LoadService} from "./services/load.service";
import {AuthService} from "./account/auth.service";
import {CarService} from './services/car.service';
import {ClientService} from './services/client.service';
import {ProjectService} from './services/project.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'DigitaleFactuur – Kilometer Registratie';
  //loggedIn = false;

  constructor(
    private decService:DeclarationService,
    private userService: UserService,
    private load:LoadService,
    private auth:AuthService,
    private carService: CarService,
    private clientService:ClientService,
    private projectService:ProjectService,
    private router: Router) {
    load.setLoadingFalse();

    let checkLogin = setInterval(() => {
      if (auth.loggedIn) {
        userService.getUserData();
        decService.getDeclarationArray().subscribe();
        carService.getCarsArray().subscribe();
        clientService.getClientsArray().subscribe();
        projectService.getProjectsArray().subscribe();
        this.router.navigate(['/dashboard']);
        clearInterval(checkLogin);
      }
    }, 200);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
