import { Component } from '@angular/core';
import { LocalStorageService } from './shared/services/local-storage/local-storage.service';
import { SessionStorageService } from './shared/services/session-storage/session-storage.service';
import { User } from './types/user.type';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'angular-browser-storage-services';

    private readonly key: string;
    private readonly user: User;

    constructor(
        private readonly localStorage: LocalStorageService,
        private readonly sessionStorage: SessionStorageService
    ) {
        this.key = 'user';
        this.user = {
            name: 'John Doe',
            email: 'john.doe@localhost.com',
            age: 42,
        };
    }

    // 1. LocalStorage

    getLocalStorageValue(): void {
        const user = this.localStorage.get(this.key);

        if (!user) {
            console.log('No user was found in LocalStorage');
        } else {
            console.dir(user);
        }
    }

    setLocalStorageValue(): void {
        this.localStorage.set<User>(this.key, this.user);
        this.localStorage.dump();
    }

    removeLocalStorageValue(): void {
        this.localStorage.remove(this.key);
        this.localStorage.dump();
    }

    clearLocalStorage(): void {
        this.localStorage.clear();
        this.localStorage.dump();
    }

    getLocalStorageSize(): void {
        const size = this.localStorage.size();
        console.log(`LocalStorage has ${size} item(s)`);
    }

    // 2. SessionStorage

    getSessionStorageValue(): void {
        const user = this.sessionStorage.get(this.key);

        if (!user) {
            console.log('No user was found in SessionStorage');
        } else {
            console.dir(user);
        }
    }

    setSessionStorageValue(): void {
        this.sessionStorage.set<User>(this.key, this.user);
        this.sessionStorage.dump();
    }

    removeSessionStorageValue(): void {
        this.sessionStorage.remove(this.key);
        this.sessionStorage.dump();
    }

    clearSessionStorage(): void {
        this.sessionStorage.clear();
        this.sessionStorage.dump();
    }

    getSessionStorageSize(): void {
        const size = this.sessionStorage.size();
        console.log(`SessionStorage has ${size} item(s)`);
    }
}
