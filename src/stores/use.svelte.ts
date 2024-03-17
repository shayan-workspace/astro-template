import type { Store } from "nanostores";

export default function use(store: Store) {
  const theme = $state({ value: store.value });

  store.listen((newValue) => {
    theme.value = newValue;
  });

  return theme;
}
