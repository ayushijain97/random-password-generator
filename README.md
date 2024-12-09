# RandomPasswordGenerator

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Assumptions

1. **Password Length**: The user can input a custom password length, but the minimum length is 1 and the maximum is 30 characters.
2. **Character Set**:
   - By default, the password will contain **only numbers**. The password will include random digits (0-9).
   - If the user selects "Include Alphabets", the password will include random alphabets (a-z).
   - If the user selects "Include Special Characters", the password will include random special characters like `!@#$%^&*()`.
3. **Randomness**: The password is generated randomly each time the button is clicked.
4. **Client-Side Application**: The app is purely client-side.
5. **Validation**: The app ensures that password length input is within the specified range (1 to 30). If the user has not selected any checkbox then it will give you a note.
6. **No Backend**: The solution does not rely on any backend services or databases.
