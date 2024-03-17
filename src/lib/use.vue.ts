import type { Store } from "nanostores";

import { ref } from "vue";

export function useRef(item: any) {
  const reference = ref(item);

  return reference;
}

export function useStore(store: Store) {
  const reference = ref(store.value);

  store.listen((newValue) => {
    reference.value = newValue;
  });

  return reference;
}
