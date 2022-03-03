const randomNumber: Function = (till: number): number => ((Math.random() * (till + 1)) + 1) * [-1, 1][Math.floor(Math.random() * 2)];

export default randomNumber;