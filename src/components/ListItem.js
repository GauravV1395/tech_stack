import React, { Component } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  UIManager,
  Platform
} from "react-native"; // touchablewithoutfeedback will register an onpress event without giving an feedback to the customer.
import { connect } from "react-redux";
import { CardSection } from "./common";
import * as actions from "../actions"; // it means that we are importing all the functions that are exported from the actions file and assigning it to the variable actions.

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  renderDescription() {
    const { library, extended } = this.props;
    console.log(library.item.description);
    if (extended) {
      console.log(library.item.description);
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{library.item.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { title, id } = this.props.library.item;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  // ownProps is nothing but equal to this.props
  const extended = state.selectedLibraryId === ownProps.library.item.id;
  return { extended };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
