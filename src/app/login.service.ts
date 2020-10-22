import {Injectable} from '@angular/core';

@Injectable()
export class LoginService {
  login(username, password){       
    if(username === "ventk2" && password === "Zealand")
        return true; 
    else
        return false;
  }
}