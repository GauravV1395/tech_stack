import React, { Component } from "react";
import { connect } from "react-redux"; // connector is the feature of the react-redux library. Connect is used to connect a component with the redux store.
import { FlatList } from "react-native"; // FlatList is an efficient way to render lists in react-native.
import ListItem from "./ListItem";

class LibraryList extends Component {
  renderItem(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={library => library.id}
      />
    );
  }
}

const mapStatetoProps = state => {
  // this function will take in the state (global state object) as the argument and as the name suggests, it will map the state to the props.
  return { libraries: state.libraries }; // this will be shown as props in the component above.
};

export default connect(mapStatetoProps)(LibraryList); // connect returns a function and that function will immediately call the librarylist
