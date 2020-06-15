import { identity } from "../../Function"
import { Sync } from "../Effect/effect"
import { IFiberRefNew } from "../Effect/primitives"

import { FiberRef } from "./fiberRef"

/**
 * Creates a new `FiberRef` with given initial value.
 */
export const make = <A>(
  initial: A,
  onFork: (a: A) => A = identity,
  onJoin: (a: A, a2: A) => A = (_, a) => a
): Sync<FiberRef<A>> => new IFiberRefNew(initial, onFork, onJoin)
