import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';


export default function App() {
  return (
    <View style={{flex:1}}>
      <View style={styles.viewabove}>
      <Text>Phenix WebRTC Test</Text>
      </View>
      <View style={styles.webviewview}>
    <WebView style={styles.webview}
      source={{ uri: 'https://pcast.phenixrts.com/channel/?token=DIGEST:eyJhcHBsaWNhdGlvbklkIjoibmV3dmliZS5jb20iLCJkaWdlc3QiOiI3eCt2YUoyUW1IOTBmNi93S3VzNVIzYy9UYnpEL21TNTJUQmtoSUxaemh4ek9xNmZxNTI1blVMMXhTMFpKUEhqRFdyS0tDM0tPQjVTRFpTRG81akJRZz09IiwidG9rZW4iOiJ7XCJleHBpcmVzXCI6MTk3MjY1NDA0MDUyNSxcInVyaVwiOlwiaHR0cHM6Ly9wY2FzdC5waGVuaXhydHMuY29tXCIsXCJyZXF1aXJlZFRhZ1wiOlwiY2hhbm5lbElkOnVrLXNvdXRoZWFzdCNuZXd2aWJlLmNvbSNuZXdWaWJlRmxleG5UZXN0Q2hhbm5lbC4wMlowUWxwWkpyd3VcIn0ifQ==#NewVibe' }}
    />
    </View>
        <View style={styles.buttonContainer}>
          <Button
             onPress={() => {
              alert('Phenix WebRTC Player');
            }}
            title="Press me"
          />
        </View>
      <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50
  },
  viewabove: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 1,
    marginTop: 1,
    height: 20,
    width: 400,
  },
  buttonContainer: {
    flex: 1,
  },
  webviewview: {
    flex: 1,
    marginTop: 1,
    marginLeft: 20,
    height: 300,
    width: 400,
  },
  webview: {
    flex: 1,
  },
  keyboardAvoidingView: { flexGrow: 1, flexShrink: 1 },
});
