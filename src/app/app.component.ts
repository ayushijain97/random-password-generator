import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { PASSWORD_CONSTRAINTS, PASSWORD_SETS } from './password.constant';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, MatIconModule, MatSliderModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'random-password-generator';
  passwordLength: number = 10;
  randomPassword = '';
  characterSets = {
    alphabet: false,
    numbers: true,
    specialCharacters: false,
  };
  copyIcon = false;

  ngOnInit() {
    // Generate a random password on component initialization
    this.generatePassword()
  }

  generatePassword() {
    // Start fresh by resetting the password
    this.randomPassword = '';

  
    // Initialize an empty pool to hold all the possible characters for the password
    let availableCharacters = '';

    // Add the respective sets to the pool if the user has selected the option
    if (this.characterSets.alphabet) {
      availableCharacters += PASSWORD_SETS.ALPHABET; // Include alphabet characters if selected
    }
    if (this.characterSets.numbers) {
      availableCharacters += PASSWORD_SETS.NUMBERS; // Include numeric characters if selected
    }
    if (this.characterSets.specialCharacters) {
      availableCharacters += PASSWORD_SETS.SPECIAL; // Include special characters if selected
    }

    // If no options are selected, give a reminder to the user
    if (!availableCharacters) {
      this.randomPassword =
        'Please select at least one option to generate a password.';
      return;
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

  async copyPassword(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.randomPassword);
      this.copyIcon = true;
      setTimeout(() => this.copyIcon = false, 2000);
    } catch (error) {
      console.error('Failed to copy password:', error);
    }
  }
  
  onSliderInput(event: any) {
    this.passwordLength = event.value; // Update value on slider move
  }

  preventNegative(event: KeyboardEvent): void {
    const invalidKeys = ['-', 'e'];
    if (invalidKeys.includes(event.key)) {
      event.preventDefault();
      return;
    }
  
    const newValue = Number(this.passwordLength);
    if (newValue < PASSWORD_CONSTRAINTS.MIN_LENGTH || 
        newValue > PASSWORD_CONSTRAINTS.MAX_LENGTH) {
      event.preventDefault();
    }
  }
}
