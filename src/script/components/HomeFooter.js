import { toast } from "vue3-toastify";

export default {
  name: "HomeFooter",
  props: {
    msg: Number,
  },
  data() {
    return {
      defferedPrompt: null,
    };
  },
  created() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      this.defferedPrompt = e;
      toast.warning("우측 하단의 설치 버튼을 이용하여 설치 후 이용해주세요:)", {
        autoClose: 3000,
        theme: "colored",
      });
    });

    window.addEventListener("appinstalled", () => {
      this.defferedPrompt = null;
    });
  },
  methods: {
    async dismiss() {
      this.defferedPrompt = null;
    },
    async install() {
      this.defferedPrompt.prompt();
    },
  },
};
