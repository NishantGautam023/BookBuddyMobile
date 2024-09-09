import {Image, useWindowDimensions} from 'react-native';


export default function BookBuddyImage() {

    const {width } = useWindowDimensions();
    const imageSize = Math.min(width / 1.5, 400)

    return (
      <Image source={require('@/assets/book_3145765.png')}
        style={{width: imageSize, height: imageSize, margin: 20}}
      />
    )


}
