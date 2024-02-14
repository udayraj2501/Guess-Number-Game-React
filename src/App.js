import styled from "styled-components";
import image from "./image.png";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Image = styled.div`
  width: 50%;
  height: 100vh;
  flex: 1;
`;

const Img = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const Game = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 2;
  background-color: #ecfbff;
`;

const Heading = styled.h1`
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 80px;
  color: orange;
`;

const GameContainer = styled.div`
  width: 450px;
  height: 230px;
  display: flex;
  border: 3px solid black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffe3b3;
  border-radius: 5px;
  -webkit-box-shadow: 7px 6px 18px 1px rgba(176, 176, 176, 1);
  -moz-box-shadow: 7px 6px 18px 1px rgba(176, 176, 176, 1);
  box-shadow: 7px 6px 18px 1px rgba(176, 176, 176, 1);
  position: relative;
`;

const Rule = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
  position: absolute;
  top: 8px;
`;

const Guess = styled.div`
  margin: 20px;
`;

const Input = styled.input`
  width: 130px;
  height: 40px;
  margin-right: 20px;
  border-radius: 5px;
  border: none;
  text-align: center;
  caret-color: #007bff;
  caret-width: 2px;
  caret-style: solid;

  /* styles to remove arrows in WebKit browsers  */
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Button = styled.button`
  width: 120px;
  height: 40px;
  font-size: 15px;
  background-color: #ff9800;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

const PlayAgain = styled.button`
  width: 120px;
  height: 40px;
  font-size: 15px;
  background-color: #ff9800;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

const Ans = styled.p``;
const Final = styled.p`
  margin: 10px;
  font-weight: bold;
`;

function App() {
  const [input, setInput] = useState(" ");
  const [ans, setAns] = useState(" ");
  const [changes, setChanges] = useState(6);
  const [num, SetNum] = useState(" ");
  const [gameOver, setGameOver] = useState(false);
  const [inputKey , setinputKey] = useState(0);

  useEffect(() => {
    const getRandomNum = Math.floor(Math.random() * 100);
    SetNum(getRandomNum);
  }, []);

  const initGame = () => {
    if (input === num) {
      setAns("Congratulations You Guessed Correct");
      setChanges((prev) => prev - 1);
      setGameOver(true);
    } else if (input > num) {
      setChanges((prev) => prev - 1);
      if (changes === 1) {
        setAns("Wrong Answer,Better Luck next Time");
        setGameOver(true);
      } else {
        setAns("Number is less ");
      }
    } else if (input < num) {
      setChanges((prev) => prev - 1);
      if (changes === 1) {
        setAns("Wrong Answer,Better Luck next Time");
        setGameOver(true);
      } else {
        setAns("Number is greater ");
      }
    }
  };

  const resetGame = () => {
    setinputKey( prevkey => prevkey +1);
    setInput(" ");
    setAns(" ");
    setChanges(6);
    setGameOver(false);
    const getRandomNum = Math.floor(Math.random() * 100);
    SetNum(getRandomNum);
  };

  return (
    <Container>
      <Image>
        <Img src={image} />
      </Image>

      <Game>
        <Heading>Guess the Number</Heading>

        <GameContainer>
          <Rule>Guess the number between 1 to 100</Rule>

          <Guess>
            <Input
              key = {inputKey}
              type="number"
              value={input}
              placeholder="Enter the number"
              onChange={(event) => setInput(event.target.value)}
            ></Input>
            <Button
              onClick={() => {
                initGame();
              }}
            >
              Check
            </Button>
          </Guess>

          <Ans>{changes > 0 && `You have ${changes} chances`}</Ans>
          <Final>{`${ans}`}</Final>
          {gameOver && <PlayAgain onClick={resetGame}>Play Again</PlayAgain>}
        </GameContainer>
      </Game>
    </Container>
  );
}

export default App;
