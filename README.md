### define-nested-object

Easily created nested objects. Instead of:

```
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
setValue(foo, 'bar.qux.box', 'val')
```

### Use:
import defineNestedObject from '@branu-jp/define-nested-object' 

let foo = {}
defineNestedObject(foo, '.....', '...')
