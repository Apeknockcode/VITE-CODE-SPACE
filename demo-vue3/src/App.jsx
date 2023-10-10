import { ref, defineComponent } from "vue";
import "@styles/app.css"
import classes from "@styles/test.module.css"
import "@styles/test.scss"
import {a} from "./testFile.ts"
// 导入静态之前的图片
import image01 from "@assets/image01.jpg"
export default defineComponent({
  setup(props, { emit }) {
    let count = ref(1000);
    const handleAlert = () => {
      alert("你点击了这个按钮");
    };
    return () => {
      return (
        <div>
          {a.name}
          <p className="red">这个 JSX 语法,</p>
          <p className={`${classes.moduleClass}`}>这是一个数字：{count.value}</p>
          <button className="btnStyle" onClick={handleAlert}>这是一个按钮</button>

          <img src={image01} alt="" />
        </div>
      );
    };
  },
});
