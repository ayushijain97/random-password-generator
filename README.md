# RandomPasswordGenerator

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

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


## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
