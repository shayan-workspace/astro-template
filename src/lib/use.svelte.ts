import type { WritableStore } from "nanostores";

import { onMount, onDestroy } from "svelte";

export type Ref<T> = { value: T };

export function useMount(fn: () => void) {
  onMount(fn);
}

export function useEffect(
  fn: () => void,
  options: { pre?: boolean } = { pre: false },
  forcedDependencies?: Ref<any>[]
) {
  if (options.pre) {
    $effect.pre(() => {
      fn();

      if (forcedDependencies) {
        forcedDependencies.forEach((item) => item.value);
      }
    });
  } else {
    useMount(() => {
      $effect.pre(() => {
        fn();

        if (forcedDependencies) {
          forcedDependencies.forEach((item) => item.value);
        }
      });
    });
  }
}

export function useUnmount(fn: () => void) {
  onDestroy(fn);
}

export function useRef<T>(
  item: T,
  listener?: (currentValue: Readonly<T>) => void
) {
  const reference = $state({ value: item }) as Ref<T>;

  if (listener) {
    useEffect(() => {
      listener(reference.value);
    });
  }

  return reference;
}

export function useComputed<T>(
  fn: () => T,
  listener?: (currentValue: Readonly<T>) => void
) {
  const reference = $state({ value: fn() }) as Ref<T>;

  useEffect(() => {
    reference.value = fn();

    if (listener) {
      listener(reference.value);
    }
  });

  return reference;
}

export function useStore<T>(
  store: WritableStore<T>,
  listener?: (newValue: Readonly<T>, oldValue?: Readonly<T> | undefined) => void
) {
  const reference = $state({ value: store.value }) as Ref<T>;

  useEffect(() => {
    store.set(reference.value);
  });

  store.listen((newValue) => {
    reference.value = newValue;
  });

  if (listener) {
    store.subscribe(listener);
  }

  return reference;
}
