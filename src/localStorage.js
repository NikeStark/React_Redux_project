import SecureLS from 'secure-ls';

const ls = new SecureLS({encodingType: 'aes'})

export const loadState = () => {
    try {
      const serializedState = ls.get('userData');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  }; 

  export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    ls.set('userData', serializedState);
  } catch {
    // ignore write errors
  }
};