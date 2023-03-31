import { Injectable } from '@angular/core';

/**
 * About: Service responsible for getting and setting data to browser LocalStorage
 */
@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    get<T = string>(key: string): T | null {
        const item = window.localStorage.getItem(key) || '';

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

        window.localStorage.setItem(key, item);
    }

    remove(key: string): void {
        window.localStorage.removeItem(key);
    }

    clear(): void {
        window.localStorage.clear();
    }

    dump(): void {
        console.dir(window.localStorage);
    }

    size(): number {
        return window.localStorage.length;
    }
}
