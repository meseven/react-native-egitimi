import React, {Component} from 'react';
import {StyleSheet, Image, View, Button} from 'react-native';

import ImagePicker from 'react-native-image-picker';

// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
	title: 'Select Photo',
	customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }, { name: 'other', title: 'Other' }],
	storageOptions: {
		skipBackup: true,
		path: 'images',
	},
	allowsEditing: true
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
				if (response.customButton == 'fb') {
				  alert('facebook')
				}else if(response.customButton == 'other'){
					alert('other')
				}
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
