import * as SecureStore from 'expo-secure-store';

export async function saveAsync(key: string, value: string) {
    await SecureStore.setItemAsync(key, value);
}

export function save(key: string, value: string) {
    SecureStore.setItem(key, value);
}
  
export async function getValueForAsync(key: string) {
let result = await SecureStore.getItemAsync(key);

return result;
}

export function getValueFor(key: string) {
    let result = SecureStore.getItem(key);

    return result;
}

export async function deleteValueForAsync(key: string) {
    await SecureStore.deleteItemAsync(key);
}