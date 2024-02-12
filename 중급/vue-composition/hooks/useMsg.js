import { ref } from "vue";

const useMsg = () => {
  const msg = ref("HELLO");

  const changeMsg = () => {
    msg.value = "BYE";
  };

  return {
    msg,
    changeMsg,
  };
};

export { useMsg };
