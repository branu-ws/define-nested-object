### define-nested-object

Easily created nested objects. Instead of:

```js
const foo = {
  bar: {
    qux: {
      box: 'val'
    }
  }
}
```

You can write:

```
let foo = {}
defineNestedObject(foo, 'bar.qux.box', 'val')
```

### Use:
```js
import defineNestedObject from '@branu-jp/define-nested-object' 

let foo = {}
defineNestedObject(foo, 'bar.qux 'val') //=> foo = { bar: { qux: 'val } }
```
