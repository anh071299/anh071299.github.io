const menu = [
    {
        href: "/",
        label: "Trang chủ",
    },
    {
        href: "/about",
        label: "Giới thiệu",
    },
    {
        href: "/contact",
        label: "Liên hệ",
    },
];
const rows = [
    {
        name: "Ba",
        job: "teacher",
    },
    {
        name: "Anh",
        job: "student",
    },
    {
        name: "Huy",
        job: "student",
    },
];
class MenuItem extends React.Component {
    render() {
        return (
            <li className="menu-item">
                <a className="menu-link" href={this.props.href}>
                    {this.props.label}
                </a>
            </li>
        );
    }
}

class Menu extends React.Component {
    render() {
        return (
            <ul className="menu">
                {this.props.menu.map((item, i) => (
                    <MenuItem key={i} {...item} />
                ))}
            </ul>
        );
    }
}

class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <img
                    src="https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan-de-thuong.jpg"
                    alt="Girl xinh"
                />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <Logo />
                        </div>

                        <div>
                            <Menu menu={menu} />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

class Row extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.job}</td>
            </tr>
        );
    }
}

class Table extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>

                <tbody>
                    {
                    this.props.rows.map((row, index) => (
                        <Row key={index} {...row} />
                    ))
                    }
                </tbody>
            </table>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <Table rows={rows} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
