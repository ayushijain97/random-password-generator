import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'random-password-generator';
  passwordLength = 10;
  randomPassword = '';
  characterSets = {
    alphabet: false,
    numbers: true,
    specialCharacters: false,
  };
  ngOnInit() {
    this.generatePassword()
  }
  generatePassword() {
    // Start fresh by resetting the password
    this.randomPassword = '';

    // Define character sets for the password
    const alphabetSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Alphabet characters
    const numberSet = '0123456789'; // Numeric characters
    const specialCharacterSet = '!@#$%^&*()_+[]{}|;:,.<>?'; // Special characters

    // Initialize an empty pool to hold all the possible characters for the password
    let availableCharacters = '';

    // Add the respective sets to the pool if the user has selected the option
    if (this.characterSets.alphabet) {
      availableCharacters += alphabetSet; // Include alphabet characters if selected
    }
    if (this.characterSets.numbers) {
      availableCharacters += numberSet; // Include numeric characters if selected
    }
    if (this.characterSets.specialCharacters) {
      availableCharacters += specialCharacterSet; // Include special characters if selected
    }

    // If no options are selected, provide a reminder to the user
    if (!availableCharacters) {
      this.randomPassword =
        'Please select at least one option to generate a password.';
      return; // Exit the function early since we can't generate a password without any options
    }

    // Now that we have a valid pool of characters, let's generate the password
    let password = '';
    for (let i = 0; i < this.passwordLength; i++) {
      // Randomly pick a character from the pool for each position in the password
      const randomIndex = Math.floor(
        Math.random() * availableCharacters.length,
      );
      password += availableCharacters[randomIndex];
    }

    // Set the generated password to the randomPassword property
    this.randomPassword = password;
  }

  resetPassword() {
    this.passwordLength = 10;
    this.characterSets = {
      alphabet: false,
      numbers: true,  
      specialCharacters: false,
    }
    this.generatePassword()
  }
}
