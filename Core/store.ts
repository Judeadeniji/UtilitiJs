
type Listener<T, A> = (action: A, state: T) => void

type Reducer<T, A> = (state: T, action: A) => T

type Unsubscribe = () => void

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
  subscribe(listener: Listener<T, A>): Function;

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
class Store<T, A> implements IStore<T, A> {
  private state: T;
  private listeners: Listener<T, A>[];

  constructor(
    private reducer: (state: T, action: A) => T,
    initialState: T = {} as T
  ) {
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
  getState(): T {
    return this.state;
  }

  /**
   * Dispatches an action to update the state.
   *
   * @param {A} action - The action representing the state update.
   */
  dispatch(action: A): void {
    this.state = this.reducer(this.state, action);
    this.listeners.forEach((listener) => listener(action, this.state));
  }

  /**
   * Subscribes a listener function to be called on state changes.
   *
   * @param {function} listener - The listener function to be called on state changes.
   * @returns {function} A function to unsubscribe the listener.
   *
   * @throws {Error} If the listener is not a function.
   */
  subscribe(listener: Listener<T, A>): Unsubscribe {
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
   * @template T - The type of state.
   * @template A - The type of action.
   * @param {Reducer} nextReducer - The new reducer function.
   */
  replaceReducer(nextReducer: Reducer<T, A>): void {
    this.reducer = nextReducer;
  }

  /**
   * Returns the current reducer function.
   *
   * @template T - The type of state.
   * @template A - The type of action.
   * @returns {function} The current reducer function.
   */
  getReducer(): Reducer<T, A> {
    return this.reducer;
  }
}

/**
 * Merges multiple reducers into a single reducer function.
 *
 * @template T - The type of state.
 * @template A - The type of action.
 * @param {Object} reducers - An object containing the individual reducers.
 * @returns {function} The merged reducer function.
 *
 * @throws {Error} If reducers is not an object.
 */
function mergeReducers<T, A> (reducers: { [key: string]: Reducer<T, A> }) {
  // Check if reducers is an object
  if (typeof reducers !== "object") {
    // If not, throw a Error
    throw new Error("Provide an object containing the reducers.");
  }
  return (state: T, action: A) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
}

/**
 * Applies middlewares to the store's dispatch function.
 *
 * @param {...function} middlewares - The middlewares to apply.
 * @returns {function} A function that wraps the store and applies the middlewares.
 */
 
function applyMiddleware(...middlewares: Function[]) {
  return (store: any) =>
    (...args: any[]) => {
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

/**
 * Creates a subscriber object to subscribe to store updates.
  * @template T - The type of state.
  * @template A - The type of action.
 * @param {Store} store - The store object to subscribe to.
 * @returns {Object} The subscriber object.
 */
function createSubscriber<T, A>(store: Store<T, A>) {
  return {
    /**
     * Subscribes a callback function to be called on store updates.
     *
     * @param {function} callback - The callback function to be called on store updates.
     */
    subscribe(callback: Listener<T, A>) {
      store.subscribe(callback);
    },
  };
}

function createStore<T, A> (state: T, reducer: Reducer<T, A>): Store<T, A> {
  return new Store<T, A>(reducer, state);
}

export { Store, applyMiddleware, mergeReducers, createSubscriber, createStore }