# Angular Browser Storage Services

## About
Services to work with LocalStorage and SessionStorage in the browser. 

## Usage
Inject the service(s) in any constructor in the application and call one of its public API methods.
```typescript
export class AppComponent {
    constructor(
        private readonly localStorage: LocalStorageService, 
        private readonly sessionStorage: SessionStorageService
    ) {}
}
```

### LocalStorageService
The service exposed the following API.
```typescript
// Get stored value
get<T = string>(key: string): T | null;

// Set value to store
set<T = string>(key: string, value: T): void;

// Remove stored value
remove(key: string): void;

// Clear all stored values
clear(): void;

// Print content in console
dump(): void;

// Get number of entries
size(): number;
```

### SessionStorageService
The service exposed the following API.
```typescript
// Get stored value
get<T = string>(key: string): T | null;

// Set value to store
set<T = string>(key: string, value: T): void;

// Remove stored value
remove(key: string): void;

// Clear all stored values
clear(): void;

// Print content in console
dump(): void;

// Get number of entries
size(): number;
```

## Author
[Qulle](https://github.com/qulle/)