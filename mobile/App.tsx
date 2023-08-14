import {WebView} from 'react-native-webview'

export default function App() {
  return (
    <WebView 
    source={{
      uri:'https://catastro-app-8a754.web.app/',

    }}
    style={{flex:1, marginVertical:40}}
    
    incognito={true}
    onError={e => {
      console.log(e.nativeEvent)
    }}
    />

  );
}
