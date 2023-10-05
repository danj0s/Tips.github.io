"use strict";

import { FETCHURL, GETRESOURCE } from "./consts";
import getJarInfo from "./helpers/getJarInfo";
import ShowAlert from "./helpers/showAlert";

window.addEventListener("DOMContentLoaded", () => {
  let jarAmount = 0;
  const textBalance = document.querySelector(".text-name");
  setInterval(() => {
    GETRESOURCE(FETCHURL.jar).then((data) => {
      const precent = Math.round((100 * data.amount) / data.goal);

      const amount = new Intl.NumberFormat().format(data.amount / 100);
      textBalance.textContent = `${amount} $   ${precent}%`;

      if (data.amount > jarAmount) {
        jarAmount = data.amount;

        getJarInfo().then((data) => {
          const subtitle = data.description.replace(/від:/gi, "");
          const transformAmount = data.amount / 100;
          ShowAlert(transformAmount, subtitle);
        });
      }
    });
  }, 2000);
});
