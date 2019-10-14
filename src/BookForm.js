// import React, { Component } from "react";
// import { connect } from "react-redux";

// // Actions
// import { postBook } from "./redux/actions";

// class BookForm extends Component {
//   state = {
//     title: "",
//     color: "",
//     authors: [this.props.authorID]
//   };

//   onTextChange = event =>
//     this.setState({ [event.target.name]: event.target.value });

//   onSubmit = event => {
//     event.preventDefault();
//     this.props.postBook(this.state);
//   };

//   render() {
//     return (
//       <div className="mt-5 p-2">
//         <form onSubmit={this.onSubmit}>
//           <div className="input-group mb-3">
//             <div className="input-group-prepend">
//               <span className="input-group-text">Title</span>
//             </div>
//             <input
//               type="text"
//               className="form-control"
//               name="title"
//               onChange={this.onTextChange}
//             />
//           </div>
//           <div className="input-group mb-3">
//             <div className="input-group-prepend">
//               <span className="input-group-text">Color</span>
//             </div>
//             <select
//               name="color"
//               className="form-control"
//               onChange={this.onTextChange}
//             >
//               <option value="">----</option>
//               <option value="white">White</option>
//               <option value="red">Red</option>
//               <option value="blue">Blue</option>
//               <option value="green">Green</option>
//               <option value="yellow">Yellow</option>
//               <option value="black">Black</option>
//               <option value="grey">Grey</option>
//               <option value="purple">Purple</option>
//             </select>
//           </div>
//           <input type="submit" value="Add Book" />
//         </form>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     authors: state.authors
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     postBook: (book, authorID) => dispatch(postBook(book, authorID))
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(BookForm);
