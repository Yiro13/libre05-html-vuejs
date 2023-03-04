new Vue({
    el: '#app',
    data: {
      passwordLength: 20,
      includeLowercase: true,
      includeUppercase: true,
      includeNumbers: true,
      includeSymbols: false,
      generatedPassword: ''
    },
    methods: {
      generatePassword() {
        let characters = '';
        let lowercase = 'abcdefghijklmnopqrstuvwxyz';
        let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let numbers = '0123456789';
        let symbols = '!@#$%^&*()_+-={}[]|\\:;"<>,.?/';
  
        if (this.includeLowercase) {
          characters += lowercase;
        }
        if (this.includeUppercase) {
          characters += uppercase;
        }
        if (this.includeNumbers) {
          characters += numbers;
        }
        if (this.includeSymbols) {
          characters += symbols;
        }
  
        let password = '';
        for (let i = 0; i < this.passwordLength; i++) {
          password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        this.generatedPassword = password;
      }
    }
  });
  