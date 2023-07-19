import { createI18n } from "vue-i18n";
import en from "./en/index";
import fr from "./fr/index";
import gr from "./gr/index";
import sp from "./sp/index";
import pol from "./pol/index";
import ru from "./ru/index";
import sw from "./sw/index";

const messages = {
  en,
  fr,
  gr,
  sp,
  pol,
  ru,
  sw,
  // другие языки и переводы
};

const i18n = createI18n({
  locale: localStorage.getItem("lang"),
  messages,
});

export default i18n;
