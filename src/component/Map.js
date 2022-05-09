import Styled from 'styled-components/native'; //npx expo-cli init portfolio-demo
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const Container = Styled.View`
    flex: 1;
`;

const GoogleMap = () => {
  return (
    <Container>
      <MapView style={{flex: 1}} provider={PROVIDER_GOOGLE} />
    </Container>
  );
};

export default GoogleMap;