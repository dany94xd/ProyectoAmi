import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { UserInterface } from '../../../models/user-interface';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private dataApiService: DataApiService) { }
  private users: UserInterface;
  pageActual: number = 1;
  public myCounter: number = 0;
  ngOnInit() {
    this.getListUsers();
  }

  getListUsers(): void {
    this.dataApiService
      .getAllUsers()
      .subscribe((users: UserInterface) => (this.users = users));
  }

  onDeleteUser(id: string): void {
    if (confirm('Está seguro de Eliminar?')) {
      this.dataApiService.deleteUser(id).subscribe();
    }
  }

  onPreUpdateUser(user: UserInterface): void {
    this.dataApiService.selectedUser = Object.assign({}, user);
  }

  resetForm(userForm?: NgForm): void {
    this.dataApiService.selectedUser = {
      id: null,
      name:'',
      email:'',
      password:'',
      
    };
  }


}
