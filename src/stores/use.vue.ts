import type { Store } from "nanostores";

import { ref } from "vue";

export default function use(store: Store) {
  const theme = ref(store.value);

  store.listen((newValue) => {
    theme.value = newValue;
  });

  return theme;
}
