import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/interface/response.interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  response: Response = {} as Response;
  constructor(private userService: UserService) {}

  /* Lifecycle Hook runs after Component has been initialized */
  ngOnInit(): void {
    /* `subscribe()` notifies when a Result comes back from the Observable */
    this.userService.getUsers(12).subscribe((result: Response) => {
      console.log(result);
      this.response = result;
    });
  }
}
