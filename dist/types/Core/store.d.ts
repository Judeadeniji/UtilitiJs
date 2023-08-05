/**
 * Represents a store that holds the state and manages state updates.
 * @interface IStore
 * @template T - The type of state.
 * @template A - The type of action.
 */
interface IStore<T, A> {
    /**
     * Retrieves the current state of the store.
     * @returns {T} The current state.
     */
    getState(): T;
    /**
     * Dispatches an action to update the store's state.
     * @param {A} action - The action to be dispatched.
     */
    dispatch(action: A): void;
    /**
     * Subscribes to store updates.
     * @param {Function} listener - The listener function to be called on state updates.
     * @returns {Function} A function to unsubscribe the listener.
     */
    subscribe(listener: Function): () => void;
    /**
     * Replaces the current reducer function with a new reducer.
     * @param {(state: T, action: A) => T} nextReducer - The new reducer function.
     */
    replaceReducer(nextReducer: (state: T, action: A) => T): void;
    /**
     * Retrieves the current reducer function.
     * @returns {(state: T, action: A) => T} The current reducer function.
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
    lastAction: A;
    private listeners;
    /**
     * Creates a new store instance.
     * @param {(state: T, action: A) => T} reducer - The reducer function for state updates.
     * @param {T} [initialState={}] - The initial state of the store.
     * @throws {Error} If the reducer is not a function.
     */
    constructor(reducer: (state: T, action: A) => T, initialState?: T);
    /**
     * Retrieves the current state of the store.
     * @returns {T} The current state.
     */
    getState(): T;
    /**
     * Dispatches an action to update the store's state.
     * @param {A} action - The action to be dispatched.
     */
    dispatch(action: A): void;
    /**
     * Subscribes to store updates.
     * @param {Function} listener - The listener function to be called on state updates.
     * @returns {Function} A function to unsubscribe the listener.
     * @throws {Error} If the listener is not a function.
     */
    subscribe(listener: (action: A, state: T) => void): () => void;
    /**
     * Replaces the current reducer function with a new reducer.
     * @param {(state: T, action: A) => T} nextReducer - The new reducer function.
     */
    replaceReducer(nextReducer: (state: T, action: A) => T): void;
    /**
     * Retrieves the current reducer function.
     * @returns {(state: T, action: A) => T} The current reducer function.
     */
    getReducer(): (state: T, action: A) => T;
}
/**
 * Merges multiple reducers into a single reducer function.
 *
 * @param {Record<string, Function>} reducers - An object containing the individual reducers.
 * @returns {(state: any, action: any) => any} The merged reducer function.
 * @throws {Error} If reducers is not an object.
 */
declare function mergeReducers(reducers: Record<string, Function>): (state: any, action: any) => {};
/**
 * Applies middlewares to the store's dispatch function.
 *
 * @param {...Function} middlewares - The middlewares to apply.
 * @returns {(store: IStore<any, any>) => (state: any, reducer: (state: any, action: any) => any) => IStore<any, any>} A function that wraps the store and applies the middlewares.
 */
declare function applyMiddleware<T, A>(...middlewares: Function[]): (store: IStore<T, A>) => (state: T, reducer: (state: T, action: A) => T) => IStore<T, A>;
/**
 * Creates a subscriber object to subscribe to store updates.
 *
 * @param {Store<any, any>} store - The store object to subscribe to.
 * @returns {{ subscribe: (callback: (action: A, state: T) => void) => void }} The subscriber object.
 */
declare function createSubscriber<T, A>(store: IStore<T, A>): {
    subscribe: (callback: () => void) => void;
};
/**
 * Creates a storewith the specified initial state and reducer function.
 *
 * @template T - The type of the state.
 * @template A - The type of the action.
 * @param {T} state - The initial state of the store.
 * @param {(state: T, action: A) => T} reducer - The reducer function used to update the state based on actions.
 * @returns {Store<T, A>} The created store.
 */
declare function createStore<T, A>(state: T, reducer: (state: T, action: A) => T): Store<T, A>;
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
declare function createStoreWithMiddleware<T, A>(reducer: (state: T, action: A) => T, initialState: T, ...middlewares: ((store: IStore<T, A>) => (next: (action: A) => void) => (action: A) => void)[]): IStore<T, A>;
/**
 * Represents an asynchronous action with optional payload and metadata.
 *
 * @template T - The type of the metadata.
 * @template P - The type of the payload.
 */
type AsyncAction<T, P> = {
    type: string;
    payload?: P;
    meta?: T;
    error?: boolean;
};
/**
 * Represents an asynchronous action creator function.
 *
 * @template T - The type of the metadata.
 * @template P - The type of the payload.
 */
type AsyncActionCreator<T, P> = (...args: any[]) => (dispatch: (action: AsyncAction<T, P>) => void) => Promise<void>;
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
declare function asyncActionCreator<T, P>(type: string, asyncFn: (...args: any[]) => Promise<P>, meta?: T): AsyncActionCreator<T, P>;
/**
 * Represents a custom middleware that handles asynchronous operations.
 *
 * @param {IStore<T, AsyncAction<T, P>>} store - The store object.
 * @returns {(next: (action: AsyncAction<T, P>) => void) => (action: AsyncAction<T, P>) => void} The middleware function.
 */
declare function asyncThunkMiddleware<T, P>(store: IStore<T, AsyncAction<T, P>>): (next: (action: AsyncAction<T, P>) => void) => (action: AsyncAction<T, P>) => Promise<void>;
/**
 * Represents a subscriber object for handling asynchronous updates.
 *
 * @param {IStore<T, AsyncAction<any, any>>} store - The store object.
 * @param {AsyncSubscriberCallback<T>} callback - The callback function to handle asynchronous updates.
 * @returns {{ subscribe: () => void }} The subscriber object.
 */
type AsyncSubscriberCallback<T> = (state: T, action: AsyncAction<any, any>) => void;
/**
 * Creates a subscriber object for handling asynchronous updates.
 *
 * @param {Store<T, AsyncAction<any, any>>} store - The store object.
 * @param {AsyncSubscriberCallback<T>} callback - The callback function to handle asynchronous updates.
 * @returns {{ subscribe: () => Function }} The subscriber object.
 */
declare function createAsyncSubscriber<T>(store: Store<T, AsyncAction<any, any>>, callback: AsyncSubscriberCallback<T>): {
    subscribe: () => () => void;
    unsubscribe: () => void;
};
export { Store, createStore, applyMiddleware, mergeReducers, createSubscriber, createAsyncSubscriber, createStoreWithMiddleware, asyncThunkMiddleware, asyncActionCreator, };
