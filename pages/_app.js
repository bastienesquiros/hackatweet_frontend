import '../styles/globals.css';
import Head from 'next/head';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import users from '../reducers/users';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const reducers = combineReducers({ users });

const persistConfig = { key: 'hackatweetdata', storage };

const store = configureStore({
	reducer: persistReducer(persistConfig, reducers),
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Head>
					<title>Next.js App</title>
				</Head>
				<Component {...pageProps} />
			</PersistGate>
		</Provider>
	);
}

export default App;
