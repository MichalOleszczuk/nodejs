/* istanbul ignore file */
/* eslint-disable no-console */
import { MyAsyncClass } from "./async-class-builder";

MyAsyncClass.build()
  .then((instance) => console.log(instance.name))
  .catch((err) => console.error(err));
