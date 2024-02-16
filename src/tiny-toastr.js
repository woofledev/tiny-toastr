// tiny-toastr 1.0.1 | MIT License
// https://github.com/woofledev/tiny-toastr


export const stack = (toast) => {
  // Allows you to stack toasts on top of eachother
  let type = toast.classList.contains("top") ? "top" : "bottom";
  toast.style[type] = `${
    20 + 
    (document.querySelectorAll("._toast").length - 1) * (toast.offsetHeight + 10)
  }px`;
};

const tinytoast = (options={}) => {
  const {
    text = "",
    time = 3000,
    closable = false,
    animation = `fadein 0.5s, fadeout 0.5s ${(time-500) / 1000}s`,  // adjust keyframe length based on time
    attrs = {}, css = {},
  } = options;

  const toast = document.createElement("div");
  toast.innerHTML = text;
  toast.className = "_toast bottom right";
  toast.style.animation = animation;
  for (let key in attrs) { toast.setAttribute(key, attrs[key]) };
  for (let key in css) { toast.style[key] = css[key] };


  if (closable) {
    const btn = document.createElement("button");
    btn.innerHTML = "&#10006;"; btn.className = "_toast-btn";
    btn.onclick = () => {
      document.body.removeChild(toast);
    };
    toast.appendChild(btn);
  };

  document.body.appendChild(toast);
  setTimeout(() => {
    document.body.removeChild(toast);
  }, time);
  return toast;
};
export default tinytoast;