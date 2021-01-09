const Component = React.Component

class Header extends Component {
    render() {
        return <h1>Title</h1>
    }
}

class Paragraph extends Component {
    render() {
        return <p>Text</p>
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Paragraph/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#index"));