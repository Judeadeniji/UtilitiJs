"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSubscriber = exports.mergeReducers = exports.applyMiddleware = exports.Store = void 0;
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
    listeners;
    constructor(reducer, initialState = {}) {
        this.reducer = reducer;
        this.state = initialState;
        this.listeners = [];
        // Check if reducer is a function
        if (typeof reducer !== "function") {
            // If not, throw a Error
            throw new Error("Reducer must be a function.");
        }
    }
    /**
     * Returns the current state of the store.
     *
     * @returns {T} The current state.
     */
    getState() {
        return this.state;
    }
    /**
     * Dispatches an action to update the state.
     *
     * @param {A} action - The action representing the state update.
     */
    dispatch(action) {
        this.state = this.reducer(this.state, action);
        this.listeners.forEach((listener) => listener(this.state));
    }
    /**
     * Subscribes a listener function to be called on state changes.
     *
     * @param {function} listener - The listener function to be called on state changes.
     * @returns {function} A function to unsubscribe the listener.
     *
     * @throws {Error} If the listener is not a function.
     */
    subscribe(listener) {
        // Check if listener is a function
        if (typeof listener !== "function") {
            // If not, throw a Error
            throw new Error("You must subscribe to a function.");
        }
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter((l) => l !== listener);
        };
    }
    /**
     * Replaces the current reducer function with a new one.
     *
     * @param {function} nextReducer - The new reducer function.
     */
    replaceReducer(nextReducer) {
        this.reducer = nextReducer;
    }
    /**
     * Returns the current reducer function.
     *
     * @returns {function} The current reducer function.
     */
    getReducer() {
        return this.reducer;
    }
}
exports.Store = Store;
/**
 * Merges multiple reducers into a single reducer function.
 *
 * @param {Object} reducers - An object containing the individual reducers.
 * @returns {function} The merged reducer function.
 *
 * @throws {Error} If reducers is not an object.
 */
function mergeReducers(reducers) {
    // Check if reducers is an object
    if (typeof reducers !== "object") {
        // If not, throw a Error
        throw new Error("Provide an object containing the reducers.");
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
 * @param {...function} middlewares - The middlewares to apply.
 * @returns {function} A function that wraps the store and applies the middlewares.
 */
function applyMiddleware(...middlewares) {
    return (store) => (...args) => {
        const newStore = new store(...args);
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
 * @param {*} store - The store object to subscribe to.
 * @returns {Object} The subscriber object.
 */
const createSubscriber = (store) => {
    return {
        /**
         * Subscribes a callback function to be called on store updates.
         *
         * @param {function} callback - The callback function to be called on store updates.
         */
        subscribe(callback) {
            store.subscribe(callback);
        },
    };
};
exports.createSubscriber = createSubscriber;
//# sourceMappingURL=store.js.map