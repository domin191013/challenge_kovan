<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm run start
```

## Using the api on browser
```bash
#api that shows player information
https://localhost://3000/players/{address of the player}

Example: 
- address is in game players list
https://localhost:3000/players/0xDfe287AE810FC500a5a795bF83361B37c7b4172F 

- address does not exist
https://localhost:3000/players/0x8ba1f109551bd432803012645ac136ddd64dba72 

#api that shows game current segment value
https://localhost://3000/games/getCurrentSegment

It shows the current segment of the game

``` 

## Test

```bash
# unit tests
$ npm run test

There are 2 test cases for game and player controller.

- The player controller have 2 test cases to check if it works accurately when the user exist <br/> or not in the game.

- The game controller have 1 test case to check if the calculation of getting the <br/> current segment is right.