import { writable, type Readable } from 'svelte/store';

export type DatabaseInfo = {
  isLoading: boolean;
  dbInfo: IDBDatabaseInfo[];
  error: Error | null;
};

const store = writable<DatabaseInfo>({
  isLoading: false,
  dbInfo: [],
  error: null
});

const refreshDatabases = async () => {
  if ('indexedDB' in globalThis) {
    store.update((state) => ({ ...state, isLoading: true }));
    try {
      const dbInfos = await indexedDB.databases();
      store.set({
        isLoading: false,
        error: null,
        dbInfo: dbInfos
      });
    } catch (error: any) {
      store.update((state) => ({ ...state, isLoading: false, error }));
    }
  }
};

let initialized = false;

export const databases: Readable<DatabaseInfo> & { refreshDatabases: () => Promise<void> } = {
  subscribe: (run, invalidate) => {
    if (!initialized) {
      refreshDatabases();
      initialized = true;
    }
    return store.subscribe(run, invalidate);
  },
  refreshDatabases
};
