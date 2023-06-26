/**
 * Represents a store that holds the state and manages state updates.
 * @interface IStore
 * @template T - The type of state.
 * @template A - The type of action.
 */
interface IStore<T, A> {
    /**
     * Returns the current state of the store.
     *
     * @returns {T} The current state.
     */
    getState(): T;
    /**
     * Dispatches an action to update the state.
     *
     * @param {A} action - The action representing the state update.
     */
    dispatch(action: A): void;
    /**
     * Subscribes a listener function to be called on state changes.
     *
     * @param {function} listener - The listener function to be called on state changes.
     * @returns {function} A function to unsubscribe the listener.
     *
     * @throws {Error} If the listener is not a function.
     */
    subscribe(listener: Function): Function;
    /**
     * Replaces the current reducer function with a new one.
     *
     * @param {function} nextReducer - The new reducer function.
     */
    replaceReducer(nextReducer: (state: T, action: A) => T): void;
    /**
     * Returns the current reducer function.
     *
     * @returns {function} The current reducer function.
     */
    getReducer(): (state: T, action: A) => T;
}
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
declare class Store<T, A> implements IStore<T, A> {
    private reducer;
    private state;
    private listeners;
    constructor(reducer: (state: T, action: A) => T, initialState?: T);
    /**
     * Returns the current state of the store.
     *
     * @returns {T} The current state.
     */
    getState(): T;
    /**
     * Dispatches an action to update the state.
     *
     * @param {A} action - The action representing the state update.
     */
    dispatch(action: A): void;
    /**
     * Subscribes a listener function to be called on state changes.
     *
     * @param {function} listener - The listener function to be called on state changes.
     * @returns {function} A function to unsubscribe the listener.
     *
     * @throws {Error} If the listener is not a function.
     */
    subscribe(listener: Function): Function;
    /**
     * Replaces the current reducer function with a new one.
     *
     * @param {function} nextReducer - The new reducer function.
     */
    replaceReducer(nextReducer: (state: T, action: A) => T): void;
    /**
     * Returns the current reducer function.
     *
     * @returns {function} The current reducer function.
     */
    getReducer(): (state: T, action: A) => T;
}
/**
 * Merges multiple reducers into a single reducer function.
 *
 * @param {Object} reducers - An object containing the individual reducers.
 * @returns {function} The merged reducer function.
 *
 * @throws {Error} If reducers is not an object.
 */
declare function mergeReducers(reducers: {
    [key: string]: Function;
}): (state: any, action: any) => {};
/**
 * Applies middlewares to the store's dispatch function.
 *
 * @param {...function} middlewares - The middlewares to apply.
 * @returns {function} A function that wraps the store and applies the middlewares.
 */
declare function applyMiddleware(...middlewares: Function[]): (store: any) => (...args: any[]) => any;
/**
 * Creates a subscriber object to subscribe to store updates.
 *
 * @param {*} store - The store object to subscribe to.
 * @returns {Object} The subscriber object.
 */
declare const createSubscriber: (store: any) => {
    /**
     * Subscribes a callback function to be called on store updates.
     *
     * @param {function} callback - The callback function to be called on store updates.
     */
    subscribe(callback: Function): void;
};
export { Store, applyMiddleware, mergeReducers, createSubscriber };
