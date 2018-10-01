import * as lib from '@app/lib';

interface App {}

export const func = (app: App): string => {
  return lib.Hello
}


console.log(func({}))
