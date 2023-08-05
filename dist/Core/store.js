"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncActionCreator = exports.asyncThunkMiddleware = exports.createStoreWithMiddleware = exports.createAsyncSubscriber = exports.createSubscriber = exports.mergeReducers = exports.applyMiddleware = exports.createStore = exports.Store = void 0;
/**
 * Represents a store that holds the state and manages state updates.
 * @class Store
 * @template T - The type of state.
 * @template A - The type of action.
 * @param {function} reducer - The reducer function for state updates.
 * @param {T} [initialState={}] - The initial state of the store.
 *
 * @throws {Error} If the reducer is not a function.
 * @returns {Object} The store object with various methods.
 */
class Store {
    reducer;
    state;
    lastAction;
    listeners;
    /**
     * Creates a new store instance.
     * @param {(state: T, action: A) => T} reducer - The reducer function for state updates.
     * @param {T} [initialState={}] - The initial state of the store.
     * @throws {Error} If the reducer is not a function.
     */
    constructor(reducer, initialState = {}) {
        this.reducer = reducer;
        this.state = initialState;
        this.lastAction = null;
        this.listeners = [];
        // Check if reducer is a function
        if (typeof reducer !== "function") {
            // If not, throw an Error
            throw new Error("Reducer must be a function.");
        }
    }
    /**
     * Retrieves the current state of the store.
     * @returns {T} The current state.
     */
    getState() {
        const stateString = JSON.stringify(this.state);
        const state = JSON.parse(stateString);
        return state;
    }
    /**
     * Dispatches an action to update the store's state.
     * @param {A} action - The action to be dispatched.
     */
    dispatch(action) {
        this.lastAction = action;
        this.state = this.reducer(this.state, action);
        this.listeners.forEach((listener) => listener(action, this.state));
    }
    /**
     * Subscribes to store updates.
     * @param {Function} listener - The listener function to be called on state updates.
     * @returns {Function} A function to unsubscribe the listener.
     * @throws {Error} If the listener is not a function.
     */
    subscribe(listener) {
        // Check if listener is a function
        if (typeof listener !== "function") {
            // If not, throw an Error
            throw new Error("Subscriber must be a function");
        }
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter((l) => l !== listener);
        };
    }
    /**
     * Replaces the current reducer function with a new reducer.
     * @param {(state: T, action: A) => T} nextReducer - The new reducer function.
     */
    replaceReducer(nextReducer) {
        this.reducer = nextReducer;
    }
    /**
     * Retrieves the current reducer function.
     * @returns {(state: T, action: A) => T} The current reducer function.
     */
    getReducer() {
        return this.reducer;
    }
}
exports.Store = Store;
/**
 * Merges multiple reducers into a single reducer function.
 *
 * @param {Record<string, Function>} reducers - An object containing the individual reducers.
 * @returns {(state: any, action: any) => any} The merged reducer function.
 * @throws {Error} If reducers is not an object.
 */
function mergeReducers(reducers) {
    // Check if reducers is an object
    if (typeof reducers !== "object") {
        // If not, throw an Error
        throw new Error("Reducers must be provided as an object.");
    }
    return (state = {}, action) => {
        return Object.keys(reducers).reduce((nextState, key) => {
            nextState[key] = reducers[key](state[key], action);
            return nextState;
        }, {});
    };
}
exports.mergeReducers = mergeReducers;
/**
 * Applies middlewares to the store's dispatch function.
 *
 * @param {...Function} middlewares - The middlewares to apply.
 * @returns {(store: IStore<any, any>) => (state: any, reducer: (state: any, action: any) => any) => IStore<any, any>} A function that wraps the store and applies the middlewares.
 */
function applyMiddleware(...middlewares) {
    return (store) => (state, reducer) => {
        const newStore = new Store(reducer, state);
        let dispatch = newStore.dispatch;
        middlewares.forEach((middleware) => {
            dispatch = middleware(newStore)(dispatch);
        });
        return {
            ...store,
            dispatch,
        };
    };
}
exports.applyMiddleware = applyMiddleware;
/**
 * Creates a subscriber object to subscribe to store updates.
 *
 * @param {Store<any, any>} store - The store object to subscribe to.
 * @returns {{ subscribe: (callback: (action: A, state: T) => void) => void }} The subscriber object.
 */
function createSubscriber(store) {
    return {
        /**
         * Subscribes to store updates.
         * @param {Function} callback - The callback function to be called on state updates.
         * returns {Function} the unsubscribe function
         */
        subscribe(callback) {
            return store.subscribe(callback);
        },
    };
}
exports.createSubscriber = createSubscriber;
/**
 * Creates a storewith the specified initial state and reducer function.
 *
 * @template T - The type of the state.
 * @template A - The type of the action.
 * @param {T} state - The initial state of the store.
 * @param {(state: T, action: A) => T} reducer - The reducer function used to update the state based on actions.
 * @returns {Store<T, A>} The created store.
 */
function createStore(state, reducer) {
    const store = new Store(reducer, state);
    return store;
}
exports.createStore = createStore;
/**
 * Creates a store with the specified initial state, reducer function, and middleware functions.
 *
 * @template T - The type of the state.
 * @template A - The type of the action.
 * @param {(state: T, action: A) => T} reducer - The reducer function used to update the state based on actions.
 * @param {T} initialState - The initial state of the store.
 * @param {...((store: IStore<T, A>) => (next: (action: A) => void) => (action: A) => void)} middlewares - The middleware functions to apply.
 * @returns {IStore<T, A>} The created store with applied middleware.
 */
function createStoreWithMiddleware(reducer, initialState, ...middlewares) {
    const store = new Store(reducer, initialState);
    const enhancedDispatch = middlewares.reduceRight((dispatch, middleware) => middleware(store)(dispatch), store.dispatch);
    return store;
}
exports.createStoreWithMiddleware = createStoreWithMiddleware;
/**
 * Creates an asynchronous action creator.
 *
 * @template T - The type of the metadata.
 * @template P - The type of the payload.
 * @param {string} type - The type of the action.
 * @param {(...args: any[]) => Promise<P>} asyncFn - The asynchronous function to be executed.
 * @param {T} [meta] - The metadata associated with the action.
 * @returns {AsyncActionCreator<T, P>} The asynchronous action creator function.
 */
function asyncActionCreator(type, asyncFn, meta) {
      console.log("asyncActionCreator")
    return (...args) => async (dispatch) => {
      console.log("asyncActionCreator")
        try {
            const payload = await asyncFn(...args);
            dispatch({ type, payload, meta });
        }
        catch (error) {
            dispatch({ type, error: true, payload: error.message, meta });
        }
    };
}
exports.asyncActionCreator = asyncActionCreator;
/**
 * Represents a custom middleware that handles asynchronous operations.
 *
 * @param {IStore<T, AsyncAction<T, P>>} store - The store object.
 * @returns {(next: (action: AsyncAction<T, P>) => void) => (action: AsyncAction<T, P>) => void} The middleware function.
 */
function asyncThunkMiddleware(store) {
    return (next) => async (action) => {
        if (typeof action.meta === 'function') {
            try {
                await action.meta(store.dispatch, store.getState);
            }
            catch (error) {
                const errorAction = {
                    type: action.type,
                    payload: error.message,
                    error: true,
                };
                next(errorAction);
                return;
            }
        }
        next(action);
    };
}
exports.asyncThunkMiddleware = asyncThunkMiddleware;
/**
 * Creates a subscriber object for handling asynchronous updates.
 *
 * @param {Store<T, AsyncAction<any, any>>} store - The store object.
 * @param {AsyncSubscriberCallback<T>} callback - The callback function to handle asynchronous updates.
 * @returns {{ subscribe: () => Function }} The subscriber object.
 */
function createAsyncSubscriber(store, callback) {
    const listener = () => {
        const state = store.getState();
        const lastAction = store.lastAction;
        callback(state, lastAction);
    };
    const unsubscribe = store.subscribe(listener);
    return {
        /**
         * Subscribes to store updates.
         * @returns {() => void} the unsubscribe function
         */
        subscribe: () => store.subscribe(listener),
        /**
         * Unsubscribes from store updates.
         * @returns {() => void} the unsubscribe function
         */
        unsubscribe,
    };
}
exports.createAsyncSubscriber = createAsyncSubscriber;
//# sourceMappingURL=store.js.map