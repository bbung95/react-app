import Rearct, { Component } from "react";

class Control extends Component {
  render() {
    // var lists = [];
    // var data = this.props.data;
    // var i = 0;
    // while (i < data.length) {
    //   lists.push(
    //     <li key={data[i].id}>
    //       <a href={"/content/" + data[i].id} data-id={data[i].id} onClick={function(e){
    //         e.preventDefault();
    //         this.props.onChangePage(e.target.dataset.id);
    //       }.bind(this)}>{data[i].title}</a>
    //     </li>
    //   );
    //   i++;
    // }

    return (
      <ul>
          <li><a href="/create" onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode("create");
          }.bind(this)}>create</a></li>
          <li><a href="/update" onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode("update");
          }.bind(this)}>update</a></li>
          <li><input type="button" value="delete" onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode("delete");
          }.bind(this)}></input></li>
      </ul>
    );
  }
}

export default Control;
