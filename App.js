import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,SafeAreaView  } from 'react-native';
import { WebView } from 'react-native-webview';


let js1 = 'const token = "DIGEST:eyJhcHBsaWNhdGlvbklkIjoibmV3dmliZS5jb20iLCJkaWdlc3QiOiJIK0pMTFJzcUFWaFdacUJmMHZ4UFpuSWM3dVc2bHdoUGw2QzdPMHdRMzg3d2kyemdSSkg2a3BPWVhpQ3hKaUV0N2x2V2tYcmRxTDBpNHBKNk10bmVEZz09IiwidG9rZW4iOiJ7XCJleHBpcmVzXCI6MTk3MjIwODYyNDI1MixcInVyaVwiOlwiaHR0cHM6Ly9wY2FzdC5waGVuaXhydHMuY29tXCIsXCJyZXF1aXJlZFRhZ1wiOlwiY2hhbm5lbElkOnVrLXNvdXRoZWFzdCNuZXd2aWJlLmNvbSNuZXdWaWJlRmxleG5UZXN0Q2hhbm5lbC4wMlowUWxwWkpyd3VcIn0ifQ==";'
let js2 = 'const videoElement = document.getElementById("myVideoId");'
let js3 = 'const channel = phenix.Channels.createChannel({videoElement,token});'

let jscode = js1 + js2 + js3;
let source1 = '<html><head><meta name="viewport" content="width=device-width;height=device-height"/></head><script src="https://dl.phenixrts.com/JsSDK/2022.0.latest/min/channels.js"></script>'
let source2 = '<body style="margin: 0">'
let source3 = '<video style={{objectFit: "contain", position: "absolute",top: "0",left: "0", }} disablePictureInPicture id="myVideoId" autoplay playsinline></video><script>'
let source4 = '</script></body></html>'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <WebView
        sharedCookiesEnabled={true}
        allowUniversalAccessFromFileURLs={true}
        allowFileAccessFromFileURLs={true}
        allowFileAccess={true}
        //startInLoadingState={true}
        // pullToRefreshEnabled={true}
        allowsBackForwardNavigationGestures={false}
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={false}
      //source={{ uri: 'https://pcast.phenixrts.com/channel/?token=DIGEST:eyJhcHBsaWNhdGlvbklkIjoibmV3dmliZS5jb20iLCJkaWdlc3QiOiI3eCt2YUoyUW1IOTBmNi93S3VzNVIzYy9UYnpEL21TNTJUQmtoSUxaemh4ek9xNmZxNTI1blVMMXhTMFpKUEhqRFdyS0tDM0tPQjVTRFpTRG81akJRZz09IiwidG9rZW4iOiJ7XCJleHBpcmVzXCI6MTk3MjY1NDA0MDUyNSxcInVyaVwiOlwiaHR0cHM6Ly9wY2FzdC5waGVuaXhydHMuY29tXCIsXCJyZXF1aXJlZFRhZ1wiOlwiY2hhbm5lbElkOnVrLXNvdXRoZWFzdCNuZXd2aWJlLmNvbSNuZXdWaWJlRmxleG5UZXN0Q2hhbm5lbC4wMlowUWxwWkpyd3VcIn0ifQ==#NewVibe' }}
      source={{ html: source1 + source2 + source3 + jscode + source4 }}
   />
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
  keyboardAvoidingView: { flexGrow: 1, flexShrink: 1 },
});
