import React, {Component} from 'react';
import {StyleSheet, Image, View, Button} from 'react-native';

import ImagePicker from 'react-native-image-picker';

// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
	title: 'Select Avatar',
	customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
	storageOptions: {
		skipBackup: true,
		path: 'images',
	},
};

export default class App extends Component<Props> {

	state = {
		avatarSource: null
	};

  onSelectPicture = () => {
		ImagePicker.showImagePicker(options, (response) => {
			console.log('Response = ', response);

			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			} else {
				const source = { uri: response.uri };

				// You can also display the image using data:
				// const source = { uri: 'data:image/jpeg;base64,' + response.data };

				this.setState({
					avatarSource: source,
				});
			}
		});
  };

  render() {
    return (
      <View style={styles.container}>
				<Image source={this.state.avatarSource} style={{ width: 200, height: 200 }} />

				<Button
          title={"Select Picture"}
          onPress={this.onSelectPicture}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
