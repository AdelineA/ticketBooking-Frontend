// import React from "react";
// import Loading from "./loading";

// const withLoading = (WrappedComponent) => {
//   return class extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = {
//         isLoading: true,
//       };
//     }

//     componentDidMount() {
//       // Here, you can put the code that loads your content
//       // Once the content has been loaded, you can set isLoading to false
//       this.setState({ isLoading: false });
//     }

//     render() {
//       return (
//         <div>
//           {this.state.isLoading ? (
//             <Loading />
//           ) : (
//             <WrappedComponent {...this.props} />
//           )}
//         </div>
//       );
//     }
//   };
// };

// export default withLoading;
