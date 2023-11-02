## Use

How to Install:
npm i react-native-basic-splash-screen
Example usage:

```jsx
import SplashScreen from "./src/SplashScreen";

function App(): JSX.Element {

  return (
    <SafeAreaView >
      <SplashScreen second={4} backgroundColor={'green'} >
        <Image source={require('./src/iconLogo.jpg')} style={{height:50,width:50}}/>
        <View>
          <Text></Text>
        </View>
      </SplashScreen>
    </SafeAreaView>
  );
}

export default App;
