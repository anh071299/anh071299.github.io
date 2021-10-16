//Component là một thành phần trên web, xây dựng bằng class extends React.Component
//Gọi component <Component/>
// class App extends React.Component {
//     render(){
//         return(
//             <div>
//                 <h1>Hello world</h1>
//                 <Welcome name="Tú Anh" />
//                 <Bye/>
//             </div>
//         )
//     }
// }
class Welcome extends React.Component{
    render(){
        return <p>Hello {this.props.name} </p>
    }
}
// Welcome.defaultProps = {
//     name : "a",
// }

// class Bye extends React.Component{
//     render(){
//         return <p>Bye</p>
//     }
// }
Welcome.propTypes = {
    name: PropTypes.number,
}
// class Time extends React.Component {
//   utc() {
//     let now = new Date();
//     let timezoneOffset = now.getTimezoneOffset();
//     let utc = now.getTime() + timezoneOffset * 60 * 1000;
//     return utc;
//   }
//   render() {
//     return (
//         <p>
//           {
//           new Date(
//             this.utc() + this.props.timezone * 60 * 60 * 1000
//           ).toString()};
//           {this.props.component}
//           {this.props.children}
//         </p>
//     );
//   }
// }
// ReactDOM.render(<Welcome name='123'/>, document.getElementById("app"));

//props= properties
// props nhận mọi thứ nếu chuỗi sd dấu nháy còn các kiểu khác sd {}
//Giống như đối số hàm và thuộc tính HTML

//Xay dựng COmponent từ trên xuống/nhỏ đến lớn atomic design


class MenuItem extends React.Component{
   render(){
       return(
           <li className = "menu-item">
               <a className = "menu-link" href={this.props.href}>
                   {this.props.children}
               </a>
           </li>
       )
   }
}

class Menu extends React.Component{
    render(){
        return(
            <ul className="menu">
                <MenuItem href="#">Trang chủ</MenuItem>
                <MenuItem href="#">Giới thiệu</MenuItem>
            </ul>  
        )
    }
}
class Logo extends React.Component{
    render(){
        return(
            <div className="logo">
                <img src="data:image/jpeg;base64,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" alt="Logo" />
            </div>
        )
    }
}
class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <Logo/>
                        </div>
                        <div>
                            <Menu/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<Header/>, document.getElementById("app"));