import { Injectable } from '@angular/core';

/**
 * About: Service responsible for getting and setting data to browser SessionStorage
 */
@Injectable({
    providedIn: 'root',
})
export class SessionStorageService {
    get<T = string>(key: string): T | null {
        const item = window.sessionStorage.getItem(key) || '';

        if (!item) {
            return null;
        }

        try {
            return <T>JSON.parse(item);
        } catch (error: any) {
            console.error(error);
        }

        return null;
    }

    set<T = string>(key: string, value: T): void {
        let item = '{}';

        try {
            item = JSON.stringify(value);
        } catch (error: any) {
            console.error(error);
        }

        window.sessionStorage.setItem(key, item);
    }

    remove(key: string): void {
        window.sessionStorage.removeItem(key);
    }

    clear(): void {
        window.sessionStorage.clear();
    }

    dump(): void {
        console.dir(window.sessionStorage);
    }

    size(): number {
        return window.sessionStorage.length;
    }
}
