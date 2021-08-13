import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  readonly tokenName = 'token';

  public setTokenToStorage(value: string): void {
    localStorage.setItem(this.tokenName, value);
  }

  public getTokenFromStorage(): string {
    return localStorage.getItem(this.tokenName);
  }

  public removeTokenFromStorage(): void {
    localStorage.removeItem(this.tokenName);
  }

  public checkIfAuthorized(): boolean {
    return !!this.getTokenFromStorage();
  }
}
