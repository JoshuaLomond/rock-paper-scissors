# Rock Paper Scissors

A simple yet engaging Rock Paper Scissors game built with Angular 21. Challenge the computer in this classic game of chance and strategy!

## 🎮 About

This is a web-based implementation of the classic Rock Paper Scissors game where you compete against the computer. Make your choice, and see if you can outsmart the randomized computer opponent!

## ✨ Features

- **Simple Gameplay**: Click to choose Rock, Paper, or Scissors
- **Instant Results**: See the outcome immediately after making your choice
- **Visual Feedback**: Clear win/loss/draw indicators with color-coded messages
- **Play Again**: Quick restart functionality to play multiple rounds
- **Responsive Design**: Works seamlessly across different screen sizes
- **Modern UI**: Clean and intuitive interface with emoji icons

## 🛠️ Tech Stack

- **Framework**: Angular 21
- **Language**: TypeScript 5.9
- **Testing**: Vitest 4.0
- **Styling**: CSS3
- **Build Tool**: Angular CLI

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm 11.6.1 or higher

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:JoshuaLomond/rock-paper-scissors.git
   cd rock-paper-scissors
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:4200/`

The application will automatically reload when you make changes to the source files.

## 🎯 How to Play

1. Click on one of the three buttons: Rock 🪨, Paper 📄, or Scissors ✂️
2. The computer will randomly select its choice
3. The winner is determined by the classic rules:
   - Rock beats Scissors
   - Scissors beats Paper
   - Paper beats Rock
4. Click "Play Again" to start a new round

## 📁 Project Structure

```
rock-paper-scissors/
├── src/
│   ├── app/
│   │   ├── app.ts              # Main application component
│   │   ├── app.html            # Application template
│   │   ├── app.css             # Application styles
│   │   ├── game.service.ts     # Game logic service
│   │   └── game.service.spec.ts # Service tests
│   ├── index.html              # Main HTML file
│   ├── main.ts                 # Application entry point
│   └── styles.css              # Global styles
├── package.json                # Dependencies and scripts
└── angular.json                # Angular configuration
```

## 🧪 Testing

Run the test suite with:

```bash
npm test
```

The project uses Vitest for unit testing. Tests are located alongside their respective source files with the `.spec.ts` extension.

## 🔨 Available Scripts

- `npm start` - Start the development server
- `npm run build` - Build the project for production
- `npm test` - Run unit tests
- `npm run watch` - Build and watch for changes

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, optimized for performance and ready for deployment.

## 📝 Code Style

This project uses Prettier for code formatting with the following configuration:

- Print width: 100 characters
- Single quotes for strings
- Angular parser for HTML templates

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Additional Resources

- [Angular Documentation](https://angular.dev)
- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
