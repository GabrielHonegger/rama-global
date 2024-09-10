'use client';

import React from "react";
import { deleteCookie, hasCookie, setCookie } from "cookies-next";
import Link from "next/link";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = React.useState(true);

  React.useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  const rejectCookie = () => {
    setShowConsent(false);
    deleteCookie("localConsent", { path: '/' });
  };

  if (showConsent) {
    return null;
  }

  return (
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-4 sm:py-8 bg-gray-100">
        <div className="m-auto flex flex-col sm:flex-row items-center">
            <span className="w-full text-darktext-base sm:mr-10">
                Este site usa <span className="text-orange-500 underline"><Link href="/politica-de-privacidade">cookies</Link></span> para funcionamento e melhoria de sua experiência. Ao usar este site você concorda com isso.
            </span>
            <button className="mt-5 sm:mt-0 text-sm sm:w-[210px] w-full max-h-[44px] sm:text-md border-2 hover:bg-slate-200 hover:border-slate-500 hover:text-slate-500 border-slate-400 sm:mr-5 py-2 px-8 rounded text-slate-400">
                <Link href="/politica-de-privacidade">Saiba Mais</Link>
            </button>
            <button className="bg-orange-500 mt-2 sm:mt-0 text-sm sm:w-[130px] w-full max-h-[44px] sm:text-md hover:bg-orange-600 py-2 px-8 rounded text-white" onClick={() => acceptCookie()}>
                Aceitar
            </button>
        </div>
      </div>
  );
};

export default CookieConsent;