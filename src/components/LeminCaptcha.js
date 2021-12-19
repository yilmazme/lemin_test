import React from "react";
import { LeminCroppedCaptchaContainer } from "@leminnow/react-lemin-cropped-captcha";


function LeminCaptcha() {
  return (
    <div>
      <form >
        <LeminCroppedCaptchaContainer
          containerId={"lemin-cropped-captcha"}
          captchaId={"CROPPED_ca3f0ae_71257d582794475cb70509a98a46a7b9"}
        />
      </form>
    </div>
  );
}

export default LeminCaptcha;
