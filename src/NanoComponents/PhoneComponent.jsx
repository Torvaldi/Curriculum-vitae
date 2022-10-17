import { useStore } from "@nanostores/react";
import { isPhoneVisible } from "../stores/phoneStore";

export default function PhoneElement() {
  const $isPhoneVisible = useStore(isPhoneVisible);

  return $isPhoneVisible ? (
    <span>(+33) 06.13.25.90.18</span>
  ) : (
    <button
      onClick={() => isPhoneVisible.set(!$isPhoneVisible)}
      className="hover:underline"
    >
      Voir le n° de téléphone
    </button>
  );
}
