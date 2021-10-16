
class THead extends React.Component{
    render(){
        return(
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                </tr>
            </thead>
        );
    }
}

class Tr extends  React.Component{
    render(){
        return(
          <tr>
              <td>{this.props.name}</td>
              <td>{this.props.job}</td>
          </tr>
        )
    }
}