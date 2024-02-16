# tiny-toastr
a tiny 1kb toaster library. zero dependencies, esm syntax.

## install
using npm: `npm i --save tiny-toastr`<br>
or yarn: `yarn add tiny-toastr`

import using:
```js
import tinytoast from "tiny-toastr";
import "tiny-toastr/src/tiny-toastr.css"; // for CSS loaders
```

## usage
```js
import tinytoast from "tiny-toastr";
tinytoast({
  text: "<b>this is a toast!</b>",
  time: 5000,
  closable: true,
  css: {
    // backgroundColor: "#FF0000", 
    borderRadius: "5px"
  }
});


// you can also stack toasts using stack()
import tinytoast, {stack} from "tiny-toastr";
for (let i = 0; i < 5; i++) {
  stack(tinytoast({
    text: `Toast ${i+1}`
  }));
};
```