import AsyncStorage from "@react-native-community/async-storage"
import Reactotron from "@skeleton/services/reactotron"

async function storeItem(
  key: string,
  value: string,
  callback?: (error?: Error) => void
): Promise<void> {
  try {
    await AsyncStorage.setItem(key, value, callback)
  } catch (error) {
    Reactotron.log(error)
  }
}

async function getItem(
  key: string,
  callback?: (error?: Error, result?: string) => void
): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(key, callback)
  } catch (error) {
    Reactotron.log(error)
    return null
  }
}

export { AsyncStorage as AppStorage, storeItem, getItem }
