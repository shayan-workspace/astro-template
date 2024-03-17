import type { Store } from "nanostores";

export function useRef(item: any) {
  const reference = $state({ value: item });

  return reference;
}

export function useStore(store: Store) {
  const reference = $state({ value: store.value });

  store.listen((newValue) => {
    reference.value = newValue;
  });

  return reference;
}
