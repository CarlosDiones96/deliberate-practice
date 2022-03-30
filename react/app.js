class ShoppingList extends React.Component{
    render(){
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}

//
class Board extends React.Component{
    renderSquare(i){
        return <Square value={i} />;
    }
}

//
class Square extends React.Component{
    render(){
        return (
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}

class Square extends React.Component{
    render(){
        return (
            <button className="square" onClick={function(){console.log('click');}}>
                {this.props.value}
            </button>
        );
    }
}

class Square extends React.Component{
    render(){
        return(
            <button className="square" onClick={()=> console.log('click')}>
                {this.props.value}
            </button>
        );
    }
}

class Square extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: null,
        };
    }

    render(){
        return(
            <button className="square" onClick={
                ()=> console.log('click')
            }>
                {this.props.value}
            </button>
        );
    }
}

class Square extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: null,
        };
    }
    
    render(){
        return(
            <button className="square" onClick={
                ()=> this.setState({value: 'X'})
            }>
                {this.state.value}
            </button>
        );
    }
}

///NEXT:  React Tutorial ["Completing the Game"]
//https://reactjs.org/tutorial/tutorial.html 
class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    renderSquare(i){
        return (<Square value={
            this.state.squares[i]
        }
        onClick={
            ()=> this.handleClick(i)
        } />
        );
    }
}

//
class Square extends React.Component{
    render(){
        return(
            <button>
                className="sqaure"
                onClick={()=> this.props.onClick()}
            </button>
            {this.props.value}
            );
    }
}

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    handleClick(i){
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
    }

    renderSquare(i){
        return(
        <Square 
            value={this.state.squares[i]}
            onClick={()=> this.handleClick(i)}
        />
      );
    }

    render(){
        const status = 'Next player: X';

        return(
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div> 
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

/ /**/
var player = {score: 1, name: 'Jeff'};
var newPlayer = Object.assign({}, player, {score: 2});

function Square(props){
    return(
        <button className="square" onClick={props.onCLick}>
            {props.value}
        </button>
        );
}

//**/
// REATC TUTORIAL >>> TAKING TURNS
// https://reactjs.org/tutorial/tutorial.html#completing-the-game 
class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    };

    handleClick(i){
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : '0';

        this.setState({
            squares: squares,
            xIsNext: !this.xIsNext,
        });
    }

    render(){
        const status = 'Next player: ' + (this.state.xIsNext ? 'X' : ')');
        return();
    }
}


class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i){
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.state({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i){
        return(
            <Square
                value={this.squares[i]}
                onClick={()=> this.handleClick(i)}
            />
        );
    }

    render(){
        const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

        return(
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                </div>
                <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                </div>
            </div>
        );
    }

}

function calculateWinner(squares){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for(let i = 0; i < lines.length; i++){
        const [a, b, c] = lines[i];
        if(squares[a] && squares[a] === squares[b] &&
            squares[a] === squares[c]){
                return squares[a];
            }
    }
    return null;
}

const history = [
    {
        squares: [
            null, null, null,
            null, null, null,
            null, null, null,
        ]
    },
    {
        squares: [
            null, null, null,
            null, 'X', null,
            null, null, null,
        ]
    },
    
];

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
        };
    }

    render(){
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>{/*status*/}</div>
                    <ol>{/* todo */}</ol>
                </div>
            </div>
        );
    }
}

// React Tutorial >> Lifting State UP, Again
//https://reactjs.org/tutorial/tutorial.html#lifting-state-up-again

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }
    renderSquare(i){
        return <Square value={this.state.squares[i]} />;
    }
}

class Square extends React.Component{
    render(){
        return (
            <button className="square"
            onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

// React tutorial >> Why immutability is important
// https://reactjs.org/tutorial/tutorial.html#why-immutability-is-important
