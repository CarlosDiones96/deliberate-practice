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

// NEXT:  React Tutorial ["Completing the Game"]
//https://reactjs.org/tutorial/tutorial.html 