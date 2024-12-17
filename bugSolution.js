The solution involves using promises to handle the asynchronous nature of AsyncStorage.  We use `.then()` to access the value after it has been retrieved.

```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error('Failed to store data:', e);
  }
};

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    console.error('Failed to get data:', e);
    return null; // Or handle error appropriately
  }
};

// Example usage:
const run = async () => {
  await storeData('@my_key', 'my value');
  const retrievedValue = await getData('@my_key');
  console.log('Retrieved Value:', retrievedValue); // Correctly prints 'my value'
};

run();
```