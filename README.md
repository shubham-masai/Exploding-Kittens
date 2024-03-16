# Online Single-Player Card Game

## Overview
This is an online single-player card game built using React and Vite. The game consists of 4 different types of cards:

- Cat card 😼
- Defuse card 🙅‍♂️
- Shuffle card 🔀
- Exploding kitten card 💣

The objective of the game is for the player to draw all 5 cards from the deck without drawing an exploding kitten card. 

## How to Play
1. Once the game starts, a deck of 5 cards is generated randomly.
2. Click on the deck to draw a card.
3. If the card drawn is a cat card, it is removed from the deck.
4. If the card drawn is an exploding kitten card, the player loses the game.
5. If the card drawn is a defuse card, it is removed from the deck and can be used to defuse one bomb that may come in subsequent cards.
6. If the card drawn is a shuffle card, the game is restarted, and the deck is filled with 5 cards again.
7. Continue drawing cards until all 5 cards are drawn from the deck or an exploding kitten card is drawn.

## Rules
- Cat card 😼: Removed from the deck.
- Exploding kitten card 💣: Player loses the game.
- Defuse card 🙅‍♂️: Removed from the deck and can be used to defuse one bomb.
- Shuffle card 🔀: Restarts the game and refills the deck with 5 cards.

## How to Run
1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.

## Dependencies
- React
- React DOM
- Vite
- Axios
- Framer Motion
- React Modal
- React Redux
- React Router DOM
- Redux
- Redux Thunk

## Scripts
- `dev`: Start the development server.
- `build`: Build the production-ready app.
- `lint`: Run ESLint to lint the code.
- `preview`: Preview the built app.

  ![Screenshot (2401)](https://github.com/shubham-masai/Exploding-Kittens/assets/130532573/51ad76a0-361e-41b7-8f13-94e35076f451)

![Screenshot (2403)](https://github.com/shubham-masai/Exploding-Kittens/assets/130532573/022a7195-e20c-4dfd-a47b-1c74dd88911d)

![Screenshot (2404)](https://github.com/shubham-masai/Exploding-Kittens/assets/130532573/1ea48ed4-1d59-4cdb-8962-90ec85d8e34f)


## Notes
This project is set up with Tailwind CSS for styling and ESLint for code linting. Make sure to follow the rules and guidelines specified in the ESLint configuration.
