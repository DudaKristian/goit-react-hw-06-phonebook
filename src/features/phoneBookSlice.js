import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
    contacts: [],
    filter: "",
}

export const phoneBookSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.contacts = [action.payload, ...state.contacts];
        },
        removeContact: (state, action) => {
            state.contacts = state.contacts.filter(
                contact => contact.id !== action.payload
            );
        },
        setFilter(state, action) {
            state.filter = action.payload;
        },
    }
});

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts'],
};

export const ReducerContact = persistReducer(
    persistConfig,
    phoneBookSlice.reducer
);

export const { addContact, removeContact, setFilter } = phoneBookSlice.actions;

export const getContact = state => state.contacts.contacts;

export const getFilter = state => state.contacts.filter;
